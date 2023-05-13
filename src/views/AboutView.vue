<template>
  <div class="about">
    <Navbar/>
    <div class="container">
      <div class="box-one">
        
        <h1>Who we are</h1>
        <hr>
        <p><router-link :to="{name: 'home'}">L. news</router-link> website is a portfolio projects, a single page application. The purpose of this website is to show its developer's skills in CSS grid, CSS flex, Vue framework, and HTML.</p>
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
.box-one p a{
  font-size:34px;
  text-decoration:underline;
  color: white;
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
@media only screen and (max-width:600px){
  .box-one{
    grid-column: 1/-1;
    grid-row: 4/13;
  }
  .box-two{
    grid-column: 1/-1;
    grid-row:1/3;
  }

}
  


</style>

