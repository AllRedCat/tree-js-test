import './style.css'

// Importar 'Three.js'
import * as THREE from 'three'

// Criando sena
const scene = new THREE.Scene()

// Criando camera
// '75' é o raio de visão
// 'window.innerWidth / window.innerHeight' Proporção de tela
// '0.1, 1000' view frustum
const camera = new THREE.PerspectiveCamera( 75 , window.innerWidth / window.innerHeight, 0.1, 1000 )

// Renderizar 'canvas'
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

//
renderer.setPixelRatio( window.devicePixelRatio )
renderer.setSize( window.innerWidth, window.innerHeight )
camera.position.setZ(30)

// renderer.render( scene, camera )

// Objeto Geométrico
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 ) // Obejeto
const material = new THREE.MeshBasicMaterial( { color: 0x9E4770, wireframe: true } ) //Material
const torus = new THREE.Mesh( geometry, material ) // Criando 'mesh' combinando o Objeto geométrico e o material

// Adicionando Obejato à sena
scene.add(torus)

// Função para rederizar o objeto automaticamente
function animate() {
  requestAnimationFrame( animate )
  renderer.render( scene, camera )
}

animate()