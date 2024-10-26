$("#counter1").countMe(1,500)
    $("#counter2").countMe(1000,10)
    $("#counter3").countMe(2000,5)
    $("#counter4").countMe(2000,5)
    
    $(document).ready(function() {
        var one = $("#one");
        var two = $("#two");    
    one.owlCarousel({
        loop:true,
        margin:50,
        nav:false,
        autoplay:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
    two.owlCarousel({
        loop:true,
        margin:50,
        nav:false,
        autoplay:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
               items:2    
            },
            800:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    });

const Validation = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let nameStatus = false;
    let emailStatus = false;
    let phoneStatus = false;
    let alphaexp = /^[a-zA-Z]+$/;
    let emailExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let numExp = /^[0-9]+$/;
    //validation
    if( name === ""){
        document.getElementById("nameNote").innerHTML = "Enter Your Name";
           }
    else{
        if(name.match(alphaexp)){
            document.getElementById("nameNote").innerHTML = "";  
            nameStatus = true;
        }
        else{
            document.getElementById("nameNote").innerHTML = "Enter Characters Only";
             nameStatus = false;    
           }}
           if( email === ""){
            document.getElementById("mailNote").innerHTML ="Email-id cannot be empty";
           }
           else{
            if(email.match(emailExp)){
                document.getElementById("mailNote").innerHTML = "";
            emailStatus =true;
          
            }
            else{
                document.getElementById("mailNote").innerHTML ="Email-id is not valid";
                emailStatus = false;
           }}
          if( phone === ""){
            document.getElementById("mobileNote").innerHTML = "Enter phone number";
          }
          else{
            if(phone.match(numExp)){
                if(phone.length === 10){
                document.getElementById("mobileNote").innerHTML ="";
                phoneStatus =true;
                }
                else{
                document.getElementById("mobileNote").innerHTML = "Enter 10 Digits";
            phoneStatus = false;
            }}
            else{
                document.getElementById("mobileNote").innerHTML ="Enter Digits Only";
                phoneStatus = false;
                     }
                    }
//returns value
           if(nameStatus === true && emailStatus === true && phoneStatus === true){
            return true;
        }
        else{
            return false;
        }
};