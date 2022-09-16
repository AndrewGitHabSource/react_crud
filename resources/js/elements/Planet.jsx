import * as THREE from 'three';
import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import earthImg from '../../images/earth.jpg';

export default function Planet() {
    const ref = useRef()
    const [texture, bump, moon] = useLoader(THREE.TextureLoader, [earthImg])
    useFrame(({ clock }) => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.cos(clock.getElapsedTime() / 8) * Math.PI))

    return (
        <group ref={ref}>
            <mesh>
                <sphereBufferGeometry attach="geometry" args={[2, 64, 64]} />
                <meshStandardMaterial attach="material" map={texture} bumpMap={bump} bumpScale={0.05} />
            </mesh>
        </group>
    )
}
