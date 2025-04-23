import { toonify } from "@/api/toonify";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import {
    AmbientLight,
    Color,
    Euler,
    Fog,
    Quaternion,
    Spherical,
    SpotLight,
    Vector3,
} from "three";
import { randFloat } from "three/src/math/MathUtils.js";

function PistolModel() {
    const { scene } = useGLTF("glb/low-poly_beretta_m9.glb");
    const { clock } = useThree();

    useFrame(() => {
        scene.position.y = 0.5 + Math.sin(clock.getElapsedTime()) / 12;

        scene.rotateOnAxis(new Vector3(0, 1, 0), 0.0015);
    });

    useEffect(() => {
        toonify(scene);
        scene.rotation.set(0, (Math.PI * 0.7) / 2, 0);
    }, [scene]);
    return (
        <primitive
            object={scene}
            scale={10}
            position={[0, 0, 0]}
            castShadow
            receiveShadow
        />
    );
}
const spherical = new Spherical(8, 0);
spherical.phi = 1;

export const SpiningLight = () => {
    const spotLightRef = useRef<SpotLight>(null);

    useFrame(() => {
        const spotLight = spotLightRef.current!;
        if (!spotLight) return;

        spotLight.position
            .setFromSpherical(spherical)
            .add({ x: 0, y: 5, z: 0 });
        // spotLight.lookAt(new Vector3(0, 0, 0));
        spherical.theta -= 0.03;
    });

    return (
        <>
            <spotLight
                ref={spotLightRef}
                position={[0, 0, 0]}
                angle={0.1}
                rotation={[Math.PI / 2, 0, 0]}
                intensity={1000}
                penumbra={0}
            />
        </>
    );
};

const Light = () => {
    const lightRef = useRef<AmbientLight>(null);

    const { clock } = useThree();

    useFrame(() => {
        if (lightRef.current) {
            lightRef.current!.intensity =
                Math.max(0, Math.sin(clock.getElapsedTime() * 3)) * 20 + 10;
        }
    });

    return <ambientLight ref={lightRef} intensity={100} />;
};

export function PistolSpinning() {
    return (
        <Canvas
            shadows
            gl={{ antialias: true }}
            orthographic
            scene={{
                background: new Color("#080808"),
                fog: new Fog("#080808", 0, 10),
            }}
            camera={{ position: [0, 2, 5], zoom: 100 }}
        >
            <Light />
            <PistolModel />
        </Canvas>
    );
}
