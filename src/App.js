import { useEffect, useState } from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import { projectData } from './components/projectData';
import ProjectsScroll from './components/ProjectsScroll';
import MobileMenuTop from './components/SideBarMenu/MobileMenuTop';
import SidebarMenuSide from './components/SideBarMenu/SidebarMenuSide';
import TitleCard from './components/TitleCard';
import * as Scroll from 'react-scroll'

function App() {

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

        <MainContainer
          title="Kyle Cardwell"
          sectionName="Top"
          component={TitleCard}
        />
        <MainContainer
          title="Projects"
          sectionName="Projects"
          data={projectData}
          component={ProjectsScroll}
        />
        <MainContainer
          title="About"
          sectionName="About"
          component={TitleCard}
        />

      </section>
    </div>
  );
}

export default App;
