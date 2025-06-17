import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadBasic } from '@tsparticles/basic';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadBasic(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 50 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.3 },
          size: { value: 2 },
          links: {
            enable: true,
            distance: 120,
            color: "#999999",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: { default: "bounce" }
          }
        }
      }}
      className="absolute inset-0 z-0"
      style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
  );
}


