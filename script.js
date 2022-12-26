function getCount(parent, getChildrensChildren){
    var relevantChildren = 0;
    var children = parent.childNodes.length;
    for(var i=0; i < children; i++){
        if(parent.childNodes[i].nodeType != 3){
            if(getChildrensChildren)
                relevantChildren += getCount(parent.childNodes[i],true);
            relevantChildren++;
        }
    }
    return relevantChildren;
}


let slider=document.getElementById("slider");
let sliderLength=getCount(slider, false);

let startIndex=1;
let currentIndex=1;

for(let i=0;i<sliderLength;i++){
    document.getElementById("prev").click.PrevSlide(i);
    document.getElementById("next").click.NextSlide(i);
    
}

function NextSlide(index){
    index++;
}

function PrevSlide(index){
    index--;
}

