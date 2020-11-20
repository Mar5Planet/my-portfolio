import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Info from './components/Info'
import './App.scss';
import "antd/dist/antd.css";
import ProjectsContainer from './containers/ProjectsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import DemoMod from './components/DemoMod';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Load from '././components/Load';

function App() {
  const[modal, setModal] = useState('')
  const [visibleMod] = useState(true)
  const [showPage, setShowPage] = useState(false)
  const projects = [
    
    {
      "id": 3,
      "name": "GadgetWiz",
      "logo": 'https://i.ibb.co/Mf9fwnv/gadget-wiz.gif',
      "description": 'Windows 95 Replica',
      "demo": 'https://player.vimeo.com/video/480358304',
      "repo": 'https://github.com/Mar5Planet/gadget-wiz',
      "framework": ['React', 'SCSS', 'React 95', 'Ruby on Rails', 'PostgreSQL'],
      "demoDesc": 'GadgetWiz is a React replica of a Windows 95 UI. The application, built with a Rails API, allows users to utilize the Desktop as their personal Dashboard. Users can create their own Gadgets (such as a text, image, or folder) and customize their dashboard to their needs.'
    },
    {
      "id": 5,
      "name": "Greenvy",
      "logo": 'https://i.ibb.co/KGy97RT/greenvy-logo.png',
      "description": 'Sustainability & Engagement',
      "demo": 'https://player.vimeo.com/video/480358554',
      "repo": 'https://github.com/Mar5Planet/Greenvy-Frontend/',
      "framework": ['React', 'Bootstrap', 'SCSS', 'Antd', 'Ruby on Rails', 'PostgreSQL'],
      "demoDesc": "Greenvy is an environmental, interactive platform built with a React frontend and a Ruby on Rails API backend. The application includes a custom-built Footprint calculator that utilizes different metrics that affect carbon emissions. Once a user is signed up, they will have the option to participate in community-based sustainability events. Once a user has participated in the event and the organizer of the event approves the user's attendance, they will earn engagement points which will increase their Greenvy Score. The application also includes various dashboard items customized to the user's carbon footprint and selected preferences. The purpose of the application is to increase environmental involvement with a social media and networking aspect."
    },
    {
      "id": 6,
      "name": "Frontend Mentor Design",
      "logo": 'https://i.ibb.co/6sR2xvh/frontend-mentor1.png',
      "description": 'Responsive Design',
      "demo": 'https://player.vimeo.com/video/480357934',
      "repo": 'https://github.com/Mar5Planet/frontend-mentor/',
      "framework": ['Javascript', 'CSS', 'HTML', 'Bootstrap'],
      "demoDesc": "Frontend Mentor Design challenges are created to test a developer's responsive website design capabilities. The wireframe and application attributes are provided by the Frontend Mentor UI/UX team. The goal of the developer is to create a live version of the web-application wireframes. The purpose of this demo is to showcase my responsive and functional design skills. All applications are built with Vanilla Javascript, CSS, and HTML."
    },
    {
      "id": 4,
      "name": 'Credifier',
      "logo": 'https://i.ibb.co/16yjpvH/credifier.png',
      "description": 'News Review & Social Networking',
      "demo": 'https://player.vimeo.com/video/480357637',
      "repo": 'https://github.com/Mar5Planet/Credifier-frontend',
      "framework": ['Javscript', 'CSS', 'HTML', 'News API', 'Ruby on Rails'],
      "demoDesc": "Credifier is a collaborative accredited journalist community with the purpose of meditating fake news. The application, built with Javascript and Ruby on Rails, pulls in popular and recent articles from various news outlets utilizing the News API. The application allows accredited journalists to peer review the articles. The Credifier user has the capability to increment a review based on credibility. Each user has their crediability score that is dependant on the rating of their reviews."
    },
    {
      "id": 2,
      "name": 'Groupie',
      "logo": 'https://i.ibb.co/QN93pX6/groupie-logo.png',
      "description": 'Social Media & Music',
      "demo":  'https://player.vimeo.com/video/480359223',
      "repo": 'https://github.com/Mar5Planet/groupies-ruby-spotify-api',
      "framework": ['PostgreSQL', 'CSS', 'HTML', 'Ruby on Rails', 'Spotify API'],
      "demoDesc": 'Groupie is a Ruby on Rails backend application that utilizes the Spotify API. As a community-based platform, Groupie allows users to join and create various music genre groups, add music to the groups, and engage in musical discussion. Groupie songs are directly linked to Spotify, which allows users to favorite and add it to their Spotify playlists.'
    },
    {
    "id": 1,
    "name": 'Fitbud CLI',
    "logo": "https://i.ibb.co/SyPtRYm/FitBud-2.png",
    "description": "Diet & Lifestyle",
    "demo": "https://player.vimeo.com/video/480357764",
    "repo": 'https://github.com/Mar5Planet/ruby-CLI-edamam/tree/main',
    "framework": ['Ruby', 'Edamam API', 'PostgreSQL'],
    "demoDesc": "Fitbud is a full backend Ruby Command Line application that allows users to find recipes based on their dietary preferences, allergies, and BMR. The application calculates a user's BMR based on their information, prompts users to input their dietary preferences/allergies, and returns many meal recipes for the user."
  }, 
  ]

  const renderVidContainer = (project) => {
    setModal(<DemoMod setVisible={setModal} visible={visibleMod} project={project}/>)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 5 second!')
      setShowPage(true)
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {showPage?
      <div> 
      <Header />
      <Info /> 
      {modal}
      <ProjectsContainer renderVid={renderVidContainer} projects={projects}/> 
      </div> : <Load />}
    </>
  );
}

export default App;
