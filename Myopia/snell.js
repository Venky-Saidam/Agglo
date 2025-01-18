let txt= document.getElementById("check");
let extra = document.getElementById("req");

let yesbtn=document.getElementById("vis");
let nobtn = document.getElementById("nvis");
let sgt=0;
let idx=0;

let nn=false;
const txtarray=[
    {str:"H V Z D S",fsize:"75px"},
    {str:"N C V K D",fsize:"64px"},
    {str:"C Z S H N",fsize:"45px"},
    {str:"O N V S R",fsize:"29px"},
    {str:"K D N R O",fsize:"18px"},
    {str:"Z K C S V",fsize:"12px"},
    {str:"D V O H C",fsize:"8px"},
    {str:"O H V C K",fsize:"6px"},
    {str:"H Z C K O",fsize:"2px"}
]

function yes(){
    if(!nn){
    idx++;
        txt.innerHTML=""+txtarray[idx].str;
        txt.style.fontSize=""+txtarray[idx].fsize;
    }
}


function no(){
    idx=0;
    extra.innerHTML=" You might nearly need a correction of "+sgt;
    nn=true;
}











