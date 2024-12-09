import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    client: {
      name: '',
      email: '',
      phone: ''
    },
    produit: {
      name: '',
      price: 0,
      quantity: 1
    }
  }),
  actions: {
    setClient(data: { name: string; email: string; phone: string }) {
      this.client = data;
    },
    setProduit(data: { name: string; price: number; quantity: number }) {
      this.produit = data;
    }
  },
  getters: {
    factureDetails: (state) => {
      return {
        client: state.client,
        produit: state.produit
      };
    }
  }
});
