import React, { useEffect, useRef } from 'react';

interface Element {
  x: number;
  y: number;
  z: number;
  size: number;
  rotation: number;
  type: 'text' | 'rectangle' | 'line' | 'dot';
  color: string;
  speed: number;
  wordIndex?: number;
  opacity: number;
  glitchOffset: number;
}

export default function Background3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const elementsRef = useRef<Element[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);
  const isInitializedRef = useRef(false);

  // Original color scheme
  const colors = [
    '#FF0000', // Blood red
    '#8B0000', // Dark red
    '#4B0082', // Indigo
    '#FFD700', // Gold
    '#00FF00', // Neon green
  ];

  // AWGE-inspired words
  const words = [
    'LEADERSHIP', 'INNOVATION', 'EXCELLENCE', 'VISIONARY',
    'IMPACT', 'GROWTH', 'SUCCESS', 'PIONEER',
    'DEDICATION', 'AMBITION', 'PURPOSE', 'DRIVE',
    'PASSION', 'VISION', 'ACHIEVEMENT', 'MOMENTUM',
    'INFLUENCE', 'PROGRESS', 'DYNAMIC', 'CATALYST'
  ];

  const initElements = () => {
    try {
      const elements: Element[] = [];
      const width = document.documentElement.clientWidth;
      const height = document.documentElement.clientHeight;
      const count = Math.min(25, Math.floor((width * height) / 60000));

      for (let i = 0; i < count; i++) {
        const type = Math.random() > 0.6 ? 'text' :
                    Math.random() > 0.4 ? 'rectangle' :
                    Math.random() > 0.2 ? 'line' : 'dot';
                    
        elements.push({
          x: (Math.random() - 0.5) * width,
          y: (Math.random() - 0.5) * height,
          z: Math.random() * 1000 - 500,
          size: Math.random() * 120 + 20,
          rotation: Math.random() * Math.PI * 2,
          type,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 0.8 + 0.2,
          wordIndex: Math.floor(Math.random() * words.length),
          opacity: Math.random() * 0.5 + 0.5,
          glitchOffset: Math.random() * 5
        });
      }
      return elements;
    } catch (error) {
      console.error('Error initializing elements:', error);
      return [];
    }
  };

  const drawElement = (
    ctx: CanvasRenderingContext2D,
    element: Element,
    perspective: number,
    time: number
  ) => {
    try {
      const glitchAmount = Math.sin(time * 2) * element.glitchOffset;

      switch (element.type) {
        case 'rectangle':
          ctx.beginPath();
          ctx.rect(-element.size/2, -element.size/4, element.size, element.size/2);
          ctx.stroke();
          break;

        case 'line':
          ctx.beginPath();
          ctx.moveTo(-element.size/2, 0);
          ctx.lineTo(element.size/2, 0);
          ctx.stroke();
          break;

        case 'dot':
          ctx.beginPath();
          ctx.arc(0, 0, element.size/10, 0, Math.PI * 2);
          ctx.fill();
          break;

        case 'text':
          const text = words[element.wordIndex || 0];
          ctx.font = `bold ${element.size * perspective}px "Space Mono", monospace`;
          
          if (Math.random() > 0.95) {
            ctx.globalAlpha = 0.7;
            ctx.fillText(text, -ctx.measureText(text).width / 2 + glitchAmount, glitchAmount);
            ctx.fillText(text, -ctx.measureText(text).width / 2 - glitchAmount, -glitchAmount);
          }
          
          ctx.globalAlpha = element.opacity;
          ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
          break;
      }
    } catch (error) {
      console.error('Error drawing element:', error);
    }
  };

  const animate = (timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    try {
      timeRef.current = timestamp * 0.001;

      // Original gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#1a0000');
      gradient.addColorStop(1, '#000000');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle noise texture
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 5;
        data[i] += noise;
        data[i + 1] += noise;
        data[i + 2] += noise;
      }
      ctx.putImageData(imageData, 0, 0);

      const sortedElements = [...elementsRef.current].sort((a, b) => b.z - a.z);

      sortedElements.forEach((element) => {
        ctx.save();

        const scale = 1 + element.z / 1000;
        const perspective = Math.max(0.1, 1 - Math.abs(element.z) / 1000);
        
        element.z += Math.sin(timeRef.current + element.x) * element.speed * 0.5;
        element.x += Math.cos(timeRef.current * 0.3) * element.speed * 0.3;
        element.y += Math.sin(timeRef.current * 0.5) * element.speed * 0.3;
        element.rotation += 0.005 * element.speed;

        if (element.x < -canvas.width/2) element.x = canvas.width/2;
        if (element.x > canvas.width/2) element.x = -canvas.width/2;
        if (element.y < -canvas.height/2) element.y = canvas.height/2;
        if (element.y > canvas.height/2) element.y = -canvas.height/2;

        ctx.translate(canvas.width/2 + element.x, canvas.height/2 + element.y);
        ctx.rotate(element.rotation);
        ctx.scale(scale, scale);

        ctx.strokeStyle = element.color;
        ctx.fillStyle = element.color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = element.opacity * perspective;
        ctx.shadowBlur = 15;
        ctx.shadowColor = element.color;

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
  };

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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#000000',
        zIndex: -1,
        opacity: 0.7,
      }}
    />
  );
}