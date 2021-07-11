import PokeImage from "./components/PokeImage";
import "./App.css";
import { useState } from "react";

function App() {
  const [pokemonIngresado, setPokemonIngresado] = useState("Ingresa tu pokemon");
  const [image, setImage] = useState("");

  const url = "https://pokeapi.co/api/v2/pokemon/";

  const getPoke = () => {
    fetch(url + pokemonIngresado ,{
        
    })
      .then((res) => res.json())
      .then((data) => setImage(data.sprites.front_default))
      .catch(
        setImage(
          "https://weakwifisolutions.com/wp-content/uploads/2019/08/error-red-cross-7.png?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-2"
        )
      );
  };

  const handleInput = (evento) => setPokemonIngresado(evento.target.value.toLowerCase());

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <PokeImage image={image} />
      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          getPoke();
        }}
      >
        <p>{pokemonIngresado}</p>
        <input type="text" onChange={handleInput} />
      </form>
    </div>
  );
}

export default App;
