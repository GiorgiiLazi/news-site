<template>
<div class="box">
    <div class="wrapper-one">
        <div class="article-one">
            <img src="@/assets/legocity.jpg" alt="">
            <router-link :to="{name: 'lego'}"  class="bold-statement" href="#">What makes Lego so unique?</router-link>
            <div class="description">
                <router-link :to="{name: 'lego'}" >We delve into curiuos history of Lego world which puts it's brand on the Olympus of modern toy making</router-link>
                <router-link :to="{name: 'lego'}" class="button">Read more</router-link>
            </div>
        </div>
    </div>


    <div class="wrapper-two">
        <div class="right-panel">
            <h1>New</h1>
            <div>
                <router-link :to="{name: 'cars'}" class="title-one">Manual vs automatic car transmissions</router-link>
                <router-link :to="{name: 'cars'}" class="title-two">Take a few moments and familiarise yourself with the benefits associated with the two different kinds of transmission</router-link>
            </div>
            <hr>
            <div>
                <router-link :to="{name: 'sudan'}" class="title-one">War in Sudan</router-link>
                <router-link :to="{name: 'sudan'}" class="title-two">The humanitarian disaster unfolding in urban areas and what can stop the slide into full-scale war</router-link>
            </div>
            <hr>
            <div>
            <router-link :to="{name: 'amazon'}" class="title-one">Fauna of Amazon: The most bizarre animals</router-link>
            <router-link :to="{name: 'amazon'}" class="title-two">The world's biggest tropical rainforest hides lots of scary secrets — and some beautiful ones too</router-link>
            </div>
            <hr>
            <h5>Check out other author's projects:</h5>
            <img src="@/assets/qr.png" alt="">
        </div>
    </div>
</div>

  


  
</template>

<script>
export default {

}
</script>

<style scoped>
body{
    margin: 0;
    padding: 0;
}
.box{
    display:grid;
    grid-template-columns: repeat(auto, 12fr);
    grid-template-rows: repeat(auto, 12fr);
    animation: fadeIn 0.4s;
}
@keyframes fadeIn{
    0%{opacity: 0}
    100%{opacity: 1}
}
.wrapper-one{
    grid-column: 1/10;
    grid-row: 1/10;
    margin: 5px 5px 2.5px 5px;

}
.wrapper-two{
    grid-column: 11/13;
    grid-row: 1/10;
    margin: 5px 5px 5px 2.5px;
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
    border-radius: 8px;
}
.bold-statement{
    margin: 0 5px;
    font-size: 45px;
    font-family: fantasy;
    letter-spacing: 0.1em;
    font-weight: bold;
    text-decoration: none;
    text-align: left;
    color: purple;
    grid-column: 1;
    grid-row: 4/5;
    text-transform: uppercase;
}
.description{
    font-size: 15px;
    font-family:Georgia serif;
    grid-column: 2;
    grid-row: 4/5;

}
.description a {
    color: purple;
    font-size: 16px;
    position: relative;
    top: 10px;
    text-align: left;
    letter-spacing: 0.1em;
    text-decoration: none;

}
.description .button{
    margin: 10px 0;
    border: none;
    font-weight: bold;
    background-color: purple;
    color: white;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
}
.description a{
    display: inline-block;
    margin: 0 2px;
}
.right-panel{
    text-align:center;
    font-family: Calibri;
    background-color:rgb(14, 1, 27);
    border-radius: 8px;
}
.right-panel h1{
    display: flex;
    align-self: flex-start;
    color:chocolate;
    margin: 0 0 20px 15px;
}
.right-panel h5{
    color:chocolate;
    margin: 0 0 10px 0px;
}
.right-panel div .title-one{
    text-align: center;
    text-transform: uppercase;
}
.right-panel div .title-two{
    text-align: left;
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
    border-radius: 8px;
}

@media only screen and (max-width: 600px){
    .wrapper-one{
        grid-column: 1/-1;
        grid-row: 1/10;
        margin: 5px;
    }
    .wrapper-two{
        grid-column: 1/-1;
        grid-row: 10/13;
        margin: 5px;
    }
    .article-one img{
        grid-row: 1/8;
        grid-column: 1/-1;
    }
    .bold-statement{
        grid-row: 9/10;
        grid-column: 1/-1;
    }
    .description{
        grid-column: 1/-1;
        grid-row:11/13;
    }
    .description .button{
        margin:10px 100px;
    }
}
</style>