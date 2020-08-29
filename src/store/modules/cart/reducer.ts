import { Reducer } from 'redux';
import produce from 'immer';
import { ICartState } from './types';

const INNITIAL_STATE: ICartState = {
  items: [],
};

const cart: Reducer<ICartState> = (state = INNITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          item => item.product.id === product.id,
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity += 1;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default cart;