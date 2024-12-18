import { Canvas } from '@react-three/fiber';
import { Points } from '@react-three/drei';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      sphereGeometry: any;
      meshStandardMaterial: any;
      pointsMaterial: any;
      bufferGeometry: any;
      primitive: any;
    }
  }
}