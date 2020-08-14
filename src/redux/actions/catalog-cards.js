export const SORT_CARDS_BY_VENDOR = 'SORT_CARDS_BY_VENDOR';
export const SORT_CARDS_BY_MECHANISM = 'SORT_CARDS_BY_MECHANISM';
export const SORT_CARDS_BY_MATERIAL = 'SORT_CARDS_BY_MATERIAL';
export const SORT_CARDS_BY_COLOR = 'SORT_CARDS_BY_COLOR';

export const sortByVendor = data => ({
  type: SORT_CARDS_BY_VENDOR,
  payload: data
});

export const sortByMechanism = data => ({
  type: SORT_CARDS_BY_MECHANISM,
  payload: data
});

export const sortByMaterial = data => ({
  type: SORT_CARDS_BY_MATERIAL,
  payload: data
});

export const sortByColor = data => ({
  type: SORT_CARDS_BY_COLOR,
  payload: data
});
