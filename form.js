

function Age(){
    let age =document.getElementById("age").value ;
    
    let textAge;
    if(age<=18){
        textAge="You're Under aged !"
       
    }else{
        textAge=""
    }
    

    document.getElementById("underAge").innerHTML=textAge;

    let password=document.getElementById("pass").value ;
    

        let textPassword;
        if(password.length<8 ){
                textPassword="You're password must be atleast 8 characters!"
    }else if(password.search(/[0-9]/)==-1){
        textPassword="You're password must contain 1 number!"
    }else if(password.search(/[A-Z]/)==-1){
        textPassword="You're password must contain 1 uppercase character!"
    }else if(password.search(/[@/#/$/%/*]/)==-1){
        textPassword="You're password must contain 1 Special character!"
    }
    else{
            textPassword=""
    }
    
    
    document.getElementById("password").innerHTML=textPassword;
}