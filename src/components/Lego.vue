<template>
  <Navbar/>
  <div class="picture">
    <img src="@/assets/legocity.jpg" alt="">
  </div>
  <h1>What makes Lego so unique?</h1>
  <hr>
  <div class="article">
    LEGO blocks originated in the Billund, Denmark, workshop of Ole Kirk Christiansen, who began making wooden toys in 1932. Two years later he named his company LEGO after the Danish phrase leg godt (“play well”).
    <br>
    <br> 
    In 1949 LEGO produced its first plastic brick, a precursor to its signature brick with interlocking studs on the top and tubes on the bottom. It was patented in 1958 by Christiansen’s son Godtfred Kirk, who replaced his father as the head of the company.
  </div>
  <div class="picture">
    <img src="@/assets/child.jpg" alt="">
  </div>
  <div class="article">
    LEGO bricks soon caught on throughout Europe, and in 1968 the first LEGOLAND theme park opened in Billund (additional parks were later established in other locations internationally). 
    <br> <br> 
    In 1969 the company started selling the DUPLO line of larger bricks for young children who had trouble handling the regular LEGO bricks. Nine years later LEGO introduced Minifigures, the typically smiling yellow humanoids that became regular presences in the company’s themed play sets. 
    <br> <br>
    MINDSTORMS products, which centre on a programmable robotics pack containing customized bricks, were first launched in 1998, and they went through multiple iterations of increasing complexity over the succeeding years.</div>

  <div class="article">
    The basic LEGO brick has remained the same since it was patented, and this simple, child-friendly design has been credited with the toy’s longevity. As a result, these bricks have saturated the culture of childhood throughout much of the world. LEGO, which has remained in the Christiansen family for generations, was among the inaugural inductees to the U.S. 
    <br> <br>
    National Toy Hall of Fame in 1998 and was named “Toy of the Century” by multiple authorities in 2000. LEGO blocks have been used to create everything from massive replicas of famous monuments (such as the Eiffel Tower and Mount Rushmore) to modern art.</div>
    <hr>
    <div class="link">
        <a href="https://www.britannica.com/topic/LEGO">Link to the original article: <img src="@/assets/link.png" alt=""></a>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    name: 'lego',
    components: {Navbar}

}
</script>

<style scoped>
.picture{
    margin: 5px auto;
    width: 90%;
}
div img{
    width: 100%;
    border-radius: 12px;
}
h1{
    margin: 20px auto;
    width: 50%;
    color:rgb(79, 0, 108);
    font-size: 64px;
}
hr{
    border-top: 3px solid darkviolet;
    margin: 0 50px;
}
.article{
    margin: 20px auto;
    padding: 30px;
    background-color: chocolate;
    max-width: 800px;
    height: auto;
    font-size: 25px;
    border-radius: 40px;
}
.link{
    margin: 20px auto;
    width: 50%;
    padding: 20px;
    font-size: 35px;
}
.link a{
    text-decoration: none;
    color: black;
}
.link a img{
    width: 50px;
}
.link a img:hover{
    width: 1.5em;
}
@media only screen and (max-width: 600px){
    h1{
        font-size: 35px;
    }
    .article{
        font-size: 20px;
    }
    .link{
    font-size: 20px;
    }
}
</style>