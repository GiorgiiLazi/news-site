<template>
    <Navbar/>
    <div class="box">
        <h1>404</h1>
        <h2>Page do not exists</h2>
        <h3><router-link :to="{name: 'home'}">Go back HomE</router-link></h3>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    components: {Navbar}
}
</script>

<style scoped>
.box{
    margin: 20px auto;
    max-width: 800px;
    max-height: auto;
    text-align: center;
    background-color:indigo;
    font-family: Georgia, sans-serif;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    animation: fadeIn 0.4s;
}
@keyframes fadeIn{
    0%{opacity: 0}
    100%{opacity: 1}
}
h1{
    color: white;
    text-transform: uppercase;
    font-size: 100px;
    font-weight: bolder;
}
h2{
    color: white;
    text-transform: uppercase;
    font-size: 36px;
}
h3{
    font-size: 30px;
    color:white;
    text-transform: uppercase;
}
h3 a{
    color: white;
    text-transform: uppercase;
}
</style>