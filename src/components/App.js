import {useState} from 'react';
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
  console.log(data);
  const projectsData = data.slice(1, data.length + 1);
  const textData = data.filter(dat => dat.id==='1');

  return (
    <div className="page">
      <Landing data={data}
      value = {langSelected} 
      handleLangBtn={handleSelectLang} />
      <AboutMe textData={textData} />
      <ProjectsList projectsData={projectsData} />
      <Footer />
    </div>
  );
};
export default App;
