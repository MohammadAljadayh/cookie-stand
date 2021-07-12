'use strict';
// let parent=document.getElementById('cookiesID');
// console.log(parent);
let parent = document.getElementById('cookies');
let table = document.createElement('table');
// append
parent.appendChild(table);
console.log(parent);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let hours = ['6am', '7am', '8am', '9am', '10 am', '11 am', '12am', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM']
//let Total=0;

//let cookies=[];
function cookie(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.Total = 0;
    this.avgCustomer = [];
    this.avgCookies = [];
    //cookies.push(this);
}
cookie.prototype.customerBHour = function () {

    for (let i = 0; i < hours.length; i++) {
        this.avgCustomer.push(random(this.min, this.max));
        console.log(this.avgCustomer[i]);
    }
}

let avgCookies = [];
cookie.prototype.CookiesBHour = function () {
    for (let i = 0; i < hours.length; i++) {

        this.avgCookies.push(Math.floor(this.avg * this.avgCustomer[i]));
        this.Total = this.Total + this.avgCookies[i];
        console.log(this.avgCookies[i]);

    }
}

let seattle = new cookie('seattle', 23, 65, 6.3);
let Tokyo = new cookie('Tokyo',3, 24, 1.2);
let Dubai = new cookie('Dubai',11,38,3.7);
let Paris = new cookie('Paris',20,38,2.3);
let Lima = new cookie('Lima',2,16,4.6);



seattle.customerBHour();
seattle.CookiesBHour();

Tokyo.customerBHour();
Tokyo.CookiesBHour();

Dubai.customerBHour();
Dubai.CookiesBHour();

Paris.customerBHour();
Paris.CookiesBHour();

Lima.customerBHour();
Lima.CookiesBHour();



// console.log(seattle);
// console.log(seattle.customerBHour());
// console.log(seattle.CookiesBHour());
// console.log(seattle.Total);

//console.log(Tokyo);

{/* <table>
 <tr>
   <th>
   </th>
  </tr>
</table> */}

//Heder function
hours.render = function () {



    // creating the header row:
    let headingRow = document.createElement('tr');

    // append it o the table
    table.appendChild(headingRow);

    let thElement1 = document.createElement('th');

    // append
    headingRow.appendChild(thElement1);

    // text conent
    thElement1.textContent = "Location Name";


    for (let i = 0; i < hours.length; i++) {
        // make th element
        let thElement = document.createElement('th');

        // append
        headingRow.appendChild(thElement);

        // text conent
        thElement.textContent = hours[i];

    }
    // make th element
    let thElement2 = document.createElement('th');
    // append
    headingRow.appendChild(thElement2);
    // text conent
    thElement2.textContent = "Daily Location Total";
}

hours.render();






cookie.prototype.render= function () {


    // creating the header row:
    let headingRow = document.createElement('tr');

    // append it o the table
    table.appendChild(headingRow);

    let thElement1 = document.createElement('th');

    // append
    headingRow.appendChild(thElement1);

    // text conent
    thElement1.textContent = this.name;


    for (let i = 0; i < hours.length; i++) {
        // make th element
        let thElement = document.createElement('th');

        // append
        headingRow.appendChild(thElement);

        // text conent
        thElement.textContent = this.avgCookies[i];

    }
    // make th element
    let thElement2 = document.createElement('th');
    // append
    headingRow.appendChild(thElement2);
    // text conent
    thElement2.textContent = this.Total;



}


seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();


// Footer Function 
let Total2=0;

hours.render = function () {



    // creating the header row:
    let headingRow = document.createElement('tr');

    // append it o the table
    table.appendChild(headingRow);

    let thElement1 = document.createElement('th');

    // append
    headingRow.appendChild(thElement1);

    // text conent
    thElement1.textContent = "Total";


    for (let i = 0; i < hours.length; i++) {
        // make th element
        let thElement = document.createElement('th');

        // append
        headingRow.appendChild(thElement);

        // text conent
    


let text=seattle.avgCookies[i]+Tokyo.avgCookies[i]+Dubai.avgCookies[i]+Paris.avgCookies[i]+Lima.avgCookies[i];
        thElement.textContent = text;
        Total2=Total2+text
    }
    // make th element
    let thElement2 = document.createElement('th');
    // append
    headingRow.appendChild(thElement2);
    // text conent
    thElement2.textContent = Total2;
}

hours.render();






    