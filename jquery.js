$(function(){
    $("#name").keyup(validaName);
    $("#lastname").keyup(validaLastName);
    $("#input-email").keyup(validaEmail);
    $("#input-password").keyup(validaPassword);
    $("#options").click(validaSelector);
    if (validaName()==true && validaLastName()==true && validaEmail()==true && validaPassword()==true && validaSelector()==true){
        
    }
});

function createSpan(_id,message){
  
    if(_id.find("span").length==0){
        $(_id).append("<span>"+message+"</span>")
    }
        
    
}

var validaName = function validateName(){
    //console.log("creo que no");
    var valName=$("#name").val();
    var isName= true;
    if(valName.length > 0 && valName.match(/^[a-zA-Z\s]*$/)){
        $("#name-container span").remove();
        return isName=true; 
    }else{
        createSpan("#name-container","Nombre valido");
        return isName=false;
    }
}

var validaLastName= function validateLastName(){
    var valLastName=$("#lastname").val();
    console.log(lastname);
    var isLastName= true;
    if(valLastName.length!=0 && valLastName.match(/^[a-zA-Z\s]*$/)){
        createSpan("#lastname-container","Apellido valido")
        return isLastName=true; 
    }else{
        $("#lastname-container span").remove();
        return isLastName=false; 
    }
}
var validaEmail = function validateEmail(){
    var valiMail = $("#input-email");
    var isEmail= true;
    if(valiMail.val().length!=0 && valiMail.val().match(/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/)){
        createSpan("#email-container","Email valido")
        return isEmail=true; 
    }else{
        $("#email-container span").remove();
        return isEmail=false;}
}
 var validaPassword= function validatePassword(){
    var valPassword = $("#input-password").val();
    if(valPassword=="098754"||valPassword=="password"||valPassword=="123456"||valPassword.length<=6){
            createSpan("#password-container","Ingrese correctamente su contraseña");
        }else{
            $("#password-container span").remove();}   
}
//validating options about bycicles
var validaSelector= function validateSelector(){
    var indice = $("#options");
    if(indice.val() == null || indice.val() == 0 ){
       createSpan("#options","Selecciona una bicicleta");
    }else{
        $("#options span").remove();
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
