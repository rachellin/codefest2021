import logo from './logo.svg';
import './App.css';

import { Container } from './Container';
import { StyledOverlay } from './Style';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>The Game of Life: But You're Poor</h1>
      <Container/>
    </div>
  );
}

export default App;
