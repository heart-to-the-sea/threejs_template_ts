import * as THREE from "three";
import { Exprience } from "../Experience";
import gsap from "gsap";

export default class ShaderBox {
  experience: Exprience;
  box!: THREE.Line;
  globalGroup!: THREE.Group;
  canvas = document.createElement("canvas");
  constructor() {
    this.experience = new Exprience();
    this.box = this.getBox();
    this.experience.scene.add(this.box);
  }
  getBox() {
    const geometry = new THREE.SphereGeometry(2, 30);
    const material = new THREE.MeshBasicMaterial({ color: "red" });
    const mesh = new THREE.Line(geometry, material);
    return mesh;
  }
  update() {
    this.box.rotateY(0.01);
  }
}
