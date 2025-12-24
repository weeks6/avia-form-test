import { create } from "zustand";

interface CartState {
  cart: Set<string>;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const useCartService = create<CartState>()((set) => ({
  cart: new Set(),
  addToCart(id) {
    set((state) => ({
      cart: new Set(state.cart).add(id),
    }));
  },
  removeFromCart(id) {
    set((state) => {
      const next = new Set(state.cart);
      next.delete(id);

      return {
        cart: next,
      };
    });
  },
  clearCart() {
    set(() => ({ cart: new Set() }));
  },
}));

export default useCartService;
