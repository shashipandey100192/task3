

var myinput;
var myarrdata = [80, 70, 60, "ppp", 40];
var jdiv;
var jopt;
var jcards;
function loadallobject() {
    myinput = document.getElementById('data');
    jdiv = document.querySelectorAll("div");
    jopt = document.querySelector("#myopt");
    jcards = document.getElementById('cards');
}

loadallobject();

function displayinfo() {
    jdiv[0].innerHTML = `Total length:${myarrdata.length}`;
    jdiv[1].innerHTML = `Mydata: ${myarrdata}`;
}

displayinfo();



function additem() {
    // myarrdata.push(myinput.value);

    if (jopt.value == "left") {
        myarrdata.unshift(myinput.value);
    }
    else if (jopt.value == "right") {
        myarrdata.push(myinput.value);
    }
    else {
        alert("please select direction to add data");
    }
    cleardata();
    displayinfo();
}

function cleardata() {
    myinput.value = "";
    myinput.focus();
}


function showdeletedata() {
    // myinput.value=myarrdata[myarrdata.length===0 ? "ok":myarrdata.length-1];
    myinput.value = myarrdata.length === 0 ? alert("bas karo") : myarrdata[myarrdata.length - 1];
    displayinfo();
}


function deleteitem() {
    myarrdata.pop();
    console.log(myarrdata);
    showdeletedata();
}


function findindexvalue() {
    if (myinput.value == "") {
        alert("enter search value");
    }
    else {
        var searchindex;
        if (jopt.value == "left") {
            searchindex = myarrdata.indexOf(myinput.value);
        }
        else if (jopt.value == "right") {
            searchindex = myarrdata.lastIndexOf(myinput.value);
        }
        else {
            alert("not match");
        }
        jdiv[2].innerHTML = `Index No: ${searchindex}`;
    }

}


function atoz()
{
    myarrdata.sort();
    displayinfo();
}


function ztoa()
{
    myarrdata.sort();
    myarrdata.reverse();
    displayinfo();
}


function datamap()
{
    var temp = myarrdata.map((d)=>{
        
        return `<section>
                <h5>${d}</h5>
                <h4>${d*10}</h4>
                <h1>${d*20}</h1>
        
        </section>`
    });

   

        jcards.innerHTML=temp.join("");
}


function filterdata()
{
    var filtervalue = myinput.value;
    var fdata = myarrdata.filter((d)=>{
        return d==filtervalue
    });

    var mytemp = fdata.map((t)=>{
        return `<section>
                <h5>${t}</h5>
                <h4>${t*10}</h4>
                <h1>${t*20}</h1>
        
        </section>`;
    });
    // jcards.innerHTML=mytemp.join("");
    jcards.innerHTML = mytemp.length==0? "data not found" : mytemp.join("");
}

myinput.addEventListener("input",()=>{
    var b = myinput.value;
    console.log(b);
    filterdata();
})