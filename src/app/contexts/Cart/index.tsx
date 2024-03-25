import Context from './Context';
import Provider from './Provider';

const Cart = {
  Provider,
  Consumer: Context.Consumer,
  Context,
};

export default Cart;
