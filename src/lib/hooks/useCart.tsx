import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from 'zustand/middleware';

type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number,
  media: string;
}

interface CartItem {
  item: ProductType;
  quantity: number;
  color?: string | null;
  size?: string | null;
}

interface CartStore {
  cartItems: CartItem[];
  isSideCartOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (idToRemove: string) => void;
  increaseQuantity: (idToIncrease: string) => void;
  decreaseQuantity: (idToDecrease: string) => void;
  clearCart: () => void;
  openSideCart: () => void;
  closeSideCart: () => void;
  toggleSideCart: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      cartItems: [],
      isSideCartOpen: false,
      addItem: (data: CartItem) => {
        const { item, quantity, color, size } = data;
        const currentItems = get().cartItems;
        const isExisting = currentItems.find(
          (cartItem) => cartItem.item.id === item.id
        );

        if (isExisting) {
          return toast('Item already in cart');
        }

        set({ cartItems: [...currentItems, { item, quantity, color, size }] });
        toast.success('Item added to cart', { icon: '🛒' });
      },
      removeItem: (idToRemove: String) => {
        console.log('inside remove item')
        const newCartItems = get().cartItems.filter(
          (cartItem) => cartItem.item.id !== idToRemove
        );
        console.log(newCartItems, 'new cart items');
        set({ cartItems: newCartItems });
        toast.success('Item removed from cart');
      },
      increaseQuantity: (idToIncrease: String) => {
        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.item.id === idToIncrease
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
        );
        set({ cartItems: newCartItems });
        toast.success('Item quantity increased');
      },
      decreaseQuantity: (idToDecrease: String) => {
        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.item.id === idToDecrease
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
        );
        set({ cartItems: newCartItems });
        toast.success('Item quantity decreased');
      },
      clearCart: () => set({ cartItems: [] }),
      openSideCart: () => set({ isSideCartOpen: true }),
      closeSideCart: () => set({ isSideCartOpen: false }),
      toggleSideCart: () => set({ isSideCartOpen: !get().isSideCartOpen }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
