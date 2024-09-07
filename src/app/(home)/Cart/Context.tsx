import { createContext } from 'react';

const CartContext = createContext({
  // Data
  products: {
    data: [],
    quantity: 0,
    error: null,
  },
  promotion: {
    data: null,
    error: null,
  },
  giftCard: {
    data: null,
    error: null,
  },

  // Meta
  invoice: {
    subtotal: 0,
    _subtotal: {
      taxable: 0,
      discountable: 0,
      physical: 0,
      digital: 0,
    },
    discounts: {
      savings: 0,
      promotion: 0,
      giftCard: 0,
    },
    taxes: {
      total: 0,
      data: null,
    },
    shipping: 0,
    total: 0,
    payments: {
      giftCard: 0,
      creditCard: 0,
    },
  },
  type: null, // physical/digital/mix

  // Cart state - not cached !!
  ready: false,
  visible: false,
  promises: {
    ready: null,
  },
});

export default CartContext;
