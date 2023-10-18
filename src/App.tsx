import './App.css';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Price from './components/Price';
import Slider from './components/Slider';
import Describe from './components/Discribe';
import Contacts from './components/Contacts';

function App() {

    return (
        <div className="App">
            <Header />
            <Slider />
            <Describe />
            <Gallery />
            <Price />
            <Contacts />
        </div>
    );
}

export default App;
