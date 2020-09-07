import React from 'react';
import './add-remove-product-btn.scss';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCartRequest, removeProductFromCartRequest } from '#act/product-cart';
import CartSpinner from '#comps/spinners/cart-spinner';

const AddRemoveProductBtn = ({
  vendor, price, src, id, addToCartFetching, inCart, index, uniqueId,
}) => {
  const dispatch = useDispatch();
  const { isUserSignedIn } = useSelector((state) => state.authReducer);

  const addProductToCart = () => {
    if (!isUserSignedIn) {
      toast.warn('Для добавления товара в корзину необходима авторизация');
      return;
    }

    dispatch(addProductToCartRequest({
      vendor, price, src, id, inCart, index,
    }));
  };

  const removeProductFromCart = () => {
    if (!isUserSignedIn) {
      toast.warn('Для удаления товара из корзины необходима авторизация');
      return;
    }

    dispatch(removeProductFromCartRequest({ index, id, uniqueId }));
  };

  if (addToCartFetching) return <CartSpinner/>;

  const removeBtn = (
    <button onClick={removeProductFromCart}>
      <svg width="18" height="16"
           className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 448 512">
        <path fill="currentColor"
              d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
      </svg>
    </button>
  );

  const addBtn = (
    <button onClick={addProductToCart}>
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.8961 3.05165C17.7931 2.91217 17.6273 2.82596 17.4472 2.8187L6.28154 2.36414C5.96118 2.3509 5.69347 2.58449 5.67977 2.88566C5.66616 3.1867 5.91308 3.44107 6.23192 3.45401L16.6416 3.87783L14.5949 9.90922H5.4865L3.84094 1.44688C3.80476 1.26141 3.66994 1.10668 3.484 1.03778L0.788849 0.0377747C0.491809 -0.0720606 0.156622 0.0657377 0.0399656 0.345938C-0.0764898 0.62629 0.0693715 0.943051 0.36625 1.05323L2.76267 1.94237L4.43727 10.5532C4.48775 10.8121 4.72662 11.0001 5.00541 11.0001H5.2832L4.64887 12.6642C4.59578 12.8036 4.61766 12.9584 4.70801 13.0795C4.79824 13.2006 4.94499 13.2727 5.10164 13.2727H5.54656C5.27087 13.5625 5.10164 13.944 5.10164 14.3636C5.10164 15.266 5.87905 16 6.83425 16C7.78946 16 8.56686 15.266 8.56686 14.3636C8.56686 13.9441 8.39764 13.5625 8.12199 13.2727H11.8995C11.6237 13.5625 11.4545 13.944 11.4545 14.3636C11.4545 15.266 12.2317 16 13.1871 16C14.1426 16 14.9197 15.266 14.9197 14.3636C14.9197 13.9441 14.7506 13.5625 14.4749 13.2727H15.016C15.2819 13.2727 15.4973 13.0692 15.4973 12.8182C15.4973 12.5671 15.2818 12.3636 15.016 12.3636H5.78644L6.30616 11H15.016C15.2671 11 15.4894 10.8467 15.5659 10.621L17.9723 3.52998C18.0275 3.36814 17.9992 3.19119 17.8961 3.05165ZM6.83429 15.0911C6.4096 15.0911 6.06422 14.7649 6.06422 14.3638C6.06422 13.9627 6.4096 13.6365 6.83429 13.6365C7.25899 13.6365 7.60433 13.9627 7.60433 14.3638C7.60433 14.7649 7.25899 15.0911 6.83429 15.0911ZM13.1871 15.0911C12.7624 15.0911 12.4171 14.7649 12.4171 14.3638C12.4171 13.9627 12.7624 13.6365 13.1871 13.6365C13.6118 13.6365 13.9572 13.9627 13.9572 14.3638C13.9572 14.7649 13.6118 15.0911 13.1871 15.0911Z"
          fill="#1B1A17"></path>
      </svg>
    </button>
  );

  const currentBtn = inCart ? removeBtn : addBtn;

  return currentBtn;
};

export default AddRemoveProductBtn;
