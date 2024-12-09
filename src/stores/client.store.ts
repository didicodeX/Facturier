// clientStore.ts
import { defineStore } from 'pinia';
import type Client from '@/interfaces/client.interface'; // Import de l'interface

export const useClientStore = defineStore('client', {
  state: () => ({
    client: {
      name: '',
      email: '',
      phone: ''
    } as Client // Typage explicite
  }),
  actions: {
    updateClient(data: Client) {
      this.client = data; // Vérifie automatiquement que data respecte l'interface Client
    }
  }
});
