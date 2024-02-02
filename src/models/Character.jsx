/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import React from 'react'

import character from '../assets/3d/CharacterTest.glb'

const Character = () => {

    const characterS = useGLTF(character)
  return (
    <mesh position={[1, -4, -1]} scale={[1.003, 1.003, 1.003 ]}>

      <primitive object={characterS.scene} />
    </mesh>
    
  )
}

export default Character
