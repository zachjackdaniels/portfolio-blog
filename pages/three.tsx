import { Canvas } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'

export default function Projects() {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  )
}
