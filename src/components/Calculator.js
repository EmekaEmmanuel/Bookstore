import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Nav from './Nav';

function Calculator() {
  const initialState = {
    total: null,
    next: null,
    operation: null,
  };

  const [data, setData] = useState(initialState);

  const getButtonName = (e) => {
    const btnName = e.target.value;
    const result = calculate(data, btnName);
    setData(result);
  };

  return (
    <div className="app_container">
      <Nav />

      <div className="app_holder">
        <article>
          Let&apos;s do some Maths!.
        </article>

        <div className="app_box">
          <section className="result">
            <p>
              {data.total}
              {data.operation}
              {data.next}
            </p>
          </section>

          <section className="quad">
            <button value="A/C" type="button" onClick={getButtonName} className="normal_btn">A/C</button>
            <button value="%" type="button" onClick={getButtonName} className="normal_btn negative_margin">+/-</button>
            <button value="%" type="button" onClick={getButtonName} className="normal_btn negative_margin">%</button>
            <button value="÷" type="button" onClick={getButtonName} className="orange_btn negative_margin">÷</button>
          </section>

          <section className="quad">
            <button value="7" type="button" onClick={getButtonName} className="normal_btn">7</button>
            <button value="8" type="button" onClick={getButtonName} className="normal_btn negative_margin">8</button>
            <button value="9" type="button" onClick={getButtonName} className="normal_btn negative_margin">9</button>
            <button value="x" type="button" onClick={getButtonName} className="orange_btn negative_margin">x</button>
          </section>

          <section className="quad">
            <button value="4" type="button" onClick={getButtonName} className="normal_btn">4</button>
            <button value="5" type="button" onClick={getButtonName} className="normal_btn negative_margin">5</button>
            <button value="6" type="button" onClick={getButtonName} className="normal_btn negative_margin">6</button>
            <button value="-" type="button" onClick={getButtonName} className="orange_btn negative_margin">-</button>
          </section>

          <section className="quad">
            <button value="1" type="button" onClick={getButtonName} className="normal_btn">1</button>
            <button value="2" type="button" onClick={getButtonName} className="normal_btn negative_margin">2</button>
            <button value="3" type="button" onClick={getButtonName} className="normal_btn negative_margin">3</button>
            <button value="+" type="button" onClick={getButtonName} className="orange_btn negative_margin">+</button>
          </section>

          <section className="quad">
            <button value="0" type="button" onClick={getButtonName} className="normal_big_btn">0</button>
            <button value="." type="button" onClick={getButtonName} className="normal_btn negative_margin">.</button>
            <button value="=" type="button" onClick={getButtonName} className="orange_btn negative_margin">=</button>
          </section>
        </div>
      </div>

    </div>

  );
}

export default Calculator;
