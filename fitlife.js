
 var li1="";
 var li2="";
 var li3="";
 var li4="";
 var li5="";

 $(".image").click(function(){
 var data_count_value = $(this).attr("data-count");
 console.log(data_count_value);
 $(".products").css("display","none");

 for(var i=1;;i++){
     if(i==data_count_value){
         var temp1= $(".productDesc").eq(i-1).text();
         var temp2= $(".prize").eq(i-1).text();
         var temp3= $(".discount").eq(i-1).text();
         var temp4= $(".productImage").eq(i-1).attr("src");


         // console.log(temp1);
         // console.log(temp2);
         // console.log(temp3);
         // console.log(temp4);

         $(".product_image").attr("src",temp4);
         $(".innerProductDesc").text(temp1);
         $(".innerprize").text(temp2);
         
         $(".innerdiscount").text(temp3);
         $(".innerdiscount").css("color","red");
         $(".innerdiscount").css("border","2px solid red");
         $(".innerdiscount").css("display","inline");





         if(data_count_value==1){
             li1="Optimum Nutrition Gold Standard 100% Whey Protein 2 lb Double Rich Chocolate aids in the development of lean muscle";
             li2="It supports maintenance and improvement of the metabolism of your body";
             li3="It aids rapid muscle recovery after rigorous workout sessions";
             li4="Gold Standard 100% Whey Protein aids in the enhancement of your stamina and energy";
             li5="ON Gold Standard Whey Protein Double Rich Chocolate is a premier health supplement that is formulated to boost immunity and provide nourishment";

         }
         else if(data_count_value==2){
            li1="Optimum Nutrition Gold Standard 100% Whey Protein 2 lb Double Rich Chocolate aids in the development of lean muscle";
            li2="It supports maintenance and improvement of the metabolism of your body";
            li3="It aids rapid muscle recovery after rigorous workout sessions";
            li4="Gold Standard 100% Whey Protein aids in the enhancement of your stamina and energy";
            li5="ON Gold Standard Whey Protein Double Rich Chocolate is a premier health supplement that is formulated to boost immunity and provide nourishment";

        }
        else if(data_count_value==3){
            li1="Optimum Nutrition Gold Standard 100% Whey Protein 2 lb Double Rich Chocolate aids in the development of lean muscle";
            li2="It supports maintenance and improvement of the metabolism of your body";
            li3="It aids rapid muscle recovery after rigorous workout sessions";
            li4="Gold Standard 100% Whey Protein aids in the enhancement of your stamina and energy";
            li5="ON Gold Standard Whey Protein Double Rich Chocolate is a premier health supplement that is formulated to boost immunity and provide nourishment";

        }
        else if(data_count_value==4){
            li1="Optimum Nutrition Gold Standard 100% Whey Protein 2 lb Double Rich Chocolate aids in the development of lean muscle";
            li2="It supports maintenance and improvement of the metabolism of your body";
            li3="It aids rapid muscle recovery after rigorous workout sessions";
            li4="Gold Standard 100% Whey Protein aids in the enhancement of your stamina and energy";
            li5="ON Gold Standard Whey Protein Double Rich Chocolate is a premier health supplement that is formulated to boost immunity and provide nourishment";

        }
        else if(data_count_value==5){
            li1="Optimum Nutrition Gold Standard 100% Whey Protein 2 lb Double Rich Chocolate aids in the development of lean muscle";
            li2="It supports maintenance and improvement of the metabolism of your body";
            li3="It aids rapid muscle recovery after rigorous workout sessions";
            li4="Gold Standard 100% Whey Protein aids in the enhancement of your stamina and energy";
            li5="ON Gold Standard Whey Protein Double Rich Chocolate is a premier health supplement that is formulated to boost immunity and provide nourishment";

        }
         else if(data_count_value==6){
             li1="A combination of gym equipments for the perfect workout";
             li2="Highly durable and long lasting";
             li3="5kg Each 2 PVC dumbbells";
            //  li4="With a creamy texture and crunchy peanut chunks, this protein peanut butter is free from any hydrogenated oils and preservatives";
            //  li5="MuscleBlaze® Protein Peanut Butter does not contain any added sugar, salt and GMOs";
             
         }
         else if(data_count_value==7){
            li1="A combination of gym equipments for the perfect workout";
            li2="Highly durable and long lasting";
            li3="5kg Each 2 PVC dumbbells";
           //  li4="With a creamy texture and crunchy peanut chunks, this protein peanut butter is free from any hydrogenated oils and preservatives";
           //  li5="MuscleBlaze® Protein Peanut Butter does not contain any added sugar, salt and GMOs";
            
        }
        else if(data_count_value==8){
            li1="A combination of gym equipments for the perfect workout";
            li2="Highly durable and long lasting";
            li3="5kg Each 2 PVC dumbbells";
           //  li4="With a creamy texture and crunchy peanut chunks, this protein peanut butter is free from any hydrogenated oils and preservatives";
           //  li5="MuscleBlaze® Protein Peanut Butter does not contain any added sugar, salt and GMOs";
            
        }
        else if(data_count_value==9){
            li1="A combination of gym equipments for the perfect workout";
            li2="Highly durable and long lasting";
            li3="5kg Each 2 PVC dumbbells";
           //  li4="With a creamy texture and crunchy peanut chunks, this protein peanut butter is free from any hydrogenated oils and preservatives";
           //  li5="MuscleBlaze® Protein Peanut Butter does not contain any added sugar, salt and GMOs";
            
        }
         else if(data_count_value==10){
            li1="Now a natural peanut butter with the goodness of both peanuts (80%) and whey protein(20%)";
            li2="With 37% of protein, this Protein Peanut Butter is a perfect grab for those looking to manage their healthy fats as well as protein intake";
            li3="Each serving helps you become healthier as it provides your body with rich dietary fiber for improved digestion and satiation to avoid unhealthy munching";
            li4="With a creamy texture and crunchy peanut chunks, this protein peanut butter is free from any hydrogenated oils and preservatives";
            li5="MuscleBlaze® Protein Peanut Butter does not contain any added sugar, salt and GMOs";
            
         }
         else if(data_count_value==11){
            li1="Now a natural peanut butter with the goodness of both peanuts (80%) and whey protein(20%)";
            li2="With 37% of protein, this Protein Peanut Butter is a perfect grab for those looking to manage their healthy fats as well as protein intake";
            li3="Each serving helps you become healthier as it provides your body with rich dietary fiber for improved digestion and satiation to avoid unhealthy munching";
            li4="With a creamy texture and crunchy peanut chunks, this protein peanut butter is free from any hydrogenated oils and preservatives";
            li5="MuscleBlaze® Protein Peanut Butter does not contain any added sugar, salt and GMOs";
            
         }
         else if(data_count_value==12){
            li1="Now a natural peanut butter with the goodness of both peanuts (80%) and whey protein(20%)";
            li2="With 37% of protein, this Protein Peanut Butter is a perfect grab for those looking to manage their healthy fats as well as protein intake";
            li3="Each serving helps you become healthier as it provides your body with rich dietary fiber for improved digestion and satiation to avoid unhealthy munching";
            li4="With a creamy texture and crunchy peanut chunks, this protein peanut butter is free from any hydrogenated oils and preservatives";
            li5="MuscleBlaze® Protein Peanut Butter does not contain any added sugar, salt and GMOs";
            
         }
         else if(data_count_value==13){
            li1="Now a natural peanut butter with the goodness of both peanuts (80%) and whey protein(20%)";
            li2="With 37% of protein, this Protein Peanut Butter is a perfect grab for those looking to manage their healthy fats as well as protein intake";
            li3="Each serving helps you become healthier as it provides your body with rich dietary fiber for improved digestion and satiation to avoid unhealthy munching";
            li4="With a creamy texture and crunchy peanut chunks, this protein peanut butter is free from any hydrogenated oils and preservatives";
            li5="MuscleBlaze® Protein Peanut Butter does not contain any added sugar, salt and GMOs";
            
         }
         
         else if(data_count_value==14){
             li1="Gastric cleanser";
             li2="Improves nutrient assimilation";
             li3="Support digestive and respiratory system";
             li4="Promotes healthy lung function";
             li5="Normalise breathing";
             
         }
         else if(data_count_value==15){
            li1="Gastric cleanser";
            li2="Improves nutrient assimilation";
            li3="Support digestive and respiratory system";
            li4="Promotes healthy lung function";
            li5="Normalise breathing";
            
        }
        else if(data_count_value==16){
            li1="Gastric cleanser";
            li2="Improves nutrient assimilation";
            li3="Support digestive and respiratory system";
            li4="Promotes healthy lung function";
            li5="Normalise breathing";
            
        }
        else if(data_count_value==17){
            li1="Gastric cleanser";
            li2="Improves nutrient assimilation";
            li3="Support digestive and respiratory system";
            li4="Promotes healthy lung function";
            li5="Normalise breathing";
            
        }
        else if(data_count_value==18){
            li1="Gastric cleanser";
            li2="Improves nutrient assimilation";
            li3="Support digestive and respiratory system";
            li4="Promotes healthy lung function";
            li5="Normalise breathing";
            
        }
        
        //  else if(data_count_value==5){
        //       li1="Amway Nutrilite Salmon Omega 3 has Unique blend of Omega 3 Fatty Acids";
        //      li2="Amway Nutrilite Salmon Omega 3 helps to fulfill the bodys requirement of fatty acids";
        //      li3="There are no added flavors, colors or preservatives in this Omega-3 supplement. All the oils and nutrients are derived from 100% natural sources, making it suitable for just about anyone.";
        //      li4="Preventing several diseases like eczema and lupus";
        //      li5="Amway Nutrilite Salmon Omega 3 helps in maintaining better heart health by allowing artery walls to contract and relax easily.";
             
        //  }
         // else if(data_count_value==6){
         //     li1="Optimum Nutrition Gold Standard 100% Whey Protein 2 lb Double Rich Chocolate aids in the development of lean muscle";
         //     li2="It supports maintenance and improvement of the metabolism of your body";
         //     li3="It aids rapid muscle recovery after rigorous workout sessions";
         //     li4="Gold Standard 100% Whey Protein aids in the enhancement of your stamina and energy";
         //     li5="ON Gold Standard Whey Protein Double Rich Chocolate is a premier health supplement that is formulated to boost immunity and provide nourishment";
             
         // }
         // else if(data_count_value==7){
         //     li1="Optimum Nutrition Gold Standard 100% Whey Protein 2 lb Double Rich Chocolate aids in the development of lean muscle";
         //     li2="It supports maintenance and improvement of the metabolism of your body";
         //     li3="It aids rapid muscle recovery after rigorous workout sessions";
         //     li4="Gold Standard 100% Whey Protein aids in the enhancement of your stamina and energy";
         //     li5="ON Gold Standard Whey Protein Double Rich Chocolate is a premier health supplement that is formulated to boost immunity and provide nourishment";
             
         // }


     if(li1 != ""){
         $("<li>",{
             id:"li1"
         }).appendTo(".innerinnerProductDesc");
         $("#li1").text(li1);
     }

     if(li2 != ""){
         $("<li>",{
             id:"li2"
         }).appendTo(".innerinnerProductDesc");
         $("#li2").text(li2);
     }

     if(li3 != ""){
         $("<li>",{
             id:"li3"
         }).appendTo(".innerinnerProductDesc");
         $("#li3").text(li3);
     }

     if(li4 != ""){
         $("<li>",{
             id:"li4"
         }).appendTo(".innerinnerProductDesc");
         $("#li4").text(li4);
     }

     if(li5 != ""){
         $("<li>",{
             id:"li5"
         }).appendTo(".innerinnerProductDesc");
         $("#li5").text(li5);
     }

         break;
     }
 }





 $(".out").css("display","flex");
 $(".out").css("flex-direction","row");
})














