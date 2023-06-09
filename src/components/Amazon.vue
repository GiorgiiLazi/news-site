<template>
  <Navbar/>
    <div class="box">
        <h1>Amazing Amazon Fauna</h1>
        <p class="head">The Amazon Rainforest is by far the most biodiverse area on the planet. Learn more about 30 of the most amazing Amazon Rainforest animals that call the jungle home!</p>

        <div class="filter-box">
            <span>Filter:</span>
            <span><button class="active" @click="filtered('mammal')">Mammals</button></span>
            <span><button class="active"  @click="filtered('bird')">Birds</button></span>
            <span><button class="active"  @click="filtered('reptile')">Reptiles</button></span>
            <span><button class="active"  @click="filtered('arthropod')">Arthropods</button></span>
            <span><button class="active"  @click="filtered('amphibia')">Amphibias</button></span>
            <span><button class="active"  @click="deleteFilters">Reset filter</button></span>
        </div>

    
        <div class="flex">
            <ul class="wrapper" v-for="pic in pics" :key="pic.id">
                <li>  
                    <h2 class="animal-names">{{pic.id}}.{{pic.title}}</h2>
                        <div class="animal-pics">
                            <img @mouseover="dark" :src="require(`@/assets/fauna/${pic.link}.jpg`)" :alt="pic">
                        </div>
                    <p class="animal-description">{{pic.text}}</p>
                </li>
            </ul>
        </div>
        <div class="link">
            <a href="https://www.peruforless.com/blog/amazon-rainforest-animals/">Link to the original article: <img src="@/assets/link.png" alt=""></a>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
