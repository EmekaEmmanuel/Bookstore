import React from 'react';
import '../css/StatusBtn.css';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/category/categorySlice';

function StatusBtn() {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.category);

  return (
    <div className="app_container">
      <div className="btn_center">
        <br />
        <br />
        <button className="border_none statusBtn" type="button">
          {status}
        </button>
        <br />
        <br />
        <br />
        <button
          className="border_none statusBtn"
          type="button"
          onClick={() => {
            if (status.length < 1) {
              dispatch(checkStatus(' Under Construction '));
            }
          }}
        >
          {' '}
          Check status
        </button>
      </div>
    </div>
  );
}

export default StatusBtn;
