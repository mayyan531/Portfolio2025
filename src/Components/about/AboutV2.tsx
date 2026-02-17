import { Canvas } from "@react-three/fiber"
import { Envelope } from "./Envelope"
import { Environment } from "@react-three/drei"

const AboutV2 = () => {
  return (
    <div className="w-full h-screen">
        <Canvas className="w-full h-full">
            <directionalLight position={[7, -10, 2]} intensity={7} color={0xf7ca49} castShadow/>
            <directionalLight position={[-0, 0, 5]} intensity={0.8} color={0xf7ca49}/>

            <Environment files={"/Portfolio2025/ferndale_studio_07_1k.hdr"} environmentIntensity={2}/>

            <Envelope receiveShadow castShadow/>
        </Canvas>
    </div>
  )
}

export default AboutV2