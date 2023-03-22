import React from 'react';

function Form() {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="day"
        placeholder="день"
        value={date.day}
        onChange={handleChange}
      />
      <input
        type="number"
        name="month"
        placeholder="месяц"
        value={date.month}
        onChange={handleChange}
      />
      <input
        type="number"
        name="year"
        placeholder="год"
        value={date.year}
        onChange={handleChange}
      />
      <button type="submit">Расчитать</button>
    </form>
  );
}

export default Form;
