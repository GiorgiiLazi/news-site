<template>
<div class="box">
    <div class="wrapper-one">
        <div class="article-one">
            <img src="@/assets/legocity.jpg" alt="">
            <a class="bold-statement" href="#">What makes Lego so unique?</a>
            <div class="description">
                <a href="#">We delve into curiuos history of Lego world which put it's brand on the Olympus of modern toy making</a>
                <button>Read more</button>
            </div>
        </div>
    </div>


    <div class="wrapper-two">
        <div class="right-panel">
            <h1>New</h1>
            <div>
                <router-link :to="{name: 'home'}" class="title-one">Manual vs automatic car transmissions</router-link>
                <router-link :to="{name: 'home'}" class="title-two">Take a few moments and familiarise yourself with the benefits associated with the two different kinds of transmission</router-link>
            </div>
            <hr>
            <div>
                <router-link :to="{name: 'home'}" class="title-one">War in Sudan</router-link>
                <router-link :to="{name: 'home'}" class="title-two">The humanitarian disaster unfolding in urban areas and what can stop the slide into full-scale war</router-link>
            </div>
            <hr>
            <div>
            <router-link :to="{name: 'home'}" class="title-one">Unexplained Mysteries of the Amazon</router-link>
            <router-link :to="{name: 'home'}" class="title-two">The world's biggest tropical rainforest hides lots of scary secrets—and some beautiful ones too</router-link>
            </div>
            <hr>
            <h5>Check out author's other projects:</h5>
            <img src="@/assets/qr.png" alt="">
        </div>
    </div>
</div>

  


  
</template>

<script>
export default {

}
</script>

<style>
body{
    margin: 0;
    padding: 0;
}
.box{
    display:grid;
    grid-template-columns: repeat(12fr, minmax(50px, 120px));
    grid-template-rows: repeat(12fr, minmax(50px, 120px));
}
.wrapper-one{
    grid-column: 1/2;
    grid-row: 1/10;
    max-width: 800px;
    margin: 5px;

}
.wrapper-two{
    grid-column: 10/13;
    grid-row: 1/10;
    max-width: 350px;
    margin: 5px 0;
}
.article-one{
    display:inline-block;
    grid-row: 2/10;
    grid-column: 1/10;
    display: grid;
    grid-template-columns: repeat(5fr, minmax(50px, 150px));
    grid-template-rows: repeat(5fr, minmax(50px, 150px));
    width: 100%;

}
.article-one img{
    width: 100%;
    grid-column: 1/3;
    grid-row: 1/4;
}
.bold-statement{
    width: 400px;
    font-size: 45px;
    letter-spacing: 0.2px;
    font-weight: bold;
    text-decoration: none;
    text-align: left;
    color: black;
    grid-column: 1;
    grid-row: 4/5;
}
.description{
    width: 400px;
    font-size: 15px;
    grid-column: 2;
    grid-row: 4/5;

}
.description a {
    font-size: 12px;
    position: relative;
    top: 10px;
    text-align: left;
    letter-spacing: 0.1em;
    color: black;
    text-decoration: none;

}
.description button{
    position: relative;
    top: 40px;
    right: 150px;
    border: none;
    background-color: orangered;
    color: white;
    padding: 10px;
    border-radius: 4px;
}
.right-panel{
    text-align:center;
    max-height: 700px;
    background-color:rgb(14, 1, 27)
}
.right-panel h1{
    display: flex;
    align-self: flex-start;
    color:chocolate;
    margin: 0 0 20px 5px;
}
.right-panel h5{
    color:chocolate;
    margin: 0 0 10px 0px;
}
.right-panel div{
    width: 100%;
    
}
.title-one{
    display: block;
    margin: 5px;
    color: white;
    font-weight: bold;
    font-size: 20px;
}
.title-two{
    margin: 5px;
    display: block;
    color:#888;
}
a{
    text-decoration:none;
}
hr{
    border: 1px solid violet;
}
.right-panel img{
    max-width: 130px;
    margin: 30px 0;
}


</style>