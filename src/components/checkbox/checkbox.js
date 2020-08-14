import React, { useState } from 'react';
import './checkbox.scss';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);
  const { actionCreator, id } = props;

  const onChangeHandler = ({ target: { checked } }) => {
    setChecked(checked);
    if (actionCreator) {
      if (id) {
        dispatch(actionCreator({
          id,
          checked
        }));
      }
    }
  }

  return (
    <div className='checkbox-wrapper'>
      <input
        className='checkbox'
        type='checkbox'
        id={props.id}
        onChange={onChangeHandler}
        checked={checked}
      />
      <label htmlFor={props.id}>{props.children}</label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  actionCreator: PropTypes.func.isRequired
}

export default Checkbox;