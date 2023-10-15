//import logo from './logo.svg';
import './App.css';
// import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/header';
import TopContainer from './Components/TopContainer/topcontainer';
import Skillcontainer from './Components/SkillContainer/skillcontainer';
import Projects from './Components/ProjectContainer/project';
import ExperinceContainer from './Components/ExperinceContainer/experincecontaniner'
import Contact from './Components/Contact/contact'


function App() {
  return (
    <div className="App">
      <Header />
      <TopContainer />

      <Skillcontainer />
      <Projects />
      <ExperinceContainer />
      <Contact />






    </div>
  );
}

export default App;
