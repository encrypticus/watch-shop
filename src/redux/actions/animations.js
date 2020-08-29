export const ANIMATE_USER_BAR = 'ANIMATE_USER_BAR';

export const animateUserBar = (isAnimate) => ({
  type: ANIMATE_USER_BAR,
  payload: isAnimate,
});
