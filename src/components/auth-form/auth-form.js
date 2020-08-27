import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './auth-form.scss';
import { fetchAuth } from '#act/auth';

const AuthForm = ({ type = 'signUp' }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error: { status: hasAuthError, message } } = useSelector((state) => state.authReducer);

  const errorCodes = {
    EMAIL_NOT_FOUND: 'Пользователь не найден',
    INVALID_PASSWORD: 'Неправильный пароль',
    USER_DISABLED: 'Учётная запись отключена администратором',
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = { email, password, method: type };

    dispatch(fetchAuth(userData));
    clearForm();
  };

  const emailHandler = ({ target: { value } }) => {
    setEmail(value);
  };

  const passwordHandler = ({ target: { value } }) => {
    setPassword(value);
  };

  return (
    <form className='auth-form' onSubmit={submitHandler}>
      <div>
        <input
          className='auth-form__input'
          type='email' placeholder='email'
          required
          value={email}
          onChange={emailHandler}
        />
      </div>
      <div>
        <input
          className='auth-form__input'
          type='password'
          placeholder='password'
          required
          value={password}
          onChange={passwordHandler}
        />
      </div>
       {hasAuthError ? <p className='auth-form__error-message'>{errorCodes[message] || 'Превышено число попыток входа, попробуйте позже'}</p> : null}
      <div>
        {
          type === 'signUp'
            ? <button className='auth-form__button' type='submit'
                      disabled={isFetching}>{isFetching ? 'Загрузка' : 'Регистрация'}</button>
            : <button className='auth-form__button' type='submit'
                      disabled={isFetching}>{isFetching ? 'Загрузка' : 'Вход'}</button>
        }
      </div>
    </form>
  );
};

AuthForm.propTypes = {
  type: PropTypes.string,
};

export default AuthForm;
