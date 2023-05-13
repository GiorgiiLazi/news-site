<template>
  <Navbar/>
  <h1>Contacts</h1>
  <div class="container">
    <div>
      Email: <span>malazi140@gmail.com</span>
    </div>
    <div>Author's Github page: <a href="https://github.com/GiorgiiLazi">https://github.com/GiorgiiLazi</a></div>
    <div>Author's name - Lazishvili Giorgi</div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    name: 'contacts',
    components: { Navbar }
  }
</script>

<style scoped>
h1{
  color: rgb(211, 0, 127);
  margin: auto;
  width: 50%;
  display: flex;
  align-self: center;
  margin: 20px auto;
}
.container{
  color: white;
  display: flex;
  justify-content: space-around;
  flex-direction:column;
  margin: 50px auto;
  background-color:rgb(52, 99, 228);
  height: 350px;
  width: 600px;
  border-radius: 14px;
}
.container div{
  margin: 0 10px;
  font-size: 25px;
}
.container div span{
  cursor: pointer
}
.container div a{
  cursor: pointer;
  color: white;
}
@media only screen and (max-width: 600px){
  .container{
    height: 150px;
    width: 300px;
  }
  .container div{
    font-size: 18px;
  }
}
</style>