"use client"; // This is a client component
import { useCallback, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

export default function Home() {
  const [state, setState] = useState("");
  return (
    <div className="p-16 mb-40">
      <TypeAnimation
        sequence={[
          `Hi I\'m Josh \n a Senior Software Engineer & Company Director based in Cheltenham.`, // Types 'One'
          1000, // Waits 1s
          () => {
            console.log('Sequence completed'); // Place optional callbacks anywhere in the array
          }
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '3em', whiteSpace: 'pre-line', height: '195px', display: 'block' }}
      />
    </div>
  );
}