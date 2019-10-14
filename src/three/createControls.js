import * as THREE from 'three';

const OrbitControls = require('three-orbit-controls')(THREE);

const createControls = (camera) => {
  const container = document.querySelector(`#scene-container`);

  return new OrbitControls(camera, container);
};

export default createControls;
