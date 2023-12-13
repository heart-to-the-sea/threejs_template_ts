import ForceGraph from "3d-force-graph";
import * as THREE from "three";
import { Exprience } from "./modules/Experience";

window.onload = () => {
  const box = new Exprience(
    document.querySelector("#graph") as HTMLCanvasElement
  );
};
