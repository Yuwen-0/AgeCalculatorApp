import './App.css'
import Main from './components/Main.jsx';
import Form from './components/Form';
import Solution from './components/Solution';
import { useState } from 'react';
function App() {
  const [age, setAge] = useState({ years: '--', months: '--', days: '--' });
  const date = new Date();

  const birthAge = calculateAge(date, age);
  
  return (
    <>
      <Main>
        <Form setAge={setAge} />
        <Solution {...birthAge} />
      </Main>
    </>
  );
}

function calculateAge(date, age) {
  let years = date.getFullYear() - age.years;
  let months = date.getMonth() + 1 - age.months;
  let days = date.getDate() - age.days;

  if (days < 0) {
    months--;
    const daysInPreviousMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    days = daysInPreviousMonth + days;
  }
  if (months < 0) {
    years--;
    months = 12 + months;
  }

  return {
    years,
    months,
    days,
  };
}

export default App
