import React from 'react';
import '../css/StatusBtn.css';

function StatusBtn() {
  return (
    <div className="app_container">
      <div className="btn_center">
        <button className="border_none statusBtn" type="button"> Check status</button>
      </div>
    </div>
  );
}

export default StatusBtn;
