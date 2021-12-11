import { useEffect, useState, useRef } from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import { projectData } from './components/projectData';
import ProjectsScroll from './components/ProjectsScroll';
import MobileMenuTop from './components/SideBarMenu/MobileMenuTop';
import SidebarMenuSide from './components/SideBarMenu/SidebarMenuSide';
import TitleCard from './components/TitleCard';
import useElementOnScreen from './hooks/useElementOnScreen';

function App() {

  const [showSideBar, setShowSideBar] = useState(true)
  const [bgColor, setbgColor] = useState('bg-blue-800')

  // const targetRef = useRef(null)
  // const isVisible = useElementOnScreen({
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0
  // }, targetRef)
  
  const toggleSideMenu = () => {
    setShowSideBar(!showSideBar)
  }
  
  
  const scrollRefs = {
    top: useRef(),
    projects: useRef(),
    about: useRef()
  }


  return (
    // <div className="flex flex-col h-screen">
    // <div className="flex-col md:flex"> <-----Original
    <div className="relative min-h-screen md:flex">

      <SidebarMenuSide 
        showSideBar={showSideBar}
        bgColor={bgColor}
        />
      <MobileMenuTop
        showSideBar={showSideBar}
        toggleSideMenu={toggleSideMenu}      
      />

      <section className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory">

        <MainContainer
          title="Kyle Cardwell"
          sectionName="top"
          component={TitleCard}
          scrollRef={scrollRefs.top} 
        />
        <MainContainer
          title="Projects"
          sectionName="projects"
          data={projectData}
          component={ProjectsScroll}
          scrollRef={scrollRefs.projects}
        />
        <MainContainer
          title="About"
          sectionName="about"
          component={TitleCard}
          scrollRef={scrollRefs.about}
        />

      </section>
    </div>
  );
}

export default App;
