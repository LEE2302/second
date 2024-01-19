import { create } from 'zustand';

export interface ItemsPros {
  id: string;
  name: string;
  event: number;
  materialType: number;
  price: number;
  quantity?: number;
}

interface UseQuantityPriceStroeProps {
  items: ItemsPros[];
  totalQuantity: number;
  totalPrice: number;
  setItems: (items: ItemsPros[]) => void;
  plusQuantity: (itmeId: string) => void;
  minusQuantity: (itmeId: string) => void;
}

const useQuantityPriceStroe = create<UseQuantityPriceStroeProps>((set) => ({
  // 초깃값 상태
  items: [],
  quantity: 0,
  totalQuantity: 0,
  totalPrice: 0,

  //   액션 설정
  setItems: (items: ItemsPros[]) => set({ items }),
  plusQuantity: (itmeId: string) => set((state) => {
    if (state.totalQuantity < 999) {
      const updateProducts = state.items.map((itme) => {
        if (itme.id === itmeId) {
          return { ...itme, quantity: (itme.quantity || 0) + 1 };
        }
        return itme;
      });
      const totalPrice = updateProducts
        .filter((item) => item.quantity && item.quantity !== 0)
        .reduce((sum, item) => sum + (item.quantity || 0) * item.price, 0);

      const totalQuantity = updateProducts.reduce(
        (sum, item) => sum + (item.quantity || 0),
        0,
      );
      return { items: updateProducts, totalQuantity, totalPrice };
    }
    return state;
  }),
  minusQuantity: (itmeId: string) => set((state) => {
    const updateProducts = state.items.map((itme) => {
      if (itme.id === itmeId && itme.quantity && itme.quantity > 0) {
        return { ...itme, quantity: itme.quantity - 1 };
      }
      return itme;
    });
    const totalPrice = updateProducts
      .filter((item) => item.quantity && item.quantity !== 0)
      .reduce((sum, item) => sum + (item.quantity || 0) * item.price, 0);

    const totalQuantity = state.totalQuantity > 0 ? state.totalQuantity - 1 : 0;
    return { items: updateProducts, totalQuantity, totalPrice };
  }),
}));

export default useQuantityPriceStroe;
