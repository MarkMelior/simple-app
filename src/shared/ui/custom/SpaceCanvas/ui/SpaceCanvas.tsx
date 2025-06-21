// 'use client';

// import { PointMaterial, Points } from '@react-three/drei';
// import { Canvas, useFrame } from '@react-three/fiber';
// import cn from 'clsx';
// import { random } from 'maath';
// import { useTheme } from 'next-themes';
// import { Suspense, useEffect, useRef, useState } from 'react';

// import { Theme } from '@/shared/types/theme';

// import styles from './space-canvas.module.scss';

// const StarBackground = (props: any) => {
//   const ref: any = useRef();
//   const [sphere] = useState(() =>
//     random.inSphere(new Float32Array(5001), { radius: 1.2 }),
//   );

//   useFrame((_, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, 0]}>
//       <Points
//         frustumCulled={true}
//         positions={sphere}
//         ref={ref}
//         stride={3}
//         {...props}
//       >
//         <PointMaterial
//           depthWrite={false}
//           size={0.002}
//           sizeAttenuation={true}
//           transparent={true}
//         />
//       </Points>
//     </group>
//   );
// };

// export const SpaceCanvas = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const { theme } = useTheme();

//   useEffect(() => {
//     const handleResize = () => {
//       const isSmallScreen = window.innerWidth < 768;

//       setIsVisible(!isSmallScreen);
//     };

//     handleResize();

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const [isMounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!isVisible || theme === Theme.LIGHT || !isMounted) {
//     return null;
//   }

//   return (
//     <div className={cn(styles.wrapper, 'noselect')}>
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback={null}>
//           <StarBackground />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };
