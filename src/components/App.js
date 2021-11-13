import '../styles/App.scss';
import Landing from './Landing';
import AboutMe from './AboutMe';
import ProjectsList from './ProjectsList';
import Footer from './Footer';


const App = () => {
  return (
    <div className="page">
      <Landing />
      <AboutMe />
      <ProjectsList />
      <Footer/>
    </div>
  );
};
export default App;
