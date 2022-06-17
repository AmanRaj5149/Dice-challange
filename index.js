/*-----------------------------Plain-Javascript------------------------------------------*/
// let random1 = Math.floor( (Math.random() * 6) + 1 );
// let random2 = Math.floor( (Math.random() * 6) + 1 );
//
// if( random1 > random2){
//     document.getElementsByClassName("heading")[0].textContent = "🚀Player 1 won🚀";
// }else if(random2 > random1){
//     document.getElementsByClassName("heading")[0].textContent = "🎌Player 2 won🎌";
// }else{
//     document.getElementsByClassName("heading")[0].textContent = "🎏Draw🎏";
// }
//
// document.getElementsByClassName("dice-img")[0].setAttribute("src", `images/dice${random1}.png`);
// document.getElementsByClassName("dice-img")[1].setAttribute("src", `images/dice${random2}.png`);


/*-----------------------------J-QUERY------------------------------------------*/

$("button").on("click", () =>{

    let random1 = Math.floor( (Math.random() * 6) + 1 );
    let random2 = Math.floor( (Math.random() * 6) + 1 );

    if( random1 > random2){
       $(".heading").text("🚀Player 1 wins🚀");
    }else if(random2 > random1){
        $(".heading").text("🎌Player 2 wins🎌");
    }else{
        $(".heading").text("🎏Draw🎏");
    }

    $(".dice-img1").attr("src", `images/dice-${random1}.svg`);
    $(".dice-img2").attr("src", `images/dice-${random2}.svg`);

});
