var request = new XMLHttpRequest();

request.open('GET', 'https://api.openbrewerydb.org/breweries', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(beer => {
      //console.log(beer.name + " - " + beer.city);
      document.getElementById("root").innerHTML += 
      "<div class='beer_card'>" +
        "<div class='name'><a target='_blank' href='" + beer.website_url + "'>" + beer.name + "</a></div>" + 
        "<div class='brewery_type " + beer.brewery_type + "'>" + beer.brewery_type + "</div>" +
        "<div class='city'>" + beer.street + "<br /><strong>" + beer.city + "</strong></div>" +
        "<div class='location'><a target='_blank' href='#'>↝</a></div>" +
      "</div>";
    });
  } else {
    console.log('error');
  }
}

request.send();