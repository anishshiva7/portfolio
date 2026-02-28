import React, { useCallback, useEffect, useRef } from 'react';

interface Element {
  x: number;
  y: number;
  z: number;
  size: number;
  rotation: number;
  type: 'rectangle' | 'line' | 'dot';
  color: string;
  speed: number;
  opacity: number;
  glitchOffset: number;
}

const COLORS = [
  '#7C8A97',
  '#A3BAC5',
  '#DDE7EA',
  '#F2E8D5',
  '#C6D8E3'
];

export default function Background3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const elementsRef = useRef<Element[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);
  const isInitializedRef = useRef(false);

  const initElements = useCallback(() => {
    try {
      const elements: Element[] = [];
      const width = document.documentElement.clientWidth;
      const height = document.documentElement.clientHeight;
      const area = width * height;
      const count = Math.max(8, Math.min(28, Math.floor(area / 140000))); // fewer, subtle shapes

      for (let i = 0; i < count; i++) {
        const r = Math.random();
        const type = r > 0.66 ? 'rectangle' : r > 0.33 ? 'line' : 'dot';

        elements.push({
          x: (Math.random() - 0.5) * width,
          y: (Math.random() - 0.5) * height,
          z: Math.random() * 900 - 450,
          size: Math.random() * 80 + 12,
          rotation: Math.random() * Math.PI * 2,
          type,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          speed: Math.random() * 0.6 + 0.1,
          opacity: Math.random() * 0.45 + 0.35,
          glitchOffset: Math.random() * 3,
        });
      }
      return elements;
    } catch (error) {
      console.error('Error initializing elements:', error);
      return [];
    }
  }, []);

  const drawElement = useCallback((
    ctx: CanvasRenderingContext2D,
    element: Element,
    perspective: number,
    time: number
  ) => {
    try {
      const glitchAmount = Math.sin(time * 1.5 + element.z) * element.glitchOffset * 0.5;
      ctx.lineCap = 'round';

      switch (element.type) {
        case 'rectangle': {
          const w = element.size;
          const h = Math.max(8, element.size / 3);
          ctx.beginPath();
          ctx.rect(-w / 2 + glitchAmount, -h / 2 + glitchAmount, w, h);
          ctx.stroke();
          break;
        }

        case 'line': {
          const len = element.size;
          ctx.beginPath();
          ctx.moveTo(-len / 2 + glitchAmount, 0);
          ctx.lineTo(len / 2 - glitchAmount, 0);
          ctx.stroke();
          break;
        }

        case 'dot': {
          const r = Math.max(1, (element.size * 0.12) * perspective);
          ctx.beginPath();
          ctx.arc(0 + glitchAmount, 0, r, 0, Math.PI * 2);
          ctx.fill();
          break;
        }
      }
    } catch (error) {
      console.error('Error drawing element:', error);
    }
  }, []);

  const animate = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    try {
      timeRef.current = timestamp * 0.001;

      // Soft neutral gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#F6F8FA'); // very light
      gradient.addColorStop(1, '#E9EEF2'); // soft cool
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Very subtle noise texture (kept light)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 6; // smaller variance
        data[i] = Math.min(255, data[i] + noise);
        data[i + 1] = Math.min(255, data[i + 1] + noise);
        data[i + 2] = Math.min(255, data[i + 2] + noise);
      }
      ctx.putImageData(imageData, 0, 0);

      const sortedElements = [...elementsRef.current].sort((a, b) => b.z - a.z);

      sortedElements.forEach((element) => {
        ctx.save();

        const scale = 1 + element.z / 1200;
        const perspective = Math.max(0.12, 1 - Math.abs(element.z) / 1200);

        // Gentle organic motion
        element.z += Math.sin(timeRef.current * 0.7 + element.x * 0.001) * element.speed * 0.2;
        element.x += Math.cos(timeRef.current * 0.25) * element.speed * 0.25;
        element.y += Math.sin(timeRef.current * 0.35) * element.speed * 0.22;
        element.rotation += 0.003 * element.speed;

        // wrap-around bounds
        if (element.x < -canvas.width / 2) element.x = canvas.width / 2;
        if (element.x > canvas.width / 2) element.x = -canvas.width / 2;
        if (element.y < -canvas.height / 2) element.y = canvas.height / 2;
        if (element.y > canvas.height / 2) element.y = -canvas.height / 2;

        ctx.translate(canvas.width / 2 + element.x, canvas.height / 2 + element.y);
        ctx.rotate(element.rotation);
        ctx.scale(scale, scale);

        // softer stroke and fill for light background
        ctx.strokeStyle = element.color;
        ctx.fillStyle = element.color;
        ctx.lineWidth = Math.max(0.6, 1 * perspective);
        ctx.globalAlpha = element.opacity * Math.min(1, perspective + 0.15);
        ctx.shadowBlur = 8 * perspective;
        // subtle shadow color with low alpha for a gentle depth
        ctx.shadowColor = element.color + '20';

        drawElement(ctx, element, perspective, timeRef.current);

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    } catch (error) {
      console.error('Error in animation loop:', error);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }
  }, [drawElement]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isInitializedRef.current) return;

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = document.documentElement.clientWidth;
      canvas.height = document.documentElement.clientHeight;
      elementsRef.current = initElements();
    };

    handleResize();
    isInitializedRef.current = true;
    animationFrameRef.current = requestAnimationFrame(animate);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animate, initElements]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 1,
        pointerEvents: 'none',
      }}
    />
  );
}
