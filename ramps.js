setFunction({
  name: 'e_ramp',
  type: 'src',
  inputs: [
    {
      type: 'float',
      name: 'frequency',
      default: 0,
    },
    {
      type: 'float',
      name: 'sync',
      default: .1,
    },
  ],
  glsl: `   vec2 st = _st;
  
   float y = pow(st.x,5.0);

    vec3 color = vec3(y);
   return vec4(color, 1.0);`
})
setFunction({
  name: 'log_ramp',
  type: 'src',
  inputs: [
    {
      type: 'float',
      name: 'frequency',
      default: 0,
    },
    {
      type: 'float',
      name: 'sync',
      default: .1,
    },
  ],
  glsl: `   vec2 st = _st;
  
   float p = pow((1.0-st.x),2.0);
   float y = sqrt(1.0-p);
   
   vec3 color = vec3(y);
   return vec4(color, 1.0);`
})
setFunction({
  name: 'lin_ramp',
  type: 'src',
  inputs: [
    {
      type: 'float',
      name: 'frequency',
      default: 0,
    },
    {
      type: 'float',
      name: 'sync',
      default: .1,
    },
  ],
  glsl: `   vec2 st = _st;
 
   
   vec3 color = vec3(st.x);
   return vec4(color, 1.0);`
})
setFunction({
  name: 'mirrored',
  type: 'src',
  inputs: [
    {
      type: 'float',
      name: 'frequency',
      default: 0,
    },
    {
      type: 'float',
      name: 'sync',
      default: .1,
    },
  ],
  glsl: `   vec2 st = _st;
 
   float y = parabola(st.x,1.0);
   vec3 color = vec3(y);
   return vec4(color, 1.0);`
})
