import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'




import vertexShader1 from './shaders/one/vertex.glsl'
import fragmentShader1 from './shaders/one/fragment.glsl'

import vertexShader2 from './shaders/two/vertex.glsl'
import fragmentShader2 from './shaders/two/fragment.glsl'

import vertexShader3 from './shaders/three/vertex.glsl'
import fragmentShader3 from './shaders/three/fragment.glsl'

import vertexShader4 from './shaders/four/vertex.glsl'
import fragmentShader4 from './shaders/four/fragment.glsl'

import vertexShader5 from './shaders/five/vertex.glsl'
import fragmentShader5 from './shaders/five/fragment.glsl'

import vertexShader6 from './shaders/six/vertex.glsl'
import fragmentShader6 from './shaders/six/fragment.glsl'

/**
 * Base
 */
// Debug


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load('./textures/texture.png')

/**
 * Test mesh
 */
// Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1, 10, 10, 10)




// Material
const material = new THREE.ShaderMaterial({
  vertexShader: vertexShader1,
  fragmentShader: fragmentShader1,
  transparent: true,
  side: THREE.DoubleSide,
  uniforms: {
    uFrequency: {
      value: new THREE.Vector2(10, 5)
    },
    uTime: {
      value: 0
    },
    uColor: {
      value: new THREE.Color('orange')
    },
    uTexture: {
      value: texture
    },
    uMouse: {
      value: {x: 0.5, y: 0.5}
    }
  }
})


const material2 = new THREE.ShaderMaterial({
  vertexShader: vertexShader2,
  fragmentShader: fragmentShader2,
  transparent: true,
  side: THREE.DoubleSide,
  uniforms: {
    uFrequency: {
      value: new THREE.Vector2(10, 5)
    },
    uTime: {
      value: 0
    },
    uColor: {
      value: new THREE.Color('orange')
    },
    uTexture: {
      value: texture
    },
    uTexture2: {
      value: texture
    },
    uMouse: {
      value: {x: 0.5, y: 0.5}
    }
  }
})



const material3 = new THREE.ShaderMaterial({
  vertexShader: vertexShader3,
  fragmentShader: fragmentShader3,
  transparent: true,
  side: THREE.DoubleSide,
  uniforms: {
    uFrequency: {
      value: new THREE.Vector2(10, 5)
    },
    uTime: {
      value: 0
    },
    uColor: {
      value: new THREE.Color('orange')
    },
    uTexture: {
      value: texture
    },
    uTexture2: {
      value: texture
    },
    uMouse: {
      value: {x: 0.5, y: 0.5}
    }
  }
})


const material4 = new THREE.ShaderMaterial({
  vertexShader: vertexShader4,
  fragmentShader: fragmentShader4,
  transparent: true,
  side: THREE.DoubleSide,
  uniforms: {
    uFrequency: {
      value: new THREE.Vector2(10, 5)
    },
    uTime: {
      value: 0
    },
    uColor: {
      value: new THREE.Color('orange')
    },
    uTexture: {
      value: texture
    },
    uTexture2: {
      value: texture
    },
    uMouse: {
      value: {x: 0.5, y: 0.5}
    }
  }
})


const material5 = new THREE.ShaderMaterial({
  vertexShader: vertexShader5,
  fragmentShader: fragmentShader5,
  transparent: true,
  side: THREE.DoubleSide,
  uniforms: {
    uFrequency: {
      value: new THREE.Vector2(10, 5)
    },
    uTime: {
      value: 0
    },
    uColor: {
      value: new THREE.Color('orange')
    },
    uTexture: {
      value: texture
    },
    uTexture2: {
      value: texture
    },
    uMouse: {
      value: {x: 0.5, y: 0.5}
    }
  }
})



const material6 = new THREE.ShaderMaterial({
  vertexShader: vertexShader6,
  fragmentShader: fragmentShader6,
  transparent: true,
  side: THREE.DoubleSide,
  uniforms: {
    uFrequency: {
      value: new THREE.Vector2(10, 5)
    },
    uTime: {
      value: 0
    },
    uColor: {
      value: new THREE.Color('orange')
    },
    uTexture: {
      value: texture
    },
    uTexture2: {
      value: texture
    },
    uMouse: {
      value: {x: 0.5, y: 0.5}
    }
  }
})


window.addEventListener('mousemove', function (e) {
  material.uniforms.uMouse.value.x =  (e.clientX / window.innerWidth) * 2 - 1
  material.uniforms.uMouse.value.y = -(event.clientY / window.innerHeight) * 2 + 1

})

// Mesh
const mesh = new THREE.Mesh(geometry, [material, material2, material3, material4, material5, material6])




scene.add( mesh)

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

window.addEventListener('resize', () =>{
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0.25, - 0.25, 1)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>{
  const elapsedTime = clock.getElapsedTime()

  //Update Material
  material.uniforms.uTime.value = elapsedTime
  material2.uniforms.uTime.value = elapsedTime
  material3.uniforms.uTime.value = elapsedTime
  material4.uniforms.uTime.value = elapsedTime
  material5.uniforms.uTime.value = elapsedTime
  material6.uniforms.uTime.value = elapsedTime

  mesh.rotation.z +=0.01
  // Update controls
  controls.update()

  // Render
  renderer.render(scene, camera)



  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()
