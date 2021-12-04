import { useState } from 'react';
import './App.css';
// import InfoCard from './components/InfoCard';
import MainContainer from './components/MainContainer';
// import NavBar from './components/NavBarTW.js';
import { projectData } from './components/projectData';
import ProjectsScroll from './components/ProjectsScroll';
// import SidebarMenu from './components/SidebarMenu';
import MobileMenuTop from './components/SideBarMenu/MobileMenuTop';
import SidebarMenuSide from './components/SideBarMenu/SidebarMenuSide';

function App() {

  // const sidebar = document.querySelector('.sidebar')

  const [showSideBar, setShowSideBar] = useState(true)

  const toggleSideMenu = () => {
    setShowSideBar(!showSideBar)
  }


  return (
    // <div className="flex flex-col h-screen">
    // <div className="flex-col md:flex"> <-----Original
    <div className="relative min-h-screen md:flex">

      <SidebarMenuSide 
        showSideBar={showSideBar}
        />
      <MobileMenuTop
        showSideBar={showSideBar}
        toggleSideMenu={toggleSideMenu}      
      />

      <section className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory">

        {/* <MainContainer
          title="Kyle Cardwell"
          sectionName="top"
          component={""}
        /> */}
        <MainContainer
          title="Projects"
          sectionName="Projects"
          data={projectData}
          component={ProjectsScroll}
        />
        {/* <MainContainer
          title="About"
          sectionName="About"
          component={""}
        /> */}

      </section>
    </div>
  );
}

export default App;
