import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Cupcake from "./components/cupcake/Cupcake";
import Cupcake2 from "./components/cupcake/Cupcake2";
import { useState } from "react";
import FlavorOpt from "./components/FlavorOpt";
import Switch from "./components/Switch";
import Button from "./components/Button";

function App() {
  const [selectedOption, setSelectedOption] = useState("chocolate");
  const [IscreamFilling, setIscreamFilling] = useState(true);
  const [IscherryPearl, setIscherryPearl] = useState(true);

  const flavors = {
    chocolate: "chocolate",
    limon: "Lemon",
    zanahoria: "Carrot",
  };
  console.log(
    Object.entries(flavors).find(
      ([key, value]) => value === selectedOption
    )?.[0]
  );
  return (
    <>
      <div className="container__app">
        <h2 className="title__app">CUPCAKE</h2>
        <section className="container__canvas">
          <Canvas camera={{ position: [1, 1.5, 100], fov: 15 }}>
            <Cupcake2
              flavor={selectedOption}
              isCreamFilling={IscreamFilling}
              IscherryPearl={IscherryPearl}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 5]} color="#fff" />
          </Canvas>
        </section>
        <h4 className="title__Flavor">FLAVOR</h4>
        <section className="container__flavors__opt">
          <FlavorOpt
            key={flavors.chocolate}
            label={flavors.chocolate}
            checked={selectedOption === flavors.chocolate}
            setSelectedOption={setSelectedOption}
          />
          <FlavorOpt
            key={flavors.limon}
            label={flavors.limon}
            checked={selectedOption === flavors.limon}
            setSelectedOption={setSelectedOption}
            emoji="🍋"
          />
          <FlavorOpt
            key={flavors.zanahoria}
            label={flavors.zanahoria}
            checked={selectedOption === flavors.zanahoria}
            setSelectedOption={setSelectedOption}
            emoji="🥕"
          />
        </section>
        <section className="switch__container">
          <h4 className="title__Flavor title__cream">CHERRY PEARL</h4>
          <Switch
            id="CherryPearl" // Otro ID único
            setState={setIscherryPearl}
            checked={IscherryPearl}
          />
        </section>
        <section className="switch__container">
          <h4 className="title__Flavor title__cream">
            PISTACHIO CREAM FILLING
          </h4>
          <Switch
            id="PistachioCream" // ID único
            setState={setIscreamFilling}
            checked={IscreamFilling}
          />
        </section>
        <Button
          flavor={
            Object.entries(flavors).find(
              ([key, value]) => value === selectedOption
            )?.[0]
          }
          cherryPearl={IscherryPearl}
          creamFilling={IscreamFilling}
          emoji={selectedOption===flavors.limon?"🍋":selectedOption === flavors.zanahoria?"🥕":"🍫"}
        />
      </div>
    </>
  );
}

export default App;
