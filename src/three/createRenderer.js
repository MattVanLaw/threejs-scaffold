import * as THREE from 'three';

const createRenderer = () => {
  const container = document.querySelector(`#scene-container`);

  const rendererSpecObj = {
    antialias: true,
  };

  const renderer = new THREE.WebGLRenderer(rendererSpecObj);

  renderer.setSize(container.clientWidth, container.clientHeight);

  renderer.setPixelRatio(window.devicePixelRatio);

  // renderer.gammaFactor = 2.2;
  // renderer.gammaOutput = true;

  // renderer.physicallyCorrectLights = true;
  container.appendChild(renderer.domElement);

  return renderer;
};

export default createRenderer;
