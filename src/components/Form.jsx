import { useState , useRef } from "react"
import ButtonIcon from "/images/icon-arrow.svg"
import PropTypes from 'prop-types';

export default function Form({ setAge }) {
  const [birth, setBirth] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  const yearsRef = useRef();
  const monthsRef = useRef();
  const daysRef = useRef();

  const [valid, setValid] = useState(false);

  const date = new Date();

  const handleChange = (e, field) => {
    const { value, classList, max, min } = e.target;
    const parsedValue = parseInt(value);
    
    if (value === "" || parsedValue > max || parsedValue < min) {
      classList.add("invalid");
      setValid(false);
    } else {
      classList.remove("invalid");
      setValid(true);
    }
    
    setBirth(prevBirth => ({
      ...prevBirth,
      [field]: parsedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valid) return;
    setAge(birth);
  };

  return (
    <div className="form">
      <div className="Inputs">
        <div className="Age">
          <label htmlFor="Day">Day:</label>
          <input
            ref={daysRef}
            maxLength={2}
            onChange={(e) => handleChange(e, 'days')}
            value={birth.days || ''}
            required
            placeholder="DD"
            type="number"
            name="Day"
            className="ageInput"
            min={1}
            max={31}
          />
          <p
            className="error"
            style={{
              height: daysRef.current && daysRef.current.classList.contains("invalid") ? "100%" : "0%",
              opacity: daysRef.current && daysRef.current.classList.contains("invalid") ? 1 : 0,
            }}
          >
            value is invalid
          </p>
        </div>
        <div>
          <label htmlFor="Month">Month:</label>
          <input
            ref={monthsRef}
            maxLength={2}
            onChange={(e) => handleChange(e, 'months')}
            value={birth.months || ''}
            required
            placeholder="MM"
            type="number"
            name="Month"
            className="ageInput"
            min={1}
            max={12}
          />
          <p
            className="error"
            style={{
              height: monthsRef.current && monthsRef.current.classList.contains("invalid") ? "100%" : "0%",
              opacity: monthsRef.current && monthsRef.current.classList.contains("invalid") ? 1 : 0,
            }}
          >
            value is invalid
          </p>
        </div>
        <div>
          <label htmlFor="Year">Year:</label>
          <input
            ref={yearsRef}
            maxLength={4}
            onChange={(e) => handleChange(e, 'years')}
            value={birth.years || ''}
            required
            placeholder="YYYY"
            type="number"
            name="Year"
            className="ageInput"
            min={1900}
            max={date.getFullYear()}
          />
          <p
            className="error"
            style={{
              height: yearsRef.current && yearsRef.current.classList.contains("invalid") ? "100%" : "0%",
              opacity: yearsRef.current && yearsRef.current.classList.contains("invalid") ? 1 : 0,
            }}
          >
            value is invalid
          </p>
        </div>
      </div>
      <div className="Button">
        <hr className="hr" />
        <button onClick={handleSubmit} className="submitButton">
          <img src={ButtonIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

Form.propTypes = {
  setAge: PropTypes.func.isRequired
}
