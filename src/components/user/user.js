import React, {
  useReducer, useEffect, useContext, useRef,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.min.css';
import './user.scss';
import Modal from '#comps/modal';
import AuthForm from '#comps/auth-form';
import { signOut, signIn, signUp } from '#act/auth';
import { LocalStorageServiceContext } from '#context';
import { getProductCatalogFromDB } from '#act/catalog-cards';

const initialState = {
  authFormShown: false,
  userMenuShown: false,
  authFormType: 'signUp',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_USER_MENU':
      return {
        ...state,
        userMenuShown: action.payload,
      };

    case 'SHOW_AUTH_FORM':
      return {
        ...state,
        authFormShown: true,
      };

    case 'HIDE_AUTH_FORM':
      return {
        ...state,
        authFormShown: false,
      };

    case 'SET_AUTH_FORM_TYPE':
      return {
        ...state,
        authFormType: action.payload,
      };

    default:
      return state;
  }
};

const User = () => {
  const { isUserSignedIn, isUserRegistered } = useSelector((state) => state.authReducer);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { userMenuShown, authFormShown, authFormType } = state;
  const reduxDispatch = useDispatch();
  const localStorageService = useContext(LocalStorageServiceContext);
  const { isLocalUserSignedIn, isLocalUserRegistered, getLocalId } = localStorageService;
  const userRef = useRef(null);

  const showUserMenuHandler = () => {
    dispatch({ type: 'SHOW_USER_MENU', payload: !state.userMenuShown });
  };

  const hideUserMenuHandler = () => {
    dispatch({ type: 'SHOW_USER_MENU', payload: false });
  };

  const showAuthFormHandler = () => {
    dispatch({ type: 'SHOW_AUTH_FORM' });
  };

  const hideAuthFormHandler = () => {
    dispatch({ type: 'HIDE_AUTH_FORM' });
  };

  const signUpHandler = (event) => {
    event.preventDefault();
    dispatch({ type: 'SET_AUTH_FORM_TYPE', payload: 'signUp' });
    showAuthFormHandler();
  };

  const signInHandler = (event) => {
    event.preventDefault();
    dispatch({ type: 'SET_AUTH_FORM_TYPE', payload: 'signIn' });
    showAuthFormHandler();
  };

  const signOutHandler = (event) => {
    event.preventDefault();
    reduxDispatch(signOut());
  };

  useEffect(() => {
    let isRegistered = isUserRegistered;

    if (isLocalUserRegistered() !== undefined && isLocalUserRegistered()) {
      isRegistered = isLocalUserRegistered();
      reduxDispatch(signUp());
    }

    isRegistered && hideAuthFormHandler();
  }, [getLocalId()]);

  useEffect(() => {
    let isUserSigned = isUserSignedIn;
    const user = userRef.current;

    if (isLocalUserSignedIn() !== undefined && isLocalUserSignedIn()) {
      isUserSigned = isLocalUserSignedIn();
      reduxDispatch(signIn());
      reduxDispatch(getProductCatalogFromDB());
    }

    isUserSigned && hideAuthFormHandler();

    let hideMenuAsync = '';

    user.addEventListener('mouseout', () => {
      hideMenuAsync = setTimeout(hideUserMenuHandler, 5000);
    });

    user.addEventListener('mouseover', () => {
      clearTimeout(hideMenuAsync);
    });
  }, [isLocalUserSignedIn()]);

  const authForm = (
    <Modal hideModal={hideAuthFormHandler}>
      <AuthForm type={authFormType}/>
    </Modal>
  );

  const userMenu = (
    <ul className='user__list'>
      <li className='user__list-item'>
        {
          isUserSignedIn
            ? <a className='user__link' onClick={signOutHandler} href='/'>Выход</a>
            : <a className='user__link' href='/' onClick={signInHandler}>Вход</a>
        }

      </li>
      <li className='user__list-item'>
        {
          isUserSignedIn
            ? null
            : <a className='user__link' href='/' onClick={signUpHandler}>Регистрация</a>
        }
      </li>
    </ul>
  );

  return (
    <>
      <div className='user' ref={userRef}>
        <button className='user__button' type='button' onClick={showUserMenuHandler}>
          <svg width="18" height="18"
               role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
              fill="#1B1A17">
            </path>
          </svg>
        </button>
        {userMenuShown ? userMenu : null}
      </div>

      {authFormShown ? authForm : null}
    </>
  );
};

export default User;
