'use strict';
// console.log('test');
var openingHours = ['6:00Am', '7:00Am', '8:00Am', '9:00Am', '10:00Am', '11:00Am', '12:00Pm',
    '1:00Pm', '2:00Pm', '3:00Pm', '4:00Pm', '5:00Pm', '6:00Pm', '7:00Pm'];

function generatRandomNumber(min, max) {
    var random;
    return random = Math.floor(Math.random() * (max - min + 1) + min);;
}
var shops = [];

function shop(name, max, min, avg) {
    this.name = name;
    this.max = max;
    this.min = min;
    this.avg = avg;
    this.customerPerHour = [];
    this.cookiesPerHour = [];
    shops.push(this);
}

shop.prototype.gitCustomer = function () {
    for (var i = 0; i < openingHours.length; i++) {
        this.customerPerHour.push(generatRandomNumber(this.min, this.max));

    }
}

shop.prototype.gitcookies = function () {

    for (var i = 0; i < openingHours.length; i++) {
        this.cookiesPerHour.push(Math.floor((this.customerPerHour[i] * this.avg)));
    }
}
var Seattle = new shop('Seattle', 65, 23, 6.3);
var Tokyo = new shop('Tokyo', 24, 3, 1.2);
var Dubai = new shop('Dubai', 38, 11, 3.7);
var Paris = new shop('Paris', 38, 20, 2.3);
var Lima = new shop('Lima', 16, 2, 4.6);

var div = document.getElementById('result');
var table = document.createElement('table');
Seattle.gitCustomer();
Seattle.gitcookies();
Tokyo.gitCustomer();
Tokyo.gitcookies();
Dubai.gitCustomer();
Dubai.gitcookies();
Paris.gitCustomer();
Paris.gitcookies();
Lima.gitCustomer();
Lima.gitcookies();

function header() {
    var tr = document.createElement("tr");
    for (let i = 0; i <= openingHours.length; i++) {
        var td = document.createElement("th");
        if (i === 0) {
            td.textContent = 'Shop Locations';
        } else {
            td.textContent = openingHours[i - 1];
        }

        tr.appendChild(td);
    }
    var td = document.createElement("th");
    td.textContent = 'Total Seal Per Day';
    tr.appendChild(td);
    table.appendChild(tr);
    div.appendChild(table);
}

function render() {
    for (let i = 0; i < shops.length; i++) {
        var tr = document.createElement("tr");
        var total = 0;
        for (let j = 0; j <= openingHours.length; j++) {
            var td = document.createElement("td");
            if (j === 0) {
                td.textContent = shops[i].name;
            } else {
                td.textContent = shops[i].cookiesPerHour[j - 1];
                total = total + shops[i].cookiesPerHour[j - 1];
            }

            tr.appendChild(td);
        }
        var td = document.createElement("td");
        td.textContent = total;
        tr.appendChild(td);
        table.appendChild(tr);
    }
}
function footer() {
    var tr = document.createElement("tr");
    var totalGrand = 0;
    for (let i = 0; i <= openingHours.length; i++) {
      var td = document.createElement("th");
      var total = 0;
      if (i === 0) {
        td.textContent = "Totals";
      } else {
       
          for (let j = 0; j < shops.length; j++) {
            total += shops[j].cookiesPerHour[i-1];
           
          }
         
          td.textContent = total;
          totalGrand+=total;
      }
  
      tr.appendChild(td);
      table.appendChild(tr);
    }
    var td = document.createElement("td");
    td.textContent = totalGrand;
    tr.appendChild(td);
    table.appendChild(tr);
    div.appendChild(table);
  }
header();
render();
footer();
        //  console.log('test' , this);




// var Seattle = {
//     name : 'Seattle',
//     min : 23 , 
//     max :65 , 
//     avg : 6.3 , 

//      customer :[] ,
//     customerPerHoure : function (){
//        var customer;
//     for (var i =0 ; i<openingHours.length;i++){
//     this.customer.push(generatRandomNumber(this.min ,this.max));

//     } return customer; 
//     },
//     cookiesPerHour : function (){
//         var cookies = []; 
//         for (var i=0 ; i< openingHours.length ;i++){
//             cookies.push(Math.floor((this.customer[i]*this.avg)));
//         }
//         return cookies; 
//     }, 
//     total : function (){
//         var totalcookies=0; 
//         for (var i=0 ; i<openingHours.length;i++){
//             totalcookies=totalcookies+this.cookiesPerHour()[i];
//         }return totalcookies;
//     }



// }
// Seattle.customerPerHoure();
// console.log('test',Seattle.customer);
// // console.log(Seattle.total());


