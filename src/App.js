import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import StoreGallery from './components/StoreGallery';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <StoreGallery />
    </div>
  );
}

export default App;
