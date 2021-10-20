import logo from './logo.svg';
import './App.css';
import { Gallery } from './components/Gallery';


function App() {
  
  return (
    <>
      <h1>Rick y Morty</h1>
      <div className='container'>
        <Gallery></Gallery>
      </div>
    </>
  );
}

export default App;
