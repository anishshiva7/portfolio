import { useState, useEffect } from 'react';
import Head from 'next/head';
import Background3D from '../components/Background3D';
import SinglePageLayout from '../components/SinglePageLayout';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPhase(1);
      const glitchInterval = setInterval(() => {
        setLoadingPhase(prev => (prev < 3 ? prev + 1 : prev));
      }, 400);

      setTimeout(() => {
        clearInterval(glitchInterval);
        setLoaded(true);
        setTimeout(() => setShowContent(true), 500);
      }, 2000);

      return () => clearInterval(glitchInterval);
    }, 500);
  }, []);

  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className={`transition-all duration-300 ${loadingPhase >= 1 ? 'scale-110' : 'scale-100'}`}>
        <div className={`text-white text-2xl font-mono relative ${loadingPhase >= 2 ? 'loading-glitch' : ''}`}>
          <div className="absolute top-0 left-0 right-0 bottom-0 glitch-effect"></div>
          INITIALIZING_SYSTEM
          <div className="mt-4 text-sm opacity-50">
            {loadingPhase === 0 && "CONNECTING..."}
            {loadingPhase === 1 && "ACCESSING_DATA..."}
            {loadingPhase === 2 && "RENDERING_INTERFACE..."}
            {loadingPhase === 3 && "SYSTEM_READY..."}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Anish Shivamurthy</title>
        <meta name="description" content="Creative Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Background3D />
      
      {!loaded && <LoadingScreen />}
      
      <div className={`${showContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 relative z-10`}>
        <SinglePageLayout showBackground={false} />
      </div>
    </>
  );
}