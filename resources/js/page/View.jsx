import Layout from "../components/Layout";
import React, { useRef } from "react";
import { Canvas } from '@react-three/fiber'
import Planet from "../elements/Planet";

export default function View(props) {
    const ref = useRef();

    return (
        <Layout>
            <h2>View</h2>

            <div className='view'>
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Planet position={[0.5, 0, 0]} />
                </Canvas>
            </div>
        </Layout>
    );
}
