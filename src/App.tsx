import './App.css';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Price from './components/Price';
import Slider from './components/Slider';
import Describe from './components/Discribe';
import Contacts from './components/Contacts';
import SecondSlider from './components/Seconds Slider';
import { useState, useEffect } from 'react';

function App() {

    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);


    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="App">
            <Header />

            {windowWidth >= 768 ? (
                <Slider />
            ) : (
                <SecondSlider />
            )}

            <Describe />
            <Gallery />
            <Price />
            <Contacts />
        </div>
    );
}

export default App;
