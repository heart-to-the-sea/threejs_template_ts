// 纹理
uniform sampler2D u_texture;
uniform vec3 u_color1;
uniform vec3 u_color2;
uniform vec3 u_color3;

// [0, 最大长度]
varying vec3 v_position;
// [0,1]
varying vec3 v_normal;
varying float u_radius;
// [0,1] uv 表示横纵坐标
varying vec2 v_uv;
void main() {
   // 计算球坐标
    // vec3 color = texture2D(u_texture,v_uv).xyz;

    // float fu= fract(v_position.x*2.);
    // float fv = fract(v_position.y*2.);
    // vec2 fuv = vec2(fu, fv);
    // fuv -= vec2(0.5);
    // fuv *= 2.0;

    // if(step(0.8,length(fuv)) <= 0.) {
    //     if (normalize(color).x >= 0.5) {
    //         gl_FragColor = vec4(color,1.);
    //     } else {
    //         discard;
    //     }
    // } else {
    //     discard;
    // }
    gl_FragColor = vec4(1.,0.,0.,1.);
}





























