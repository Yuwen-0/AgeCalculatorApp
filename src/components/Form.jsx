import { useState } from "react"
import ButtonIcon from "/images/icon-arrow.svg"
import PropTypes from 'prop-types';
export default function Form({ setAge }) {
  const [birth, setBirth] = useState({
    years: 0,
    months: 0,
    days: 0,
  });
  const date = new Date();

  const handleChange = (e, field) => {
    setBirth({
      ...birth,
      [field]: parseInt(e.target.value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAge(birth);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="Inputs">
        <div>
          <label htmlFor="Day">Day:</label>
          <input
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
        </div>
        <div>
          <label htmlFor="Month">Month:</label>
          <input
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
        </div>
        <div>
          <label htmlFor="Year">Year:</label>
          <input
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
        </div>
      </div>
      <div className="Button">
        <hr className="hr" />
        <button type="submit" className="submitButton">
          <img src={ButtonIcon} alt="" />
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  setAge: PropTypes.func.isRequired
}
