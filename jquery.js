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
$(function(){
    //hacer que los span se oculten
    //console.log("hola");
    //$("button").click(function(validateName){
    //alert("hiii");
    //});
    $("#name").keyup(function(){
        //alert("hiii");
        validateName();
    });
     $("#lastname").focusout(function(){
        //alert("hiii");
        validateLastName();
    });
     $("#input-email").focusout(function(){
        //alert("hiii");
        validateEmail();
    });
     $("#input-password").focusout(function(){
        //alert("hiii");
        validatePassword();
    });
    
});

function upperCaseName(_id){
    var element = $(_id);
    var value = element.val();
    var n = value.charAt(0); 
    var u = n.toUpperCase();
    var r = value.slice(1);
    var s = u.concat(r);
}
function createSpan(_id,message){
    $(_id).append("<span>"+message+"</span>");
}
/*function createSpan(_id,message){
    var element= document.getElementById(_id);
    if (element.nextSibling==null){
    var span = document.createElement("span");
    span.innerHTML = message;
    element.parentNode.appendChild(span);
    }else{
       if(element.nextSibling.tagName=="SPAN"){
           element.nextSibling.innerHTML=message;
       } else{
           element.parentNode.removeChild(element.nextSibling);
           var span = document.createElement("span");
            span.innerHTML = message;
            element.parentNode.appendChild(span);}
    }
}*/
function validateName(){
    //console.log("creo que no");
    var name=$("#name");
    //console.log(name);
    var pattern = /([0-9]+)/;
    if(name.val().length!=0){
        upperCaseName("#name");
        if(pattern.test(name)){
            createSpan("#name-container","Solo use letras");
            return false;
        }else{
        $("#name-container span").remove();}
    }else{
        createSpan("#name-container","Debes ingresar tu nombre");
    }
}
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

/*function validateName(){
    var valName =$("#name").val();
    console.log(valName);
    if (valName!= ""){
        upperCaseName $("#name"); 
        if(/([0-9]+)/.test(valName)){
        createSpan("name","Solo se aceptan letras");
        }else{
        removeSpan("name");}    
    }else{
        createSpan("name","Debes ingresar tu nombre");}
}*/

    
    
    
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