// // console.log(Seattle.customerPerHoure());
// var Tokyo = {
//     name : 'Tokyo',
//     min :3 ,
//     max : 24 , 
//     avg : 1.2,
//     customer :[] ,
//     customerPerHoure : function (){
//        var customer;
//     for (var i =0 ; i<openingHours.length;i++){
//     this.customer.push(generatRandomNumber(this.min ,this.max));

//     } return customer; 
//     },
//     cookiesPerHour : function (){
//         var cookies = []; 
//         for (var i=0 ; i< openingHours.length ;i++){
//             cookies.push(Math.floor((this.customer[i]*this.avg)));
//         }
//         return cookies; 
//     }, 
//     total : function (){
//         var totalcookies=0; 
//         for (var i=0 ; i<openingHours.length;i++){
//             totalcookies=totalcookies+this.cookiesPerHour()[i];
//         }return totalcookies;
//     }

// }
// Tokyo.customerPerHoure();
// console.log(Tokyo);
// var Dubai = {
//     name : 'Dubai' , 
//     min : 11 , 
//     max : 38 , 
//     avg : 3.7 , 
//     customer :[] ,
//     customerPerHoure : function (){
//        var customer;
//     for (var i =0 ; i<openingHours.length;i++){
//     this.customer.push(generatRandomNumber(this.min ,this.max));

//     } return customer; 
//     },
//     cookiesPerHour : function (){
//         var cookies = []; 
//         for (var i=0 ; i< openingHours.length ;i++){
//             cookies.push(Math.floor((this.customer[i]*this.avg)));
//         }
//         return cookies; 
//     }, 
//     total : function (){
//         var totalcookies=0; 
//         for (var i=0 ; i<openingHours.length;i++){
//             totalcookies=totalcookies+this.cookiesPerHour()[i];
//         }return totalcookies;
//     }

// }
// Dubai.customerPerHoure();
// console.log (Dubai); 
// var Paris = {
//     name :'Paris',
//     min : 20 , 
//     max : 38 , 
//     avg : 2.3 ,
//     customer :[] ,
//     customerPerHoure : function (){
//        var customer;
//     for (var i =0 ; i<openingHours.length;i++){
//     this.customer.push(generatRandomNumber(this.min ,this.max));

//     } return customer; 
//     },
//     cookiesPerHour : function (){
//         var cookies = []; 
//         for (var i=0 ; i< openingHours.length ;i++){
//             cookies.push(Math.floor((this.customer[i]*this.avg)));
//         }
//         return cookies; 
//     }, 
//     total : function (){
//         var totalcookies=0; 
//         for (var i=0 ; i<openingHours.length;i++){
//             totalcookies=totalcookies+this.cookiesPerHour()[i];
//         }return totalcookies;
//     }

// }
// Paris.customerPerHoure();
// console.log (Paris); 
// var Lima = {
//     name : 'Lima',
//     min : 2 ,
//     max : 16 , 
//     avg : 4.6 ,
//     customer :[] ,
//     customerPerHoure : function (){
//        var customer;
//     for (var i =0 ; i<openingHours.length;i++){
//     this.customer.push(generatRandomNumber(this.min ,this.max));

//     } return customer; 
//     },
//     cookiesPerHour : function (){
//         var cookies = []; 
//         for (var i=0 ; i< openingHours.length ;i++){
//             cookies.push(Math.floor((this.customer[i]*this.avg)));
//         }
//         return cookies; 
//     }, 
//     total : function (){
//         var totalcookies=0; 
//         for (var i=0 ; i<openingHours.length;i++){
//             totalcookies=totalcookies+this.cookiesPerHour()[i];
//         }return totalcookies;
//     }

// }
// Lima.customerPerHoure();
// console.log(Lima); 


// function generatRandomNumber (min , max){
// var random;
//     return  random = Math.floor(Math.random()*(max-min+1)+min); ; 
// }
// var object =  [Seattle,Tokyo,Dubai,Paris,Lima];
// render();
// function render(){
//   var div = document.getElementById('result');
//   for (var i =0 ; i < object.length;i++){
//     console.log(object[i].name);
//     console.log(i);
//       var h1= document.createElement('h1');
//       h1.textContent=object[i].name;
//       div.appendChild(h1);
//       var ul= document.createElement('ul'); 


//       for (var j=0 ; j < openingHours.length ; j++) {
//         var li = document.createElement('li');
//         li.textContent=openingHours[j] +' : ' + object[i].cookiesPerHour()[j] +'  cookies.';
//         ul.appendChild(li);
//       }
//       var li = document.createElement('li');
//       li.textContent='total : '+object[i].total()+' cookies';
//     ul.appendChild(li);
//       div.appendChild(ul);
//   }
// }















