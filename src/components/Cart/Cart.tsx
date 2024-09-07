import { MouseEventHandler } from 'react';
import Button from '../../components/Button/Button';

interface CartProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Cart: React.FC<CartProps> = ({ onClick }) => {
  return (
    <div>
      <Button
        type="button"
        variant="solid"
        text="Cart"
        onClick={onClick}
      />
    </div>
  );
}

export default Cart;
