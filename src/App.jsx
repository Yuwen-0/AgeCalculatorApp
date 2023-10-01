import './App.css'
import Main from './components/Main.jsx';
import Form from './components/Form';
import Solution from './components/Solution';
import { useState , useEffect} from 'react';
function App() {
  const [age, setAge] = useState({ years: '--', months: '--', days: '--' });
  const date = new Date();

  const birthAge = { years: 0, months: 0, days: 0 };
  function calculateAge() {
    let fullYears = date.getFullYear() - age.years;
    let fullMonths;
    if(date.getMonth() + 1 < age.months){
      fullYears--;
      fullMonths = date.getMonth() + 1 + 12 - age.months;
    }else{
      fullMonths = date.getMonth() + 1 - age.months;
    }
    let fullDays; 
    if(date.getDay() < age.days){
      fullMonths--;
      fullDays = date.getDay() + 30 - age.days;
    }else{
      fullDays = date.getDay() - age.days;
    }
    if(fullMonths < 0){
      fullYears--;
      fullMonths = 12 + fullMonths;
    }
    if(fullDays < 0){
      fullMonths--;
      fullDays = 30 + fullDays;
    }
    birthAge.years = fullYears;
    birthAge.months = fullMonths;
    birthAge.days = fullDays;
  }

  calculateAge();
  return (
    <>
      <Main>
        <Form setAge={setAge} />
        <Solution {...birthAge} />
      </Main>
    </>
  );
}

export default App
