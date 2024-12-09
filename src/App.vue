<template>
  <div>
    <h1>Application Facturation</h1>
    <Client />
    <Produit />
    <Facture />
  </div>
</template>

<script setup lang="ts">
import Client from '@/components/ClientC.vue'
import Produit from '@/components/ProduitC.vue'
import Facture from '@/components/FactureC.vue'
</script>
