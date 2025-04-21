import { Canvas, useFrame } from "@react-three/fiber";
import { useFBX, useAnimations } from "@react-three/drei";
import { useEffect, Suspense } from "react";
import { Color, Fog, TextureLoader } from "three";
import { RepeatWrapping } from "three";

function SleepingModel() {
    const fbx = useFBX("fbx/sleeping.fbx");
    const { animations } = fbx;
    const { actions, mixer } = useAnimations(animations, fbx);

    useEffect(() => {
        if (actions && animations.length > 0) {
            actions[animations[0].name]?.play();
        }
    }, [actions, animations]);

    useFrame((_, delta) => {
        mixer.update(delta);
    })

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

function Ground() {
    const texture = new TextureLoader().load("textures/ground.png");

    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.offset.set(0, 0);
    texture.repeat.set(200, 200);

    return (
        <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -0.05, 0]}
            receiveShadow
        >
            <planeGeometry args={[150, 150]} />
            <meshBasicMaterial map={texture} />
        </mesh>
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
                fog: new Fog("#080808", 0, 10)
            }}
            camera={{ position: [0, 2, 5], zoom: 100 }}
        >
            <ambientLight intensity={0.3 * 5} />
            <spotLight position={[0, 5, 0]} angle={0.6} rotation={[Math.PI / 2, 0, 0]} intensity={60} penumbra={0} />

            <Suspense fallback={<Ground />}>
                <SleepingModel />
            </Suspense>
            {/* <Ground /> */}
            {/* <OrbitControls /> */}
        </Canvas>
    );
}
