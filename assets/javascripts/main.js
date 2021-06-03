window.addEventListener("load",initEvent);
function initEvent(){
    document.getElementById("display").setAttribute('readonly',true);
    document.getElementById("seven").onclick = function(){
        document.getElementById("display").value +='7'; 
    }
    document.getElementById("eight").onclick = function(){
        document.getElementById("display").value +='8'; 
    }
    document.getElementById("nine").onclick = function(){
        document.getElementById("display").value +='9'; 
    }
    document.getElementById("four").onclick = function(){
        document.getElementById("display").value +='4'; 
    }
    document.getElementById("five").onclick = function(){
        document.getElementById("display").value +='5'; 
    }
    document.getElementById("six").onclick = function(){
        document.getElementById("display").value +='6'; 
    }
    document.getElementById("one").onclick = function(){
        document.getElementById("display").value +='1'; 
    }
    document.getElementById("two").onclick = function(){
        document.getElementById("display").value +='2'; 
    }
    document.getElementById("three").onclick = function(){
        document.getElementById("display").value +='3'; 
    }
    document.getElementById("add").onclick = function(){
        document.getElementById("display").value +='+'; 
    }
    document.getElementById("sub").onclick = function(){
        document.getElementById("display").value +='-'; 
    }
    document.getElementById("mul").onclick = function(){
        document.getElementById("display").value +='*'; 
    }
    document.getElementById("div").onclick = function(){
        document.getElementById("display").value +='/'; 
    }
    document.getElementById("clear").onclick = function(){
        document.getElementById("display").value = "";
    }
    document.getElementById("zero").onclick = function(){
        document.getElementById("display").value +='0'; 
    }
    document.getElementById("calculate").onclick= function(){
        document.getElementById("display").value = eval(document.getElementById("display").value);
    }
    document.getElementById("del").addEventListener("click",back);
function back() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
}
}