import './style.css'

//------------------------------------------------------------------
// Importar 'Three.js'
import * as THREE from 'three'
//------------------------------------------------------------------

//------------------------------------------------------------------
// Importar 'OrbitControl' do Three.js
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
//------------------------------------------------------------------

//------------------------------------------------------------------
// Criando cena
const scene = new THREE.Scene()
//------------------------------------------------------------------

//------------------------------------------------------------------
// Criando camera
// '75' é o raio de visão
// 'window.innerWidth / window.innerHeight' Proporção de tela
// '0.1, 1000' view frustum
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
//------------------------------------------------------------------

//------------------------------------------------------------------
// Renderizar 'canvas'
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})
//------------------------------------------------------------------

//------------------------------------------------------------------
// Camera
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)
//------------------------------------------------------------------


//------------------------------------------------------------------
// Objeto Geométrico
const geometry = new THREE.TorusGeometry(10, 3, 16, 100) // Obejeto
const material = new THREE.MeshStandardMaterial({ color: 0x9E4770 }) //Material que reage a luz
const torus = new THREE.Mesh(geometry, material) // Criando 'mesh' combinando o Objeto geométrico e o material
//------------------------------------------------------------------

//------------------------------------------------------------------
// Adicionando Obejato à cena
scene.add(torus)
//------------------------------------------------------------------

//------------------------------------------------------------------
// Novo objeto | Capsule
const geometry2 = new THREE.CapsuleGeometry(5, 0, 4, 100);
const material2 = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const capsule = new THREE.Mesh(geometry2, material2);
capsule.position.set(25, 0, 0)

scene.add(capsule)
//------------------------------------------------------------------

//------------------------------------------------------------------
// Ponto de luz
const pointLight = new THREE.PointLight(0xffffff, 50)
const pointLight2 = new THREE.PointLight(0xffffff, 100)
pointLight.position.set(10, 10, 10)
pointLight2.position.set(-20, -20, -10)
scene.add(pointLight, pointLight2)
//------------------------------------------------------------------

//------------------------------------------------------------------
// Ponto de luz ambiente | Ilumina todos objetos em cena
const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);
//------------------------------------------------------------------

//------------------------------------------------------------------
// Indicador guia de onde está a luz
const lightHelper = new THREE.PointLightHelper(pointLight)
const lightHelper2 = new THREE.PointLightHelper(pointLight2)
const lightHelperAmbient = new THREE.PointLightHelper(light)
scene.add(lightHelper, lightHelper2, lightHelperAmbient)
//------------------------------------------------------------------

//------------------------------------------------------------------
// Grid bidimencional
const gridHelper = new THREE.GridHelper(200, 50)
scene.add(gridHelper)
//------------------------------------------------------------------

//------------------------------------------------------------------
// Orbit controls controla a camera com o mouse
const controls = new OrbitControls(camera, renderer.domElement)
//------------------------------------------------------------------

//------------------------------------------------------------------
// Função para rederizar o objeto automaticamente
function animate() {
  requestAnimationFrame(animate)

  //------------------------------------------------------------------
  // Animando o objeto
  torus.rotation.x += 0.01
  torus.rotation.y += 0.005
  torus.rotation.z += 0.01
  //------------------------------------------------------------------

  controls.update() // Atualiza o controle do mouse

  renderer.render(scene, camera)
}
//------------------------------------------------------------------

animate()