import '../styles/App.scss';
import Landing from './Landing';
import AboutMe from './AboutMe';
import ProjectsList from './ProjectsList';

const App = () => {
  return (
    <div className="page">
      <Landing />
      <AboutMe />
      <ProjectsList />
    </div>
  );
};
export default App;
