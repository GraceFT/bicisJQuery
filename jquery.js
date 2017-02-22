
$(function(){
    $("#name").keyup(validaName);
    $("#lastname").keyup(validaLastName);
    $("#input-email").keyup(validaEmail);
    $("#input-password").keyup(validaPassword);
    $("#options").click(validaSelector);
});

function validateForm(){
    validaName();
    validaLastName();
    validaEmail();
    validaPassword();
    validaSelector();
    
    if (validaName()==true && validaLastName()==true && validaEmail()==true && validaPassword()==true && validaSelector()==true){
        
    }else{
        
    }
}

function createSpan(_id,message){
    if(_id.find('span').length==0){
        $(_id).append("<span>"+message+"</span>");
    } 
}
var validaName = function validateName(){
    //console.log("creo que no");
    var valName=$("#name").val();
    var nameCont= $("#name-container");
    var isName= true;
    if(valName.length > 0 && valName.match(/^[a-zA-Z\s]*$/)){
        $("#name-container span").remove();
        isName=false;
    }else{
        createSpan(nameCont,"Coloca tu nombre");
        isName=true;
    }
    return isName;
}
var validaLastName= function validateLastName(){
    var valLastName=$("#lastname").val();
    var lastnameCont= $("#lastname-container");
    var isLastName= false;
    if(valLastName.length > 0 && valLastName.match(/^[a-zA-Z\s]*$/)){
        $("#lastname-container span").remove();
         isLastName=true;
    }else{
        createSpan(lastnameCont,"Coloca tu apellido")
        isLastName=true; 
    }
   return isLastName; 
}
var validaEmail = function validateEmail(){
    var valiMail = $("#input-email");
    var emailCont= $("#email-container");
    var isEmail= false;
    if(valiMail.val().length>0 && valiMail.val().match(/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/)){
        $("#email-container span").remove();
        isEmail=true; 
    }else{
        createSpan(emailCont,"Completa con tu email");
        isEmail=false;
    }
    return isEmail;
}
 var validaPassword= function validatePassword(){
    var valPassword = $("#input-password").val();
    var passCont= $("#password-container");
    var isPassword= false;
    if(valPassword=="098754"||valPassword=="password"||valPassword=="123456"||valPassword.length<=6){
            createSpan(passCont,"Ingrese correctamente su contraseña");
        isPassword= true;
        }else{
            $("#password-container span").remove();
            isPassword= false;
        }
    return isPassword;
}
//validating options about bycicles
var validaSelector= function validateSelector(){
    var indice = $("#options");
    var selectCont= $("#select-container");
    var isSelector= false;
    if(indice.val() == 0 ){
       createSpan(selectCont,"Selecciona una bicicleta");
        isSelector=false;
    }else{
        $("#select-container span").remove();
        isSelector=true;
    }
    return isSelector;
}
/***************************************************JUST DOING***************************************************/
/*function upperCaseName(_id){
    var element = $(_id);
    var value = element.val();
    var n = value.charAt(0); 
    var u = n.toUpperCase();
    var r = value.slice(1);
    var s = u.concat(r);
}

function validateForm(){
    console.log("hola");
    //$("#name").keyup(function(){
    var name = $("#name");
    //console.log(name);
    name.keyup(function(){
        if(name.val()==""){
            name.parent().append("<span>Colocoque su nombre</span>");
            return false;
            //name.append("<span>holiii</span>");
        }else{
           return true;
        }  
    });   
}*/
/*$(document).ready(function(){
    console.log("hola");
    
    //$("#name").keyup(function(){
    $(".btn").click(function(){
        var name = $("#name").val();
        //console.log(name);
        if(name==""){
            $(".input-box").append("<span>holiii</span>");
            return false;
            //name.append("<span>holiii</span>");
        }  
    });   
})*/
