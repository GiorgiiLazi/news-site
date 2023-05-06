<template>
  <nav class="navbar">
    <div class="brand-name">L.</div>
    <a href="" class="toggle-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>        
    </a>
    <div class="navbar-links">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/popular">Popular</router-link></li>
            <li><router-link to="/trending">Trending</router-link></li>
            <li><router-link to="/categories">Categories</router-link></li>
            <li><router-link to="/contacts">Contacts</router-link></li>
        </ul>
    </div>
    


  </nav>
</template>

<script>
export default {

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
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(0, 191, 255);
}
.brand-name{
    color: white;
    font-size: 2em;
    margin: 0.5em;
    font-weight: bold;
}
.navbar-links ul{
    margin:0;
    padding: 0;
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
}
.navbar-links li:hover{
    font-size: 1.1em;
    background-color:#82e6f1;
}
.toggle-button{
    position: absolute;
    top: 1.5rem;
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

@media (max-width: 400px){
    .toggle-button{
        display: flex;
    }
    .navbar-links{
        /* display: none; */
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

/* a {
  font-weight: bold;
  color: #888;
  text-decoration:none;
  padding: 0 5px;
} */

a.router-link-exact-active {
  color: #00a2ff;
  text-decoration: underline
}

</style>