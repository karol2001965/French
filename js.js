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
    var pop=document.querySelector(".btn_bez_pop");
    var osoba1=document.querySelector(".osoba1");
    var osoba2=document.querySelector(".osoba2");
    var osoba3=document.querySelector(".osoba3");
    var osoba4=document.querySelector(".osoba4");
    var osoba5=document.querySelector(".osoba5");
    var osoba6=document.querySelector(".osoba6");


    // var inp_bez_val = inp_bez.value;
    var czasowniki = [


        //
        //
        //
        // ["amier", "kochać", "j'aime", "tu aimes", "il aime", "nous aimons", "vous aimez", "ils aiment"],
        // ["aller", "iść", "je vais", "tu vas", "il va", "nous allons", "vous allez", "ils vont"]
        //



        ["aller", "iść", "vais", "vas", "va", "allons", "allez", "vont"],
        ["boire", "pić", "bois", "bois", "boit", "buvons", "buvez", "boivent"],
        ["chanter", "śpiewać", "chante", "chantes", "chante", "chantons", "chantez", "chantent"],
        ["chercher", "szukać", "cherche", "cherches", "cherche", "cherchons", "cherchez", "cherchent"],
        ["choisir", "wybierać", "choisis", "choisis", "choisit", "choisissons", "choisissez", "choisissent"],
        ["commencer", "zaczynać", "commence", "commences", "commence", "commençons", "commencez", "commencent"],
        ["conduire", "kierować", "conduis", "conduis", "conduit", "conduisons", "conduisez", "conduisent"],
        ["connaître", "znać", "connais", "connais", "connaît", "connaissons", "connaissez", "connaissent"],
        ["corriger", "poprawiać", "corrige", "corriges", "corrige", "corrigeons", "corrigez", "corrigent"],
        ["coudre", "szyć", "couds", "couds", "coud", "cousons", "cousez", "cousent"],
        ["critiquer", "krytykować", "critique", "critiques", "critique", "critiquons", "critiquez", "critiquent"],
        ["croire", "wierzyć", "crois", "crois", "croit", "croyons", "croyez", "croient"],
        ["cuire", "gotować", "cuis", "cuis", "cuit", "cuisons", "cuisez", "cuisent"],
        ["décider", "decydować", "décide", "décides", "décide", "décidons", "décidez", "décident"],
        ["devoir", "musieć", "dois", "dois", "doit", "devons", "devez", "doivent"],
        ["dire", "powiedzieć", "dis", "dis", "dit", "disons", "dites", "disent"],
        ["donner", "dać", "donne", "donnes", "donne", "donnons", "donnez", "donnent"],
        ["dormir", "spać", "dors", "dors", "dort", "dormons", "dormez", "dorment"],
        ["être", "być", "suis", "es", "est", "sommes", "êtes", "sont"],
        ["faire", "robić", "fais", "fais", "fait", "faisons", "faites", "font"],
        ["fermer", "zamykać", "ferme", "fermes", "ferme", "fermons", "fermez", "ferment"],
        ["finir", "kończyć", "finis", "finis", "finit", "finissons", "finissez", "finissent"],
        ["gagner", "wygrać", "gagne", "gagnes", "gagne", "gagnons", "gagnez", "gagnent"],
        ["jouer", "grać", "joue", "joues", "joue", "jouons", "jouez", "jouent"],
        ["laisser", "zostawiać", "laisse", "laisses", "laisse", "laissons", "laissez", "laissent"],
        ["laver", "myć", "lave", "laves", "lave", "lavons", "lavez", "lavent"],
        ["lire", "czytać", "lis", "lis", "lit", "lisons", "lisez", "lisent"],
        ["manger", "jeść", "mange", "manges", "mange", "mangeons", "mangez", "mangent"],
        ["mentir", "kłamać", "mens", "mens", "ment", "mentons", "mentez", "mentent"],
        ["mourir", "umierać", "meurs", "meurs", "meurt", "mourons", "mourez", "meurent"],
        ["nager", "pływać", "nage", "nages", "nage", "nageons", "nagez", "nagent"],
        ["parler", "mówić", "parle", "parles", "parle", "parlons", "parlez", "parlent"],
        ["payer", "płacić", "paie", "paies", "paie", "payons", "payez", "paient"],
        ["penser", "myśleć", "pense", "penses", "pense", "pensons", "pensez", "pensent"],
        ["permettre", "pozwalać", "permets", "permets", "permet", "permettons", "permettez", "permettent"],
        ["plaire", "lubić", "plais", "plais", "plaît", "plaisons", "plaisez", "plaisent"],
        ["pleurer", "płakać", "pleure", "pleures", "pleure", "pleurons", "pleurez", "pleurent"],
        ["poser", "kłaść", "pose", "poses", "pose", "posons", "posez", "posent"],
        ["pousser", "pchać", "pousse", "pousses", "pousse", "poussons", "poussez", "poussent"],
        ["pouvoir", "móc", "peux", "peux", "peut", "pouvons", "pouvez", "peuvent"],
        ["prendre", "brać", "prends", "prends", "prend", "prenons", "prenez", "prennent"],
        ["prier", "prosić", "prie", "pries", "prie", "prions", "priez", "prient"],
        ["produire", "produkować", "produis", "produis", "produit", "produisons", "produisez", "produisent"],
        ["regarder", "patrzeć", "regarde", "regardes", "regarde", "regardons", "regardez", "regardent"],
        ["remercier", "dziękować", "remercie", "remercies", "remercie", "remercions", "remerciez", "remercient"],
        ["rester", "pozostać", "reste", "restes", "reste", "restons", "restez", "restent"],
        ["rester", "pozostawać", "reste", "restes", "reste", "restons", "restez", "restent"],
        ["rêver", "śnić", "rêve", "rêves", "rêve", "rêvons", "rêvez", "rêvent"],
        ["savoir", "wiedzieć", "sais", "sais", "sait", "savons", "savez", "savent"],
        ["sentir", "czuć", "sens", "sens", "sent", "sentons", "sentez", "sentent"],
        ["signer", "podpisać", "signe", "signes", "signe", "signons", "signez", "signent"],
        ["signifier", "znaczyć", "signifie", "signifies", "signifie", "signifions", "signifiez", "signifient"],
        ["sortir", "wychodzić", "sors", "sors", "sort", "sortons", "sortez", "sortent"],
        ["souffrir", "cierpieć", "souffre", "souffres", "souffre", "souffrons", "souffrez", "souffrent"],
        ["sourire", "uśmiechać się", "souris", "souris", "sourit", "sourions", "souriez", "sourient"],
        ["tenir", "trzymać", "tiens", "tiens", "tient", "tenons", "tenez", "tiennent"],
        ["tirer", "ciągnąć", "tire", "tires", "tire", "tirons", "tirez", "tirent"],
        ["tomber", "upadać", "tombe", "tombes", "tombe", "tombons", "tombez", "tombent"],
        ["traduire", "tłumaczyć", "traduis", "traduis", "traduit", "traduisons", "traduisez", "traduisent"],
        ["travailler", "pracować", "travaille", "travailles", "travaille", "travaillons", "travaillez", "travaillent"],
        ["venir", "przyjść", "viens", "viens", "vient", "venons", "venez", "viennent"],
        ["vivre", "żyć", "vis", "vis", "vit", "vivons", "vivez", "vivent"],
        ["voir", "zobaczyć", "vois", "vois", "voit", "voyons", "voyez", "voient"],
        ["vouloir", "chcieć", "veux", "veux", "veut", "voulons", "voulez", "veulent"],
        ["être assis", "siedzieć", "suis assis", "es assis", "est assis", "sommes assis", "êtes assis", "sont assis"],




        ["écouter", "słuchać", "écoute", "écoutes", "écoute", "écoutons", "écoutez", "écoutent"],
        ["écrire", "pisać", "écris", "écris", "écrit", "écrivons", "écrivez", "écrivent"],
        ["embrasser", "przytulać", "embrasse", "embrasses", "embrasse", "embrassons", "embrassez", "embrassent"],
        ["empirer", "pogarszać", "empire", "empires", "empire", "empirons", "empirez", "empirent"],
        ["entendre", "słyszeć", "entends", "entends", "entend", "entendons", "entendez", "entendent"],
        ["oublier", "zapomnieć", "oublie", "oublies", "oublie", "oublions", "oubliez", "oublient"],
        ["oublier", "zapomnieć", "oublie", "oublies", "oublie", "oublions", "oubliez", "oublient"],
        ["ouvrir", "otwierać", "ouvre", "ouvres", "ouvre", "ouvrons", "ouvrez", "ouvrent"],
        ["habiter", "mieszkać", "habite", "habites", "habite", "habitons", "habitez", "habitent"],
        ["interroger", "pytać", "interroge", "interroges", "interroge", "interrogeons", "interrogez", "interrogent"],
        ["attendre", "czekać", "attends", "attends", "attend", "attendons", "attendez", "attendent"],
        ["avoir", "mieć", "ai", "as", "a", "avons", "avez", "ont"],
        ["aimer", "kochać", "aime", "aimes", "aime", "aimons", "aimez", "aiment"],
        ["étudier", "studiować", "étudie", "étudies", "étudie", "étudions", "étudiez", "étudient"],





        ["s'amuser", "bawić się", "m'amuse", "t'amuses", "s'amus", "nous amusons", " amusez", " samusent"],
        ["se réjouir", "cieszyć się", "me réjouis", "te réjouis", "se réjouit", "nous réjouissons", " réjouissez", " réjouissent"],
        ["se souvenir", "pamiętać", "me souviens", "te souviens", "se souvien", "nous souvenons", " souvenez", " souviennent"]

    ]


    const capitalize = (s) => {

        return s.charAt(0).toLowerCase() + s.slice(1)
    }


