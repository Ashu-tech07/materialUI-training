import './App.css';
import Accordian from './components/Accordian';
import Footer from './components/Footer';
import Header from './components/Header';
import Page from './components/Page';


function App() {
  return (
    <div className="App">
      <Header/>
      <Accordian/>
      <Page/>
      <Footer/>
    </div>
  );
}

export default App;
