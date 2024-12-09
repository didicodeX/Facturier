<template>
  <div>
    <h2>Informations Client</h2>
    <form @submit.prevent="submitClient">
      <input v-model="client.name" placeholder="Nom" />
      <input v-model="client.email" placeholder="Email" type="email" />
      <input v-model="client.phone" placeholder="Téléphone" type="tel" />
      <button type="submit">Enregistrer</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useMainStore } from '@/stores/mainStore'

const store = useMainStore()

const client = reactive({
  name: 'dyhia',
  email: '',
  phone: '',
})

console.log(client);


const submitClient = () => {
  store.setClient(client) // Enregistre les infos dans le store
  alert('Informations du client enregistrées !')
}
</script>
