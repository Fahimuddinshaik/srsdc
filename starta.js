function newt(){
    
    let newnode=document.createElement("textarea");
    newnode.classList.add('form-control');
    newnode.classList.add('first');
    newnode.classList.add('mt-2');

    let xob=document.getElementById("exp");
    let yob=document.getElementById("starta");

    xob.insertBefore(newnode,starta);
}



function pagepgg(){

    document.getElementById("ttitle").innerHTML=document.getElementById("ntitle").value;
    document.getElementById("tguide").innerHTML=document.getElementById("nguide").value;
    document.getElementById("tgm").innerHTML=document.getElementById("ngm").value;
    document.getElementById("tn1").innerHTML=document.getElementById("nn1").value;
    document.getElementById("tn2").innerHTML=document.getElementById("nn2").value;
    document.getElementById("tn3").innerHTML=document.getElementById("nn3").value;
    document.getElementById("tn4").innerHTML=document.getElementById("nn4").value;
    document.getElementById("tn5").innerHTML=document.getElementById("nn5").value;
    document.getElementById("tn6").innerHTML=document.getElementById("nn6").value;
    document.getElementById("tn7").innerHTML=document.getElementById("nn7").value;

    document.getElementById("tscope").innerHTML=document.getElementById("nscope").value;
    document.getElementById("tprojectoverview").innerHTML=document.getElementById("nprojectoverview").value;
    document.getElementById("tprojectobjectives").innerHTML=document.getElementById("nprojectobjectives").value;
    document.getElementById("tes").innerHTML=document.getElementById("nes").value;
    document.getElementById("tps").innerHTML=document.getElementById("nps").value;
    document.getElementById("tsa").innerHTML=document.getElementById("nsa").value;
    document.getElementById("ttf").innerHTML=document.getElementById("ntf").value;
    document.getElementById("tef").innerHTML=document.getElementById("nef").value;
    document.getElementById("tof").innerHTML=document.getElementById("nof").value;
    document.getElementById("thc").innerHTML=document.getElementById("nhc").value;
    document.getElementById("tsc").innerHTML=document.getElementById("nsc").value;
    document.getElementById("tao").innerHTML=document.getElementById("nao").value;
    document.getElementById("tsub").innerHTML=document.getElementById("nsub").value;
    document.getElementById("tab").innerHTML=document.getElementById("nab").value;
    //document.getElementById("tdfd").innerHTML=document.getElementById("ndfd").value;


    document.getElementById("tsi").innerHTML=document.getElementById("nsi").value;
    document.getElementById("tst").innerHTML=document.getElementById("nst").value;
    document.getElementById("to").innerHTML=document.getElementById("no").value;
    

    document.getElementById("n").style.display='none';
    document.getElementById("nn").style.display='none';
    document.getElementById("t").style.display='block';
    
    
    let pp=document.getElementsByClassName("first");
    let str= "";

    for(let e of pp)
    {
        str= str + e.value +'<br>';
    }
    document.getElementById("tp").innerHTML=str;

}

function pagepg(){
    document.getElementById("van").hidden=true;
    window.print();
}

function newtex()
        {
            let newnode=document.createElement("textarea");
            newnode.classList.add("form-control");
            newnode.classList.add("tx");
            newnode.classList.add("mt-2");
            newnode.setAttribute("placeholder","Group member");
            newnode.setAttribute("rows",1);

            let aob=document.getElementById("tex");
          //  let bob=document.getElementById("ngm");

            aob.insertBefore(newnode,bbtn);
        }

