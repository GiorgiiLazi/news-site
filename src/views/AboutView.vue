<template>
  <div class="about">
    <Navbar/>
    <div class="container">
      <div class="box-one">
        
        <h1>Who we are</h1>
        <hr>
        <p><span class="name">L. news</span> website is a portfolio projects, a single page application. The purpose of this website is to show its developer's skills in grid, vue, js and html.</p>
        <br>
        <br>
        <p>All articles on this website are open-source, links are provided, no copyright infringment is intended.</p>

      </div>
      <div class="box-two">
        <img src="@/assets/face.jpg" alt="">
      </div>
        
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'AboutView',
  components: { Navbar }
}
</script>

<style scoped>
.container{
  background-color: black;
  display: grid;
  grid-template-columns: repeat(auto, 4fr);
  grid-template-rows: repeat(auto, 12fr);
}
.box-one{
  grid-column: 1;
  grid-row: 1/-1;
  color: white;
}
.box-one h1{
  text-align: center;
  font-size: 75px;
}
.box-one p{
  text-align: left;
  margin: 5px;
  font-size: 24px;
}
.box-one p span{
  font-size:34px;
  text-decoration:underline;
}
.box-two{
  grid-column: 2/5;
  grid-row:1/-1;
}
.box-two img{
  max-width: 100%;
}
hr{
  border-bottom: 3px solid white;
  border-radius: 4px;
  margin: 20px 20px ;
}

</style>

