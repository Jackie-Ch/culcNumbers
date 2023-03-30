import React from 'react';

function Table({ numbers }) {
  // console.log(numbers);
  function convertToRoman(number) {
    let roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let result = '';

    for (let i of Object.keys(roman)) {
      let repeat = Math.floor(number / roman[i]);
      number -= repeat * roman[i];
      result += i.repeat(repeat);
    }

    return result;
  }
  const romanArr = numbers.map((item) => convertToRoman(item));
  return (
    <table style={{ height: '10rem' }}>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td
            style={{ background: '#646cffaa', width: '2rem', height: '1.7rem' }}
          >
            {romanArr[12 - 1]}
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td
            style={{ background: '#646cffaa', width: '2rem', height: '1.7rem' }}
          >
            {romanArr[10 - 1]}
          </td>
          <td></td>
          <td
            style={{ background: '#646cffaa', width: '2rem', height: '1.7rem' }}
          >
            {romanArr[11 - 1]}
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td
            style={{ background: '#646cffaa', width: '2rem', height: '1.7rem' }}
          >
            {romanArr[1 - 1]}
          </td>
          <td></td>
          <td
            style={{ background: '#646cffaa', width: '2rem', height: '1.7rem' }}
          >
            {romanArr[2 - 1]}
          </td>
          <td></td>
          <td
            style={{ background: '#646cffaa', width: '2rem', height: '1.7rem' }}
          >
            {romanArr[4 - 1]}
          </td>
          <td></td>
          <td
            style={{ background: '#646cffaa', width: '2rem', height: '1.7rem' }}
          >
            {romanArr[7 - 1]}
          </td>
        </tr>
        <tr>
          <td></td>
          <td
            style={{ background: '#646cffaa', width: '2rem', height: '1.7rem' }}
          >
            {romanArr[3 - 1]}
          </td>
          <td></td>
          <td
            style={{ background: '#646cffaa', width: '2rem', height: '1.7rem' }}
          >
            {romanArr[5 - 1]}
          </td>
          <td></td>
          <td
            style={{ background: '#646cffaa', width: '2rem', height: '1.7rem' }}
          >
            {romanArr[8 - 1]}
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td
            style={{ background: '#646cffaa', width: '2rem', height: '1.7rem' }}
          >
            {romanArr[6 - 1]}
          </td>
          <td></td>
          <td
            style={{ background: '#646cffaa', width: '2rem', height: '1.7rem' }}
          >
            {romanArr[9 - 1]}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
