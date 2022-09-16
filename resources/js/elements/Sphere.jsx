import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Canvas, useLoader, useThree, useFrame } from '@react-three/fiber';

export default function Sphere(props) {
    const ref = useRef(null)
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))

    const loader = new THREE.TextureLoader();

    const material = new THREE.MeshBasicMaterial({
        map: loader.load('https://r105.threejsfundamentals.org/threejs/resources/images/wall.jpg'),
    });

    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <sphereGeometry args={[2, 48, 48]} />
        </mesh>
    )
}
