$(function(){
    $("#name").keyup(validaName);
    $("#lastname").keyup(validaLastName);
    $("#input-email").keyup(validaEmail);
    $("#input-password").keyup(validaPassword);
    $("#options").click(validaSelector);
    
});
function validateForm(){
    if (validaName()==true && validaLastName()==true && validaEmail()==true && validaPassword()==true && validaSelector()==true){}
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
        return isName=false;
    }else{
        createSpan(nameCont,"Coloca tu nombre");
        return isName=true;
    }
}
var validaLastName= function validateLastName(){
    var valLastName=$("#lastname").val();
    var lastnameCont= $("#lastname-container");
    var isLastName= true;
    if(valLastName.length > 0 && valLastName.match(/^[a-zA-Z\s]*$/)){
        $("#lastname-container span").remove();
        return isLastName=false;
    }else{
        createSpan(lastnameCont,"Coloca tu apellido")
        return isLastName=true; 
    }
}
var validaEmail = function validateEmail(){
    var valiMail = $("#input-email");
    var emailCont= $("#email-container");
    var isEmail= true;
    if(valiMail.val().length>0 && valiMail.val().match(/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/)){
        $("#email-container span").remove();
        return isEmail=false; 
    }else{
        createSpan(emailCont,"Completa con tu email");
        return isEmail=true;}
}
 var validaPassword= function validatePassword(){
    var valPassword = $("#input-password").val();
    var passCont= $("#password-container");
    if(valPassword=="098754"||valPassword=="password"||valPassword=="123456"||valPassword.length<=6){
            createSpan(passCont,"Ingrese correctamente su contraseña");
        }else{
            $("#password-container span").remove();}   
}
//validating options about bycicles
var validaSelector= function validateSelector(){
    var indice = $("#options");
    var selectCont= $("#select-container");
    if(indice.val() == 0 ){
       createSpan(selectCont,"Selecciona una bicicleta");
    }else{
        $("#select-container span").remove();
    }  
}



















/*function upperCaseName(_id){
    var element = $(_id);
    var value = element.val();
    var n = value.charAt(0); 
    var u = n.toUpperCase();
    var r = value.slice(1);
    var s = u.concat(r);
}*/





    /*if(name.val().length != 0){
    upperCaseName("#name");
    console.log(upperCaseName("#name"));
        if(pattern.test(name)){
            name.parent().append("<span>Solo se acepan letras</span>");
            console.log(span);
            return false;
        }else{
            return true;
        }
    }/*else{
            span.hide();
            return true;}
    }else{
        span.show();
        return false;}*/



    
    
    
    /*if (valName!= ""){
        upperCaseName $("#name"); 
        if(/([0-9]+)/.test(valName)){
        createSpan("name","Solo se aceptan letras");
        }else{
        removeSpan("name");}    
    }else{
        createSpan("name","Debes ingresar tu nombre");}*/
    
    


/*$(document).ready(function(){
    validateForm();
});

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
