

function abc()
{
    alert("welcome to external javascript");
}


function allListLoad()
{
var mylist = document.querySelectorAll("ul>li");
console.log(mylist);

    mylist[1].addEventListener("click",abc);


    mylist[2].addEventListener("click",function(){
        alert("this is ano function");
    });

    mylist[5].addEventListener("click",()=>{
        alert("this is arrow function");
    });

}

allListLoad();



function allbuttonload()
{
    var mybtn = document.querySelectorAll("button");
    console.log(mybtn);

    mybtn[1].addEventListener("click",()=>{
        mybtn[1].setAttribute("type","submit");
        mybtn[1].setAttribute("value","mysubmit_button");
        mybtn[1].innerHTML="mylogin button";
    })


}

allbuttonload();