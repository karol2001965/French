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


    // var inp_bez_val = inp_bez.value;
    var czasowniki = [


        //
        //
        //
        // ["amier", "kochać", "j'aime", "tu aimes", "il aime", "nous aimons", "vous aimez", "ils aiment"],
        // ["aller", "iść", "je vais", "tu vas", "il va", "nous allons", "vous allez", "ils vont"]
        //


        ["aimer", "kochać", "j'aime", "tu aimes", "il aime", "nous aimons", "vous aimez", "ils aiment"],
        ["aller", "iść", "je vais", "tu vas", "il va", "nous allons", "vous allez", "ils vont"],
        ["attendre", "czekać", "j'attends", "tu attends", "il attend", "nous attendons", "vous attendez", "ils attendent"],
        ["avoir", "mieć", "j'ai", "tu as", "il a", "nous avons", "vous avez", "ils ont"],
        ["boire", "pić", "je bois", "tu bois", "il boit", "nous buvons", "vous buvez", "ils boivent"],
        ["chanter", "śpiewać", "je chante", "tu chantes", "il chante", "nous chantons", "vous chantez", "ils chantent"],
        ["chercher", "szukać", "je cherche", "tu cherches", "il cherche", "nous cherchons", "vous cherchez", "ils cherchent"],
        ["choisir", "wybierać", "je choisis", "tu choisis", "il choisit", "nous choisissons", "vous choisissez", "ils choisissent"],
        ["commencer", "zaczynać", "je commence", "tu commences", "il commence", "nous commençons", "vous commencez", "ils commencent"],
        ["conduire", "kierować", "je conduis", "tu conduis", "il conduit", "nous conduisons", "vous conduisez", "ils conduisent"],
        ["connaître", "znać", "je connais", "tu connais", "il connaît", "nous connaissons", "vous connaissez", "ils connaissent"],
        ["corriger", "poprawiać", "je corrige", "tu corriges", "il corrige", "nous corrigeons", "vous corrigez", "ils corrigent"],
        ["coudre", "szyć", "je couds", "tu couds", "il coud", "nous cousons", "vous cousez", "ils cousent"],
        ["critiquer", "krytykować", "je critique", "tu critiques", "il critique", "nous critiquons", "vous critiquez", "ils critiquent"],
        ["croire", "wierzyć", "je crois", "tu crois", "il croit", "nous croyons", "vous croyez", "ils croient"],
        ["cuire", "gotować", "je cuis", "tu cuis", "il cuit", "nous cuisons", "vous cuisez", "ils cuisent"],
        ["décider", "decydować", "je décide", "tu décides", "il décide", "nous décidons", "vous décidez", "ils décident"],
        ["devoir", "musieć", "je dois", "tu dois", "il doit", "nous devons", "vous devez", "ils doivent"],
        ["dire", "powiedzieć", "je dis", "tu dis", "il dit", "nous disons", "vous dites", "ils disent"],
        ["donner", "dać", "je donne", "tu donnes", "il donne", "nous donnons", "vous donnez", "ils donnent"],
        ["dormir", "spać", "je dors", "tu dors", "il dort", "nous dormons", "vous dormez", "ils dorment"],
        ["écouter", "słuchać", "j'écoute", "tu écoutes", "il écoute", "nous écoutons", "vous écoutez", "ils écoutent"],
        ["écrire", "pisać", "j'écris", "tu écris", "il écrit", "nous écrivons", "vous écrivez", "ils écrivent"],
        ["embrasser", "przytulać", "j'embrasse", "tu embrasses", "il embrasse", "nous embrassons", "vous embrassez", "ils embrassent"],
        ["empirer", "pogarszać", "j'empire", "tu empires", "il empire", "nous empirons", "vous empirez", "ils empirent"],
        ["entendre", "słyszeć", "j'entends", "tu entends", "il entend", "nous entendons", "vous entendez", "ils entendent"],
        ["être", "być", "je suis", "tu es", "il est", "nous sommes", "vous êtes", "ils sont"],
        ["être assis", "siedzieć", "je suis assis", "tu es assis", "il est assis", "nous sommes assis", "vous êtes assis", "ils sont assis"],
        ["étudier", "studiować", "j'étudie", "tuétudies", "ilétudie", "nousétudions", "vousétudiez", "ilsétudient"],
        ["faire", "robić", "je fais", "tu fais", "il fait", "nous faisons", "vous faites", "ils font"],
        ["fermer", "zamykać", "je ferme", "tu fermes", "il ferme", "nous fermons", "vous fermez", "ils ferment"],
        ["finir", "kończyć", "je finis", "tu finis", "il finit", "nous finissons", "vous finissez", "ils finissent"],
        ["gagner", "wygrać", "je gagne", "tu gagnes", "il gagne", "nous gagnons", "vous gagnez", "ils gagnent"],
        ["habiter", "mieszkać", "j'habite", "tu habites", "il habite", "nous habitons", "vous habitez", "ils habitent"],
        ["interroger", "pytać", "j'interroge", "tu interroges", "il interroge", "nous interrogeons", "vous interrogez", "ils interrogent"],
        ["jouer", "grać", "je joue", "tu joues", "il joue", "nous jouons", "vous jouez", "ils jouent"],
        ["laisser", "zostawiać", "je laisse", "tu laisses", "il laisse", "nous laissons", "vous laissez", "ils laissent"],
        ["laver", "myć", "je lave", "tu laves", "il lave", "nous lavons", "vous lavez", "ils lavent"],
        ["lire", "czytać", "je lis", "tu lis", "il lit", "nous lisons", "vous lisez", "ils lisent"],
        ["manger", "jeść", "je mange", "tu manges", "il mange", "nous mangeons", "vous mangez", "ils mangent"],
        ["mentir", "kłamać", "je mens", "tu mens", "il ment", "nous mentons", "vous mentez", "ils mentent"],
        ["mourir", "umierać", "je meurs", "tu meurs", "il meurt", "nous mourons", "vous mourez", "ils meurent"],
        ["nager", "pływać", "je nage", "tu nages", "il nage", "nous nageons", "vous nagez", "ils nagent"],
        ["oublier", "zapomnieć", "j'oublie", "tu oublies", "il oublie", "nous oublions", "vous oubliez", "ils oublient"],
        ["oublier", "zapomnieć", "j'oublie", "tu oublies", "il oublie", "nous oublions", "vous oubliez", "ils oublient"],
        ["ouvrir", "otwierać", "j'ouvre", "tu ouvres", "il ouvre", "nous ouvrons", "vous ouvrez", "ils ouvrent"],
        ["parler", "mówić", "je parle", "tu parles", "il parle", "nous parlons", "vous parlez", "ils parlent"],
        ["payer", "płacić", "je paie", "tu paies", "il paie", "nous payons", "vous payez", "ils paient"],
        ["penser", "myśleć", "je pense", "tu penses", "il pense", "nous pensons", "vous pensez", "ils pensent"],
        ["permettre", "pozwalać", "je permets", "tu permets", "il permet", "nous permettons", "vous permettez", "ils permettent"],
        ["plaire", "lubić", "je plais", "tu plais", "il plaît", "nous plaisons", "vous plaisez", "ils plaisent"],
        ["pleurer", "płakać", "je pleure", "tu pleures", "il pleure", "nous pleurons", "vous pleurez", "ils pleurent"],
        ["poser", "kłaść", "je pose", "tu poses", "il pose", "nous posons", "vous posez", "ils posent"],
        ["pousser", "pchać", "je pousse", "tu pousses", "il pousse", "nous poussons", "vous poussez", "ils poussent"],
        ["pouvoir", "móc", "je peux", "tu peux", "il peut", "nous pouvons", "vous pouvez", "ils peuvent"],
        ["prendre", "brać", "je prends", "tu prends", "il prend", "nous prenons", "vous prenez", "ils prennent"],
        ["prier", "prosić", "je prie", "tu pries", "il prie", "nous prions", "vous priez", "ils prient"],
        ["produire", "produkować", "je produis", "tu produis", "il produit", "nous produisons", "vous produisez", "ils produisent"],
        ["regarder", "patrzeć", "je regarde", "tu regardes", "il regarde", "nous regardons", "vous regardez", "ils regardent"],
        ["remercier", "dziękować", "je remercie", "tu remercies", "il remercie", "nous remercions", "vous remerciez", "ils remercient"],
        ["rester", "pozostać", "je reste", "tu restes", "il reste", "nous restons", "vous restez", "ils restent"],
        ["rester", "pozostawać", "je reste", "tu restes", "il reste", "nous restons", "vous restez", "ils restent"],
        ["rêver", "śnić", "je rêve", "tu rêves", "il rêve", "nous rêvons", "vous rêvez", "ils rêvent"],
        ["s'amuser", "bawić się", "je m'amuse", "tu t'amuses", "il s'amus", "nous nous amusons", "vous amusez", "ils samusent"],
        ["savoir", "wiedzieć", "je sais", "tu sais", "il sait", "nous savons", "vous savez", "ils savent"],
        ["se réjouir", "cieszyć się", "je me réjouis", "tu te réjouis", "il se réjouit", "nous nous réjouissons", "vous réjouissez", "ils réjouissent"],
        ["se souvenir", "pamiętać", "je me souviens", "tu te souviens", "il se souvien", "nous nous souvenons", "vous souvenez", "ils souviennent"],
        ["sentir", "czuć", "je sens", "tu sens", "il sent", "nous sentons", "vous sentez", "ils sentent"],
        ["signer", "podpisać", "je signe", "tu signes", "il signe", "nous signons", "vous signez", "ils signent"],
        ["signifier", "znaczyć", "je signifie", "tu signifies", "il signifie", "nous signifions", "vous signifiez", "ils signifient"],
        ["sortir", "wychodzić", "je sors", "tu sors", "il sort", "nous sortons", "vous sortez", "ils sortent"],
        ["souffrir", "cierpieć", "je souffre", "tu souffres", "il souffre", "nous souffrons", "vous souffrez", "ils souffrent"],
        ["sourire", "uśmiechać się", "je souris", "tu souris", "il sourit", "nous sourions", "vous souriez", "ils sourient"],
        ["tenir", "trzymać", "je tiens", "tu tiens", "il tient", "nous tenons", "vous tenez", "ils tiennent"],
        ["tirer", "ciągnąć", "je tire", "tu tires", "il tire", "nous tirons", "vous tirez", "ils tirent"],
        ["tomber", "upadać", "je tombe", "tu tombes", "il tombe", "nous tombons", "vous tombez", "ils tombent"],
        ["traduire", "tłumaczyć", "je traduis", "tu traduis", "il traduit", "nous traduisons", "vous traduisez", "ils traduisent"],
        ["travailler", "pracować", "je travaille", "tu travailles", "il travaille", "nous travaillons", "vous travaillez", "ils travaillent"],
        ["venir", "przyjść", "je viens", "tu viens", "il vient", "nous venons", "vous venez", "ils viennent"],
        ["vivre", "żyć", "je vis", "tu vis", "il vit", "nous vivons", "vous vivez", "ils vivent"],
        ["voir", "zobaczyć", "je vois", "tu vois", "il voit", "nous voyons", "vous voyez", "ils voient"],
        ["vouloir", "chcieć", "je veux", "tu veux", "il veut", "nous voulons", "vous voulez", "ils veulent"]


    ]
    console.log(czasowniki.length);

    const capitalize = (s) => {

        return s.charAt(0).toLowerCase() + s.slice(1)
    }
    for (let i = 0; i < czasowniki.length; i++) {
        for (let j = 0; j < czasowniki[0].length; j++) {


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


    btn_bez_spr.addEventListener('click', function () {


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

    pop.addEventListener('click',function () {
console.log(czasowniki[i][1]);
        // div_tlu.removeChild(div_tlu.lastChild);
        //     var newTrue = document.createElement(`p`);
        //     newTrue.innerText = czasowniki[i][1];
        //     div_tlu.appendChild(newTrue);

        if (capitalize(inp_tlu.value) !== czasowniki[i][1]) {

            div_tlu.removeChild(div_tlu.lastChild);
            var newOption = document.createElement(`p`);
            newOption.innerText = czasowniki[i][1];
            div_tlu.appendChild(newOption);
            }





        if (capitalize(l1.value) !== czasowniki[i][2]) {

            div_1.removeChild(div_1.lastChild);
            let newTrue = document.createElement(`p`);
            newTrue.innerText = czasowniki[i][2];
            div_1.appendChild(newTrue);
        }


        if (capitalize(l2.value) !== czasowniki[i][3]) {

            div_2.removeChild(div_2.lastChild);
            let newTrue = document.createElement(`p`);
            newTrue.innerText = czasowniki[i][3];
            div_2.appendChild(newTrue);
        }

        if (capitalize(l3.value) !== czasowniki[i][4]) {

            div_3.removeChild(div_3.lastChild);
            let newTrue = document.createElement(`p`);
            newTrue.innerText = czasowniki[i][4];
            div_3.appendChild(newTrue);
        }

        if (capitalize(l21.value) !== czasowniki[i][5]) {

            div_21.removeChild(div_21.lastChild);
            let newTrue = document.createElement(`p`);
            newTrue.innerText = czasowniki[i][5];
            div_21.appendChild(newTrue);
        }

        if (capitalize(l22.value) !== czasowniki[i][6]) {

            div_22.removeChild(div_22.lastChild);
            let newTrue = document.createElement(`p`);
            newTrue.innerText = czasowniki[i][6];
            div_22.appendChild(newTrue);
        }

        if (capitalize(l23.value) !== czasowniki[i][7]) {

            div_23.removeChild(div_23.lastChild);
            let newTrue = document.createElement(`p`);
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