/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Character from '../models/Character'


const Home = () => {
  return (
    <section style={{ width: "85vw", height: "85vh" }}>
      <Canvas className='w-full max-h-full bg-transparent' camera={{near: 0.1, far: 1000}}>
        <Suspense>
        <directionalLight position={[1, 1, 1] } intensity={1} />
            <ambientLight intensity={0.5} />
            
            <hemisphereLight skyColor='#b1e1ff'groundColor="#000000" intensity={1}/>
            <Character />    

        </Suspense>

      </Canvas>

    </section>
  )
}

export default Home
