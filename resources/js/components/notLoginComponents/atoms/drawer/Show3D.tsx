// @ts-nocheck
import { FC, memo, ReactNode } from "react";
import * as React from "react";
import * as Fiber from '@react-three/fiber';
import * as Drei from "@react-three/drei";
import { CircularProgress, Flex } from "@chakra-ui/react";

type Props = {
    modelSrc: string;
}

export const Show3D: FC<Props> = memo((props) => {
    const { modelSrc } = props;

    return (
        <React.Suspense fallback={loadingBox}>
            <Fiber.Canvas style={{ height: '70vh' }}>

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

export const Model3D: FC<Props> = memo((props) => {
    const { modelSrc } = props;

    const { scene } = Drei.useGLTF(modelSrc);

    return (
        <group dispose={null}>
            <primitive scale={[1, 1, 1]} object={scene} />
        </group>
    );
});

const loadingBox = (
    <Flex height='70vh' justifyContent='center' alignItems='center'>
        <CircularProgress isIndeterminate color='#216496' />
    </Flex>
);