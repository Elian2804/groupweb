import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Los Sumisos</h1>
      <main>
        <section class="team-members">
          <div class="member">
            <img src="./src/assets/miembro1.png" alt="Miembro 1" />
            <h2>Miembro 1</h2>
            <p>ELIAN ANDRES BAPTISTA CHAVEZ</p>
            <a href="https://www.facebook.com/anders.ludwin.7">Leer más</a>
          </div>
          <div class="member">
            <img src="./src/assets/miembro1.png" alt="Miembro 2" />
            <h2>Miembro 2</h2>
            <p>ALVIN ARIEL CAYO QUISPE</p>
            <a href="https://www.facebook.com/alvin.cayoquispe">Leer más</a>
          </div>
          <div class="member">
            <img src="./src/assets/miembro1.png" alt="Miembro 3" />
            <h2>Miembro 3</h2>
            <p>DERIX VENEGAS NOGUERA</p>
            <a href="https://www.facebook.com/profile.php?id=100009277001242">Leer más</a>
          </div>
          <div class="member">
            <img src="./src/assets/miembro1.png" alt="Miembro 4" />
            <h2>Miembro 4</h2>
            <p>ERIC APAZA CALLE</p>
            <a href="https://www.facebook.com/profile.php?id=100007499419346">Leer más</a>
          </div>
          <div class="member">
            <img src="./src/assets/miembro1.png" alt="Miembro 4" />
            <h2>Miembro 4</h2>
            <p>ALVARO SANTIAGO ENCINAS FLORES</p>
            <a href="https://www.facebook.com/alvaro.encinas.5">Leer más</a>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Los Sumisos. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
