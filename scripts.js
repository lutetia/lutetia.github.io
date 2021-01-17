  var dataNames = [
    {"vardas": "Albinas","pavarde":"J","metai":"1948","menuo":"10","diena":"25",},
    {"vardas": "Marija","pavarde":"J","metai":"1950","menuo":"3","diena":"13",},
    {"vardas": "Robertas","pavarde":"J","metai":"1981","menuo":"4","diena":"9",},
    {"vardas": "Elija","pavarde":"J","metai":"1948","menuo":"10","diena":"25",},
    {"vardas": "Laura","pavarde":"J","metai":"1948","menuo":"10","diena":"25",},
    {"vardas": "Jolanta","pavarde":"Laz","metai":"1948","menuo":"10","diena":"25",},
    {"vardas": "Jonas","pavarde":"Laz","metai":"1948","menuo":"10","diena":"25",},
    {"vardas": "Stase","pavarde":"Vait","metai":"1948","menuo":"10","diena":"25",},
    {"vardas": "Dovydas","pavarde":"J","metai":"1948","menuo":"2","diena":"25",},
    {"vardas": "Janyte","pavarde":"J","metai":"1948","menuo":"1","diena":"2",},
    {"vardas": "Denis","pavarde":"J","metai":"1948","menuo":"10","diena":"25",},
    {"vardas": "Viktoras","pavarde":"J","metai":"1948","menuo":"10","diena":"25",},
    {"vardas": "Vytas","pavarde":"Sim","metai":"1948","menuo":"10","diena":"25",},
    {"vardas": "Onute","pavarde":"Sim","metai":"1948","menuo":"10","diena":"25",},
    {"vardas": "Vaidas","pavarde":"Sim","metai":"1948","menuo":"10","diena":"25",},
    {"vardas": "Kestas","pavarde":"Sim","metai":"1948","menuo":"10","diena":"25",},
    {"vardas": "Neilandas","pavarde":"Sim","metai":"1948","menuo":"10","diena":"25",},
    {"vardas": "Stefanija","pavarde":"Sim","metai":"1948","menuo":"10","diena":"25",},
    {"vardas": "Jonas","pavarde":"Sim","metai":"1948","menuo":"10","diena":"25",},
   
  ];
  
  var render = function(data) {
    var app = document.getElementById('app');
    var dataHTMLString = '<ul>'+
      data.map(function(dat){
        return '<li>'+
                dat.vardas +
                '&nbsp &nbsp &nbsp &nbsp &nbsp' + dat.pavarde + '<br/>' +
                dat.metai + '-' + dat.menuo + '-' + dat.diena + '<br/>' +
              '</li>';
      }).join('');
      + '</ul>';

    app.innerHTML = dataHTMLString;
  };

  var handleSearch = function(event) {
    var searchTerm = event.target.value;
    var tokens = searchTerm
                  .toLowerCase()
                  .split(' ')
                  .filter(function(token){
                    return token.trim() !== '';
                  });
   if(tokens.length) {
    var searchTermRegex = new RegExp(tokens.join('|'), 'gim');
    var filteredList = dataNames.filter(function(dat){
      var dataString = '';
      for(var key in dat) {
        if(dat.hasOwnProperty(key) && dat[key] !== '') {
          dataString += dat[key].toString().toLowerCase().trim() + ' ';
        }
      }
      return dataString.match(searchTermRegex);
    });
    render(filteredList);
   }
  };

  var handleClosestDates = function(event) {
    var app = document.getElementById('laikas');
    let now = new Date();
    let currentYear = now.getFullYear();
    let min = Infinity;
    let index = 0;
    let minIndex = -1;

    dataNames.forEach(function(dat){
      let d = new Date(currentYear, dat.menuo - 1, dat.diena);

      if (d >= now && d < min)
      {
        min = d;
        minIndex = index;
      }
      ++index;
    });

    if (minIndex >= 0) 
    {
      var dataHTMLString = '<ul>' + 
          '<li>'+ dataNames[minIndex].vardas + '&nbsp &nbsp &nbsp &nbsp &nbsp' + dataNames[minIndex].pavarde + '<br/>' +
          dataNames[minIndex].metai + '-' + dataNames[minIndex].menuo + '-' + dataNames[minIndex].diena + '</li>' + 
          '</ul>';
      app.innerHTML = dataHTMLString;
    }
  };

  var searchInput = document.querySelector("#search");
  searchInput.addEventListener("keyup",handleSearch);

  var listData = document.querySelector("#reset");
  listData.addEventListener("click",function(event){
    render(dataNames);
  });

  window.addEventListener("load",handleClosestDates);
