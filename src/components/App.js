import '../styles/App.scss';
import Landing from './Landing';
import Projects from './Projects';
import AboutMe from './AboutMe';

const App = () => {
  return (
    <div className="page">
     <Landing/>
     <AboutMe/>
     <Projects/>

    </div>
  );
};
export default App;
