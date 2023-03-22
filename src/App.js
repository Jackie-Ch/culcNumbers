import { useState } from 'react';
import { calculate } from './assets/calculate';
import './App.css';
import Table from './Table';
// import Form from './Form';

function App() {
  const [date, setDate] = useState({
    day: '',
    month: '',
    year: '',
  });
  const [numbers, setNumbers] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDate((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!date.day && !date.month && !date.year) return;
    const dateOfBirthday = Object.values(date);
    const num = calculate(dateOfBirthday);
    setNumbers(num);
  };

  return (
    <div className="App">
      <h1>RUZANA PROJECT</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="day"
          min="1"
          max="31"
          placeholder="день"
          value={date.day}
          onChange={handleChange}
        />
        <input
          type="number"
          name="month"
          max="12"
          min="1"
          placeholder="месяц"
          value={date.month}
          onChange={handleChange}
        />
        <input
          type="number"
          name="year"
          placeholder="год"
          max="2023"
          min="1900"
          value={date.year}
          onChange={handleChange}
        />
        <button type="submit">Расчитать</button>
      </form>
      <h3>Характеристика персоны</h3>
      <span>
        <strong>{date.day}.</strong>
      </span>
      <span>
        <strong>{date.month}.</strong>
      </span>
      <span>
        <strong>{date.year}</strong>
      </span>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Table numbers={numbers} />
      </div>
    </div>
  );
}

export default App;
