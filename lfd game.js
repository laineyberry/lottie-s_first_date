
const acc = [
    "acc1.png",
    "acc2.png",
    "acc3.png",
    "acc4.png",
    "acc5.png",
    "acc6.png",
    "acc7.png",
    "acc8.png",
    "acc9.png",
    "acc10.png",
    "blank.png"
];

const hair = [

    "hair1.png",
    "hair2.png",
    "hair3.png",
    "hair5.png",
    "hair6.png",
    "hair8.png",
    "hair9.png",
    "hair10.png",
    "hair11.png",
    "blank.png"

];

const head = [

    "head1.png",
    "head2.png",
    "head3.png",
    "head4.png",
    "head5.png",
    "head6.png",
    "head7.png",
    "head8.png",
    "head9.png",
    "head10.png",
    "head11.png",
    "blank.png"

];

const outfit = [

    "outfit2.png",
    "outfit1.png",
    "outfit3.png",
    "outfit4.png",
    "outfit5.png",
    "outfit6.png",
    "outfit7.png",
    "outfit9.png",
    "blank.png"

];

const background = [
    "back1.png",
    "back2.png",
    "back3.png",
    "back4.png",
    "back5.png",
    "back6.png",
    "back7.png"
];

let accI = 0;
let hairI = 0;
let outfitI = 0;
let headI = 0;
let backI = 5;

function changeAcc() {

    const layer = document.getElementById("acclayer");

    accI += 1;

    if (accI >= acc.length) {

        accI = 0;
    }

    layer.src = acc[accI]

}

function changeHair() {

    const layer = document.getElementById("hairlayer");

    hairI += 1;

    if (hairI >= hair.length) {

        hairI = 0;
    }

    layer.src = hair[hairI]

}
function changeOutfit() {

    const layer = document.getElementById("outfitlayer");

    outfitI += 1;

    if (outfitI >= outfit.length) {

        outfitI = 0;
    }

    layer.src = outfit[outfitI]

}

function changeHead() {

    const layer = document.getElementById("headlayer");

    headI += 1;

    if (headI >= head.length) {

        headI = 0;
    }

    layer.src = head[headI]

}

function changeBack() {
    const backpng = document.getElementById("backgroundlayer");

    backI += 1;
    if (backI >= background.length) {
        backI = 0;
    }

    backpng.src = background[backI];
}

function reset() {

    const hairLayer = document.getElementById("hairlayer");
    const outfitLayer = document.getElementById("outfitlayer");
    const headLayer = document.getElementById("headlayer");
    const accLayer = document.getElementById("acclayer");
    const backgroundLayer = document.getElementById("backgroundlayer");
    hairLayer.src = "blank.png";
    outfitLayer.src = "blank.png";
    headLayer.src = "blank.png";
    accLayer.src = "blank.png";
    backgroundLayer.src = "back6.png";


}

function menuReturn() {

    window.location.href = "index.html";

}

document.addEventListener("DOMContentLoaded", function () {

document.getElementById("accbtn").addEventListener("click", changeAcc);
document.getElementById("hairbtn").addEventListener("click", changeHair);
document.getElementById("headbtn").addEventListener("click", changeHead);
document.getElementById("outfitbtn").addEventListener("click", changeOutfit);
document.getElementById("backbtn").addEventListener("click", changeBack);

document.getElementById("resetbtn").addEventListener("click", reset);
document.getElementById("menubtn").addEventListener("click", menuReturn);

});

window.onload = function () {
    const backpng = document.getElementById("backgroundlayer");
    backpng.src = background[backI]; 
};


