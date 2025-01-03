import React, { useRef } from 'react'
import { useGLTF, Stage, OrbitControls } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
export function Cupcake(props) {
  const { nodes, materials } = useGLTF('/cupcake.gltf')
  const ref = useRef() ;
  useFrame((state, delta) => (ref.current.rotation.y += delta*0.2))

  return (
    <group {...props} dispose={null} ref={ref} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.envase.geometry}
        material={materials.envase}
        position={[0, 0.567, 0]}
        scale={[0.867, 1, 0.867]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chocolate.geometry}
        material={materials.chocolate}
        position={[0, 1.397, 0]}
        scale={[1.298, 0.869, 1.298]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.crema.geometry}
        material={materials.crema}
        position={[0, 2.244, 0]}
        scale={[0.948, 2.42, 0.948]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas.geometry}
          material={materials.chispas}
          position={[0.535, -0.242, 0.471]}
          rotation={[-1.804, -0.019, -3.073]}
          scale={[0.017, 0.03, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_1.geometry}
          material={materials.chispas}
          position={[0.737, -0.243, -0.104]}
          rotation={[-1.553, -0.073, -1.78]}
          scale={[0.012, 0.023, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_2.geometry}
          material={materials.chispas}
          position={[0.562, -0.245, -0.233]}
          rotation={[-1.536, -0.037, -0.613]}
          scale={[0.019, 0.034, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_3.geometry}
          material={materials.chispas}
          position={[0.485, -0.24, -0.411]}
          rotation={[-1.645, -0.366, -1.605]}
          scale={[0.014, 0.025, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_4.geometry}
          material={materials.chispas}
          position={[0.504, -0.241, -0.334]}
          rotation={[-1.555, -0.137, -1.145]}
          scale={[0.018, 0.033, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_5.geometry}
          material={materials.chispas}
          position={[0.265, -0.233, -0.625]}
          rotation={[-1.22, 0.134, 0.319]}
          scale={[0.019, 0.033, 0.009]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_6.geometry}
          material={materials.chispas}
          position={[0.229, -0.244, -0.567]}
          rotation={[-1.515, 0.013, 0.179]}
          scale={[0.014, 0.026, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_7.geometry}
          material={materials.chispas}
          position={[0.367, -0.245, -0.586]}
          rotation={[-1.533, 0.007, 0.146]}
          scale={[0.015, 0.026, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_8.geometry}
          material={materials.chispas}
          position={[-0.076, -0.241, -0.742]}
          rotation={[-1.228, -0.333, -0.713]}
          scale={[0.015, 0.025, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_9.geometry}
          material={materials.chispas}
          position={[-0.325, -0.246, -0.463]}
          rotation={[-1.537, 0.015, 0.323]}
          scale={[0.018, 0.032, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_10.geometry}
          material={materials.chispas}
          position={[-0.652, -0.236, -0.378]}
          rotation={[-1.518, 0.212, 1.65]}
          scale={[0.019, 0.034, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_11.geometry}
          material={materials.chispas}
          position={[-0.572, -0.245, -0.276]}
          rotation={[-1.557, 0.056, 1.797]}
          scale={[0.013, 0.023, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_12.geometry}
          material={materials.chispas}
          position={[-0.563, -0.244, 0.239]}
          rotation={[-1.61, 0.043, 2.519]}
          scale={[0.016, 0.029, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_13.geometry}
          material={materials.chispas}
          position={[-0.755, -0.241, 0.135]}
          rotation={[-1.546, 0.101, 1.756]}
          scale={[0.017, 0.031, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_14.geometry}
          material={materials.chispas}
          position={[-0.739, -0.243, 0.14]}
          rotation={[-1.582, 0.064, 2.089]}
          scale={[0.017, 0.031, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_15.geometry}
          material={materials.chispas}
          position={[-0.649, -0.246, 0.163]}
          rotation={[-1.596, 0.025, 2.553]}
          scale={[0.012, 0.022, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_16.geometry}
          material={materials.chispas}
          position={[-0.475, -0.241, 0.47]}
          rotation={[-1.442, 0.303, 1.409]}
          scale={[0.017, 0.03, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_17.geometry}
          material={materials.chispas}
          position={[-0.451, -0.23, 0.608]}
          rotation={[1.515, 0.213, 1.502]}
          scale={[0.018, 0.033, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_18.geometry}
          material={materials.chispas}
          position={[-0.397, -0.24, 0.643]}
          rotation={[-1.686, -0.02, -3.007]}
          scale={[0.013, 0.024, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_19.geometry}
          material={materials.chispas}
          position={[-0.377, -0.243, 0.611]}
          rotation={[-1.629, -0.013, -2.968]}
          scale={[0.015, 0.027, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_20.geometry}
          material={materials.chispas}
          position={[0.094, -0.243, 0.742]}
          rotation={[-1.658, 0.058, 2.684]}
          scale={[0.016, 0.029, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_21.geometry}
          material={materials.chispas}
          position={[0.086, -0.229, 0.726]}
          rotation={[1.698, 0.152, 0.718]}
          scale={[0.017, 0.03, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_22.geometry}
          material={materials.chispas}
          position={[0.111, -0.25, 0.428]}
          rotation={[-1.573, -0.003, -2.386]}
          scale={[0.015, 0.027, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_23.geometry}
          material={materials.chispas}
          position={[0.098, -0.248, 0.584]}
          rotation={[-1.578, -0.004, -2.747]}
          scale={[0.019, 0.035, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_24.geometry}
          material={materials.chispas}
          position={[0.229, -0.25, 0.243]}
          rotation={[-1.572, 0, -2.855]}
          scale={[0.015, 0.026, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_25.geometry}
          material={materials.chispas}
          position={[0.487, -0.248, 0.404]}
          rotation={[-1.585, -0.008, -2.763]}
          scale={[0.014, 0.025, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_26.geometry}
          material={materials.chispas}
          position={[0.392, -0.249, 0.372]}
          rotation={[-1.58, -0.002, -2.96]}
          scale={[0.015, 0.026, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_27.geometry}
          material={materials.chispas}
          position={[0.142, -0.25, 0.157]}
          rotation={[-1.571, 0, -1.571]}
          scale={[0.012, 0.022, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_28.geometry}
          material={materials.chispas}
          position={[0.135, -0.25, 0.182]}
          rotation={[-1.571, 0, -2.761]}
          scale={[0.013, 0.024, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_29.geometry}
          material={materials.chispas}
          position={[0.133, -0.25, 0.214]}
          rotation={[-1.571, 0, -2.686]}
          scale={[0.016, 0.029, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_30.geometry}
          material={materials.chispas}
          position={[0.475, -0.248, 0.379]}
          rotation={[-1.577, -0.008, -2.511]}
          scale={[0.016, 0.029, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_31.geometry}
          material={materials.chispas}
          position={[0.548, -0.247, 0.399]}
          rotation={[-1.573, -0.02, -2.061]}
          scale={[0.019, 0.035, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_32.geometry}
          material={materials.chispas}
          position={[0.134, -0.25, 0.092]}
          rotation={[-1.571, 0, -1.571]}
          scale={[0.013, 0.023, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_33.geometry}
          material={materials.chispas}
          position={[0.188, -0.25, 0.099]}
          rotation={[-1.571, 0, -1.571]}
          scale={[0.014, 0.026, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_34.geometry}
          material={materials.chispas}
          position={[0.224, -0.25, 0.075]}
          rotation={[-1.571, -0.001, -1.714]}
          scale={[0.014, 0.026, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_35.geometry}
          material={materials.chispas}
          position={[0.384, -0.249, 0.108]}
          rotation={[-1.569, -0.005, -1.754]}
          scale={[0.018, 0.032, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_36.geometry}
          material={materials.chispas}
          position={[0.54, -0.248, 0.029]}
          rotation={[-1.579, -0.016, -2.331]}
          scale={[0.015, 0.028, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_37.geometry}
          material={materials.chispas}
          position={[0.618, -0.248, -0.036]}
          rotation={[-1.576, -0.02, -2.163]}
          scale={[0.014, 0.026, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_38.geometry}
          material={materials.chispas}
          position={[0.513, -0.248, 0.097]}
          rotation={[-1.572, -0.02, -2.031]}
          scale={[0.015, 0.027, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_39.geometry}
          material={materials.chispas}
          position={[0.296, -0.25, -0.012]}
          rotation={[-1.571, -0.001, -1.512]}
          scale={[0.015, 0.028, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_40.geometry}
          material={materials.chispas}
          position={[0.659, -0.246, -0.043]}
          rotation={[-1.581, -0.034, -2.2]}
          scale={[0.017, 0.032, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_41.geometry}
          material={materials.chispas}
          position={[0.45, -0.25, -0.085]}
          rotation={[-1.572, -0.003, -1.337]}
          scale={[0.016, 0.03, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_42.geometry}
          material={materials.chispas}
          position={[0.601, -0.248, -0.103]}
          rotation={[-1.571, -0.011, -1.126]}
          scale={[0.014, 0.025, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_43.geometry}
          material={materials.chispas}
          position={[0.411, -0.25, -0.067]}
          rotation={[-1.572, -0.002, -1.435]}
          scale={[0.018, 0.032, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_44.geometry}
          material={materials.chispas}
          position={[0.424, -0.248, -0.334]}
          rotation={[-1.581, -0.023, -1.453]}
          scale={[0.02, 0.036, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_45.geometry}
          material={materials.chispas}
          position={[0.243, -0.25, -0.229]}
          rotation={[-1.571, -0.001, -1.285]}
          scale={[0.015, 0.027, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_46.geometry}
          material={materials.chispas}
          position={[0.289, -0.25, -0.332]}
          rotation={[-1.57, -0.002, -0.804]}
          scale={[0.019, 0.034, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_47.geometry}
          material={materials.chispas}
          position={[0.324, -0.249, -0.276]}
          rotation={[-1.575, -0.005, -1.569]}
          scale={[0.012, 0.023, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_48.geometry}
          material={materials.chispas}
          position={[0.374, -0.249, -0.368]}
          rotation={[-1.578, -0.011, -1.53]}
          scale={[0.013, 0.023, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_49.geometry}
          material={materials.chispas}
          position={[0.443, -0.247, -0.328]}
          rotation={[-1.58, -0.03, -1.36]}
          scale={[0.016, 0.028, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_50.geometry}
          material={materials.chispas}
          position={[0.164, -0.25, -0.164]}
          rotation={[-1.571, 0, -1.571]}
          scale={[0.017, 0.03, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_51.geometry}
          material={materials.chispas}
          position={[0.221, -0.25, -0.17]}
          rotation={[-1.571, -0.001, -1.367]}
          scale={[0.013, 0.023, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_52.geometry}
          material={materials.chispas}
          position={[0.268, -0.249, -0.427]}
          rotation={[-1.566, -0.001, -0.14]}
          scale={[0.018, 0.032, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_53.geometry}
          material={materials.chispas}
          position={[0.154, -0.25, -0.258]}
          rotation={[-1.57, 0, -0.394]}
          scale={[0.013, 0.023, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_54.geometry}
          material={materials.chispas}
          position={[0.099, -0.25, -0.188]}
          rotation={[-1.571, 0, -1.571]}
          scale={[0.018, 0.032, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_55.geometry}
          material={materials.chispas}
          position={[0.128, -0.25, -0.2]}
          rotation={[-1.571, 0, -1.571]}
          scale={[0.02, 0.036, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_56.geometry}
          material={materials.chispas}
          position={[0.108, -0.249, -0.384]}
          rotation={[-1.566, -0.001, -0.187]}
          scale={[0.019, 0.034, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_57.geometry}
          material={materials.chispas}
          position={[0.029, -0.248, -0.54]}
          rotation={[-1.562, -0.016, -0.771]}
          scale={[0.018, 0.033, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_58.geometry}
          material={materials.chispas}
          position={[-0.001, -0.25, -0.136]}
          rotation={[-1.571, 0, -1.571]}
          scale={[0.019, 0.035, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_59.geometry}
          material={materials.chispas}
          position={[0.031, -0.25, -0.153]}
          rotation={[-1.571, 0, -1.571]}
          scale={[0.012, 0.022, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_60.geometry}
          material={materials.chispas}
          position={[0.011, -0.25, -0.211]}
          rotation={[-1.571, 0, -1.571]}
          scale={[0.017, 0.03, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_61.geometry}
          material={materials.chispas}
          position={[0.055, -0.25, -0.293]}
          rotation={[-1.57, -0.001, -0.496]}
          scale={[0.016, 0.03, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_62.geometry}
          material={materials.chispas}
          position={[0.091, -0.25, -0.368]}
          rotation={[-1.567, -0.002, -0.331]}
          scale={[0.015, 0.027, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_63.geometry}
          material={materials.chispas}
          position={[-0.102, -0.249, -0.473]}
          rotation={[-1.568, 0.002, 0.472]}
          scale={[0.017, 0.03, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_64.geometry}
          material={materials.chispas}
          position={[-0.121, -0.249, -0.548]}
          rotation={[-1.566, 0.008, 0.742]}
          scale={[0.019, 0.035, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_65.geometry}
          material={materials.chispas}
          position={[-0.133, -0.25, -0.361]}
          rotation={[-1.57, 0.003, 1.01]}
          scale={[0.018, 0.033, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_66.geometry}
          material={materials.chispas}
          position={[-0.114, -0.247, -0.652]}
          rotation={[-1.558, 0.011, 0.528]}
          scale={[0.015, 0.027, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_67.geometry}
          material={materials.chispas}
          position={[-0.243, -0.248, -0.453]}
          rotation={[-1.561, 0.014, 0.696]}
          scale={[0.019, 0.034, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_68.geometry}
          material={materials.chispas}
          position={[-0.164, -0.25, -0.164]}
          rotation={[-1.571, 0, -1.571]}
          scale={[0.019, 0.035, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_69.geometry}
          material={materials.chispas}
          position={[-0.198, -0.25, -0.276]}
          rotation={[-1.569, 0, 0.16]}
          scale={[0.012, 0.022, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_70.geometry}
          material={materials.chispas}
          position={[-0.252, -0.25, -0.127]}
          rotation={[-1.571, 0.001, 1.509]}
          scale={[0.019, 0.034, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_71.geometry}
          material={materials.chispas}
          position={[-0.258, -0.25, -0.154]}
          rotation={[-1.571, 0.001, 1.177]}
          scale={[0.019, 0.034, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_72.geometry}
          material={materials.chispas}
          position={[-0.339, -0.25, -0.164]}
          rotation={[-1.57, 0.003, 1.784]}
          scale={[0.017, 0.031, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_73.geometry}
          material={materials.chispas}
          position={[-0.513, -0.248, -0.268]}
          rotation={[-1.565, 0.022, 1.81]}
          scale={[0.017, 0.03, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_74.geometry}
          material={materials.chispas}
          position={[-0.134, -0.25, -0.092]}
          rotation={[-1.571, 0, -1.571]}
          scale={[0.019, 0.035, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_75.geometry}
          material={materials.chispas}
          position={[-0.188, -0.25, -0.099]}
          rotation={[-1.571, 0, -1.571]}
          scale={[0.018, 0.032, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_76.geometry}
          material={materials.chispas}
          position={[-0.469, -0.249, -0.071]}
          rotation={[-1.568, 0.011, 0.952]}
          scale={[0.015, 0.027, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_77.geometry}
          material={materials.chispas}
          position={[-0.564, -0.248, -0.032]}
          rotation={[-1.56, 0.023, 0.837]}
          scale={[0.016, 0.029, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_78.geometry}
          material={materials.chispas}
          position={[-0.566, -0.248, -0.002]}
          rotation={[-1.563, 0.016, 0.836]}
          scale={[0.013, 0.024, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_79.geometry}
          material={materials.chispas}
          position={[-0.136, -0.25, 0.001]}
          rotation={[-1.571, 0, -1.571]}
          scale={[0.013, 0.024, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_80.geometry}
          material={materials.chispas}
          position={[-0.246, -0.25, -0.058]}
          rotation={[-1.571, 0.001, 1.241]}
          scale={[0.017, 0.03, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_81.geometry}
          material={materials.chispas}
          position={[-0.336, -0.25, -0.055]}
          rotation={[-1.57, 0.002, 0.946]}
          scale={[0.013, 0.024, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_82.geometry}
          material={materials.chispas}
          position={[-0.597, -0.248, 0.132]}
          rotation={[-1.579, 0.013, 2.397]}
          scale={[0.019, 0.034, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_83.geometry}
          material={materials.chispas}
          position={[-0.361, -0.25, 0.133]}
          rotation={[-1.573, 0.002, 2.579]}
          scale={[0.018, 0.032, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_84.geometry}
          material={materials.chispas}
          position={[-0.433, -0.249, 0.139]}
          rotation={[-1.575, 0.004, 2.63]}
          scale={[0.016, 0.028, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_85.geometry}
          material={materials.chispas}
          position={[-0.517, -0.248, 0.193]}
          rotation={[-1.585, 0.014, 2.582]}
          scale={[0.019, 0.035, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_86.geometry}
          material={materials.chispas}
          position={[-0.578, -0.248, 0.164]}
          rotation={[-1.586, 0.015, 2.584]}
          scale={[0.012, 0.022, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_87.geometry}
          material={materials.chispas}
          position={[-0.472, -0.249, 0.082]}
          rotation={[-1.57, 0.004, 1.771]}
          scale={[0.019, 0.034, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_88.geometry}
          material={materials.chispas}
          position={[-0.64, -0.247, 0.144]}
          rotation={[-1.586, 0.02, 2.457]}
          scale={[0.014, 0.024, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_89.geometry}
          material={materials.chispas}
          position={[-0.52, -0.247, 0.209]}
          rotation={[-1.588, 0.018, 2.545]}
          scale={[0.012, 0.022, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_90.geometry}
          material={materials.chispas}
          position={[-0.362, -0.249, 0.174]}
          rotation={[-1.573, 0.004, 2.421]}
          scale={[0.019, 0.034, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_91.geometry}
          material={materials.chispas}
          position={[-0.415, -0.248, 0.305]}
          rotation={[-1.564, 0.018, 1.761]}
          scale={[0.016, 0.028, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_92.geometry}
          material={materials.chispas}
          position={[-0.399, -0.248, 0.271]}
          rotation={[-1.568, 0.013, 1.854]}
          scale={[0.019, 0.034, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_93.geometry}
          material={materials.chispas}
          position={[-0.221, -0.25, 0.17]}
          rotation={[-1.57, 0.001, 1.775]}
          scale={[0.013, 0.023, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_94.geometry}
          material={materials.chispas}
          position={[-0.135, -0.25, 0.307]}
          rotation={[-1.573, 0, -2.995]}
          scale={[0.012, 0.022, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_95.geometry}
          material={materials.chispas}
          position={[-0.161, -0.25, 0.35]}
          rotation={[-1.574, -0.001, -2.918]}
          scale={[0.017, 0.031, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_96.geometry}
          material={materials.chispas}
          position={[-0.195, -0.248, 0.474]}
          rotation={[-1.584, -0.004, -2.955]}
          scale={[0.016, 0.03, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_97.geometry}
          material={materials.chispas}
          position={[-0.178, -0.249, 0.455]}
          rotation={[-1.582, -0.002, -2.994]}
          scale={[0.019, 0.034, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_98.geometry}
          material={materials.chispas}
          position={[-0.196, -0.249, 0.441]}
          rotation={[-1.58, -0.003, -2.895]}
          scale={[0.013, 0.024, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_99.geometry}
          material={materials.chispas}
          position={[-0.275, -0.249, 0.392]}
          rotation={[-1.573, 0.002, 2.557]}
          scale={[0.02, 0.035, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_100.geometry}
          material={materials.chispas}
          position={[-0.377, -0.247, 0.554]}
          rotation={[-1.591, 0.003, 3.031]}
          scale={[0.016, 0.029, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_101.geometry}
          material={materials.chispas}
          position={[-0.137, -0.247, 0.513]}
          rotation={[-1.591, 0.006, 2.944]}
          scale={[0.015, 0.027, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_102.geometry}
          material={materials.chispas}
          position={[-0.021, -0.249, 0.463]}
          rotation={[-1.574, 0.006, 2.341]}
          scale={[0.013, 0.023, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_103.geometry}
          material={materials.chispas}
          position={[-0.118, -0.247, 0.527]}
          rotation={[-1.593, 0.011, 2.805]}
          scale={[0.016, 0.03, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_104.geometry}
          material={materials.chispas}
          position={[-0.031, -0.25, 0.153]}
          rotation={[-1.571, 0, -1.571]}
          scale={[0.016, 0.029, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_105.geometry}
          material={materials.chispas}
          position={[0.012, -0.25, 0.296]}
          rotation={[-1.571, 0, -3.083]}
          scale={[0.019, 0.034, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_106.geometry}
          material={materials.chispas}
          position={[0.051, -0.25, 0.431]}
          rotation={[-1.573, 0, -3.017]}
          scale={[0.015, 0.027, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_107.geometry}
          material={materials.chispas}
          position={[-0.058, -0.25, 0.246]}
          rotation={[-1.571, 0, 2.812]}
          scale={[0.014, 0.024, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_108.geometry}
          material={materials.chispas}
          position={[-0.055, -0.25, 0.336]}
          rotation={[-1.572, 0.002, 2.515]}
          scale={[0.019, 0.034, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_109.geometry}
          material={materials.chispas}
          position={[0.067, -0.246, 0.674]}
          rotation={[-1.594, 0.017, 2.668]}
          scale={[0.018, 0.032, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_110.geometry}
          material={materials.chispas}
          position={[0.091, 0.219, -0.034]}
          rotation={[1.594, -0.359, -1.353]}
          scale={[0.013, 0.022, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_111.geometry}
          material={materials.chispas}
          position={[0.233, 0.11, 0.03]}
          rotation={[1.773, -0.286, -0.848]}
          scale={[0.019, 0.033, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_112.geometry}
          material={materials.chispas}
          position={[0.246, 0.046, 0.158]}
          rotation={[1.755, -0.383, -1.036]}
          scale={[0.015, 0.026, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_113.geometry}
          material={materials.chispas}
          position={[0.301, 0.026, 0.16]}
          rotation={[1.832, -0.156, -0.461]}
          scale={[0.02, 0.035, 0.009]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_114.geometry}
          material={materials.chispas}
          position={[0.285, -0.02, 0.259]}
          rotation={[1.852, -0.122, -0.35]}
          scale={[0.017, 0.031, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_115.geometry}
          material={materials.chispas}
          position={[0.265, -0.034, 0.293]}
          rotation={[1.867, -0.146, -0.397]}
          scale={[0.016, 0.029, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_116.geometry}
          material={materials.chispas}
          position={[0.227, -0.069, 0.367]}
          rotation={[1.901, -0.141, -0.353]}
          scale={[0.014, 0.025, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_117.geometry}
          material={materials.chispas}
          position={[0.226, -0.074, 0.375]}
          rotation={[1.896, -0.116, -0.298]}
          scale={[0.019, 0.033, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_118.geometry}
          material={materials.chispas}
          position={[0.356, -0.091, 0.415]}
          rotation={[1.792, 0.018, 0.066]}
          scale={[0.012, 0.022, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_119.geometry}
          material={materials.chispas}
          position={[0.345, -0.117, 0.483]}
          rotation={[1.781, 0.032, 0.124]}
          scale={[0.019, 0.033, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_120.geometry}
          material={materials.chispas}
          position={[0.156, -0.128, 0.477]}
          rotation={[1.903, -0.024, -0.062]}
          scale={[0.015, 0.027, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_121.geometry}
          material={materials.chispas}
          position={[0.065, -0.183, 0.571]}
          rotation={[1.849, 0.088, 0.26]}
          scale={[0.012, 0.021, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_122.geometry}
          material={materials.chispas}
          position={[0.213, -0.191, 0.668]}
          rotation={[1.735, 0.101, 0.452]}
          scale={[0.013, 0.022, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_123.geometry}
          material={materials.chispas}
          position={[0.039, -0.187, 0.571]}
          rotation={[1.884, 0.074, 0.199]}
          scale={[0.019, 0.034, 0.009]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_124.geometry}
          material={materials.chispas}
          position={[0.278, -0.18, 0.653]}
          rotation={[1.843, -0.079, -0.24]}
          scale={[0.018, 0.031, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_125.geometry}
          material={materials.chispas}
          position={[0.144, -0.206, 0.681]}
          rotation={[1.712, 0.133, 0.617]}
          scale={[0.019, 0.035, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_126.geometry}
          material={materials.chispas}
          position={[0.221, 0.066, 0.193]}
          rotation={[1.418, -0.99, -2.04]}
          scale={[0.013, 0.014, 0.011]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_127.geometry}
          material={materials.chispas}
          position={[0.221, 0.058, 0.241]}
          rotation={[2.292, -1.512, -0.88]}
          scale={[0.017, 0.012, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_128.geometry}
          material={materials.chispas}
          position={[0.145, -0.09, 0.436]}
          rotation={[2.185, -0.509, -0.681]}
          scale={[0.019, 0.027, 0.013]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_129.geometry}
          material={materials.chispas}
          position={[-0.038, -0.184, 0.57]}
          rotation={[2.403, -0.217, -0.228]}
          scale={[0.014, 0.019, 0.011]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_130.geometry}
          material={materials.chispas}
          position={[0.093, 0.221, 0.034]}
          rotation={[1.841, -0.172, -0.489]}
          scale={[0.019, 0.034, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_131.geometry}
          material={materials.chispas}
          position={[0.141, 0.11, 0.187]}
          rotation={[1.917, 0.003, 0.007]}
          scale={[0.018, 0.032, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_132.geometry}
          material={materials.chispas}
          position={[0.091, 0.015, 0.345]}
          rotation={[1.829, 0.145, 0.438]}
          scale={[0.017, 0.03, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_133.geometry}
          material={materials.chispas}
          position={[0.123, 0.016, 0.358]}
          rotation={[1.805, 0.148, 0.478]}
          scale={[0.016, 0.029, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_134.geometry}
          material={materials.chispas}
          position={[0.13, 0.035, 0.319]}
          rotation={[1.833, 0.129, 0.391]}
          scale={[0.016, 0.029, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_135.geometry}
          material={materials.chispas}
          position={[0.035, 0.009, 0.337]}
          rotation={[1.928, 0.07, 0.169]}
          scale={[0.014, 0.025, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_136.geometry}
          material={materials.chispas}
          position={[0.014, 0.004, 0.342]}
          rotation={[1.987, 0.019, 0.04]}
          scale={[0.012, 0.021, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_137.geometry}
          material={materials.chispas}
          position={[0.164, 0.011, 0.386]}
          rotation={[1.834, 0.037, 0.119]}
          scale={[0.017, 0.029, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_138.geometry}
          material={materials.chispas}
          position={[0.112, -0.029, 0.468]}
          rotation={[1.814, 0.079, 0.264]}
          scale={[0.019, 0.035, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_139.geometry}
          material={materials.chispas}
          position={[-0.073, -0.076, 0.455]}
          rotation={[1.737, 0.222, 0.794]}
          scale={[0.014, 0.025, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_140.geometry}
          material={materials.chispas}
          position={[-0.109, -0.087, 0.452]}
          rotation={[1.754, 0.229, 0.772]}
          scale={[0.016, 0.029, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_141.geometry}
          material={materials.chispas}
          position={[-0.092, -0.101, 0.52]}
          rotation={[1.654, 0.224, 1.02]}
          scale={[0.019, 0.034, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_142.geometry}
          material={materials.chispas}
          position={[-0.023, -0.091, 0.565]}
          rotation={[1.719, 0.173, 0.719]}
          scale={[0.019, 0.034, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_143.geometry}
          material={materials.chispas}
          position={[-0.055, -0.084, 0.5]}
          rotation={[1.679, 0.22, 0.936]}
          scale={[0.014, 0.026, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_144.geometry}
          material={materials.chispas}
          position={[-0.145, -0.122, 0.537]}
          rotation={[1.625, 0.227, 1.117]}
          scale={[0.019, 0.035, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_145.geometry}
          material={materials.chispas}
          position={[-0.191, -0.142, 0.562]}
          rotation={[1.597, 0.222, 1.205]}
          scale={[0.015, 0.028, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_146.geometry}
          material={materials.chispas}
          position={[-0.165, -0.14, 0.606]}
          rotation={[1.626, 0.205, 1.082]}
          scale={[0.018, 0.032, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_147.geometry}
          material={materials.chispas}
          position={[-0.143, -0.134, 0.604]}
          rotation={[1.637, 0.203, 1.037]}
          scale={[0.013, 0.024, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_148.geometry}
          material={materials.chispas}
          position={[-0.28, -0.18, 0.637]}
          rotation={[1.613, 0.204, 1.125]}
          scale={[0.017, 0.03, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_149.geometry}
          material={materials.chispas}
          position={[-0.396, -0.209, 0.54]}
          rotation={[1.51, 0.21, 1.521]}
          scale={[0.017, 0.031, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_150.geometry}
          material={materials.chispas}
          position={[0.072, 0.188, 0.124]}
          rotation={[1.603, -0.698, -1.642]}
          scale={[0.015, 0.024, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_151.geometry}
          material={materials.chispas}
          position={[-0.013, 0.076, 0.323]}
          rotation={[2.214, -0.415, -0.549]}
          scale={[0.014, 0.02, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_152.geometry}
          material={materials.chispas}
          position={[-0.122, 0.017, 0.395]}
          rotation={[2.247, -0.115, -0.153]}
          scale={[0.016, 0.025, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_153.geometry}
          material={materials.chispas}
          position={[0.018, 0.033, 0.311]}
          rotation={[2.143, -0.257, -0.392]}
          scale={[0.018, 0.03, 0.011]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_154.geometry}
          material={materials.chispas}
          position={[-0.123, -0.005, 0.394]}
          rotation={[-2.471, -0.425, -2.752]}
          scale={[0.017, 0.02, 0.015]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_155.geometry}
          material={materials.chispas}
          position={[-0.534, -0.209, 0.321]}
          rotation={[-2.406, 0.408, 2.727]}
          scale={[0.015, 0.018, 0.012]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_156.geometry}
          material={materials.chispas}
          position={[-0.03, 0.122, 0.208]}
          rotation={[1.831, 0.265, 0.706]}
          scale={[0.013, 0.022, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_157.geometry}
          material={materials.chispas}
          position={[-0.025, 0.111, 0.237]}
          rotation={[1.753, 0.294, 0.9]}
          scale={[0.013, 0.023, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_158.geometry}
          material={materials.chispas}
          position={[-0.06, 0.08, 0.279]}
          rotation={[1.68, 0.303, 1.075]}
          scale={[0.013, 0.023, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_159.geometry}
          material={materials.chispas}
          position={[-0.095, 0.051, 0.327]}
          rotation={[1.625, 0.289, 1.198]}
          scale={[0.018, 0.033, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_160.geometry}
          material={materials.chispas}
          position={[-0.088, 0.043, 0.365]}
          rotation={[1.823, 0.176, 0.526]}
          scale={[0.019, 0.034, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_161.geometry}
          material={materials.chispas}
          position={[-0.165, 0.029, 0.278]}
          rotation={[1.666, 0.322, 1.137]}
          scale={[0.015, 0.026, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_162.geometry}
          material={materials.chispas}
          position={[-0.176, 0.03, 0.26]}
          rotation={[1.753, 0.327, 0.956]}
          scale={[0.014, 0.025, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_163.geometry}
          material={materials.chispas}
          position={[-0.131, 0.034, 0.329]}
          rotation={[1.592, 0.293, 1.296]}
          scale={[0.015, 0.027, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_164.geometry}
          material={materials.chispas}
          position={[-0.172, 0.011, 0.354]}
          rotation={[1.556, 0.279, 1.391]}
          scale={[0.014, 0.025, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_165.geometry}
          material={materials.chispas}
          position={[-0.368, -0.074, 0.406]}
          rotation={[1.564, 0.254, 1.348]}
          scale={[0.015, 0.027, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_166.geometry}
          material={materials.chispas}
          position={[-0.529, -0.136, 0.305]}
          rotation={[1.611, 0.219, 1.694]}
          scale={[0.015, 0.027, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_167.geometry}
          material={materials.chispas}
          position={[-0.594, -0.173, 0.185]}
          rotation={[1.548, 0.22, 1.927]}
          scale={[0.019, 0.034, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_168.geometry}
          material={materials.chispas}
          position={[-0.638, -0.184, 0.2]}
          rotation={[1.54, 0.202, 1.975]}
          scale={[0.013, 0.022, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_169.geometry}
          material={materials.chispas}
          position={[-0.595, -0.201, 0.023]}
          rotation={[1.587, 0.298, 1.732]}
          scale={[0.016, 0.028, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_170.geometry}
          material={materials.chispas}
          position={[-0.625, -0.179, 0.208]}
          rotation={[1.545, 0.206, 1.953]}
          scale={[0.012, 0.022, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_171.geometry}
          material={materials.chispas}
          position={[-0.623, -0.214, 0.015]}
          rotation={[1.532, 0.254, 1.939]}
          scale={[0.019, 0.034, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_172.geometry}
          material={materials.chispas}
          position={[-0.656, -0.213, 0.073]}
          rotation={[1.506, 0.206, 2.095]}
          scale={[0.017, 0.03, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_173.geometry}
          material={materials.chispas}
          position={[-0.049, 0.184, 0.147]}
          rotation={[2.206, -0.337, -0.459]}
          scale={[0.013, 0.02, 0.009]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_174.geometry}
          material={materials.chispas}
          position={[-0.083, 0.113, 0.199]}
          rotation={[2.129, 0.044, 0.071]}
          scale={[0.016, 0.027, 0.009]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_175.geometry}
          material={materials.chispas}
          position={[-0.103, 0.105, 0.205]}
          rotation={[2.217, 0.005, 0.007]}
          scale={[0.017, 0.028, 0.011]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_176.geometry}
          material={materials.chispas}
          position={[-0.235, 0.074, 0.22]}
          rotation={[2.499, 0.109, 0.1]}
          scale={[0.019, 0.023, 0.016]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_177.geometry}
          material={materials.chispas}
          position={[-0.274, -0.015, 0.239]}
          rotation={[1.837, 0.389, 0.908]}
          scale={[0.017, 0.029, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_178.geometry}
          material={materials.chispas}
          position={[-0.624, -0.145, -0.089]}
          rotation={[-1.845, 0.556, 2.022]}
          scale={[0.015, 0.025, 0.009]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_179.geometry}
          material={materials.chispas}
          position={[-0.586, -0.161, -0.061]}
          rotation={[-1.896, 0.617, 2.02]}
          scale={[0.015, 0.023, 0.009]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_180.geometry}
          material={materials.chispas}
          position={[-0.669, -0.181, -0.237]}
          rotation={[2.366, 1.411, 0.841]}
          scale={[0.017, 0.013, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_181.geometry}
          material={materials.chispas}
          position={[-0.608, -0.201, -0.149]}
          rotation={[-1.739, 0.722, 1.693]}
          scale={[0.014, 0.021, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_182.geometry}
          material={materials.chispas}
          position={[-0.604, -0.209, -0.151]}
          rotation={[-1.773, 0.88, 1.623]}
          scale={[0.013, 0.016, 0.011]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_183.geometry}
          material={materials.chispas}
          position={[-0.654, -0.205, -0.256]}
          rotation={[-1.64, 0.47, 1.777]}
          scale={[0.015, 0.026, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_184.geometry}
          material={materials.chispas}
          position={[-0.046, 0.224, 0.063]}
          rotation={[1.75, 0.233, 0.79]}
          scale={[0.018, 0.032, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_185.geometry}
          material={materials.chispas}
          position={[-0.21, 0.098, 0.175]}
          rotation={[1.689, 0.311, 1.438]}
          scale={[0.016, 0.029, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_186.geometry}
          material={materials.chispas}
          position={[-0.216, 0.093, 0.105]}
          rotation={[1.486, 0.388, 1.642]}
          scale={[0.016, 0.028, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_187.geometry}
          material={materials.chispas}
          position={[-0.313, 0.028, 0.067]}
          rotation={[1.668, 0.349, 1.486]}
          scale={[0.015, 0.026, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_188.geometry}
          material={materials.chispas}
          position={[-0.33, 0.023, 0.097]}
          rotation={[1.566, 0.311, 1.782]}
          scale={[0.019, 0.034, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_189.geometry}
          material={materials.chispas}
          position={[-0.371, 0.006, 0.104]}
          rotation={[1.519, 0.279, 1.947]}
          scale={[0.016, 0.029, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_190.geometry}
          material={materials.chispas}
          position={[-0.377, -0.011, 0.044]}
          rotation={[1.527, 0.303, 1.899]}
          scale={[0.016, 0.028, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_191.geometry}
          material={materials.chispas}
          position={[-0.401, -0.012, 0.076]}
          rotation={[1.494, 0.265, 2.037]}
          scale={[0.013, 0.023, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_192.geometry}
          material={materials.chispas}
          position={[-0.525, -0.068, 0.022]}
          rotation={[1.473, 0.212, 2.189]}
          scale={[0.015, 0.026, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_193.geometry}
          material={materials.chispas}
          position={[-0.532, -0.159, -0.257]}
          rotation={[1.376, 0.112, 2.708]}
          scale={[0.019, 0.034, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_194.geometry}
          material={materials.chispas}
          position={[-0.458, -0.2, -0.393]}
          rotation={[1.342, 0.122, 2.73]}
          scale={[0.012, 0.022, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_195.geometry}
          material={materials.chispas}
          position={[-0.535, -0.223, -0.439]}
          rotation={[1.377, 0.03, 3.016]}
          scale={[0.017, 0.031, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_196.geometry}
          material={materials.chispas}
          position={[-0.633, -0.216, -0.4]}
          rotation={[1.4, 0.091, 2.741]}
          scale={[0.017, 0.031, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_197.geometry}
          material={materials.chispas}
          position={[-0.392, -0.224, -0.474]}
          rotation={[1.292, 0.186, 2.628]}
          scale={[0.015, 0.027, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_198.geometry}
          material={materials.chispas}
          position={[-0.194, 0.125, 0.076]}
          rotation={[2.092, 0.447, 0.69]}
          scale={[0.015, 0.024, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_199.geometry}
          material={materials.chispas}
          position={[-0.279, 0.082, 0.029]}
          rotation={[2.481, 0.651, 0.551]}
          scale={[0.014, 0.014, 0.013]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_200.geometry}
          material={materials.chispas}
          position={[-0.411, -0.126, -0.29]}
          rotation={[1.49, 0.81, 1.493]}
          scale={[0.013, 0.018, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_201.geometry}
          material={materials.chispas}
          position={[-0.306, -0.187, -0.632]}
          rotation={[-1.444, 0.585, 1.38]}
          scale={[0.014, 0.023, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_202.geometry}
          material={materials.chispas}
          position={[-0.346, -0.186, -0.499]}
          rotation={[-1.43, 0.756, 1.519]}
          scale={[0.013, 0.019, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_203.geometry}
          material={materials.chispas}
          position={[-0.091, 0.217, 0.022]}
          rotation={[1.62, 0.371, 1.599]}
          scale={[0.013, 0.024, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_204.geometry}
          material={materials.chispas}
          position={[-0.176, 0.161, 0.023]}
          rotation={[1.422, 0.346, 2.09]}
          scale={[0.014, 0.024, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_205.geometry}
          material={materials.chispas}
          position={[-0.246, 0.091, -0.062]}
          rotation={[1.361, 0.278, 2.324]}
          scale={[0.012, 0.022, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_206.geometry}
          material={materials.chispas}
          position={[-0.32, 0.032, -0.139]}
          rotation={[1.316, 0.141, 2.71]}
          scale={[0.013, 0.024, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_207.geometry}
          material={materials.chispas}
          position={[-0.325, 0.027, -0.148]}
          rotation={[1.316, 0.131, 2.738]}
          scale={[0.018, 0.032, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_208.geometry}
          material={materials.chispas}
          position={[-0.34, 0.016, -0.166]}
          rotation={[1.319, 0.113, 2.784]}
          scale={[0.012, 0.022, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_209.geometry}
          material={materials.chispas}
          position={[-0.358, 0.032, -0.122]}
          rotation={[1.353, 0.16, 2.604]}
          scale={[0.013, 0.023, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_210.geometry}
          material={materials.chispas}
          position={[-0.421, -0.026, -0.235]}
          rotation={[1.506, 0.391, 1.85]}
          scale={[0.016, 0.028, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_211.geometry}
          material={materials.chispas}
          position={[-0.283, -0.1, -0.428]}
          rotation={[1.332, -0.039, -3.007]}
          scale={[0.019, 0.033, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_212.geometry}
          material={materials.chispas}
          position={[-0.352, -0.111, -0.468]}
          rotation={[1.358, -0.025, -3.044]}
          scale={[0.017, 0.03, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_213.geometry}
          material={materials.chispas}
          position={[-0.33, -0.131, -0.521]}
          rotation={[1.367, -0.043, -2.969]}
          scale={[0.017, 0.03, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_214.geometry}
          material={materials.chispas}
          position={[-0.226, -0.142, -0.52]}
          rotation={[1.358, -0.086, -2.823]}
          scale={[0.012, 0.022, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_215.geometry}
          material={materials.chispas}
          position={[-0.138, -0.194, -0.635]}
          rotation={[1.411, -0.133, -2.569]}
          scale={[0.019, 0.033, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_216.geometry}
          material={materials.chispas}
          position={[-0.134, -0.181, -0.593]}
          rotation={[1.38, -0.122, -2.669]}
          scale={[0.019, 0.034, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_217.geometry}
          material={materials.chispas}
          position={[-0.042, -0.21, -0.627]}
          rotation={[1.382, -0.142, -2.603]}
          scale={[0.019, 0.033, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_218.geometry}
          material={materials.chispas}
          position={[-0.211, 0.02, -0.305]}
          rotation={[-1.234, 1.166, 1.411]}
          scale={[0.014, 0.012, 0.013]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_219.geometry}
          material={materials.chispas}
          position={[-0.216, 0.018, -0.282]}
          rotation={[0.714, 1.285, 2.343]}
          scale={[0.015, 0.011, 0.015]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_220.geometry}
          material={materials.chispas}
          position={[-0.231, -0.008, -0.273]}
          rotation={[1.294, 0.507, 2.087]}
          scale={[0.013, 0.021, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_221.geometry}
          material={materials.chispas}
          position={[-0.183, -0.027, -0.373]}
          rotation={[-0.856, 1.031, 0.946]}
          scale={[0.019, 0.016, 0.018]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_222.geometry}
          material={materials.chispas}
          position={[-0.084, 0.057, -0.269]}
          rotation={[1.196, 0.017, 3.103]}
          scale={[0.016, 0.029, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_223.geometry}
          material={materials.chispas}
          position={[-0.027, -0.049, -0.467]}
          rotation={[1.42, -0.199, -2.365]}
          scale={[0.018, 0.032, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_224.geometry}
          material={materials.chispas}
          position={[0.136, -0.087, -0.431]}
          rotation={[1.286, -0.215, -2.573]}
          scale={[0.013, 0.023, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_225.geometry}
          material={materials.chispas}
          position={[0.151, -0.107, -0.468]}
          rotation={[1.427, -0.243, -2.253]}
          scale={[0.013, 0.024, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_226.geometry}
          material={materials.chispas}
          position={[0.097, -0.106, -0.537]}
          rotation={[1.496, -0.22, -2.103]}
          scale={[0.015, 0.027, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_227.geometry}
          material={materials.chispas}
          position={[0.205, -0.143, -0.545]}
          rotation={[1.545, -0.228, -1.927]}
          scale={[0.019, 0.035, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_228.geometry}
          material={materials.chispas}
          position={[0.21, -0.166, -0.66]}
          rotation={[1.156, -0.108, -2.916]}
          scale={[0.015, 0.026, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_229.geometry}
          material={materials.chispas}
          position={[0.267, -0.156, -0.494]}
          rotation={[1.523, -0.253, -1.968]}
          scale={[0.02, 0.035, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_230.geometry}
          material={materials.chispas}
          position={[0.362, -0.194, -0.504]}
          rotation={[1.597, -0.237, -1.741]}
          scale={[0.016, 0.029, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_231.geometry}
          material={materials.chispas}
          position={[0.308, -0.187, -0.627]}
          rotation={[1.57, -0.203, -1.858]}
          scale={[0.013, 0.023, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_232.geometry}
          material={materials.chispas}
          position={[0.331, -0.192, -0.607]}
          rotation={[1.595, -0.204, -1.761]}
          scale={[0.016, 0.029, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_233.geometry}
          material={materials.chispas}
          position={[0.412, -0.2, -0.418]}
          rotation={[1.464, -0.325, -2.029]}
          scale={[0.019, 0.033, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_234.geometry}
          material={materials.chispas}
          position={[0.366, -0.202, -0.589]}
          rotation={[1.618, -0.201, -1.672]}
          scale={[0.016, 0.029, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_235.geometry}
          material={materials.chispas}
          position={[0.296, -0.189, -0.66]}
          rotation={[1.361, -0.194, -2.504]}
          scale={[0.013, 0.024, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_236.geometry}
          material={materials.chispas}
          position={[0.431, -0.224, -0.612]}
          rotation={[1.617, -0.194, -1.675]}
          scale={[0.013, 0.023, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_237.geometry}
          material={materials.chispas}
          position={[-0.039, 0.107, -0.26]}
          rotation={[0.872, 0.795, 2.285]}
          scale={[0.018, 0.019, 0.016]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_238.geometry}
          material={materials.chispas}
          position={[-0.023, 0.097, -0.283]}
          rotation={[0.845, 0.7, 2.383]}
          scale={[0.018, 0.021, 0.016]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_239.geometry}
          material={materials.chispas}
          position={[0.006, 0.077, -0.318]}
          rotation={[0.802, 0.564, 2.535]}
          scale={[0.019, 0.023, 0.016]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_240.geometry}
          material={materials.chispas}
          position={[0.137, -0.018, -0.397]}
          rotation={[-0.678, 0.385, 0.361]}
          scale={[0.012, 0.014, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_241.geometry}
          material={materials.chispas}
          position={[0.105, -0.034, -0.385]}
          rotation={[0.713, 0.164, 2.974]}
          scale={[0.015, 0.02, 0.012]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_242.geometry}
          material={materials.chispas}
          position={[0.255, -0.126, -0.424]}
          rotation={[1.128, -0.258, -2.657]}
          scale={[0.015, 0.026, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_243.geometry}
          material={materials.chispas}
          position={[0.529, -0.175, -0.346]}
          rotation={[-1.04, -0.134, -0.225]}
          scale={[0.014, 0.023, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_244.geometry}
          material={materials.chispas}
          position={[0.563, -0.195, -0.319]}
          rotation={[-1.04, -0.198, -0.326]}
          scale={[0.012, 0.02, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_245.geometry}
          material={materials.chispas}
          position={[0.498, -0.194, -0.343]}
          rotation={[-0.673, -0.364, -0.339]}
          scale={[0.018, 0.021, 0.015]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_246.geometry}
          material={materials.chispas}
          position={[0.388, -0.181, -0.403]}
          rotation={[1.243, -0.368, -2.354]}
          scale={[0.014, 0.024, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_247.geometry}
          material={materials.chispas}
          position={[0.106, 0.061, -0.271]}
          rotation={[1.448, -0.311, -2.086]}
          scale={[0.019, 0.034, 0.009]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_248.geometry}
          material={materials.chispas}
          position={[0.136, 0.029, -0.343]}
          rotation={[1.555, -0.285, -1.836]}
          scale={[0.015, 0.027, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_249.geometry}
          material={materials.chispas}
          position={[0.218, 0, -0.287]}
          rotation={[1.542, -0.321, -1.838]}
          scale={[0.015, 0.026, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_250.geometry}
          material={materials.chispas}
          position={[0.223, -0.011, -0.351]}
          rotation={[1.626, -0.272, -1.631]}
          scale={[0.019, 0.034, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_251.geometry}
          material={materials.chispas}
          position={[0.313, -0.051, -0.389]}
          rotation={[1.647, -0.24, -1.567]}
          scale={[0.02, 0.035, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_252.geometry}
          material={materials.chispas}
          position={[0.388, -0.083, -0.25]}
          rotation={[1.695, -0.278, -1.423]}
          scale={[0.012, 0.022, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_253.geometry}
          material={materials.chispas}
          position={[0.34, -0.061, -0.345]}
          rotation={[1.701, -0.23, -1.39]}
          scale={[0.014, 0.026, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_254.geometry}
          material={materials.chispas}
          position={[0.483, -0.117, -0.345]}
          rotation={[1.487, -0.215, -1.604]}
          scale={[0.017, 0.03, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_255.geometry}
          material={materials.chispas}
          position={[0.55, -0.151, -0.231]}
          rotation={[1.568, -0.227, -1.316]}
          scale={[0.013, 0.023, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_256.geometry}
          material={materials.chispas}
          position={[0.526, -0.156, -0.081]}
          rotation={[1.715, -0.399, -1.349]}
          scale={[0.018, 0.032, 0.009]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_257.geometry}
          material={materials.chispas}
          position={[0.597, -0.185, -0.121]}
          rotation={[1.596, -0.235, -1.225]}
          scale={[0.018, 0.032, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_258.geometry}
          material={materials.chispas}
          position={[0.618, -0.184, -0.165]}
          rotation={[1.608, -0.212, -1.155]}
          scale={[0.018, 0.032, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_259.geometry}
          material={materials.chispas}
          position={[0.661, -0.216, -0.065]}
          rotation={[1.639, -0.204, -1.033]}
          scale={[0.013, 0.023, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_260.geometry}
          material={materials.chispas}
          position={[0.701, -0.206, -0.176]}
          rotation={[1.6, -0.194, -1.161]}
          scale={[0.012, 0.021, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_261.geometry}
          material={materials.chispas}
          position={[0.594, -0.205, 0.004]}
          rotation={[1.529, -0.328, -1.499]}
          scale={[0.019, 0.033, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_262.geometry}
          material={materials.chispas}
          position={[0.184, 0.097, -0.216]}
          rotation={[0.606, 0.041, 3.106]}
          scale={[0.014, 0.016, 0.012]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_263.geometry}
          material={materials.chispas}
          position={[0.106, 0.098, -0.21]}
          rotation={[0.989, -0.076, -3.024]}
          scale={[0.014, 0.023, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_264.geometry}
          material={materials.chispas}
          position={[0.274, 0.045, -0.218]}
          rotation={[-0.167, -0.107, -0.024]}
          scale={[0.018, 0.013, 0.018]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_265.geometry}
          material={materials.chispas}
          position={[0.213, 0.025, -0.237]}
          rotation={[1.102, -0.309, -2.598]}
          scale={[0.016, 0.027, 0.009]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_266.geometry}
          material={materials.chispas}
          position={[0.368, -0.063, -0.204]}
          rotation={[1.382, -0.461, -2.008]}
          scale={[0.015, 0.025, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_267.geometry}
          material={materials.chispas}
          position={[0.58, -0.104, -0.009]}
          rotation={[-1.07, -0.62, -0.915]}
          scale={[0.016, 0.023, 0.011]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_268.geometry}
          material={materials.chispas}
          position={[0.53, -0.127, -0.038]}
          rotation={[-0.918, -0.712, -0.843]}
          scale={[0.013, 0.016, 0.011]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_269.geometry}
          material={materials.chispas}
          position={[0.46, -0.114, -0.139]}
          rotation={[1.517, -0.505, -1.713]}
          scale={[0.019, 0.032, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_270.geometry}
          material={materials.chispas}
          position={[0.536, -0.163, -0.05]}
          rotation={[1.687, -0.476, -1.38]}
          scale={[0.016, 0.027, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_271.geometry}
          material={materials.chispas}
          position={[0.634, -0.225, 0.263]}
          rotation={[-1.538, -0.517, -1.48]}
          scale={[0.013, 0.023, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_272.geometry}
          material={materials.chispas}
          position={[0.351, 0.017, -0.113]}
          rotation={[1.604, -0.289, -1.258]}
          scale={[0.017, 0.031, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_273.geometry}
          material={materials.chispas}
          position={[0.354, 0.027, -0.181]}
          rotation={[1.43, -0.26, -1.773]}
          scale={[0.018, 0.032, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_274.geometry}
          material={materials.chispas}
          position={[0.428, -0.011, -0.13]}
          rotation={[1.561, -0.263, -1.365]}
          scale={[0.017, 0.031, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_275.geometry}
          material={materials.chispas}
          position={[0.439, -0.051, 0.011]}
          rotation={[1.686, -0.251, -0.977]}
          scale={[0.015, 0.027, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_276.geometry}
          material={materials.chispas}
          position={[0.496, -0.05, -0.058]}
          rotation={[1.65, -0.227, -1.039]}
          scale={[0.016, 0.028, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_277.geometry}
          material={materials.chispas}
          position={[0.48, -0.076, 0.049]}
          rotation={[1.716, -0.21, -0.818]}
          scale={[0.013, 0.024, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_278.geometry}
          material={materials.chispas}
          position={[0.433, -0.09, 0.143]}
          rotation={[1.668, -0.347, -1.164]}
          scale={[0.015, 0.026, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_279.geometry}
          material={materials.chispas}
          position={[0.631, -0.131, 0.101]}
          rotation={[1.417, -0.401, -1.816]}
          scale={[0.016, 0.028, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_280.geometry}
          material={materials.chispas}
          position={[0.619, -0.142, 0.16]}
          rotation={[1.706, -0.166, -0.734]}
          scale={[0.015, 0.028, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_281.geometry}
          material={materials.chispas}
          position={[0.512, -0.152, 0.246]}
          rotation={[1.767, -0.134, -0.501]}
          scale={[0.013, 0.023, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_282.geometry}
          material={materials.chispas}
          position={[0.516, -0.166, 0.283]}
          rotation={[1.772, -0.113, -0.426]}
          scale={[0.019, 0.034, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_283.geometry}
          material={materials.chispas}
          position={[0.426, -0.213, 0.436]}
          rotation={[1.819, -0.142, -0.444]}
          scale={[0.017, 0.031, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_284.geometry}
          material={materials.chispas}
          position={[0.666, -0.215, 0.376]}
          rotation={[1.639, -0.414, -1.307]}
          scale={[0.015, 0.026, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_285.geometry}
          material={materials.chispas}
          position={[0.263, -0.24, 0.577]}
          rotation={[-1.611, -0.126, -2.145]}
          scale={[0.019, 0.034, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_286.geometry}
          material={materials.chispas}
          position={[0.279, -0.23, 0.59]}
          rotation={[-1.796, -0.553, -1.954]}
          scale={[0.016, 0.026, 0.009]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_287.geometry}
          material={materials.chispas}
          position={[0.2, -0.244, 0.632]}
          rotation={[-1.579, -0.064, -2.058]}
          scale={[0.012, 0.022, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_288.geometry}
          material={materials.chispas}
          position={[0.175, -0.24, 0.729]}
          rotation={[-1.604, -0.106, -2.156]}
          scale={[0.015, 0.027, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_289.geometry}
          material={materials.chispas}
          position={[0.191, -0.233, 0.747]}
          rotation={[-1.774, -0.328, -2.225]}
          scale={[0.014, 0.024, 0.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_290.geometry}
          material={materials.chispas}
          position={[0.21, -0.246, 0.572]}
          rotation={[-1.578, -0.041, -2.104]}
          scale={[0.012, 0.022, 0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_291.geometry}
          material={materials.chispas}
          position={[0.322, -0.212, 0.53]}
          rotation={[-2.223, -0.895, -2.174]}
          scale={[0.013, 0.014, 0.012]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_292.geometry}
          material={materials.chispas}
          position={[0.299, -0.189, 0.642]}
          rotation={[-1.853, -0.669, -1.907]}
          scale={[0.012, 0.018, 0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_293.geometry}
          material={materials.chispas}
          position={[0.367, -0.157, 0.51]}
          rotation={[-1.463, -0.534, -1.364]}
          scale={[0.013, 0.021, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_294.geometry}
          material={materials.chispas}
          position={[0.347, -0.176, 0.525]}
          rotation={[-1.517, -0.555, -1.459]}
          scale={[0.017, 0.029, 0.009]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_295.geometry}
          material={materials.chispas}
          position={[0.387, -0.141, 0.45]}
          rotation={[-1.4, -0.566, -1.216]}
          scale={[0.015, 0.025, 0.009]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_296.geometry}
          material={materials.chispas}
          position={[0.413, -0.056, 0.215]}
          rotation={[-1.459, -0.829, -1.615]}
          scale={[0.018, 0.024, 0.014]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_297.geometry}
          material={materials.chispas}
          position={[0.369, 0, 0.075]}
          rotation={[0.196, -1.095, -2.927]}
          scale={[0.012, 0.009, 0.012]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_298.geometry}
          material={materials.chispas}
          position={[0.246, 0.118, -0.045]}
          rotation={[0.781, -0.518, -2.594]}
          scale={[0.017, 0.021, 0.015]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chispas_299.geometry}
          material={materials.chispas}
          position={[0.154, 0.143, -0.091]}
          rotation={[1.253, -0.413, -2.271]}
          scale={[0.015, 0.025, 0.008]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chispas_300.geometry}
        material={materials.chispas}
        position={[0, 2.762, 0]}
        scale={[0.047, 0.085, 0.047]}
      />
    </group>
  )
}

useGLTF.preload('/cupcake.gltf')

export default () => {
    return (
      <>
        <Stage>
          <Cupcake/>
          <OrbitControls maxZoom={50} />
        </Stage>
      </>
    );
  };