import { Canvas } from "@react-three/fiber"
import { Envelope } from "./Envelope"
import { Environment } from "@react-three/drei"

const AboutV2 = () => {
  return (
    <div className="w-full h-screen">
        <Canvas className="w-full h-full" dpr={4}>
            <directionalLight position={[5, 30, 5]} intensity={2} />
            <Environment files={"/Portfolio2025/ferndale_studio_07_1k.hdr"} environmentIntensity={2}/>

            <Envelope receiveShadow castShadow/>
        </Canvas>
    </div>
  )
}

export default AboutV2