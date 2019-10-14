import * as THREE from 'three';

const createLights = (scene) => {
  const ambientLight = new THREE.HemisphereLight(
    0xddeeff, // bright sky color
    0x202020, // dim ground color
    5 // intensity
  );

  const mainLight = new THREE.DirectionalLight('white', 5);
  mainLight.position.set(10, 10, 10);

  scene.add(ambientLight, mainLight);
};

export default createLights;
