function allCheck(){
    if (nameCheck() && emailCheck() && phoneCheck())
        {
            return true; 
        }
        return false; 
    }

function nameCheck(){
    var getName = document.getElementById('name'); 
    var check = /^[a-zA-Z]+$/;
    if(getName == ""){
        console.log("Field Is Empty");
        window.alert("The 'NAME' Field Is Empty");
        return false; 
    }
    if(getName != check)
        {
            console.log("Invalid Input");
            window.alert("Invalid Input");
            return false; 
        }
}

function emailCheck(){
 var getEmail = document.getElementById('email'); 
    var check = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}+$/;
    if(getEmail == ""){
        console.log("Field Is Empty");
        window.alert("The 'EMAIL' Field Is Empty");
        return false; 
    }
    if(getEmail != check)
        {
            console.log("Invalid Input");
            window.alert("Invalid Input");
            return false; 
        }
}

function phoneCheck(){
var getPhone = document.getElementById('phone'); 
    var check = /^[1-9]{1}$|^[1-4]{1}[0-9]{1}$|^50$+$/;
    if(getPhone == ""){
        console.log("Field Is Empty");
        window.alert("The 'PHONE' Field Is Empty");
        return false; 
    }

    if(getEmail != check)
        {
            console.log("Invalid Input");
            window.alert("Invalid Input");
            return false; 
        }
}