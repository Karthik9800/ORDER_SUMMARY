import create from 'zustand';

export const useCart = create(set => ({
  items: [],
  addItem: (food, qty = 1) => set(state => {
    const existing = state.items.find(i => i.id === food.id);
    if (existing) {
      return {
        items: state.items.map(i =>
          i.id === food.id ? { ...i, qty: i.qty + qty } : i
        )
      };
    }
    return { items: [...state.items, { ...food, qty }] };
  }),
  updateQty: (id, qty) => set(state => ({
    items: state.items.map(i => i.id === id ? { ...i, qty } : i)
  })),
  clear: () => set({ items: [] })
}));
