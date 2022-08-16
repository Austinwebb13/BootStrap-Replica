import './App.css';
import NavBar from './components/NavBar';
import  ImgCard from './components/Card';
import Page from './components/StoreListing';
//import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ImgCard />
      <Page />
    </div>
  );
}

export default App;
