import { Canvas, useFrame } from "@react-three/fiber";
import { useFBX, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { Color, Fog } from "three";
import { toonify } from "@/api/toonify";

function SleepingModel() {
    const fbx = useFBX("fbx/sleeping.fbx");
    const { animations } = fbx;
    const { actions, mixer } = useAnimations(animations, fbx);

    useEffect(() => {
        if (actions && animations.length > 0) {
            actions[animations[0].name]?.play();
            // fbx.scale.set(0.005, 0.005, 0.005);
        }
    }, [actions, animations]);

    useFrame((_, delta) => {
        mixer.update(delta);
    });

    useEffect(() => {
        toonify(fbx);
    }, [fbx]);
    return (
        <primitive
            object={fbx}
            scale={0.01}
            position={[0, 0, 0]}
            castShadow
            receiveShadow
        />
    );
}

export function SleepingDonald() {
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
            <ambientLight intensity={0.3 * 5} />
            <spotLight
                position={[0, 5, 0]}
                angle={1}
                rotation={[Math.PI / 2, 0, 0]}
                intensity={600}
                penumbra={1}
            />

            <SleepingModel />
        </Canvas>
    );
}
