import * as THREE from "three";
import { Exprience } from "../Experience";
import gsap from "gsap";
import vs from "./glsl/index.vs";
import fs from "./glsl/index.fs";
import vs2 from "./glsl/index2.vs";
import fs2 from "./glsl/index2.fs";
export default class ShaderBox {
  experience: Exprience;
  box!: THREE.Mesh;
  globalGroup!: THREE.Group;
  canvas = document.createElement("canvas");
  constructor() {
    this.experience = new Exprience();
    this.box = this.getBox();
    this.experience.scene.add(this.box);
    // this.experience.scene.add(this.getBox2())
  }
  getBox() {
    const geometry = new THREE.SphereGeometry(60, 100,100);
    const material = new THREE.ShaderMaterial({
      vertexShader: vs,
      fragmentShader: fs,
      uniforms: {
        u_radius: { value: 2.0 }, // 设置球的半径
        u_time: { value: 0 },
        u_texture: {
          value: new THREE.TextureLoader().load("/img/8k_earth_daymap.jpg"),
        },
        u_color1: {
            value: new THREE.Color(0x612574),
        },
        u_color2: {
            value: new THREE.Color(0x512574),
        },
        u_color3: {
            value: new THREE.Color(0x1954ec),
        }
      },
      side: THREE.DoubleSide
    });
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
  }
  getBox2() {
    const geometry = new THREE.PlaneGeometry(250, 100,2500,1000);
    const material = new THREE.ShaderMaterial({
      vertexShader: vs2,
      fragmentShader: fs2,
      uniforms: {
        u_radius: { value: 2.0 }, // 设置球的半径
        u_time: { value: 0 },
        u_texture: {
          value: new THREE.TextureLoader().load("/img/8k_earth_daymap.jpg"),
        }
      },
      side: THREE.DoubleSide
    });
    const mesh = new THREE.Line(geometry, material);
    return mesh;
  }
  update() {
    this.box.rotateY(0.01);
  }
}
