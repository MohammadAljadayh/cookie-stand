'use strict';
// let parent=document.getElementById('cookiesID');
// console.log(parent);
let parent=document.getElementById('cookies');
console.log(parent);

let hours = ['6am', '7am', '8am', '9am', '10 am', '11 am', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am']
//let Total=0;

// Object literals
let seattle = {
   name:" seattle",
    min: 23,
    max: 65,
    avg: 6.3,
    Total:0,
    avgCustomer: [],
    avgCookies: [],

    customerBHour:function () {

        for (let i = 0; i < hours.length; i++) {
            this.avgCustomer[i] = random(this.min, this.max);
            console.log(this.avgCustomer[i]);

        }
    },

    
    CookiesBHour: function () {

        for (let i = 0; i < hours.length; i++) {
            

            this.avgCookies[i]= Math.floor(this.avg * this.avgCustomer[i]);
            this.Total=this.Total+this.avgCookies[i];
            console.log(this.avgCookies[i]);
            
        }
    },


}


seattle.customerBHour();
seattle.CookiesBHour();
//console.log(this.Total); 



function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// method for rendering:







seattle.render=function () {
    

 
    let articleElement=document.createElement('article');

    parent.appendChild(articleElement);
    
    let h2Element=document.createElement('h2');
    
    articleElement.appendChild(h2Element);
    
    h2Element.textContent=this.name; 
    
    
    // create ul
    let ulElement=document.createElement('ul');
    
    
    // append ul
    
    articleElement.appendChild(ulElement);
    
    
    // creating the li
    
    for (let i = 0; i <hours.length;i++) {
        // create i
       let liElement= document.createElement('li');
    
        // append li
        ulElement.appendChild(liElement);
    
        // text content:
        liElement.textContent=hours[i] +" : " +this.avgCookies[i] + " "+"cookies";

       

        
    }
    let liElement= document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent="Total" +": " +  this.Total + " "+"cookies";
   
    
    }
    seattle.render();

    ///////////////////////////////////////////////////////////////////////////////////

    let Tokyo = {
        name:" Tokyo",
         min: 3,
         max: 24,
         avg: 1.2,
         Total:0,
         avgCustomer: [],
         avgCookies: [],
     
         customerBHour:function () {
     
             for (let i = 0; i < hours.length; i++) {
                 this.avgCustomer[i] = random(this.min, this.max);
                 console.log(this.avgCustomer[i]);
     
             }
         },
     
         
         CookiesBHour: function () {
     
             for (let i = 0; i < hours.length; i++) {
                 
     
                 this.avgCookies[i]= Math.floor(this.avg * this.avgCustomer[i]);
                 this.Total=this.Total+this.avgCookies[i];
                 console.log(this.avgCookies[i]);
                 
             }
         },
     
     
     }
     
     
     Tokyo.customerBHour();
     Tokyo.CookiesBHour();
     //console.log(this.Total); 
     
     
     
     function random(min, max) {
         return Math.floor(Math.random() * (max - min + 1)) + min;
     }
     
     
         
     
     
     
     
     Tokyo.render=function () {
         
     
      
         let articleElement=document.createElement('article');
     
         parent.appendChild(articleElement);
         
         let h2Element=document.createElement('h2');
         
         articleElement.appendChild(h2Element);
         
         h2Element.textContent=this.name; 
         
         
         // create ul
         let ulElement=document.createElement('ul');
         
         
         // append ul
         
         articleElement.appendChild(ulElement);
         
         
         // creating the li
         
         for (let i = 0; i <hours.length;i++) {
             // create i
            let liElement= document.createElement('li');
         
             // append li
             ulElement.appendChild(liElement);
         
             // text content:
             liElement.textContent=hours[i] +" : " +this.avgCookies[i] + " "+"cookies";
     
            
     
             
         }
         let liElement= document.createElement('li');
         ulElement.appendChild(liElement);
         liElement.textContent="Total" +": " + this.Total + " "+"cookies";
        
         
         }
         Tokyo.render();

    //      /////////////////////////////////////////////////////////////////////////////////////

         let Dubai = {
            name:" Dubai",
             min: 11,
             max: 38,
             avg: 3.7,
             Total:0,
             avgCustomer: [],
             avgCookies: [],
         
             customerBHour:function () {
         
                 for (let i = 0; i < hours.length; i++) {
                     this.avgCustomer[i] = random(this.min, this.max);
                     console.log(this.avgCustomer[i]);
         
                 }
             },
         
             
             CookiesBHour: function () {
         
                 for (let i = 0; i < hours.length; i++) {
                     
         
                     this.avgCookies[i]= Math.floor(this.avg * this.avgCustomer[i]);
                     this.Total=this.Total+this.avgCookies[i];
                     console.log(this.avgCookies[i]);
                     
                 }
             },
         
         
         }
         
         
         Dubai.customerBHour();
         Dubai.CookiesBHour();
         //console.log(Total); 
         
         
         
         function random(min, max) {
             return Math.floor(Math.random() * (max - min + 1)) + min;
         }
         
         
         // method for rendering:
         
         
         
         
         
         
         
         Dubai.render=function () {
             
         
          
             let articleElement=document.createElement('article');
         
             parent.appendChild(articleElement);
             
             let h2Element=document.createElement('h2');
             
             articleElement.appendChild(h2Element);
             
             h2Element.textContent=this.name; 
             
             
             // create ul
             let ulElement=document.createElement('ul');
             
             
             // append ul
             
             articleElement.appendChild(ulElement);
             
             
             // creating the li
             
             for (let i = 0; i <hours.length;i++) {
                 // create i
                let liElement= document.createElement('li');
             
                 // append li
                 ulElement.appendChild(liElement);
             
                 // text content:
                 liElement.textContent=hours[i] +" : " +this.avgCookies[i] + " "+"cookies";
         
                
         
                 
             }
             let liElement= document.createElement('li');
             ulElement.appendChild(liElement);
             liElement.textContent="Total" +": " + this.Total + " "+"cookies";
            
             
             }
             Dubai.render();
             ///////////////////////////////////////////////////////////////////////////////////////

             
         let Paris = {
            name:" Paris",
             min: 20,
             max: 38,
             avg: 2.3,
             Total:0,
             avgCustomer: [],
             avgCookies: [],
         
             customerBHour:function () {
         
                 for (let i = 0; i < hours.length; i++) {
                     this.avgCustomer[i] = random(this.min, this.max);
                     console.log(this.avgCustomer[i]);
         
                 }
             },
         
             
             CookiesBHour: function () {
         
                 for (let i = 0; i < hours.length; i++) {
                     
         
                     this.avgCookies[i]= Math.floor(this.avg * this.avgCustomer[i]);
                     this.Total=this.Total+this.avgCookies[i];
                     console.log(this.avgCookies[i]);
                     
                 }
             },
         
         
         }
         
         
         Paris.customerBHour();
         Paris.CookiesBHour();
         //console.log(Total); 
         
         
         
         function random(min, max) {
             return Math.floor(Math.random() * (max - min + 1)) + min;
         }
         
         
         // method for rendering:
         
         
         
         
         
         
         
         Paris.render=function () {
             
         
          
             let articleElement=document.createElement('article');
         
             parent.appendChild(articleElement);
             
             let h2Element=document.createElement('h2');
             
             articleElement.appendChild(h2Element);
             
             h2Element.textContent=this.name; 
             
             
             // create ul
             let ulElement=document.createElement('ul');
             
             
             // append ul
             
             articleElement.appendChild(ulElement);
             
             
             // creating the li
             
             for (let i = 0; i <hours.length;i++) {
                 // create i
                let liElement= document.createElement('li');
             
                 // append li
                 ulElement.appendChild(liElement);
             
                 // text content:
                 liElement.textContent=hours[i] +" : " +this.avgCookies[i] + " "+"cookies";
         
                
         
                 
             }
             let liElement= document.createElement('li');
             ulElement.appendChild(liElement);
             liElement.textContent="Total" +": " + this.Total + " "+"cookies";
            
             
             }
             Paris.render();

             /////////////////////////////////////////////////////////////////

             
         let Lima = {
            name:" Lima",
             min: 2,
             max: 16,
             avg: 4.6,
             Total:0,
             avgCustomer: [],
             avgCookies: [],
         
             customerBHour:function () {
         
                 for (let i = 0; i < hours.length; i++) {
                     this.avgCustomer[i] = random(this.min, this.max);
                     console.log(this.avgCustomer[i]);
         
                 }
             },
         
             
             CookiesBHour: function () {
         
                 for (let i = 0; i < hours.length; i++) {
                     
         
                     this.avgCookies[i]= Math.floor(this.avg * this.avgCustomer[i]);
                     this.Total=this.Total+this.avgCookies[i];
                     console.log(this.avgCookies[i]);
                     
                 }
             },
         
         
         }
         
         
         Lima.customerBHour();
         Lima.CookiesBHour();
         //console.log(Total); 
         
         
         
         function random(min, max) {
             return Math.floor(Math.random() * (max - min + 1)) + min;
         }
         
         
         // method for rendering:
         
         
         
         
         
         
         
         Lima.render=function () {
             
         
          
             let articleElement=document.createElement('article');
         
             parent.appendChild(articleElement);
             
             let h2Element=document.createElement('h2');
             
             articleElement.appendChild(h2Element);
             
             h2Element.textContent=this.name; 
             
             
             // create ul
             let ulElement=document.createElement('ul');
             
             
             // append ul
             
             articleElement.appendChild(ulElement);
             
             
             // creating the li
             
             for (let i = 0; i <hours.length;i++) {
                 // create i
                let liElement= document.createElement('li');
             
                 // append li
                 ulElement.appendChild(liElement);
             
                 // text content:
                 liElement.textContent=hours[i] +" : " +this.avgCookies[i] + " "+"cookies";
         
                
         
                 
             }
             let liElement= document.createElement('li');
             ulElement.appendChild(liElement);
             liElement.textContent="Total" +": " + this.Total + " "+"cookies";
            
             
             }
             Lima.render();