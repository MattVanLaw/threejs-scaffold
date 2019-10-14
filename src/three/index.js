import * as THREE from 'three';

import createCamera from './createCamera';
import createControls from './createControls';
import createLights from './createLights';
import createMeshes from './createMeshes';
import createRenderer from './createRenderer';

let container;
let camera;

const init = () => {
  container = document.querySelector(`#scene-container`);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(`skyblue`);

  camera = createCamera();
  createControls(camera);
  createLights(scene);
  createMeshes(scene);
  const renderer = createRenderer();

  const onWindowResize = () => {
    camera.aspect = container.clientWidth / container.clientHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
  };

  window.addEventListener(`resize`, onWindowResize);

  renderer.setAnimationLoop(() => {
    // update();
    renderer.render(scene, camera);
  });
};

// function update() { }

export default init;
