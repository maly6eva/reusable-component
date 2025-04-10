import {useState} from "react";
import "./index.css";
import {Header} from "./components/Header.jsx";
import {Instructions} from "./components/Instructions.jsx";
import {Main} from "./components/Main.jsx";
import {Footer} from "./components/Footer.jsx";
import {Section} from "./components/Section.jsx";
import {Button} from "./components/Button.jsx";


function App() {
    const [showInstructions, setShowInstructions] = useState(false);

    const toggleInstructions = () => {
        setShowInstructions((prev) => !prev);
    };


    function handleClick() {
        alert('ksik')
    }
    return (
        <div className="app">
            <Header showInstructions={showInstructions} toggleInstructions={toggleInstructions}/>
            <Instructions showInstructions={showInstructions}/>
            <Main>
                <Section ></Section>
                <Section>
                    <Button onClick={handleClick} fullWidth>Ksenia</Button>
                    <Button isDisabled>Valery</Button>
                    <Button variant='secondory'> Dima</Button>
                    <Button variant='secondory' size={'large'}> Dima</Button>
                </Section>
                <Section>
                    <Button></Button>
                    <Button></Button>
                    <Button></Button>
                </Section>
            </Main>
            <Footer/>
        </div>
    );
}


export default App;
