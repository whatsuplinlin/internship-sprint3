export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
    }),
    actions: {
        addItem(item) {
            this.items.push(item);
        },
        removeItem(index) {
            this.items.splice(index, 1);
        }
    },
})