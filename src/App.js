import { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import './App.css';
import AboutCard from './components/AboutCard';
import MainContainer from './components/MainContainer';
import { projectData } from './components/projectData';
import ProjectsScroll from './components/ProjectsScroll';
import MobileMenuTop from './components/SideBarMenu/MobileMenuTop';
import SidebarMenuSide from './components/SideBarMenu/SidebarMenuSide';
import TitleCard from './components/TitleCard';

function App(props) {

  const [showSideBar, setShowSideBar] = useState(true)
  
  const toggleSideMenu = () => {
    setShowSideBar(!showSideBar)
  }  
  
  const scrollRefs = {
    top: useRef(),
    projects: useRef(),
    about: useRef()
  }


  return (

    <div className="relative min-h-screen md:flex font-sans">

      <SidebarMenuSide 
        showSideBar={showSideBar}
        toggleSideMenu={toggleSideMenu}
        colors={props.colorScheme}
        />

      <MobileMenuTop
        showSideBar={showSideBar}
        toggleSideMenu={toggleSideMenu}
        colors={props.colorScheme}      
      />

      <section className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory">

        <MainContainer
          title="Kyle Cardwell"
          sectionName="top"
          component={TitleCard}
          scrollRef={scrollRefs.top}
          colors={{
            textColor: 'yellow-400',
            background: 'gray-700'
          }}
        />
        <MainContainer
          title="Projects"
          sectionName="projects"
          data={projectData}
          component={ProjectsScroll}
          scrollRef={scrollRefs.projects}
          colors={{
            textColor: 'emerald-900',
            background: 'emerald-300'
          }}
        />
        <MainContainer
          title="About Me"
          sectionName="about"
          component={AboutCard}
          scrollRef={scrollRefs.about}
          colors={{
            textColor: 'lime-400',
            background: 'sky-800', 
          }}
        />

      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return({
    colorScheme: state.colorScheme
  })
}

export default connect(mapStateToProps)(App);
