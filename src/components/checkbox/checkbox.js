import React, { useEffect, useState } from 'react';
import './checkbox.scss';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const Checkbox = (props) => {
  const dispatch = useDispatch();
  let isChecked = useSelector(state => state.catalogCardsReducer.cards[0].vendorChecked);
  const [checked, setChecked] = useState(true);
  const { actionCreator, id } = props;

  const onChangeHandler = ({ target: { checked } }) => {
    if (actionCreator) {
      if (id) {
        dispatch(actionCreator({
          id,
          checked
        }));
      }
    }
    setChecked(checked)
  }

  return (
    <div className='checkbox-wrapper'>
      <input
        className='checkbox'
        type='checkbox'
        id={id}
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