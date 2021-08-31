const xhr = new XMLHttpRequest();
    
//const url = `https://api.weather.gov/gridpoints/TOP/31,80/forecast`;
   const url = `https://bookdatasolutions.com/bdswebapi`;
xhr.open('GET', url, true);

xhr.onload = function () {
    console.log(this.response);
    const data = JSON.parse(this.response);
    console.log(data);
}
 xhr.send();
