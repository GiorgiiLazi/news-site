<template>
  <Navbar/>
  <div class="box">
    <img src="@/assets/sudan-war.jpg" alt="">
    <div class="textOn">
        <h1>War in Sudan 2023:</h1>
        <h3>The unfolding tragedy of NorthEast Africa</h3>
    </div>
  </div>
  <div class="box-two">
    <p class="bold-article">Artillery fire has pounded the outer areas of the Sudanese capital, Khartoum, as fighting that trapped civilians in a humanitarian crisis and displaced more than one million people entered its sixth week.
    <br>
    <br>
    Air attacks were also reported on Saturday by witnesses in southern Omdurman and Khartoum North, the two cities that lie across the Nile from Khartoum, forming Sudans “triple capital”. Some of the attacks took place near the state broadcaster in Omdurman, witnesses said.
    </p>
    <p class="article">“We faced heavy artillery fire early this morning, the whole house was shaking,” said Sanaa Hassan, 33, who lives in the al-Salha neighbourhood of Omdurman. “It was terrifying, everyone was lying under their beds. What is happening is a nightmare.”

        <br><br>

    In Khartoum, the situation was relatively calm, although sporadic gunshots could be heard.

    <br><br>

    The conflict, which began on April 15, has displaced almost 1.1 million people internally and into neighbouring countries. Some 705 people have been killed and at least 5,287 wounded, according to the World Health Organization.
    <br><br>

    The battle between Sudan’s army and the paramilitary Rapid Support Forces (RSF) has led to a collapse in law and order with looting that both sides blame on the other. Stocks of food, cash and essentials are rapidly dwindling. </p>
  </div>

    <div class="link">
            <div>
                <a href="https://www.aljazeera.com/news/2023/5/20/khartoums-outskirts-attacked-as-sudan-war-enters-sixth-week">Link to the original article: <img src="@/assets/link.png" alt=""></a>
            </div>
    </div>

    
</template>

<script>
import Navbar from "../components/Navbar.vue"
export default {
    components: {Navbar}

}
</script>

<style scoped>
.box{
    display: flex;
    margin:0 0px auto auto;
    position: relative;

}
.box img{
    width: 100%
}
.textOn{
    position: absolute;
    top: 100px;
    left: 10px;
    color: white;
    font-family: 'Oswald', sans-serif;
}
.textOn h1{
    text-transform: uppercase;
    font-size: 56px;
    font-weight: bold
}
.textOn h3{
    text-transform: uppercase;
    font-size: 30px;
    font-weight: bold
}
.box-two{
    display: grid;
    grid-template-columns: repeat(2fr, auto);
    grid-template-rows: repeat(5fr,auto);
    text-align: left;
}
.bold-article{
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    color:rgb(193, 8, 8);
    letter-spacing: 0.1em;
    grid-column: 1;
    grid-row: 1/2;
    margin: 20px;
}
.article{
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    color: black;
    grid-column: 2;
    grid-row: 1/2;
    margin: 20px;
}
.link{
    margin: 20px auto;
    width: 50%;
    padding: 20px;
    font-size: 30px;
    text-align: center;
}
.link a{
    text-decoration: none;
    color: black;
}
.link a img{
    width: 40px;
}
.link a img:hover{
    width: 1.5em;
}
@media only screen and (max-width: 550px){
    .textOn{
        top:5px;;
        left: 5px;
    }
    .textOn h1{
        font-size: 18px;
    }
    .textOn h3{
        font-size: 16px;
    }
    .bold-article, .article{
        font-size: 16px;
    }
    .bold-article{
        grid-column:1/-1;
        grid-row: 1/3;
    }
    .article{
        grid-column:1/-1;
        grid-row: 4/6;
    }
}

</style>