export default {
    components: {Navbar},
    setup(){
        const pics = ref([
        {link: 'red-howler-monkey', mammal: true, id: 1, title: "Red Howler Monkey", text: "The red howler monkeys can be heard by most travelers visiting the Peruvian jungle. Their loud roars can be heard up to 3 miles (5 kilometers) away. There is about a 50% chance to see these monkeys at our top Puerto Maldonado jungle lodges, with a greater chance the deeper you get into the jungle. Keep your eyes on the canopy!"},
        {link: 'jaguar-1', mammal: true, id: 2, title: "Jaguar", text: "Cheetah spots are to the plains of Africa as jaguar spots are to the jungle of South America. Many travelers count their lucky stars in eager anticipation of seeing this classic jungle icon. You will need to travel pretty deep into the jungle for a good chance at seeing a jaguar. The only lodge in the Tambopata Reserve in the Peruvian Amazon, the Tambopata Research Center boasts a 35% chance of seeing a jaguar in their natural habitat."},
        {link: 'Ocelot', mammal: true, id: 3, title: "Ocelot", text: "The ocelot is efficient at climbing, leaping and swimming. It prefers areas close to water sources with dense vegetation cover and high prey availability. It preys on small terrestrial mammals, such as armadillos, opossums, and lagomorphs. It is typically active during twilight and at night and tends to be solitary and territorial"},
        {link: 'river-otter', mammal: true, id: 4, title: "Giant River Otter", text: "The giant river otters found in the Amazon are the largest otters in the world. With some reaching up to 5.6 feet (1.7 meters), these otters swim through the Amazonian rivers and lakes using their strong tails and webbed feet. Giant river otters are very vocal, with at least 22 distinct sounds in their vocabulary."},
        {link: 'capybara', mammal: true, id: 5, title: "Capybara", text: "A rather docile rodent, capybaras look like giant guinea pigs. They live in the densely forested areas of South America near bodies of freshwater. Capybaras are surprisingly great swimmers and can hold their breath for up to 5 minutes underwater. These jungle animals are actually the largest rodent in the world today, about 4 feet (1.2 meters) long and 2 feet (60 centimeters) tall."},
        {link: 'sloth', mammal: true, id: 6, title: "Sloth", text: "Sloths are known as perezosos locally, meaning “lazy” in Spanish. Both the two-toed and three-toed sloths live in the Amazon. If you are really lucky, there is a small chance of seeing them in the wild during excursions at our favorite Puerto Maldonado jungle lodges."},
        {link: 'anteater', mammal: true, id: 7, title: "Collared Anteater", text: "While several anteater species call the Americas home, the collared anteater is unique to South America. Much smaller than the giant anteaters, they are able to climb trees in search of ants, termites, or other food. With tongues about 15 inches (40 centimeters) long, these anteaters can catch insects easily."},
        {link: 'pink-river-dolphin', mammal: true, id: 8, title: "Pink River Dolphin", text: "Pink river dolphins live in the Amazon River and its tributaries. While the babies are dark gray, the adult dolphins appear a light shade of pink. Native tribes around the Amazon have several legends dedicated to the pink dolphins. One of the most well known says the dolphins turn into handsome young men at night, heading to the shores to seduce young women. To see these incredible dolphins for yourself, consider a stay at an Iquitos jungle lodge or taking a luxury river cruise."},
        {link: 'puma-1', mammal: true, id: 9, title: "Puma", text: "Behold a true jungle legend, the puma. With its sleek build and carnivorous ways, “fierce” is an appropriate adjective to characterize these rainforest cats. Consider yourself very, very lucky if you see a puma in the wild. The owner of Rainforest Expeditions has not seen one in more than 20 years working in the Amazon!"},
        {link: 'bearded-tamarin', mammal: true, id: 10, title: "Bearded Emperor Tamarin", text: "The bearded emperor tamarin gives new meaning to the phrase “monkeying around”. With their distinct white mustache and beard, this primate lives with a small, extended family of between 4 and 15 members. Bearded emperor tamarins see the world in only two colors, helping detect predators, even the ones with the best camouflage. Some females see a third color, which helps to detect the ripest fruits."},
        {link: 'Pygmy', mammal: true,  id: 11, title: "Pygmy marmoset", text: "These primates are notable for being the smallest monkeys in the world, at just over 100 g (3.5 oz). They are generally found in evergreen and river-edge forests and are gum-feeding specialists, or gummivores. About 83% of the pygmy marmoset population lives in stable troops of two to nine individuals, including a dominant male, a breeding female, and up to four successive litters of offspring. The modal size of a standard stable troop would be six individuals."},
        {link: 'tapir', mammal: true, id: 12, title: "Amazonian Tapir", text: "At first glance, you may think tapirs are some sort of wild pig or somehow related to anteaters. In reality, tapirs are most closely related to horses and rhinoceros! Baby Amazonian tapirs are born with white stripes and spots that fade over time. They are great swimmers and often run into the rivers to escape their predators."},
        {link: 'scarlet-macaw', bird: true, id: 13, title: "Macaw", text: "Macaw feathers come in just about any color, with red, yellow, green, and blue being the most common. The scarlet macaw is the most well-known, with its distinct red, yellow, and blue feathers. It is common for macaws to gather at clay licks in search of salt. This allows many visitors to Puerto Maldonado the chance to see these majestic birds in the wild."},
        {link: 'harpy-eagle', bird: true, id: 14, title: "Harpy Eagle", text: "The intense eyes and sharp beak are key features of the harpy eagle. A top predator in the jungle, the harpy eagle soaring through the Amazonian sky is a phenomenal sight. Harpy eagles have a gray head, white belly, and an intricate pattern of white, gray and black feathers on their wings."},
        {link: 'potoo-bird', bird: true, id: 15, title: "Potoo Bird", text: "Potoo birds offer a new take on camouflage. These jungle birds blend in brilliantly as an extension of the bark or as a broken off stump. As nocturnal jungle dwellers, they are active at night. Also, they give eerie vocalizations that carry long distances to alert others of their presence."},
        {link: 'royal-flycatcher-1', bird: true, id: 16, title: "Royal Flycatcher", text: "While the body of this bird is rather plain, it has an extremely beautiful crest it displays when threatened or trying to attract a mate. The bright feathers of its crest range from yellow to red and have purplish-blue tips and spots."},
        {link: 'cotinga-bird', bird: true, id: 17, title: "Spangled Cotinga", text: "Male spangled cotinga birds are characterized by vibrant turquoise feathers covering their body with a patch of dark pink feathers on their throat. This Amazon Rainforest animal lives high in the canopy and, unlike the other birds on this list, does not have the ability to make sounds."},
        {link: 'toucan', bird: true, id: 18, title: "Toucan", text: "The large, often colorful beaks are the most distinctive features of toucans. The Tambopata region in Peru is home to many toucan species, including the yellow-ridged toucan and green-feathered emerald toucanet."},
        {link: 'paradise-tanager', bird: true, id: 19, title: "Paradise Tanager", text: "This multicolored songbird is a common bird to spot in the Amazon. With bright green heads and sky blue underbellies, they generally stand out from their surroundings. This bird nests high in the canopy, far from predators that might go after their eggs."},
        {link: 'spectacled-owl', bird: true, id: 20, title: "Spectacled Owl", text: "The spectacled owl is more often heard than seen. Its voice is a low-pitched rhythmic series of accelerating hoots. Adults and young also emit a single catlike cry. The juveniles appear very different from the adults, mostly buff-coloured with brown wings and a black face. The spectacled owl belongs to the family Strigidae."},
        {link: 'poison-dart-frog', amphibia: true, id: 21, title: "Poison Dart Frog", text: "Some of the most colorful amphibians in the jungle are poison dart frogs. These small, poisonous jungle creatures typically have intricate patterns on their brightly colored bodies. Ranging from hues of red, blue, yellow, and everything in between, their bright colors are a key defense mechanism to ward off predators."},
        {link: 'side-necked-turtle', reptile: true, id: 22, title: "Side-Necked Turtle", text: "Photoshop was not used to superimpose the swarm of butterflies in this photo. Different species of butterflies actually drink from the side-necked turtles tears, a natural occurrence in the Amazon. Many plant eaters in the Amazon do not get enough salt from their diet. They have come up with creative solutions, like drinking turtle tears, to increase their salt intake."},
        {link: 'black-caiman', reptile: true, id: 23, title: "Black Caiman", text: "The largest predator of the Amazon ecosystem is the black caiman. Like its name suggests, this reptile has dark scales which helps to blend in with their surroundings. Most of the time, you are only able to see the eyes lurking above the water."},
        {link: 'bicolored-tree-frog', amphibia: true, id: 24, title: "Bicolored Tree Frog", text: "The eyes on this frog are certainly its most notable feature. These giant leaf frogs are commonly found across the Amazon. These frogs have bright green backsides with a cream colored belly. The frogs spend most of their time in trees rather than the forest floor. They swing between trees like monkeys, giving them an alternate name: giant monkey frog."},
        {link: 'green-anaconda', reptile: true, id: 25, title: "Green Anaconda", text: "The green anacondas are the heaviest and second longest snakes in the world. These water boas are rather clumsy on the land, but more sly in the swamps, marshes, and streams they hunt in. With their eyes and nose on top of their heads, they can hide most of their body underwater while keeping a look out for food."},
        {link: 'scorpion', id: 26, arthropod: true, title: "Amazon scorpion", text: "While scorpions are often thought of as desert dwellers, the Amazon Rainforest is also home to several species. After scrolling through the previous Amazon Rainforest animal photos, you probably thought you had just about seen it all. Then you learn that scorpions glow under blacklight! Under the beam of an ultraviolet light, scorpions glow a neon blue, lighting up like beacons in the night."},
        {link: 'pink-toe-tarantula-1', arthropod: true, id: 27, title: "Pink Toe Tarantulas", text: "Pink Toe Tarantulas have a solid black body, but show some personality at their toes. A rather docile tarantula, they have pink tips on each of their eight legs. Unlike most tarantulas, they are active during the day. In addition, the pink toes help them stick out from their surroundings, allowing travelers a better chance of spotting them."},
        {link: 'blue-morpho-butterfly', arthropod: true, id: 28, title: "Blue Morpho Butterfly", text: "The Amazon is home to at least 7,000 species of butterflies which is 35% of the worlds known butterfly species. One of the most striking butterflies in the jungle is the blue morpho. With brilliant blue wings, you cannot miss them fluttering around the rainforest."},
        {link: 'amber-phantom-butterfly', arthropod: true, id: 29, title: "Urodid Moth Cocoon ", text: "This incredible butterfly with translucent wings lives in the deep, well-shaded parts of the jungle. It earned its name from the amber accents on their wings and from being semi transparent, like a phantom or ghost."},
        {link: 'leafcutter-ant', arthropod: true, id: 30, title: "Leafcutter Ant", text: "The leafcutter ants live in large, complex colonies, with each ant playing a specific role based on its size. Leafcutter ants eat more vegetation than any other creature in the rainforest. In addition to vegetation, these ants cultivate fungus underground that turns poisonous plants into an edible mushroom."}
        
        ])

        return {pics}
        
    },
    mounted(){
        document.title="Top Amazon Fauna"
    },
    methods:{
        filtered(animalType){
            if(animalType === 'mammal'){
            this.pics = this.pics.filter(pic => !pic.bird && !pic.reptile && !pic.amphibia && !pic.arthropod)
            }
            if(animalType === 'bird'){
            this.pics = this.pics.filter(pic => !pic.mammal && !pic.reptile && !pic.amphibia && !pic.arthropod)
            }
            if(animalType === 'reptile'){
            this.pics = this.pics.filter(pic => !pic.mammal && !pic.bird && !pic.amphibia && !pic.arthropod)
            }
            if(animalType === 'amphibia'){
            this.pics = this.pics.filter(pic => !pic.mammal && !pic.bird && !pic.reptile && !pic.arthropod)
            }
            if(animalType === 'arthropod'){
            this.pics = this.pics.filter(pic => !pic.mammal && !pic.bird && !pic.reptile && !pic.amphibia)
            }
        },
        deleteFilters(){
            // location.reload()
            window.location = window.location
        },
        
        
    }
}

    


