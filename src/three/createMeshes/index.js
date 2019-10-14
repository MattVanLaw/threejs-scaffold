import * as THREE from 'three';

import createMaterials from './createMaterials';
import createGeometries from './createGeometris';

const createMeshes = (scene) => {
  const train = new THREE.Group();
  scene.add(train);

  const materials = createMaterials();
  const geometries = createGeometries();

  const nose = new THREE.Mesh(geometries.nose, materials.body);
  nose.rotation.z = Math.PI / 2;
  nose.position.x = -1;

  const cabin = new THREE.Mesh(geometries.cabin, materials.body);
  cabin.position.set(1.5, 0.4, 0);

  const chimney = new THREE.Mesh(geometries.chimney, materials.detail);
  chimney.position.set(-2, 0.9, 0);

  const smallWheelRear = new THREE.Mesh(geometries.wheel, materials.detail);
  smallWheelRear.position.set(0, -0.5, 0);

  const smallWheelCenter = smallWheelRear.clone();
  smallWheelCenter.position.x = -1;

  const smallWheelFront = smallWheelRear.clone();
  smallWheelFront.position.x = -2;

  const bigWheel = smallWheelRear.clone();
  bigWheel.scale.set(2, 2, 1.25);
  bigWheel.position.set(1.5, -0.1, 0);

  train.add(
    nose,
    cabin,
    chimney,
    smallWheelRear,
    smallWheelCenter,
    smallWheelFront,
    bigWheel,
  );
}

export default createMeshes;
