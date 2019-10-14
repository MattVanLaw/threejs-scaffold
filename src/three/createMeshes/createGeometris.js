import * as THREE from 'three';

const NOSE_STATS = [0.75, 0.75, 3, 12];
const CABIN_STATS = [2, 2.25, 1.5];
const CHIMNEY_STATS = [0.3, 0.1, 0.5];
const WHEEL_STATS = [0.4, 0.4, 1.75, 16];

const createGeometries = () => {
  const nose = new THREE.CylinderBufferGeometry(...NOSE_STATS);

  const cabin = new THREE.BoxBufferGeometry(...CABIN_STATS);

  const chimney = new THREE.CylinderBufferGeometry(...CHIMNEY_STATS);

  const wheel = new THREE.CylinderBufferGeometry(...WHEEL_STATS);
  wheel.rotateX(Math.PI / 2);

  return {
    nose,
    cabin,
    chimney,
    wheel,
  };
};

export default createGeometries;
