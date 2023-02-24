import React from 'react';
import '../css/Form.css';

function Form() {
  return (
    <div className="app_container">
      <form className="form_tag" action="">
        <h3>ADD NEW BOOK</h3>
        <div className="form_holder">
          <fieldset className="form_field border_none">
            <input className="title_width input_tag outline_none" type="text" placeholder="Book title" />
            <select name="" id="" className="dropdown_width input_tag outline_none">
              <option value="">Author</option>
              <option value="">Jones</option>
              <option value="">Ada</option>
            </select>
          </fieldset>
          <fieldset className="form_action border_none">
            <button type="submit" className="button_width">ADD BOOK</button>
          </fieldset>
        </div>
      </form>
    </div>
  );
}

export default Form;
