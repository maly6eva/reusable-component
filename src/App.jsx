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
        alert('click')
    }
    return (
        <div className="app">
            <Header showInstructions={showInstructions} toggleInstructions={toggleInstructions}/>
            <Instructions showInstructions={showInstructions}/>
            <Main>
                <Section title='Variants'>
                    <Button variant='primary'>Primary</Button>
                    <Button  variant='secondary'>Secondary</Button>
                    <Button  variant='danger'>Danger</Button>
                    <Button  variant='gradient'>Gradient</Button>
                    <Button  variant='outline'>Outline</Button>
                </Section>
                <Section title='Sizes'>
                    <Button  variant='primary' size='large'>Large</Button>
                    <Button  variant='primary'  size='medium'>Medium</Button>
                    <Button  variant='primary'  size='small'>Small</Button>
                </Section>
                <Section title='Button Statets'>
                    <Button isDisabled>Disabled</Button>
                    <Button>Difault</Button>
                </Section>
                <Section title='Full Width Button'>
                    <Button fullWidth>Full Width</Button>
                </Section>
                <Section title='Width Fn' >
                    <Button onClick={handleClick}>Click me</Button>
                </Section>
            </Main>
            <Footer/>
        </div>
    );
}


export default App;
