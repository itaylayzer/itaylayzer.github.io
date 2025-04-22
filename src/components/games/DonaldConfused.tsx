import { toonify } from "@/api/toonify";
import { useAnimations, useFBX } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Spherical, SpotLight, Vector3 } from "three";

const Model = () => {
    const fbx = useFBX("fbx/Look Around.fbx");
    const { animations } = fbx;
    const { actions, mixer } = useAnimations(animations, fbx);

    useEffect(() => {
        if (actions && animations.length > 0) {
            actions[animations[0].name]?.setEffectiveTimeScale(0.2);
            actions[animations[0].name]?.play();
            // fbx.scale.set(0.005, 0.005, 0.005);
        }
    }, [actions, animations]);

    useEffect(() => {
        toonify(fbx);
    }, [fbx]);

    useFrame((_, delta) => {
        mixer.update(delta);
        fbx.rotateY(0.003);
    });

    return (
        <primitive
            object={fbx}
            scale={0.014}
            position={[0, -3, 0]}
            castShadow
            receiveShadow
        />
    );
};

const spherical = new Spherical(2, 0);
spherical.phi = 1;
export const SpiningLight = () => {
    const spotLightRef = useRef<SpotLight>(null);

    useFrame(() => {
        const spotLight = spotLightRef.current!;
        if (!spotLight) return;

        spotLight.position
            .setFromSpherical(spherical)
            .add({ x: 0, y: 5, z: 0 });
        spotLight.lookAt(new Vector3(0, 0, 0));
        spherical.theta -= 0.03;
    });

    return (
        <>
            <spotLight
                ref={spotLightRef}
                position={[0, 0, 0]}
                angle={0.07}
                rotation={[Math.PI / 2, 0, 0]}
                intensity={20}
                penumbra={0}
            />
        </>
    );
};

export const DonaldConfused = () => {
    return (
        <Canvas
            shadows
            gl={{ antialias: true }}
            orthographic
            camera={{ position: [0, 0, 5], zoom: 100 }}
        >
            <ambientLight intensity={0.7} />
            <SpiningLight />
            <Model />
        </Canvas>
    );
};
