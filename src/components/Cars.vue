<template>
  <Navbar/>
    <div class="wrapper">
        <div class="pic">
        <img  src="@/assets/Transmission.png" alt="">
        </div>

        <div class="box">
            <div class="box-one">
                <h1>Manual Transmissons</h1>
                <p>For those drivers who prefer to be more involved in the inner workings of their vehicle, the manual transmission delegates the shifting of engine gears back to the pilot.</p>
                <h2>Pros:</h2>
                <ul>
                    <li><p><span>Less expensive to purchase</span> - On average, a manual transmission will cost you about a thousand dollars less than an automatic of the same model</p></li>
                    <li><p><span>Cheaper to maintain</span> - Manual transmission cars require very little maintenance, and generally maintenance and repairs end up being significantly less costly</p></li>
                    <li><p><span>Better fuel efficiency</span> - Manual transmission engines are less complex, weigh less, and have more gears than automatics</p></li>
                    <li><p><span>Less likely to be stolen</span> - There is an entire generation that has never learned the finer points of manual transmission operation</p></li>
                    <li><p><span>Better control</span> - Manual transmissions give drivers greater control over the vehicle</p></li>
                </ul>
            </div>
            <div class="box-two">
                <h1>Automatic transmissions</h1>
                <p>Automatic transmissions have been eclipsing their older manual cousins for the past few years. Yet, despite their apparent popularity, automatic transmissions are not necessarily a better choice for many drivers. However, they do offer advantages over manual transmissions in several key areas</p>
                <h2>Pros:</h2>
                <ul>
                    <li><p><span>Easier to use</span> - Greatly reduced risk of stalling</p></li>
                    <li><p><span>Greatly reduced risk of stalling</span> - This is not a common problem for those driving automatic transmission, where stalling will only occur if there is a mechanical problem in the vehicle</p></li>
                    <li><p><span>Less manually restrictive</span> - Most new drivers are taught that the safest way to drive is to keep both hands firmly on the wheel at all times. This is possible when driving an automatic transmission vehicle, but is not possible with a manual transmission</p></li>
                    <li><p><span>Easier to use in heavy traffic</span> - Automatic transmissions allow the driver to move through heavy traffic without having to do more than push a single pedal</p></li>
                    <li><p><span>Better for hilly areas</span> - Automatic transmissions take care of steep inclines, enabling your car to operate efficiently no matter how steep the hill might be</p></li>
                </ul>
            </div>
        </div>

        
    </div>
    <div class="link">
            <a href="https://www.simplifiedinsurance.net/post/manual-vs-auto-transmission">Link to the original article: <img src="@/assets/link.png" alt=""></a>
        </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    name: 'lego',
    components: {Navbar},
    mounted(){
    document.title = "Manual vs Automatic Transmission"
  }

}
</script>

<style scoped>
.wrapper{
    animation: fadeIn 0.4s;
}
@keyframes fadeIn{
    0%{opacity: 0}
    100%{opacity: 100%}
}
.pic{
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.pic img{
    border-radius: 14px;
    width: 100%;
}
.box{
    display: flex;
    justify-content: space-around;
    text-align: left;
}
.box-one, .box-two{
    font-family: Verdana;
    background-color:bisque;
    border-radius: 8px;
    max-width: 500px;
    height: auto;
    margin: 5px;
    padding: 5px 15px;
}
.box-one p span, .box-two p span{
    text-decoration: underline;
    font-size: 18px;
    font-weight: bold;
}
.box-one ul li::marker{
    color:orangered;
}
.box-two ul li::marker{
    color:orangered;
}
.link{
    margin: 20px auto;
    width: 50%;
    padding: 20px;
    font-size: 20px;
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
@media only screen and (max-width: 500px){
    .box{
    display: grid;
    grid-template-columns: repeat(5fr, auto);
    grid-template-rows: repeat(12fr, auto) ;
    }
    .box-one{
        grid-column: 1/-1;
        grid-row: 1/6;
    }
    .box-two{
        grid-column: 1/-1;
        grid-row: 6/13;
    }
}


</style>