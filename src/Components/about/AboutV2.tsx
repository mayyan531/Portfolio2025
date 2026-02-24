import { Canvas } from "@react-three/fiber"
import { Envelope } from "./Envelope"
import { Environment } from "@react-three/drei"

const AboutV2 = () => {
  return (
    <div className="w-full h-screen">
        <Canvas className="w-full h-full" dpr={4}>
            <directionalLight position={[5, 1, 5]} intensity={1.8} color={0xFFFFFF}/>
            <ambientLight intensity={1} color={0xFFF0C5}/>
            <Environment files={"/Portfolio2025/suburban_garden_1k.hdr"} environmentIntensity={0.8}/>

            <Envelope receiveShadow castShadow/>
        </Canvas>
    </div>
  )
}

export default AboutV2