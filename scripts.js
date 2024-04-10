/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

let logo = "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/icecream-com/background-design/Nav-Logo.png"
let iceCream = [
    {
        "flavor": "Butter Pecan",
        "tags": [],
        "allergens": ["pecan", "milk"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/dreyer%27s/products/classic/Dreyers-48oz-3D-ButterPecan.png",
        "ranking": 18,
        "Description": "Leave it to your kids to come up with the most amazing combinations. The tutu and the rain boots. The PJs and the towel cape. Celebrate their creativity with the ultimate combo: A sweet treat of rich, buttery vanilla ice cream and perfectly crunchy roasted pecans."
    },
    {
        "flavor": "Coffee",
        "tags": [],
        "allergens": ["milk"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/dreyer%27s/products/classic/Dreyers-48oz-3D-Coffee.png",
        "ranking": 3,
        "Description": "The kids always loved helping you make coffee in the morning. Now that they're all grown up, give them a sweet surprise when they come home to visit. Rich creaminess and delicious coffee flavor give everyone lots of reasons to linger over dessert."
    },
    {
        "flavor": "Cookies 'N Cream",
        "tags": [],
        "allergens": ["milk", "soy", "wheat"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/dreyer%27s/products/classic/Dreyers-48oz-3D-CnC.png",
        "ranking": 1,
        "Description": "There's nothing like milk and cookies to make any playdate more fun. But why not mix things up with creamy vanilla ice cream with crunchy cream-filled chocolate sandwich cookies? It's a sweet surprise that will make you the most popular house on the block."

    },
    {
        "flavor": "Mint Chocolate Chip",
        "tags": [],
        "allergens": ["milk", "soy"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/dreyer%27s/products/classic/Dreyers-48oz-3D-MintChocChip.png",
        "ranking": 2,
        "Description": "Summer pool parties call for ice cream, especially the creamy, chilly blast of mint chocolatey chips. It's just the right amount of sweet and better than a blast of air conditioning to cool the family off. Brrrr. Delicious."
    },
    {
        "flavor": "Neopolitan",
        "tags": [],
        "allergens": ["milk"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/dreyer%27s/products/classic/Dreyers-48oz-3D-Neapolitan.png",
        "ranking": 10,
        "Description": "Seeing all three of your kids play together is the sweetest. Give your little trio a dessert that all three of them will love with rich chocolate, sweet strawberry, and creamy vanilla all in one carton. It's the perfect blend of flavors for a perfect afternoon together."
    },
    {
        "flavor": "Chocolate Peanut Butter Park",
        "tags": [],
        "allergens": ["milk", "peanut", "soy"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/dreyer%27s/products/rocky-road/Dreyers_RRC_48oz_ChocolatePBPark.png",
        "ranking": 8,
        "Description": "Few things are more perfect than chocolate and peanut butter. We mix creamy peanut butter into our rich chocolate ice cream and add chocolate covered peanut butter cups for an extra level of indulgence. It's every chocoholic peanut butter fan's dream."
    },
    {
        "flavor": "Vanilla",
        "tags": [],
        "allergens": ["milk"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/dreyer%27s/products/classic/Dreyers-48oz-3D-Vanilla.png",
        "ranking": 9,
        "Description": "You love giving your kids paper and paint and letting their imagination run wild, so why not let them get creative with our smooth, creamy vanilla ice cream? It's a delicious canvas for any tasty creation. Grab the sprinkles, the chocolate sauce, the fruit and let them go nuts! Come to think of it, why not add nuts?"
    },
    {
        "flavor": "Edy's Orange Cream Sherbet",
        "tags": [],
        "allergens": ["milk"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/dreyer%27s/products/sherbert/Dreyers_SHBT_48oz_OrangeCream.png",
        "ranking": 20,
        "Description": "\"Knock knock.\" \"Who's there?\" \"Orange.\" \"Orange who?\" \"Orange you glad it's sherbet?\" Your kids love knock-knock jokes almost as much as they'll love this tangy orange sherbet mixed with creamy vanilla light ice cream. It's simply delicious, and that's no laughing matter."
    },
    {
        "flavor": "Churro Caramel Crossroads",
        "tags": [],
        "allergens": ["milk", "soy", "wheat"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/dreyer%27s/products/rocky-road/Dreyers_RRC_48oz_ChurroCaramelCrossroads.png",
        "ranking": 19,
        "Description": "A classic flavor combination taken to new heights. Crispy cinnamon covered churro pieces are layered within a rich caramel ice cream surrounded by gooey swirls of fudge. A bite that's sure to satisfy and delight!"
    },
    {
        "flavor": "Cookie Cobblestone",
        "tags": [],
        "allergens": ["egg", "milk", "soy", "wheat"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/dreyer%27s/products/rocky-road/Dreyers_RRC_48oz_CookieCobblestone.png",
        "ranking": 4,
        "Description": "All of your favorite childhood goodies at the tip of your spoon? Yep! Our twist on S'mores is made with chocolate sandwich cookies, gooey swirls of marshmallows, chunks of glorious cookie dough all surrounded by rich chocolate ice cream. Campfires will never be the same."
    },
    {
        "flavor": "Mocha Almond Avenue",
        "tags": [],
        "allergens": ["milk", "almonds"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/dreyer%27s/products/rocky-road/Dreyers_RRC_48oz_MochaAlmond.png",
        "ranking": 5,
        "Description": "How do you make coffee ice cream better? Add rich swirls of fudge and crunchy almonds! Together you get creamy spoonfuls of mocha goodness with just enough nuttiness to make you keep coming back for more!"
    },
    {
        "flavor": "Salted Caramel Path",
        "tags": [],
        "allergens": ["milk", "soy", "wheat"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/dreyer%27s/products/rocky-road/Dreyers_RRC_48oz_CaramelPretzel.png",
        "ranking": 22,
        "Description": "How do we achieve salty sweet perfection? First we start with a rich salted caramel ice cream, layer in swirls of fudge, pockets of chocolatey covered toffee, and crunchy chocolatey covered salted pretzels. Spoon please!"
    },
    {
        "flavor": "Original Rocky Road",
        "tags": [],
        "allergens": ["milk", "almonds"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/dreyer%27s/products/rocky-road/Dreyers_RRC_48oz_OrigRockyRd.png",
        "ranking": 11,
        "Description": "Nothing beats The Original. Our founders created this classic almost 100 years ago and we continue honor it with every scoop! We start with our classic chocolate ice cream, and fold in crunchy almonds and bite size chewy marshmallows for the perfect scoop every time."
    },
    {
        "flavor": "Triple Fudge Brownie",
        "tags": [],
        "allergens": ["egg", "milk", "soy", "wheat"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/dreyer%27s/products/rocky-road/Dreyers_RRC_48oz_TripleChocolateFudge.png",
        "ranking": 6,
        "Description": "A fan favorite re-imagined: our beloved Double Fudge Brownie now with crispy brownie edge! A delicious pairing of brownie pieces and brownie batter swirls is now complete with extra indulgence for the ultimate brownie lover."
    },
    {
        "flavor": "Fudge Tracks",
        "tags": ["no sugar added", "1/2 the fat"],
        "allergens": ["milk", "peanut", "soy", "tree nuts"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/dreyer%27s/products/slow-churned-/Dreyers_NSA_48oz_FudgeTracks.png",
        "ranking": 23,
        "Description": "A visit from the grandkids is the best. You love racing around after them, but when you want to slow things down a minute, bring out the bowls of Fudge Tracks. This fudge swirled vanilla light ice cream is packed with mini peanut butter cups, with no added sugar. It's so delicious it'll even have the kids sitting still for a few minutes before they're off on a new adventure."
    },
    {
        "flavor": "Vanilla",
        "tags": ["no sugar added", "1/2 the fat"],
        "allergens": ["milk"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/dreyer%27s/products/slow-churned-/Dreyers_NSA_48oz_Vanilla.png",
        "ranking": 12,
        "Description": "You've always been a film buff and thanks to you, your kids love the classics. They're always up for a family screening of one of your black and white faves, and they know exactly what flavor you'll be serving: a creamy, smooth, sweet vanilla that's just as timeless as the old screen stars. And thanks to no added sugar, it's a classic you can enjoy together for years to come."
    },
    {
        "flavor": "Chocolate Chip Cookie Dough",
        "tags": [],
        "allergens": ["egg", "milk", "soy", "wheat"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/haagen-dazs/products/pints/haagen-dazs-chocolate-chip-cookie-dough-ice-cream-pint-1500x1140.png",
        "ranking": 7,
        "Description": "Bites of buttery cookie dough and sweet fudge chips mixed into our signature vanilla ice cream. A cookie dough lover's dream come true."
    },
    {
        "flavor": "Matcha Green Tea",
        "tags": [],
        "allergens": ["egg", "milk"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/haagen-dazs/products/pints/haagen-dazs-matcha-green-tea-ice-cream-pint-1500x1140.png",
        "ranking": 15,
        "Description": "Delicate and distinctive Japanese matcha green tea enhanced with the richness of sweet cream."
    },
    {
        "flavor": "Pineapple Coconut Ice Cream",
        "tags": [],
        "allergens": ["egg", "milk", "coconut"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/haagen-dazs/products/pints/haagen-dazs-pineapple-coconut-ice-cream-pint-1500x1140.png",
        "ranking": 21,
        "Description": "Juicy, ripe pineapples mixed into sweet coconut ice cream."
    },
    {
        "flavor": "Pistachio",
        "tags": [],
        "allergens": ["egg", "milk", "pistachio"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/haagen-dazs/products/pints/haagen-dazs-pistachio-ice-cream-pint-1500x1140.png",
        "ranking": 16,
        "Description": "Lightly roasted California pistachios paired perfectly with velvety sweet cream."
    },
    {
        "flavor": "Rum Raisin",
        "tags": ["non GMO"],
        "allergens": ["egg", "milk"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/haagen-dazs/products/pints/haagen-dazs-rum-raisin-ice-cream-pint-1500x1140.png",
        "ranking": 17,
        "Description": "Plump and delicious rum-soaked California raisins mixed into sweetened cream adds just the right amount of warmth to this cool treat."
    },
    {
        "flavor": "Strawberry",
        "tags": [],
        "allergens": ["egg", "milk"],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/haagen-dazs/products/pints/haagen-dazs-strawberry-ice-cream-pint-1500x1140.png",
        "ranking": 14,
        "Description": "We could have stopped when we found a perfectly fine strawberry. But stopping short of perfectly perfect?"
    },
    {
        "flavor": "Mango Sorbet",
        "tags": ["gluten free", "non dairy"],
        "allergens": [],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/haagen-dazs/products/pints/Haagen-dazs-mango-sorbet-pint-1500x1140.png",
        "ranking": 13,
        "Description": "We blended juicy, tropical mangos into a smooth puree to create a refreshing treat with sweet fruit intensity."
    },
    {
        "flavor": "Raspberry Sorbet",
        "tags": ["gluten free", "non dairy"],
        "allergens": [],
        "imageUrl": "https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/haagen-dazs/products/pints/Haagen-dazs-raspberry-sorbet-pint-1500x1140.png",
        "ranking": 24,
        "Description": "We blended delicious, ripe raspberries into a smooth puree for this tangy yet sweet fruit sorbet."
    }
]

let allProducts = iceCream;


const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";



// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < iceCream.length; i++) {
        let title = iceCream[i].flavor.toUpperCase();
        let imageURL = iceCream[i].imageUrl;
        let description = iceCream[i].Description;
        let allergens = "Allergens: ";
        for(let j = 0; j < iceCream[i].allergens.length-1; j++){
            allergens += iceCream[i].allergens[j] + ", ";
        }
        if(iceCream[i].allergens.length !== 0) {
            allergens += iceCream[i].allergens[iceCream[i].allergens.length - 1]
        }
        else{
            allergens += "none";
        }

        let ranking = "Bighani's Ranking: " + iceCream[i].ranking;

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL, description, allergens, ranking); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL, newDescription, newAllergens, newRanking) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Picture";

    const cardDescription = card.querySelector("p");
    cardDescription.textContent = newDescription;

    const backHeader = card.querySelector("h1");
    backHeader.textContent = newTitle;

    const backAllergens = card.querySelector(".card-content-back h2");
    backAllergens.textContent = newAllergens;

    const backRanking = card.querySelector("#ranking");
    backRanking.textContent = newRanking;

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    // console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function getGlutenFree() {
    iceCream = allProducts;
    iceCream = iceCream.filter(isGF);
    showCards();
}

function getNonDairy() {
    iceCream = allProducts;
    iceCream = iceCream.filter(isNonDairy);
    showCards();
}

function getHalfFat() {
    iceCream = allProducts;
    iceCream = iceCream.filter(isHalfFat);
    showCards();
}
function getNonGMO() {
    iceCream = allProducts;
    iceCream = iceCream.filter(isnonGMO);
    showCards();
}

function getNoSugarAdded() {
    iceCream = allProducts;
    iceCream = iceCream.filter(noSugarAdded);
    showCards();
}
function isGF(flavor){

    for(i = 0; i < flavor.tags.length; i++){
        if(flavor.tags[i] === "gluten free")
            return true;
    }
    return false;
}

function isHalfFat(flavor){
    for(i = 0; i < flavor.tags.length; i++){
        if(flavor.tags[i] === "1/2 the fat")
            return true;
    }
    return false;
}

function isNonDairy(flavor){
    for(i = 0; i < flavor.tags.length; i++){
        if(flavor.tags[i] === "non dairy")
            return true;
    }
    return false;
}

function noSugarAdded(flavor){
    for(i = 0; i < flavor.tags.length; i++){
        if(flavor.tags[i] === "no sugar added")
            return true;
    }
    return false;
}
function isnonGMO(flavor){
    for(i = 0; i < flavor.tags.length; i++){
        if(flavor.tags[i] === "non GMO")
            return true;
    }
    return false;
}
function getAllFlavors() {
    iceCream = allProducts;
    showCards();
}


//alphabetical sort
function alphaSort(){
    iceCream = iceCream.sort((a,b) => (a.flavor < b.flavor) ? -1 : (a.flavor > b.flavor) ? 1 : 0);
    showCards();
}

function rankSort(){
    iceCream = iceCream.sort((a,b) => (a.ranking < b.ranking) ? -1 : (a.ranking > b.ranking ) ? 1 : 0);
    showCards();
}

function search1(){
    var userInput = document.getElementById("search");
    var toFind = userInput.value.toLowerCase();
    console.log("searching: " + toFind);
    let found=[];

    for(let i = 0; i < iceCream.length; i++){
        if(iceCream[i].flavor.toLowerCase().search(toFind.toLowerCase()) !== -1 || iceCream[i].Description.toLowerCase().search(toFind.toLowerCase()) !== -1){
            found.push(iceCream[i]);
        }
    }

    console.log(found.length + " length of found");

    iceCream = found;
    showCards();
    iceCream = allProducts;

    document.getElementById("search").value = "";
}

var input = document.getElementById("#search");
input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        console.log("enter pressed");
    }
});

