import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './hamburger.scss';
import { StyledSpan } from './styles';
import { isMenuOpen } from '../../redux/actions/main-nav';

const Hamburger = (props) => {
  const btn = useRef(null);
  const isOpen = useSelector(state => state.mainNavReducer.isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    const button = btn.current;
    isOpen ? button.classList.add('is-active') : button.classList.remove('is-active');

    /*const hamburgers = document.querySelectorAll('.hamburger');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgers.length > 0) {
      Array.prototype.forEach.call(hamburgers, (hamburger) => {
        hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('is-active');
          mainNav.classList.toggle('is-open');
        }, false);
      });
    }*/
  }, [isOpen]);

  const isActiveHandler = () => {
    dispatch(isMenuOpen(!isOpen));
  };

  return (
    <button onClick={isActiveHandler} ref={btn} className="hamburger hamburger--3d">
      <span className="hamburger-inner">
        <span className="line-top">
          <StyledSpan className="line-top-left" color={props.color}></StyledSpan>
          <StyledSpan className="line-top-right" color={props.color}></StyledSpan>
        </span>
        <span className="line-center">
          <StyledSpan className="line-center-left" color={props.color}></StyledSpan>
          <StyledSpan className="line-center-right" color={props.color}></StyledSpan>
        </span>
        <span className="line-bottom">
          <StyledSpan className="line-bottom-left" color={props.color}></StyledSpan>
          <StyledSpan className="line-bottom-right" color={props.color}></StyledSpan>
        </span>
      </span>
    </button>
  );
};

export default Hamburger;
