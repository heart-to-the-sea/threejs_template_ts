import * as THREE from "three";
import { Exprience } from "../Experience";
export default class Axis {
  experience!: Exprience;
  scene: THREE.Scene;
  constructor() {
    console.log("init axis");
    this.experience = new Exprience();
    this.scene = this.experience.scene;
  }
}
