export const IS_MENU_OPEN = 'IS_MENU_OPEN';

export const isMenuOpen = (isOpen) => ({
  type: IS_MENU_OPEN,
  payload: isOpen,
});
