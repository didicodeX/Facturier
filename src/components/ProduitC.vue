<template>
  <div>
    <h2>Informations Produit</h2>
    <form @submit.prevent="submitProduit">
      <input v-model="produit.name" placeholder="Nom du produit" />
      <input v-model.number="produit.price" placeholder="Prix" type="number" />
      <input v-model.number="produit.quantity" placeholder="Quantité" type="number" />
      <button type="submit">Enregistrer</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useMainStore } from '@/stores/mainStore';


    const store = useMainStore();

    const produit = reactive({
      name: '',
      price: 0,
      quantity: 1
    });

    const submitProduit = () => {
      store.setProduit(produit); // Enregistre les infos dans le store
      alert('Informations du produit enregistrées !');
    };


</script>
