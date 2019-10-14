import * as THREE from 'three';

const createMaterials = () => {
  const body = new THREE.MeshStandardMaterial({
    color: new THREE.Color(`orange`),
    flatShading: true,
  });

  body.color.convertSRGBToLinear();

  const detail = new THREE.MeshStandardMaterial({
    color: 'grey',
    flatShading: true,
  });

  detail.color.convertSRGBToLinear();

  return {
    body,
    detail,
  };
};

export default createMaterials;