$("#login").click(
    function(){
    
        $(".alert_div1").css("display","inline");
        $(".alert_div1").css("position","absolute");
        $(".alert_background").css("display","block");
        $(".alert_background").css("position","absolute");
        $("body").css("overflow","hidden");


    }
);



$(".buy_now").click(function(){

    
    $(".alert_div").css("display","inline");
    $(".alert_div").css("position","absolute");
    $(".alert_background").css("display","block");
    $(".alert_background").css("position","absolute");
    $(".alert_background").css("top","0px");
    
    $("body").css("overflow","hidden");
    var s = $(".innerprize").text();
    s=s.slice(1,s.length-2);
    $("#amount").val(s);

    $("#card").css("display","none");
 
    $("#customer_id").css("display","none");

    
    }
    );
    




function func(){
        if (document.querySelector("#r1:checked")!=null){
        $("#card").css("display","inline");
        // $("#cvv").css("display","inline");
        $("#customer_id").css("display","none");

    }
    else if (document.querySelector("#r2:checked")!=null){
        $("#customer_id").css("display","inline");
        $("#card").css("display","none");
     
    }
    else if (document.querySelector("#r3:checked")!=null){
        $("#customer_id").css("display","none");
        $("#card").css("display","none");
   
    }
}





$("#cut_alert1").click(
    function(){
    
        $(".alert_div1").css("display","none");
       

        // $(".alert_div").css("position","absolute");
        $(".alert_background").css("display","none");
        // $(".alert_background").css("position","absolute");
        $("body").css("overflow","visible");


    }
);


