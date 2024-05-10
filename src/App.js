// import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <h1>domashka_1_month_4</h1>
            <Content/>
            <Footer/>
        </div>
    );
}


function Header () {
    return (
        <div>
            <h2> header component</h2>
            <p>Lorem ipsum dolor sit</p>
            <Title/>
        </div>

    )
}

function Footer() {
    return (
        <>
            <h3>footer component</h3>
            <p>Lorem ipsum dolor.</p>
            <Title/>
        </>

    )
}

function Content() {
    return (
        <>
            <h4>content component</h4>
            <p>Lorem ipsum dolor.</p>
            <Title/>
        </>

    )
}
function Title () {
    return (
        <>
            <h5>i am title </h5>
        </>

    )
}
export default App;
