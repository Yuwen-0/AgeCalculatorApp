import './App.css'
import Main from './components/Main.jsx';
import Form from './components/Form';
import Solution from './components/Solution';
import { useState ,useEffect} from 'react';
function App() {
  const [age, setAge] = useState({ years: '--', months: '--', days: '--' });

  useEffect(() => {
    if(!age.years) return;
    const date = new Date();
    setAge(prev => ({
      years: date.getFullYear() - prev.years,
      months: date.getMonth() - prev.months,
      days: date.getDate() - prev.days
    }));
  }, []);

  return (
    <>
      <Main>
        <Form setAge={setAge} />
        <Solution {...age} />
      </Main>
    </>
  );
}

export default App