$("#cut_alert").click(
    function(){
        $(".alert_div").css("display","none");

        // $(".alert_div").css("position","absolute");
        $(".alert_background").css("display","none");
        // $(".alert_background").css("position","absolute");
        $("body").css("overflow","visible");


    }
);


var outerDiv = document.querySelector("#outerDiv");
var combinedDiv = document.querySelector("#combinedDiv");

var images = document.querySelectorAll("#outerDiv img");

let dist =-outerDiv.clientWidth;
// console.log(dist);
var count =1;
var abc=1;
var xyz=0;
var n=3;
setInterval(function () {
    //    console.log("j");
       if(xyz==1){
           xyz=0;
           dist-=outerDiv.clientWidth;
           
       }
        if(abc==1){
            dist-=outerDiv.clientWidth;  
            n=4;
            abc=0;
        }
        combinedDiv.style.transition="all 1s";
        combinedDiv.style.transform="translateX("+dist+"px)";
        dist-=outerDiv.clientWidth;
        count++;
        
        if(count==n){
            n=3;
            dist =0;
            
            combinedDiv.style.transition="none";
            combinedDiv.style.transform="translateX("+0+"px)";
            count=-1;
            xyz=1;
        }
        

	},1700);





    function sendmail(){

        var mail = $("#mail").val();
        var address = $("#address").val();
        var amount = $("#amount").val();
        
        Email.send({
        Host : "smtp.gmail.com",
        Username : "ftlfspprt@gmail.com",
        Password : "Fitlife@123",
        To : mail,
        From : "ftlfspprt@gmail.com",
        Subject : "Your order from Fitlife is Successful",
        Body : "Hi! You have successfully ordered a product from Fitlife Pvt Ltd worth ₹"+amount+" which will be delivered to your address "+address+" within a time span of 4-5 days. Thank you for your kind visit to Fitlife [Your Health our priority!]"
        }).then(
        message => alert("Your order is placed and will be delievered within 4-5 working days. Thank you for Shopping!")
        );
        
        }
        
        
        
        




