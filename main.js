import './style.css'

// Importar 'Three.js'
import * as THREE from 'three'

// Criando cena
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
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } ) //Material que reage a luz
const torus = new THREE.Mesh( geometry, material ) // Criando 'mesh' combinando o Objeto geométrico e o material

// Adicionando Obejato à cena
scene.add(torus)

// Ponto de luz
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(20,20,20)

// Ponto de luz ambiente | Ilumina todos objetos em cena

scene.add(pointLight)


// Função para rederizar o objeto automaticamente
function animate() {
  requestAnimationFrame( animate )

  // Animando o objeto
  torus.rotation.x += 0.01
  torus.rotation.y += 0.005
  torus.rotation.z += 0.01


  renderer.render( scene, camera )
}

animate()