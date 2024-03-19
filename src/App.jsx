import Header from "./components/header/header";
import Hero  from "./components/hero/hero";
import Companies from "./components/companies/Companies";
import Resedencies from "./components/Resedencies/Resedencies";
import './App.css';
function App() {
  return (
      <div className="app">
    <div>
    <div className="white-grad"/>
    <Header></Header>
    <Hero></Hero>

    </div>
    <Companies></Companies>
    <Resedencies></Resedencies>  
     </div>
  );
}

export default App;
