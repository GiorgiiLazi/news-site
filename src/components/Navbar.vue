<template>
  <nav class="navbar">
    <div class="brand-name"><router-link :to="{name: 'home'}">L.</router-link></div>
    <a href="#" @click="showPanel=!showPanel" class="toggle-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>        
    </a>
    <div v-if="showPanel" class="navbar-links">
        <ul>
            <li><router-link :to="{name: 'home'}">Home</router-link></li>
            <li><router-link :to="{name: 'about'}">About</router-link></li>
            <li><router-link :to="{name: 'contacts'}">Contacts</router-link></li>
        </ul>
    </div>
    


  </nav>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        const showPanel = ref(true)

        return {showPanel}
    }
}
</script>

<style>
* {
box-sizing: border-box;
}
body{
    margin: 0;
    padding: 0;
}
.navbar{
    z-index: 1;
    position: sticky;
    top:0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(0, 191, 255);
}
.brand-name{
    margin: 0.5em 2em;
    font-weight: bold;
}
.brand-name a{
    color: white;
    font-size: 2em;
    text-decoration: none;
}
.navbar-links ul{
    margin:0;
    padding:0;
    display: flex;
}
.navbar-links li{
    list-style: none;
}
.navbar-links li a{
    text-decoration: none;
    color: white;
    padding: 1.5em;
    display: block;
    text-transform: uppercase;
    font-weight: bold;
}
.navbar-links li:hover{
    font-size: 1.1em;
    background-color:#82e6f1;
}
.toggle-button{
    position: absolute;
    top: 1.0rem;
    right: 1rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
}
.toggle-button .bar{
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 4px;
}

@media only screen and (max-width: 400px){
    .toggle-button{
        display: flex;
    }
    .navbar-links{
        display: flex;
        width: 100%;
        text-align: center;
    }
    .navbar{
        flex-direction: column;
        align-items: flex-start;
    }
    .navbar-links ul{
        width: 100%;
        flex-direction: column;
    }
    .navbar-links li a{
        padding: 0.5em;
    }
}

/* a.router-link-exact-active {
  color: black;
  text-decoration: underline
} */

</style>