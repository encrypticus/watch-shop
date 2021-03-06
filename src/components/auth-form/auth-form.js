import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './auth-form.scss';
import { fetchAuth, hasAuthError } from '#act/auth';

const AuthForm = ({ type = 'signUp' }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { authFetching, error: { status: isAuthError, message } } = useSelector((state) => state.authReducer);
  const emailRef = useRef(null);

  const errorCodes = {
    EMAIL_NOT_FOUND: 'Пользователь не найден',
    INVALID_PASSWORD: 'Неправильный пароль',
    USER_DISABLED: 'Учётная запись отключена администратором',
    EMAIL_EXISTS: 'Адрес электронной почты уже используется другим аккаунтом',
    OPERATION_NOT_ALLOWED: 'Вход с паролем отключен для этого проекта',
    'WEAK_PASSWORD : Password should be at least 6 characters': 'Слишком короткий пароль',
    'TOO_MANY_ATTEMPTS_TRY_LATER : Too many unsuccessful login attempts. Please try again later.': 'Превышено число попыток входа, попробуйте позже',
  };

  useEffect(() => {
    const emailField = emailRef.current;
    emailField.focus();

    return () => {
      dispatch(hasAuthError({ status: false, message: '' }));
    };
  }, []);

  const clearForm = () => {
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    !isAuthError && clearForm();
  }, [isAuthError]);

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = { email: email.trim(), password: password.trim(), method: type };

    dispatch(fetchAuth(userData));
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
          ref={emailRef}
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
      {isAuthError ? <p
        className='auth-form__error-message'>{errorCodes[message] || 'Ошибка сети'}</p> : null}
      <div>
        {
          type === 'signUp'
            ? <button className='auth-form__button' type='submit'
                      disabled={authFetching}>{authFetching ? 'Загрузка' : 'Регистрация'}</button>
            : <button className='auth-form__button' type='submit'
                      disabled={authFetching}>{authFetching ? 'Загрузка' : 'Вход'}</button>
        }
      </div>
    </form>
  );
};

AuthForm.propTypes = {
  type: PropTypes.string,
};

export default AuthForm;
