import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './checkbox.scss';

const Checkbox = (props) => {
  const dispatch = useDispatch();
  const {
    actionCreator, id, checked, children,
  } = props;

  const onChangeHandler = ({ target: { checked } }) => {
    if (actionCreator) {
      if (id) {
        dispatch(actionCreator({
          id,
          checked,
        }));
      }
    }
  };

  return (
    <div className='checkbox-wrapper'>
      <input
        className='checkbox'
        type='checkbox'
        id={id}
        onChange={onChangeHandler}
        checked={checked}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  actionCreator: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Checkbox;
