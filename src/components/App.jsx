import React from 'react';
import NavBar from '../containers/NavBar';
import Header from './sections/Header';
import About from './sections/About';
import Tech from './sections/Tech';
import Contact from './sections/Contact';


const App = () => {
    return (
        <div className = "spa-theme">
            <NavBar />
            <Header />
            <About />
            <Tech />
            <Contact />
        </div>
    );
};

export default App;