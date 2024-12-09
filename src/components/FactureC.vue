<template>
  <div>
    <h2>Facture</h2>
    <div v-if="facture">
      <h3>Client</h3>
      <p>Nom: {{ facture.client.name }}</p>
      <p>Email: {{ facture.client.email }}</p>
      <p>Téléphone: {{ facture.client.phone }}</p>

      <h3>Produit</h3>
      <p>Nom: {{ facture.produit.name }}</p>
      <p>Prix: {{ facture.produit.price }} €</p>
      <p>Quantité: {{ facture.produit.quantity }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useMainStore } from '@/stores/mainStore';

    const store = useMainStore();

    // Récupère les détails de la facture via le getter
    const facture = store.factureDetails;



</script>
