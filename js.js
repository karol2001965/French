document.addEventListener("DOMContentLoaded", function () {

    var inp_bez = document.querySelector(".bezokolicznik");
    var btn_bez = document.querySelector(".btn_bez_los");
    var btn_bez_spr = document.querySelector(".btn_bez_spr");
    var inp_tlu = document.querySelector(".tlumaczenie");
    var div_bez = document.querySelector(".div_bez");
    var div_tlu = document.querySelector(".div_tlu");
    var div_1 = document.querySelector(".div_1");
    var l1 = document.querySelector(".l1");

    var div_2 = document.querySelector(".div_2");
    var l2 = document.querySelector(".l2");
    var div_3 = document.querySelector(".div_3");
    var l3 = document.querySelector(".l3");
    var div_21 = document.querySelector(".div_21");
    var l21 = document.querySelector(".l21");
    var div_22 = document.querySelector(".div_22");
    var l22 = document.querySelector(".l22");
    var div_23 = document.querySelector(".div_23");
    var l23 = document.querySelector(".l23");


    // var inp_bez_val = inp_bez.value;
    var czasowniki = [




        
        ["amier", "kochać", "j'aime", "tu aimes", "il aime", "nous aimons", "vous aimez", "ils aiment"],
        ["aller", "iść", "je vais", "tu vas", "il va", "nous allons", "vous allez", "ils vont"]




    ]

    const capitalize = (s) => {

        return s.charAt(0).toLowerCase() + s.slice(1)
    }
  for ( let i=0 ; i<czasowniki.length;i++) {
  for ( let j=0 ; j<czasowniki[0].length;j++) {


      console.log(capitalize(czasowniki[i][j]));
  }
  }




    //     {
    //        amier:{
    //            tlumaczenie:"kochac"
    //        }
    //     }
    //     // {
    //     //     bezokolicznik:"attendre",
    //     //     tlumaczenie:"czekac"
    //     //
    //     // }
    // ];


    var i = Math.floor((Math.random() * czasowniki.length) + 0);
        // for (var i = 0; i < czasowniki.length; i++) {
        //     if (inp_bez.value === czasowniki[i][0]) {
        div_bez.removeChild(div_bez.lastChild);
        var newOpt = document.createElement(`h2`);
        newOpt.innerHTML = `${czasowniki[i][0]}`;
        // newOpt.style.fontSize="5rem";
        //newOpt.classList.add("dobre_tlu")
        div_bez.appendChild(newOpt);
    czasowniki[i][1][0].toUpperCase()


btn_bez_spr.addEventListener('click',function () {




    console.log(czasowniki[i][1]);
                if (capitalize(inp_tlu.value) === czasowniki[i][1]) {
                    div_tlu.removeChild(div_tlu.lastChild);
                    var newTrue = document.createElement(`p`);
                    newTrue.innerText = "dobre tłumaczenie";
                    newTrue.classList.add("dobre_tlu")
                    div_tlu.appendChild(newTrue);

                    // div_bez.removeChild(div_bez.lastChild);
                    // let newTruee = document.createElement(`p`);
                    // newTruee.innerText = "dobre tłumaczenie";
                    // newTruee.classList.add("dobre_tlu");
                    // div_bez.appendChild(newTruee);
                } else {
                    div_tlu.removeChild(div_tlu.lastChild);
                    var newOption = document.createElement(`p`);
                    newOption.innerText = "złe tłumaczenie";
                    newOption.classList.add("zle_tlu");
                    div_tlu.appendChild(newOption);

                    // div_bez.removeChild(div_bez.lastChild);
                    // let newTrue = document.createElement(`p`);
                    // newTrue.innerText = "dobre tłumaczenie";
                    // newTrue.classList.add("dobre_tlu")
                    // div_bez.appendChild(newTrue);
                }
                if (capitalize(l1.value) === czasowniki[i][2]) {
                    div_1.removeChild(div_1.lastChild);
                    let newTrue = document.createElement(`p`);
                    newTrue.innerText = "dobre tłumaczenie";
                    newTrue.classList.add("dobre_tlu")
                    div_1.appendChild(newTrue);
                } else {
                    div_1.removeChild(div_1.lastChild);
                    let newTrue = document.createElement(`p`);
                    newTrue.innerText = "złe tłumaczenie";
                    newTrue.classList.add("zle_tlu")
                    div_1.appendChild(newTrue);
                }


                if (capitalize(l2.value) === czasowniki[i][3]) {
                    div_2.removeChild(div_2.lastChild);
                    let newTrue = document.createElement(`p`);
                    newTrue.innerText = "dobre tłumaczenie";
                    newTrue.classList.add("dobre_tlu")
                    div_2.appendChild(newTrue);
                } else {
                    div_2.removeChild(div_2.lastChild);
                    let newTrue = document.createElement(`p`);
                    newTrue.innerText = "złe tłumaczenie";
                    newTrue.classList.add("zle_tlu")
                    div_2.appendChild(newTrue);
                }

                if (capitalize(l3.value) === czasowniki[i][4]) {
                    div_3.removeChild(div_3.lastChild);
                    let newTrue = document.createElement(`p`);
                    newTrue.innerText = "dobre tłumaczenie";
                    newTrue.classList.add("dobre_tlu")
                    div_3.appendChild(newTrue);
                } else {
                    div_3.removeChild(div_3.lastChild);
                    let newTrue = document.createElement(`p`);
                    newTrue.innerText = "złe tłumaczenie";
                    newTrue.classList.add("zle_tlu")
                    div_3.appendChild(newTrue);
                }

                if (capitalize(l21.value) === czasowniki[i][5]) {
                    div_21.removeChild(div_21.lastChild);
                    let newTrue = document.createElement(`p`);
                    newTrue.innerText = "dobre tłumaczenie";
                    newTrue.classList.add("dobre_tlu")
                    div_21.appendChild(newTrue);
                } else {
                    div_21.removeChild(div_21.lastChild);
                    let newTrue = document.createElement(`p`);
                    newTrue.innerText = "złe tłumaczenie";
                    newTrue.classList.add("zle_tlu")
                    div_21.appendChild(newTrue);
                }

                if (capitalize(l22.value) === czasowniki[i][6]) {
                    div_22.removeChild(div_22.lastChild);
                    let newTrue = document.createElement(`p`);
                    newTrue.innerText = "dobre tłumaczenie";
                    newTrue.classList.add("dobre_tlu")
                    div_22.appendChild(newTrue);
                } else {
                    div_22.removeChild(div_22.lastChild);
                    let newTrue = document.createElement(`p`);
                    newTrue.innerText = "złe tłumaczenie";
                    newTrue.classList.add("zle_tlu")
                    div_22.appendChild(newTrue);
                }

                if (capitalize(l23.value) === czasowniki[i][7]) {
                    div_23.removeChild(div_23.lastChild);
                    let newTrue = document.createElement(`p`);
                    newTrue.innerText = "dobre tłumaczenie";
                    newTrue.classList.add("dobre_tlu")
                    div_23.appendChild(newTrue);
                } else {
                    div_23.removeChild(div_23.lastChild);
                    let newTrue = document.createElement(`p`);
                    newTrue.innerText = "złe tłumaczenie";
                    newTrue.classList.add("zle_tlu")
                    div_23.appendChild(newTrue);
                }
})


            // else{
            //     div_bez.removeChild(div_bez.lastChild);
            //     let newTrue = document.createElement(`p`);
            //     newTrue.innerText = "złe tłumaczenie";
            //     newTrue.classList.add("zle_tlu");
            //     div_bez.appendChild(newTrue);
            //
            // }


       // }


   // })


})