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
            // vec3 sphericalCoord = vec3(
            //     2.0,
            //     atan(v_uv.y, v_uv.x) + 3.14159265359,
            //     acos(2.0 * v_uv.y - 1.0)
            // );

            // // 使用fract函数将球分割
            // vec3 fragmentedCoord = vec3(
            //     fract(sphericalCoord.x / 2.0 * float(100)),
            //     fract(sphericalCoord.y / (2.0 * 3.14159265359) * float(100)),
            //     fract(sphericalCoord.z / 3.14159265359 * float(100))
            // );

            // 设置黑白颜色
            // vec3 color = mix(vec3(0.0), vec3(1.0), step(1., floor(fragmentedCoord.x + fragmentedCoord.y + fragmentedCoord.z)));
            // 将颜色输出到屏幕

            vec3 color = texture2D(u_texture,v_uv).xyz;

            float fu= fract(v_position.x*8.);
            float fv = fract(v_position.y*8.);
            vec2 fuv = vec2(fu, fv);
            fuv -= vec2(0.5);
            fuv *= 2.0;

            if(step(0.8,length(fuv)) <= 0.) {
                if (normalize(color).x >= 0.5) {
                    gl_FragColor = vec4(color,1.);
                } else {
                    discard;
                }
            } else {
                discard;
            }

            // vec3 color = mix(vec3(length(uv)), vec3(1.0, 1.0, 1.0),;
            // gl_FragColor = vec4(vec3(length(fuv) ), 1.0);
}





























