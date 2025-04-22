import { arts } from "@/config/constants/sample";

import { ArtFrame } from "@/components/art/ArtFrame";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useAnimations, useFBX } from "@react-three/drei";
import { useEffect } from "react";

function ShowModel({ url }: { url: string }) {
    const fbx = useFBX(url);
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
        // fbx.scale.lerp({ x: 0.01, y: 0.01, z: 0.01 }, 0.25);
    });

    return (
        <primitive
            object={fbx}
            scale={0.01}
            position={[0, -1, 0]}
            castShadow
            receiveShadow
        />
    );
}

interface SceneProps extends React.HTMLAttributes<HTMLDivElement> {
    model: string;
    zoom?: number;
    width?: string | number; // Accepts CSS units or numbers
    height?: string | number;
    cameraPosition?: [number, number, number]; // Allow specifying camera position
    lookAt?: [number, number, number]; // Allow specifying lookAt target
}

function CameraLookAt({ lookAt }: { lookAt: [number, number, number] }) {
    const { camera } = useThree();

    useEffect(() => {
        camera.lookAt(...lookAt);
    }, [camera, lookAt]);

    return null;
}

function Scene({
    model,
    zoom = 80, // Default zoom value
    width = "100%", // Default width
    height = "100%", // Default height
    cameraPosition = [0, 0, 5], // Default camera position
    lookAt = [0, 0, 0], // Default lookAt target

    className,
    ...rest
}: SceneProps) {
    return (
        <div style={{ width, height }} className={className}>
            <Canvas
                shadows
                gl={{ antialias: true }}
                orthographic
                camera={{ position: cameraPosition, zoom }}
                {...rest} // Pass any additional props
            >
                <CameraLookAt lookAt={lookAt} />
                <ambientLight intensity={1} />
                <directionalLight intensity={1} rotation={[1, 1, 1]} />

                <ShowModel url={model} />
            </Canvas>
        </div>
    );
}

export default () => {
    return (
        <div className="flex justify-center align-center">
            <Carousel className="z-10 w-full not-xl:max-w-3xl max-w-5xl h-full px-6">
                <CarouselContent className="gap-20">
                    {arts.map((art) => (
                        <CarouselItem className="flex justify-center items-center flex-col gap-4">
                            <ArtFrame art={art} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            {/* <div className="absolute right-0 bottom-0 pointer-events-none">
                <Scene model="fbx/Male Standing Pose.fbx" />
            </div> */}

            <div className="absolute left-0 bottom-0 pointer-events-none">
                <Scene
                    className="w-150 pointer-events-none"
                    zoom={100}
                    width={250}
                    height={500}
                    cameraPosition={[-5, 2, -5]}
                    lookAt={[0, 2, 0]}
                    model="fbx/Male Standing Pose.fbx"
                />
            </div>

            {/* <div className="absolute bottom-0 pointer-events-none">
                <Scene model="fbx/Female Laying Pose.fbx" />
            </div> */}
        </div>
    );
};
