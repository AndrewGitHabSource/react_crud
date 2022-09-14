import Layout from "../components/Layout";
import React, { useRef } from "react";
import { Canvas } from '@react-three/fiber'
import Box from "../elements/Box"
import Sphere from "../elements/Sphere";

export default function View(props) {
    const ref = useRef();

    return (
        <Layout>
            <h2>View</h2>

            <div className='view'>
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Box position={[-1.2, 0, 0]} />
                    <Sphere position={[2.2, 0, 0]} />
                </Canvas>
            </div>
        </Layout>
    );
}
