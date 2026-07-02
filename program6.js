
var m=100;
function dynele()
{
    var a = document.createElement('input');
    document.body.appendChild(a);
    // var b = document.createTextNode("this is my text");
    //     a.appendChild(b);

    a.setAttribute("type","button");
    a.setAttribute("value","mysubmit");

    a.addEventListener("click",()=>{
        a.style.color="red";
        a.style.padding="5px";
        a.style.marginLeft=m+"px";
        a.style.transitionDuration="2s";
        m=m+100;
        if(m>=1200)
        {
            m=0;
        }
    });

}

dynele();


function dyninput()
{
    var first,second,total;
    //  first = eval(prompt("enter number",500));
    //  console.log(typeof(first));
    //  second = eval(prompt("enter second value",100));

    //  first = parseInt(prompt("enter number",500));
    //  second = parseInt(prompt("enter second value",100));

      first = parseFloat(prompt("enter number",500));
     second = parseFloat(prompt("enter second value",100));

     total = first+second;
     console.log(total);

}

dyninput();