console.log(czasowniki[81][0]); //63 //77








    for (let i = 0; i < czasowniki.length; i++) {
        for (let j = 0; j < czasowniki[0].length; j++) {



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


    function osoby(osob,before) {


        var newTrue = document.createElement(`p`);
        newTrue.innerText = osob;
        newTrue.classList.add("osoba_dop")
        before.appendChild(newTrue);
        before.insertBefore(newTrue, before.firstChild);
    }


if( i>=0 && i<=64){
    osoby("je",osoba1)
    osoby("nous",osoba2)
    osoby("tu",osoba3)
    osoby("vous",osoba4)
    osoby("il",osoba5)
    osoby("ils",osoba6)
}
if( i>64 && i<=78){
    osoby("j'",osoba1)
    osoby("nous",osoba2)
    osoby("tu",osoba3)
    osoby("vous",osoba4)
    osoby("il",osoba5)
    osoby("ils",osoba6)
}
if(i>78 && i<=81 ){
    osoby("je",osoba1)
    osoby("nous",osoba2)
    osoby("tu",osoba3)
    osoby("vous",osoba4)
    osoby("il",osoba5)
    osoby("ils",osoba6)
}









    btn_bez_spr.addEventListener('click', function () {



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
            newTrue.classList.add("dobre_tlu");
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

    pop.addEventListener('click',function () {

        // div_tlu.removeChild(div_tlu.lastChild);
        //     var newTrue = document.createElement(`p`);
        //     newTrue.innerText = czasowniki[i][1];
        //     div_tlu.appendChild(newTrue);

        if (capitalize(inp_tlu.value) !== czasowniki[i][1]) {

            div_tlu.removeChild(div_tlu.lastChild);
            var newOption = document.createElement(`p`);
            newOption.classList.add("pop_tlu");
            newOption.innerText = czasowniki[i][1];
            div_tlu.appendChild(newOption);
            }





        if (capitalize(l1.value) !== czasowniki[i][2]) {

            div_1.removeChild(div_1.lastChild);
            let newTrue = document.createElement(`p`);
            newTrue.classList.add("pop_tlu");

            newTrue.innerText = czasowniki[i][2];
            div_1.appendChild(newTrue);
        }


        if (capitalize(l2.value) !== czasowniki[i][3]) {

            div_2.removeChild(div_2.lastChild);
            let newTrue = document.createElement(`p`);
            newTrue.classList.add("pop_tlu");

            newTrue.innerText = czasowniki[i][3];
            div_2.appendChild(newTrue);
        }

        if (capitalize(l3.value) !== czasowniki[i][4]) {

            div_3.removeChild(div_3.lastChild);
            let newTrue = document.createElement(`p`);
            newTrue.classList.add("pop_tlu");;

            newTrue.innerText = czasowniki[i][4];
            div_3.appendChild(newTrue);
        }

        if (capitalize(l21.value) !== czasowniki[i][5]) {

            div_21.removeChild(div_21.lastChild);
            let newTrue = document.createElement(`p`);
            newTrue.classList.add("pop_tlu");

            newTrue.innerText = czasowniki[i][5];
            div_21.appendChild(newTrue);
        }

        if (capitalize(l22.value) !== czasowniki[i][6]) {

            div_22.removeChild(div_22.lastChild);
            let newTrue = document.createElement(`p`);
            newTrue.classList.add("pop_tlu");

            newTrue.innerText = czasowniki[i][6];
            div_22.appendChild(newTrue);
        }

        if (capitalize(l23.value) !== czasowniki[i][7]) {

            div_23.removeChild(div_23.lastChild);
            let newTrue = document.createElement(`p`);
            newTrue.classList.add("pop_tlu");

            newTrue.innerText = czasowniki[i][7];
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