import * as THREE from 'three';

const NEAR = 0.1;
const FAR = 100;
const FOV = 35;

const createCamera = () => {
  const container = document.querySelector(`#scene-container`);

  const aspect = container.clientWidth / container.clientHeight;

  const camera = new THREE.PerspectiveCamera(FOV, aspect, NEAR, FAR);

  camera.position.set(-5, 5, 7);

  return camera;
};

export default createCamera;
