import { useState } from 'react';
import '../styles/App.scss';
import JSON from '../services/projectsData.json';
import Landing from './Landing';
import AboutMe from './AboutMe';
import ProjectsList from './ProjectsList';

const App = () => {
  const [projects, setprojects] = useState(JSON);

  return (
    <div className="page">
      <Landing />
      <AboutMe />
      <ProjectsList data={projects} />
    </div>
  );
};
export default App;
