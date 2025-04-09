import {useState} from "react";
import "./index.css";
import {Header} from "./components/Header.jsx";
import {Instructions} from "./components/Instructions.jsx";
import {Main} from "./components/Main.jsx";
import {Footer} from "./components/Footer.jsx";


function App() {
    const [showInstructions, setShowInstructions] = useState(false);

    const toggleInstructions = () => {
        setShowInstructions((prev) => !prev);
    };

    return (
        <div className="app">
            <Header showInstructions={showInstructions} toggleInstructions={toggleInstructions}/>
            <Instructions showInstructions={showInstructions}/>
            <Main/>
            <Footer/>
        </div>
    );
}


export default App;
