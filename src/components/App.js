import {useState} from 'react';
import { Link } from 'react-scroll';
import '../styles/App.scss';
import datasp from '../services/datasp.json';
import dataen from '../services/dataen.json';
import Landing from './Landing';
import AboutMe from './AboutMe';
import ProjectsList from './ProjectsList';
import Footer from './Footer';

const App = () => {
  const [data, setData] = useState(datasp);
  const [langSelected, setLangSelected] = useState();

  
  const handleSelectLang = (value) => {
    setLangSelected(value);
    if(value==='dataen'){
      setData([...dataen])
     }else{
       setData([...datasp])
     }
  };

  return (
    <div className="page">
      <Landing data={data}
      value = {langSelected} 
      handleLangBtn={handleSelectLang} />
      <AboutMe data={data} />
      <ProjectsList data={data} />
      <Link smooth={true} to="header" className="link"> <i class="fa-solid fa-arrow-up scrollup"></i>
      </Link>
      <Footer />
    </div>
  );
};
export default App;