// database connection for login ...............................................

// import "./node_modules/mysql";
// import "./node_modules/requirejs/require.js";
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

// var mysql = require("mysql");
// var requirejs = require('requirejs');


// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "tanish",
//     password: "1806"
// });
// connection.connect(function(err){
//     if(err) throw err;
//     connection.query("create database fitlife");
//     connection.query("use fitlife");



// });

var name_track="Not Signed in";
// var current_name ;





var db = openDatabase("fitlife",1.0,"fitlife",65535);
db.transaction(function(transaction){
    var query = "create table if not exists data"+"(name ,"+"email ,"+"phone ,"+"password )";
    transaction.executeSql(query,undefined,function(){console.log("success");},function(){console.log("failure");});
})


$("#signup").click(function (){
    var name_value = $("#name").val();
    var email_value = $("#email").val()
    // console.log(email_value);
    var phone_value =  $("#phone").val();
    var password_value = $("#password").val();

    db.transaction(function(transaction){
        var query = "insert into data (name,email,phone,password) values (?,?,?,?)";
        transaction.executeSql(query,[name_value,email_value,phone_value,password_value],function(){console.log("success");},function(){console.log("failure")});
            alert("You Signed Up successfully!");
    });
    

});

$("#inner_login").click(function (){
    var name_value1 = $("#login_name").val();
    var password_value1 = $("#login_password").val();

    db.transaction(function(transaction){
        var query = "select * from data order by name";
        var flag=false;
        transaction.executeSql(query,[],function(transaction,result){
            // if(result.rows.length){
                for(var i=0;i<result.rows.length;i++){
                    var row=result.rows.item(i);
                    // console.log(row.name);
                    var name1=row.name;  //email todo.................
                    var password1=row.password;
                    if(name1==name_value1 && password1==password_value1){
                        alert("You logged in successfully !");
                        flag=true;
                        var a = document.getElementById("default_user_icon");
                        if(a!=null){
                        a.remove();
                        }
                        document.getElementById("default_user").innerText=name1[0];
                        document.getElementById("default_user").style.backgroundColor="blue";
                        document.getElementById("default_user").style.color="white";
                        name_track="You Signed in as "+name1;


                        db.transaction(function(transaction){
                            var query = "create table if not exists data2"+"(currentuser)";
                            transaction.executeSql(query,undefined,function(){console.log("success");},function(){console.log("failure");});
                        });
                        db.transaction(function(transaction){
                            var query = "insert into data2 (currentuser) values (?)";
                            transaction.executeSql(query,[name1],function(){console.log("success");},function(){console.log("failure")});
                               
                        });
                        
                    



                        // current_name=name1;
                        break;
                    }
                }

                if(!flag){
                    alert("You are not signed up ! Please signup first then try login OR check if you entered name and password correctly ! ")
                }

            // }
            // else{
            //     console.log("in else");
            // }
        });
    })
});


