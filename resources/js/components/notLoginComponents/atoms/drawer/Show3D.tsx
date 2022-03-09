// @ts-nocheck
import { FC, memo } from "react";
import * as React from "react";
import * as Fiber from '@react-three/fiber';
import * as Drei from "@react-three/drei";

type Props = {
    modelSrc: ReactNode;
}

export const Show3D: FC<Props> = memo((props) => {
    const { modelSrc } = props;

    return (
        <React.Suspense fallback={<span>loading...</span>}>
            <Fiber.Canvas style={{ height: '30vh' }}>

                <Drei.PerspectiveCamera makeDefault />
                <Drei.OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

                <Drei.Stage>
                    <Model3D
                        modelSrc={modelSrc}
                    />
                </Drei.Stage>
            </Fiber.Canvas>
        </React.Suspense>
    );
});

export const Model3D: FC = memo((props) => {
    const { modelSrc } = props;

    const { scene } = Drei.useGLTF(modelSrc);

    return (
        <group dispose={null}>
            <primitive scale={[1, 1, 1]} object={scene} />
        </group>
    );
});