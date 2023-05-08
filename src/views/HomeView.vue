<template>
<Navbar/>
<Section-one/>
  
</template>

<script>
// @ is an alias to /src
import SectionOne from '@/components/SectionOne.vue'
import Navbar from '../components/Navbar.vue'


export default {
  name: 'HomeView',
  components: { Navbar, SectionOne }
}
</script>

<style>

</style>

