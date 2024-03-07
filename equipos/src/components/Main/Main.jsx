import { useState } from "react";
import "./Main.css"; // Importar archivo CSS

const Main = () => {
  const [jugadores, setJugadores] = useState("");
  const [numEquipos, setNumEquipos] = useState(2); // Por defecto 2 equipos
  const [equipos, setEquipos] = useState([]);

  const handleInputChange = (event) => {
    setJugadores(event.target.value);
  };

  const handleNumEquiposChange = (event) => {
    setNumEquipos(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const jugadoresArray = jugadores
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    // Calcular cuántos jugadores debe tener cada equipo
    const jugadoresPorEquipo = Math.floor(jugadoresArray.length / numEquipos);
    let jugadoresExtras = jugadoresArray.length % numEquipos; // Jugadores sobrantes

    // Mezclar aleatoriamente el array de jugadores
    const jugadoresMezclados = shuffleArray(jugadoresArray);

    // Repartir jugadores en equipos
    const equiposTemp = Array.from({ length: numEquipos }, () => []);

    let jugadorIndex = 0;
    for (let i = 0; i < numEquipos; i++) {
      let actualJugadoresPorEquipo = jugadoresPorEquipo;
      if (jugadoresExtras > 0) {
        actualJugadoresPorEquipo++;
        jugadoresExtras--;
      }
      for (let j = 0; j < actualJugadoresPorEquipo; j++) {
        if (jugadorIndex < jugadoresMezclados.length) {
          equiposTemp[i].push(jugadoresMezclados[jugadorIndex]);
          jugadorIndex++;
        }
      }
    }

    setEquipos(equiposTemp);
  };

  // Función para mezclar aleatoriamente un array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <h2 className="title">INTRODUCE LOS JUGADORES POR LÍNEA</h2>
          <textarea
            className="form-control"
            name="jugadores"
            value={jugadores}
            onChange={handleInputChange}
            cols="50"
            rows="10"
            placeholder="Escribe el nombre de los jugadores, uno por línea"
          ></textarea>
        </div>
        <div className="form-group">
          <span className="num-label">Selecciona el número de equipos:</span>
          {[2, 3, 4, 5, 6, 7, 8].map((num) => (
            <label key={num} className="radio-label">
              <input
                type="radio"
                name="numEquipos"
                value={num}
                checked={numEquipos === num}
                onChange={handleNumEquiposChange}
                className="radio-input"
              />
              <span className="radio-custom"></span>
              {num}
            </label>
          ))}
        </div>
        <div className="form-group">
          <button type="submit" className="btn-submit">
            Enviar
          </button>
        </div>
      </form>

      <div className="equipos">
        {equipos.map((equipo, index) => (
          <div key={index} className="equipo">
            <h3>Equipo {index + 1}</h3>
            <ul className="jugadores">
              {equipo.map((jugador, jugadorIndex) => (
                <li key={jugadorIndex}>{jugador}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
