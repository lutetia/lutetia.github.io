  var dataNames = [
    {"vardas": "Albinas","pavarde":"J","metai":"1948","menuo":"10","diena":"25","active":"1","correct":"1",},
    {"vardas": "Marija","pavarde":"J","metai":"1950","menuo":"3","diena":"13","active":"1","correct":"1",},
    {"vardas": "Robertas","pavarde":"J","metai":"1981","menuo":"4","diena":"9","active":"1","correct":"1",},
    {"vardas": "Elija","pavarde":"J","metai":"1948","menuo":"10","diena":"25","active":"1","correct":"1",},
    {"vardas": "Laura","pavarde":"J","metai":"1948","menuo":"10","diena":"25","active":"1","correct":"",},
    {"vardas": "Jolanta","pavarde":"Laz","metai":"1948","menuo":"10","diena":"25","active":"1","correct":"",},
    {"vardas": "Jonas","pavarde":"Laz","metai":"1948","menuo":"10","diena":"25","active":"1","correct":"",},
    {"vardas": "Stase","pavarde":"Vait","metai":"1948","menuo":"10","diena":"25","active":"1","correct":"",},
    {"vardas": "Dovydas","pavarde":"J","metai":"1948","menuo":"4","diena":"25","active":"1","correct":"",},
    {"vardas": "Janyte","pavarde":"J","metai":"1948","menuo":"1","diena":"2","active":"1","correct":"",},
    {"vardas": "Denis","pavarde":"J","metai":"1948","menuo":"10","diena":"25","active":"1","correct":"",},
    {"vardas": "Viktoras","pavarde":"J","metai":"1948","menuo":"10","diena":"25","active":"1","correct":"",},
    {"vardas": "Vytas","pavarde":"Sim","metai":"1948","menuo":"10","diena":"25","active":"1","correct":"",},
    {"vardas": "Onute","pavarde":"Sim","metai":"1948","menuo":"10","diena":"25","active":"1","correct":"",},
    {"vardas": "Vaidas","pavarde":"Sim","metai":"1948","menuo":"10","diena":"25","active":"1","correct":"",},
    {"vardas": "Kestas","pavarde":"Sim","metai":"1948","menuo":"10","diena":"25","active":"1","correct":"",},
    {"vardas": "Neilandas","pavarde":"Sim","metai":"1948","menuo":"12","diena":"29","active":"1","correct":"",},
    {"vardas": "Stefanija","pavarde":"Sim","metai":"1921","menuo":"1","diena":"18","active":"","correct":"",},
    {"vardas": "Jonas","pavarde":"Sim","metai":"1948","menuo":"10","diena":"25","active":"","correct":"",},
   
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
    let index = 0;
    var closestDatesArray = [];

    dataNames.forEach(function(dat){
      let d = new Date(currentYear, dat.menuo - 1, dat.diena);
      if (d < now)
      {
        d = new Date(currentYear + 1, dat.menuo - 1, dat.diena);
      }
      closestDatesArray.push([d, index++]);
    });

    closestDatesArray.sort(function(a, b){
      let x = new Date(a[0]);
      let y = new Date(b[0]);
      return x - y;
    });
    
    index = 3;
    var dataHTMLString = '<ul>' +
      closestDatesArray.map(function(dat){
        if (dataNames[dat[1]].active && dataNames[dat[1]].correct && index-- > 0)
          return '<li>' + dataNames[dat[1]].vardas + '&nbsp &nbsp &nbsp &nbsp &nbsp' + dataNames[dat[1]].pavarde + '<br/>' +
          dataNames[dat[1]].metai + '-' + dataNames[dat[1]].menuo + '-' + dataNames[dat[1]].diena + '</li>'; 
        else
          return "";
      }).join('');
      + '</ul>';
    
    app.innerHTML = dataHTMLString;
  };

  var searchInput = document.querySelector("#search");
  searchInput.addEventListener("keyup",handleSearch);

  var listData = document.querySelector("#reset");
  listData.addEventListener("click",function(event){
    render(dataNames);
  });

  window.addEventListener("load",handleClosestDates);
