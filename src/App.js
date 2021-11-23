import './App.css';
import InfoCard from './components/InfoCard';
import MainContainer from './components/MainContainer';
import NavBar from './components/NavBarTW.js';
import { projectData } from './components/projectData';

function App() {
  return (
    <div className="flex flex-col h-screen">

      <NavBar />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <section className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory">

        {/* <MainContainer
          title="Kyle Cardwell"
          sectionName="top"
        /> */}
        <MainContainer
          title="Projects"
          sectionName="Projects"
          data={projectData}
        />
        {/* <MainContainer
          title="About"
          sectionName="About"
        /> */}

      </section>
    </div>
  );
}

export default App;
