// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// ---------------------------------------------

// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [boxColor, setBoxColor] = useState('#cccccc');

//   const changeColor = (color) => {
//     setBoxColor(color);
//   };

//   return (
//     <div className="app-container">
//       <h1>Cambia el color de la caja</h1>
      
//       <div 
//         className="color-box"
//         style={{ 
//           backgroundColor: boxColor,
//           width: '200px',
//           height: '200px',
//           margin: '20px auto',
//           border: '1px solid #000'
//         }}
//       ></div>
      
//       <div className="buttons-container">
//         <button onClick={() => changeColor('#ff0000')}>Rojo</button>
//         <button onClick={() => changeColor('#0000ff')}>Azul</button>
//         <button onClick={() => changeColor('#00ff00')}>Verde</button>
//         <button onClick={() => changeColor('#cccccc')}>Reiniciar</button>
//       </div>
//     </div>
//   );
// }

// export default App;


import { useState } from 'react';
import './App.css';
import DogBreedSearch from './components/DogBreedSearch';

function App() {
  const [boxColor, setBoxColor] = useState('#cccccc');

  const changeColor = (color) => {
    setBoxColor(color);
  };

  return (
    <div className="app-container">
      {/* Sección de cambio de color */}
      <div className="color-section">
        <h1>Cambia el color de la caja</h1>
        <div 
          className="color-box"
          style={{ 
            backgroundColor: boxColor,
            width: '200px',
            height: '200px',
            margin: '20px auto',
            border: '1px solid #000'
          }}
        ></div>
        <div className="buttons-container">
          <button onClick={() => changeColor('#ff0000')}>Rojo</button>
          <button onClick={() => changeColor('#0000ff')}>Azul</button>
          <button onClick={() => changeColor('#00ff00')}>Verde</button>
          <button onClick={() => changeColor('#cccccc')}>Reiniciar</button>
        </div>
      </div>

      {/* Sección de perros */}
      <DogBreedSearch />
    </div>
  );
}

export default App;