
   
let seasonSmallmageElement = document.getElementById("seasonSmallmage");
//let seasonMediumlmageElement = document.getElementById("seasonMediumlmage");
let seasonSmallmage = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
//let seasonMediumlmage = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let summerSmallImage = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
//let summerMediumImage = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
let autumnSmallImage = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
//let autumnMediumImage = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
let winterSmallImage = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
//let winterMediumImage = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

function changeSeasontoSpring() {
    seasonSmallmageElement.src = seasonSmallmage;
    //seasonMediumlmageElement.src = seasonMediumlmage;
}

function changeSeasontoSummer() {
    seasonSmallmageElement.src = summerSmallImage;
        //seasonMediumlmageElement.src = summerMediumImage;
}
function changeSeasontoAutumn() {
    seasonSmallmageElement.src = autumnSmallImage;
    //seasonMediumlmageElement.src = autumnMediumImage;
}

function changeSeasontoWinter() {
    seasonSmallmageElement.src = winterSmallImage;
   // seasonMediumlmageElement.src = winterMediumImage;
}