import {
    Mesh,
    MeshPhongMaterial,
    MeshStandardMaterial,
    MeshToonMaterial,
    Object3D,
} from "three";

export const toonify = (obj: Object3D) => {
    obj.traverse((v) => {
        if (v instanceof Mesh) {
            const mesh = v as Mesh;
            if (!Array.isArray(mesh.material)) {
                if (
                    mesh.material instanceof MeshPhongMaterial ||
                    mesh.material instanceof MeshStandardMaterial
                ) {
                    mesh.material = new MeshToonMaterial({
                        color: mesh.material.color,
                    });
                }
            }
        }
    });
};
