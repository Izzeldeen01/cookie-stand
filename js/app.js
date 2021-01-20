'use strict'; 
// console.log('test');
var openingHours = ['6:00Am','7:00Am','8:00Am','9:00Am','10:00Am','11:00Am','12:00Pm',
'1:00Pm','2:00Pm','3:00Pm','4:00Pm','5:00Pm','6:00Pm','7:00Pm'];
    

var Seattle = {
    name : 'Seattle',
    min : 23 , 
    max :65 , 
    avg : 6.3 , 

     customer :[] ,
    customerPerHoure : function (){
       var customer;
    for (var i =0 ; i<openingHours.length;i++){
    this.customer.push(generatRandomNumber(this.min ,this.max));

    } return customer; 
    },
    cookiesPerHour : function (){
        var cookies = []; 
        for (var i=0 ; i< openingHours.length ;i++){
            cookies.push(Math.floor((this.customer[i]*this.avg)));
        }
        return cookies; 
    }, 
    total : function (){
        var totalcookies=0; 
        for (var i=0 ; i<openingHours.length;i++){
            totalcookies=totalcookies+this.cookiesPerHour()[i];
        }return totalcookies;
    }

   

}
Seattle.customerPerHoure();
console.log('test',Seattle.customer);
// console.log(Seattle.total());


// console.log(Seattle.customerPerHoure());
var Tokyo = {
    name : 'Tokyo',
    min :3 ,
    max : 24 , 
    avg : 1.2,
    customer :[] ,
    customerPerHoure : function (){
       var customer;
    for (var i =0 ; i<openingHours.length;i++){
    this.customer.push(generatRandomNumber(this.min ,this.max));

    } return customer; 
    },
    cookiesPerHour : function (){
        var cookies = []; 
        for (var i=0 ; i< openingHours.length ;i++){
            cookies.push(Math.floor((this.customer[i]*this.avg)));
        }
        return cookies; 
    }, 
    total : function (){
        var totalcookies=0; 
        for (var i=0 ; i<openingHours.length;i++){
            totalcookies=totalcookies+this.cookiesPerHour()[i];
        }return totalcookies;
    }

}
Tokyo.customerPerHoure();
console.log(Tokyo);
var Dubai = {
    name : 'Dubai' , 
    min : 11 , 
    max : 38 , 
    avg : 3.7 , 
    customer :[] ,
    customerPerHoure : function (){
       var customer;
    for (var i =0 ; i<openingHours.length;i++){
    this.customer.push(generatRandomNumber(this.min ,this.max));

    } return customer; 
    },
    cookiesPerHour : function (){
        var cookies = []; 
        for (var i=0 ; i< openingHours.length ;i++){
            cookies.push(Math.floor((this.customer[i]*this.avg)));
        }
        return cookies; 
    }, 
    total : function (){
        var totalcookies=0; 
        for (var i=0 ; i<openingHours.length;i++){
            totalcookies=totalcookies+this.cookiesPerHour()[i];
        }return totalcookies;
    }

}
Dubai.customerPerHoure();
console.log (Dubai); 
var Paris = {
    name :'Paris',
    min : 20 , 
    max : 38 , 
    avg : 2.3 ,
    customer :[] ,
    customerPerHoure : function (){
       var customer;
    for (var i =0 ; i<openingHours.length;i++){
    this.customer.push(generatRandomNumber(this.min ,this.max));

    } return customer; 
    },
    cookiesPerHour : function (){
        var cookies = []; 
        for (var i=0 ; i< openingHours.length ;i++){
            cookies.push(Math.floor((this.customer[i]*this.avg)));
        }
        return cookies; 
    }, 
    total : function (){
        var totalcookies=0; 
        for (var i=0 ; i<openingHours.length;i++){
            totalcookies=totalcookies+this.cookiesPerHour()[i];
        }return totalcookies;
    }

}
Paris.customerPerHoure();
console.log (Paris); 
var Lima = {
    name : 'Lima',
    min : 2 ,
    max : 16 , 
    avg : 4.6 ,
    customer :[] ,
    customerPerHoure : function (){
       var customer;
    for (var i =0 ; i<openingHours.length;i++){
    this.customer.push(generatRandomNumber(this.min ,this.max));

    } return customer; 
    },
    cookiesPerHour : function (){
        var cookies = []; 
        for (var i=0 ; i< openingHours.length ;i++){
            cookies.push(Math.floor((this.customer[i]*this.avg)));
        }
        return cookies; 
    }, 
    total : function (){
        var totalcookies=0; 
        for (var i=0 ; i<openingHours.length;i++){
            totalcookies=totalcookies+this.cookiesPerHour()[i];
        }return totalcookies;
    }

}
Lima.customerPerHoure();
console.log(Lima); 


function generatRandomNumber (min , max){
var random;
    return  random = Math.floor(Math.random()*(max-min+1)+min); ; 
}
var object =  [Seattle,Tokyo,Dubai,Paris,Lima];
render();
function render(){
  var div = document.getElementById('result');
  for (var i =0 ; i < object.length;i++){
    console.log(object[i].name);
    console.log(i);
      var h1= document.createElement('h1');
      h1.textContent=object[i].name;
      div.appendChild(h1);
      var ul= document.createElement('ul'); 
      
           
      for (var j=0 ; j < openingHours.length ; j++) {
        var li = document.createElement('li');
        li.textContent=openingHours[j] +' : ' + object[i].cookiesPerHour()[j] +'  cookies.';
        ul.appendChild(li);
      }
      var li = document.createElement('li');
      li.textContent='total : '+object[i].total()+' cookies';
    ul.appendChild(li);
      div.appendChild(ul);
  }
}















