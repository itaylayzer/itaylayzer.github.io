import { Canvas, useFrame } from "@react-three/fiber";
import { useFBX, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Color, Fog, Spherical, SpotLight } from "three";
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
            <SpiningLight />
            {/* <spotLight
                position={[0, 5, 0]}
                angle={1}
                rotation={[Math.PI / 2, 0, 0]}
                intensity={600}
                penumbra={1}
            /> */}

            <SleepingModel />
        </Canvas>
    );
}