</script>

<style scoped>
*{
    box-sizing: border-box;
}
.box{
    animation: fadeIn 0.4s;
}
@keyframes fadeIn{
    0%{opacity: 0}
    100%{opacity: 100%}
}
h1{
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    color: purple;
    font-size: 3em;
    text-shadow: 1px 1px 2px purple;
}
.head{
    color: #666;
    font-size: 1.2em;
    letter-spacing: 0.1em;
    font-weight: bold;
    font-family:'Oswald', sans-serif;
    text-transform:uppercase;
    max-width: 800px;
    display: block;
    margin: 20px auto;
    padding: 20px;
    text-shadow: 1px 1px 2px #666;
}
.animal-names{
    font-size: 0.8em;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    color: purple;
}
.flex{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.wrapper{
    margin: 0;
    padding: 0;    
}
.wrapper li{
    margin: 10px;
    background-color:palegoldenrod;
    padding: 20px;
    border-radius: 14px;
    list-style: none;
    max-width: 500px;
    max-height: auto;
    text-align: center;
}
.animal-pics img{
    display: block;
    margin: 20px auto;
    width: 100%;
    border-radius: 8px;
    transition: transform .4s;
}
.animal-pics img:hover{
    transform: scale(1.2);
}
.animal-description{
    font-size: 12px;
    font-family:'Oswald', sans-serif;
    text-align: left;
    text-transform: none;
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
.filter-box{
    display: flex;
    justify-content:center;
    align-items: center;
    flex-wrap: wrap;
}
.filter-box span{
    margin: 5px;
}
.active{
    border: none;
    color: white;
    background-color:limegreen;
    padding: 10px;
    border-radius: 14px;
    cursor: pointer;
}
.active:hover{
    background-color: green;
}




</style>