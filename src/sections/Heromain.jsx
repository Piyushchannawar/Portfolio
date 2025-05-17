import { Canvas } from '@react-three/fiber'
import Scene from '../components/Scene'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'


function Heromain() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
   <Canvas camera={{fov: 35}} >
    <ambientLight intensity={1} />
   <Scene />
  {/* <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={7.7} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          />
          <ToneMapping adaptive />
        </EffectComposer> */}

   </Canvas>
   </div>
  )
}

export default Heromain