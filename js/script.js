function allCheck(){
   var check = true; 
    if (!nameCheck())
        {
            check = false; 
        }
        console.log(check);

    if(!emailCheck())
        {
            check = false; 
        }
    if(!phoneCheck())
        {
            check = false; 
        }
    
        console.log(check); 
        return check; 
    
    }

function nameCheck(){
    var getName = document.getElementById('name').value; 
    var check1 = /^[a-zA-Z]+$/;
    if(getName == ""){
        console.log("Field Is Empty");
        window.alert("The 'NAME' Field Is Empty");
        return false; 
    }
    if(!(getName.match(check1)))
        {
            console.log("Invalid Input");
            window.alert("The 'NAME' Field has an Invalid Input");
            return false; 
        }
        console.log("Fi");
    return true;
}

function emailCheck(){
 var getEmail = document.getElementById('email').value; 
    var check2 = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}+$/;
    console.log(getEmail);
    if(getEmail == ""){
        console.log("Field Is Empty");
        window.alert("The 'EMAIL' Field Is Empty");
        return false; 
    }
    if(!(getEmail.match(check2)))
        {
            console.log("Invalid Input");
            window.alert("The 'EMAIL' Field has an Invalid Input");
            return false; 
        }
}

function phoneCheck(){
var getPhone = document.getElementById('phone').value; 
    var check3 = /^[1-9]{1}$|^[1-4]{1}[0-9]{1}$|^50$+$/;
    if(getPhone == ""){
        console.log("Field Is Empty");
        window.alert("The 'PHONE' Field Is Empty");
        return false; 
    }

    if(!(getPhone.match(check3)))
        {
            console.log("Invalid Input");
            window.alert("The 'PHONE' Field has an Invalid Input");
            return false; 
        }
}