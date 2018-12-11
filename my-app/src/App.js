import React from 'react';
import logo from './logo.svg';
import Wrapper from "./components/Wrapper";
import './App.css';
import Card from "./components/Card";
import images from "./images.json";

const App = () => {
  <Wrapper>
    <Nav>
      <Header />
    </Nav>
    <Card 
      name={images[0].name}
      image={images[0].name}
    />
    <Card 
      name={images[1].name}
      image={images[1].name}
    />
    <Card 
      name={images[2].name}
      image={images[2].name}
    />
  </Wrapper>
};

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
