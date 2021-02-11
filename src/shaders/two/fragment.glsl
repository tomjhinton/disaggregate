

#define PI 3.1415926535897932384626433832795
uniform vec3 uColor;


uniform sampler2D uTexture;

varying vec2 vUv;
varying float vElevation;
varying float vTime;

float random(vec2 st)
{
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123 *  (cos(vTime)*10.0) );
}

void main()
{


  float strength = random(vUv);


  gl_FragColor = vec4(1.0, strength, strength, strength);
}
