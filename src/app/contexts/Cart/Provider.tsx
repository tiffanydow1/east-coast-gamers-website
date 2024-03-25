'use client'

import { useState } from 'react';
import Context from './Context';

const initial = {
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
  estimate: {
    subtotal: 0,
    discounts: {
      savings: 0,
      promotion: 0,
      giftCard: 0,
    },
    taxes: {
      data: [],
      city: 0,
      county: 0,
      shipping: 0,
      total: 0,
    },
    shipping: 0,
    total: 0,
  },
  type: null, // physical/digital/mix

  // Actions
  invoice: {},

  // Cart state (not cached !!)
  ready: false, // provider is ready to be consumed
  visible: false, // vart visible/open/closed
};

// const initialState = {
//   products: {
//     // state
//     loading: false,

//     // data
//     ...initial.products,

//     // actions
//     add: addProduct,
//     find: findProduct,
//     update: updateProduct,
//     remove: removeProduct,
//     get: getProduct,
//     clear: clearProducts,
//     validate: validateProduct
//   },
//   promotion: {
//     // state
//     loading: false,

//     // data
//     ...initial.promotion,

//     // actions
//     add: addPromotion,
//     remove: removePromotion,
//     validate: validatePromotion,
//   },
//   giftCard: {
//     // state
//     loading: false,

//     // data
//     ...initial.giftCard,

//     // actions
//     add: addGiftCard,
//     remove: removeGiftCard,
//     validate: validateGiftCard,
//   },
//   estimate: {
//     // data
//     ...initial.estimate,
//   },
//   invoice: {
//     ...initial.invoice,
//     generate: generateInvoice,
//   },
//   meta: {
//     generate: generateMeta,
//   },
//   clear: clear,
//   open: open,
//   close: close,
//   toggle: toggle,
// };

// const Provider = () => {
//   const {
//     products,
//     promotion,
//     giftCard,
//     estimate,
//     invoice,
//     ...rest
//   } = initial;

//   const [state, setState] = useState(initialState);

//   const addProduct = (items = []) => {
//     const { products: previousProducts, estimate } = state;

//     let addedProducts = [];

//     if (!Array.isArray(items)) {
//       items = [items];
//     }

//     items.forEach(item => {
//       const existingProduct = findProduct(item.variant.id);

//       // If product exists - update quantity instead of adding new product
//       if (existingProduct) {
//         const newQuantity = existingProduct.quantity + item.quantity;

//         return updateProduct(
//           item.variant.id,
//           {
//             quantity: newQuantity,
//             price: calculateProductPrice({ variant: item.variant, quantity: newQuantity }),
//           },
//         );
//       }

//       const product = {
//         ...item,
//         // determines delivery requirements (shipping/email)
//         medium: item.variant.requires_shipping ? 'physical' : 'digital',
//         price: calculateProductPrice({ variant: item.variant, quantity: item.quantity }),
//       };

//       addedProducts.push(product);
//     });

//     const data = [...previousProducts.data, ...addedProducts];

//     setState(({ products }) => ({
//       products: {
//         ...products,
//         data,
//       },
//     }),
//     () => {
//       const { products } = state;

//       setMeta()
//         .then(() => {
//           products.data.forEach(product => {
//             trackAddToCart(
//               product.product.id,
//               product.product.title,
//               product.product.type,
//               product.variant.option,
//               product.variant.price,
//               product.variant.sku,
//               products.data,
//               estimate,
//             );

//             trackCartUpdate();
//             validateProduct();
//           })
//         })
//     })
//   }
// }

const Provider = () => {
  return (
    <p>Provider</p>
  )
}

export default Provider;