var t=1;
$(".user").click(function(){
    if(t==1){
        t++;
    $(".user").append("<p class='user_click' >"+name_track+"</p>");
    }
});

$(".user").focusout(function(){
    t=1;
    $(".user_click").remove();
}) 


// ...............................................................


// database usage for current user......................................

// var db = openDatabase("fitlife",1.0,"fitlife",65535);

var current_name;

$(document).ready(function (){


    // db.transaction(function(transaction){
    //     var query = "create table if not exists data2"+"(currentuser)";
    //     transaction.executeSql(query,undefined,function(){console.log("success");},function(){console.log("failure");});
    // })



    db.transaction(function(transaction){
        var query = "select * from data2";
        transaction.executeSql(query,[],function(transaction,result){
            // if(result.rows.length){
                // for(var i=0;i<result.rows.length;i++){
                    var row=result.rows.item(result.rows.length-1);
                    // var row=result.rows.item(0);

                    // console.log(row.name);
                    var name12=row.currentuser;  //email todo.................
                    // var password1=row.password;
                    current_name=name12;
                        var a = document.getElementById("default_user_icon");
                        if(a!=null){
                        a.remove();
                        }
                        document.getElementById("default_user").innerText=name12[0];
                        document.getElementById("default_user").style.backgroundColor="blue";
                        document.getElementById("default_user").style.color="white";
                        name_track="You Signed in as "+name12;
                        // console.log(name12);
                        
                       
                    // } 
                // }     
                      
        });
    })
});




// ...............................................................




// database for add to cart

// var db1 = openDatabase("fitlifecart",1.0,"fitlifecart",65535);  // must not use openDatabase 2 times in one script!
db.transaction(function(transaction){
    var query = "create table if not exists data11"+"(namecart ,"+"image ,"+"desc ,"+"prize ,"+"discount)";
    // make different table name must ,i.e., not data since used in login , therefore i make let say data1
    transaction.executeSql(query,undefined,function(){console.log("success");},function(){console.log("failure");});
    
    
    
    $(".add_to_cart").click(function(){
    var product_image_value = $(".product_image").attr("src");
    var desc_value = $(".innerProductDesc").text();
    var prize_value = $(".prize").text();
    // console.log(product_image_value);
    var discount_value =  $(".inner_discount").text();
    // console.log(discount_value);
    // var password_value = $("#password").val();
    
    db.transaction(function(transaction){
    var query = "insert into data11 (namecart,image,desc,prize,discount) values (?,?,?,?,?)";
    transaction.executeSql(query,[current_name,product_image_value,desc_value,prize_value,discount_value],function(){console.log("success");},function(){console.log("failure")});
    
    alert("Item added to cart successfully!");
    });
    
    
    });
    
    })


// Not using React ...........
// $(".productdiv").click(function(event){
//     // console.log("vgh");
//     console.log(event.target.nodeName);
//     var count = document.querySelectorAll(".productdiv");
//     // if($(this).attr(src)=="fitlife product1.PNG"){
//     //     console.log("yes")
//     // }
//     // else{
//     //     console.log("no")
//     // }
// })

// $(".products").click(function(event){
//     // console.log("vgh");
//     console.log(event.target.nodeName);
// })
