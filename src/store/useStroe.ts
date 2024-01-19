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
  setTotalQuantity: (totalQuantity: number) => void;
  setTotalPrice: (totalPrice: number) => void;
}

const useQuantityPriceStroe = create<UseQuantityPriceStroeProps>((set) => ({
  // 초깃값 상태
  items: [],
  quantity: 0,
  totalQuantity: 0,
  totalPrice: 0,

  //   액션 설정
  setTotalQuantity: (totalQuantity: number) => set({ totalQuantity }),
  setTotalPrice: (totalPrice: number) => set({ totalPrice }),
  setItems: (items: ItemsPros[]) => set({ items }),
  // 플러스 버튼 클릭시 실행되는 액션 함수 => 매개변수로 Id를 받아온다.
  plusQuantity: (itemId: string) => set((state) => {
    // 주문 총 수량이 999개가 넘으면 바로 리턴
    if (state.totalQuantity < 999) {
      const updateProducts = state.items.map((itme) => {
        // 받아온 Id와 데이터 매핑을 통해 동일한 id값을 가진 배열을 찾아 수량 + 1을 한다.
        if (itme.id === itemId) {
          return { ...itme, quantity: (itme.quantity || 0) + 1 };
        }
        // 수량이 새로 추가된 배열을 리턴
        return itme;
      });
        // 총 가격 구하는 코드 => 필터를 통하여 수량이 있는 값만 찾은 후 => 수량과 해당 값을 곱함
      const totalPrice = updateProducts
        .filter((item) => item.quantity && item.quantity !== 0)
        .reduce((sum, item) => sum + (item.quantity || 0) * item.price, 0);

      // 총 수량을 구하는 코드 => 수량이 새로 추가된 배열에 reduce사용하여 수량이 있는 값들만 더하기 없으면 0이 더해진다.
      const totalQuantity = updateProducts.reduce(
        (sum, item) => sum + (item.quantity || 0),
        0,
      );
      return { items: updateProducts, totalQuantity, totalPrice };
    }
    return state;
  }),
  // 마이너스 클릭시 실행되는 액션 함수 => 매개변수로 Id를 받아온다.
  minusQuantity: (itemId: string) => set((state) => {
    const updateProducts = state.items.map((itme) => {
      if (itme.id === itemId && itme.quantity && itme.quantity > 0) {
        return { ...itme, quantity: itme.quantity - 1 };
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
  }),
}));

export default useQuantityPriceStroe;
