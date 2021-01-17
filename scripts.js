  var dataNames = [
    {"vardas": "Albinas","pavarde":"J","metai":"1948","menuo":"10","diena":"25","active":"1","correct":"1",},
    {"vardas": "Marija","pavarde":"J","metai":"1950","menuo":"3","diena":"13","active":"1","correct":"1",},
    {"vardas": "Robertas","pavarde":"J","metai":"1981","menuo":"4","diena":"9","active":"1","correct":"1",},
    {"vardas": "Elija","pavarde":"J","metai":"2013","menuo":"8","diena":"3","active":"1","correct":"1",},
    {"vardas": "Laura","pavarde":"J","metai":"1988","menuo":"3","diena":"30","active":"1","correct":"1",},
    {"vardas": "Jolanta","pavarde":"Laz","metai":"1969","menuo":"5","diena":"17","active":"1","correct":"1",},
    {"vardas": "Jonas","pavarde":"Laz","metai":"1967","menuo":"12","diena":"25","active":"1","correct":"1",},
    {"vardas": "Stase","pavarde":"Petke","metai":"1944","menuo":"6","diena":"5","active":"1","correct":"1",},
    {"vardas": "Dovydas","pavarde":"Laz","metai":"1996","menuo":"3","diena":"20","active":"1","correct":"1",},
    {"vardas": "Janyte","pavarde":"Sim","metai":"1958","menuo":"8","diena":"28","active":"1","correct":"1",},
    {"vardas": "Jurijus","pavarde":"Siominas","metai":"1952","menuo":"9","diena":"7","active":"1","correct":"",},
    {"vardas": "Denis","pavarde":"Barrett","metai":"1951","menuo":"11","diena":"25","active":"1","correct":"",},
    {"vardas": "Viktoras","pavarde":"Sim","metai":"1984","menuo":"2","diena":"9","active":"1","correct":"",},
    {"vardas": "Ramune","pavarde":"Sim","metai":"1979","menuo":"2","diena":"2","active":"1","correct":"1",},
    {"vardas": "Lia","pavarde":"Sim","metai":"2011","menuo":"5","diena":"25","active":"1","correct":"1",},    
    {"vardas": "Vytas","pavarde":"Sim","metai":"1948","menuo":"1","diena":"5","active":"1","correct":"",},
    {"vardas": "Onute","pavarde":"Sim","metai":"1948","menuo":"10","diena":"25","active":"1","correct":"",},
    {"vardas": "Vaidas","pavarde":"Sim","metai":"1977","menuo":"9","diena":"18","active":"1","correct":"",},
    {"vardas": "Kestas","pavarde":"Sim","metai":"1982","menuo":"10","diena":"25","active":"1","correct":"",},
    {"vardas": "Neilandas","pavarde":"Sim","metai":"1975","menuo":"12","diena":"29","active":"1","correct":"",},
    {"vardas": "Stefanija","pavarde":"Sim","metai":"1921","menuo":"11","diena":"25","active":"","correct":"1",},
    {"vardas": "Jonas","pavarde":"Sim","metai":"1907","menuo":"9","diena":"7","active":"","correct":"1",},
    {"vardas": "Jonas","pavarde":"Sim","metai":"1957","menuo":"3","diena":"7","active":"","correct":"",},
    {"vardas": "Danute","pavarde":"Sim","metai":"1959","menuo":"9","diena":"7","active":"1","correct":"",},
    {"vardas": "Donatas","pavarde":"Sim","metai":"1988","menuo":"9","diena":"7","active":"1","correct":"",},
    {"vardas": "Dovile","pavarde":"Sim","metai":"1990","menuo":"9","diena":"7","active":"1","correct":"",},
    {"vardas": "Gintas","pavarde":"Sim","metai":"1982","menuo":"9","diena":"7","active":"1","correct":"",},
    {"vardas": "Petras","pavarde":"Sim","metai":"1954","menuo":"5","diena":"1","active":"","correct":"",},
    {"vardas": "Maryte","pavarde":"Sim","metai":"1956","menuo":"9","diena":"7","active":"1","correct":"",},
    {"vardas": "Dainius","pavarde":"Sim","metai":"1978","menuo":"6","diena":"18","active":"1","correct":"",},
    {"vardas": "Ramune","pavarde":"Sim","metai":"1982","menuo":"9","diena":"7","active":"1","correct":"",},
    {"vardas": "Juozas","pavarde":"Sim","metai":"1952","menuo":"5","diena":"7","active":"","correct":"",},
    {"vardas": "Cese","pavarde":"Sim","metai":"1959","menuo":"9","diena":"7","active":"1","correct":"",},
    {"vardas": "Aidas","pavarde":"Sim","metai":"1982","menuo":"9","diena":"7","active":"1","correct":"",},
    {"vardas": "Vilius","pavarde":"Sim","metai":"1985","menuo":"9","diena":"7","active":"1","correct":"",},
    {"vardas": "Virginas","pavarde":"Sim","metai":"1958","menuo":"8","diena":"28","active":"1","correct":"1",},
    {"vardas": "Zigmas","pavarde":"Vait","metai":"1945","menuo":"9","diena":"7","active":"","correct":"",},
    {"vardas": "Juozas","pavarde":"Petke","metai":"1940","menuo":"9","diena":"7","active":"1","correct":"",},
    {"vardas": "Genute","pavarde":"Maculeviciute","metai":"1936","menuo":"9","diena":"17","active":"1","correct":"1",},
    {"vardas": "Grasilda","pavarde":"Juo","metai":"1914","menuo":"5","diena":"30","active":"","correct":"",},
    {"vardas": "Pranas","pavarde":"Juo","metai":"1903","menuo":"9","diena":"7","active":"","correct":"",},
    {"vardas": "Juozas","pavarde":"Juo","metai":"1946","menuo":"9","diena":"16","active":"1","correct":"1",},
    {"vardas": "Eugenija","pavarde":"Juo","metai":"1944","menuo":"9","diena":"7","active":"1","correct":"",}, 
    {"vardas": "Saulius","pavarde":"Juo","metai":"1976","menuo":"9","diena":"7","active":"1","correct":"",},
    {"vardas": "Giedrius","pavarde":"Juo","metai":"1978","menuo":"9","diena":"18","active":"1","correct":"",}, 
    {"vardas": "Jane","pavarde":"Cesn","metai":"1943","menuo":"5","diena":"30","active":"1","correct":"1",},
    {"vardas": "Algis","pavarde":"Cesn","metai":"1950","menuo":"3","diena":"7","active":"1","correct":"",},   
    {"vardas": "Rytis","pavarde":"Cesn","metai":"1974","menuo":"5","diena":"7","active":"1","correct":"",},
    {"vardas": "Ilona","pavarde":"Cesn","metai":"1973","menuo":"9","diena":"7","active":"1","correct":"",},
    {"vardas": "Simas","pavarde":"Cesn","metai":"2012","menuo":"9","diena":"7","active":"1","correct":"",},   
    {"vardas": "Vitalija","pavarde":"Cesn","metai":"1976","menuo":"11","diena":"7","active":"1","correct":"",},
    {"vardas": "Leonas","pavarde":"Cesn","metai":"1974","menuo":"9","diena":"7","active":"1","correct":"",}, 
    {"vardas": "Antanas","pavarde":"Juo","metai":"1953","menuo":"8","diena":"16","active":"1","correct":"1",},
    {"vardas": "Antanas","pavarde":"Cesnavicius","metai":"1951","menuo":"3","diena":"4","active":"1","correct":"1",},
    {"vardas": "Jurate","pavarde":"Kapociene","metai":"1967","menuo":"4","diena":"12","active":"1","correct":"1",},
    {"vardas": "Zina","pavarde":"Siriajeva","metai":"1954","menuo":"8","diena":"19","active":"1","correct":"1",},
    {"vardas": "Nijole","pavarde":"Lukoseviciene","metai":"1951","menuo":"1","diena":"7","active":"1","correct":"",},
   
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

  var prmpt = prompt("...");
  if (prmpt == "letmein") {
    var searchInput = document.querySelector("#search");
    searchInput.addEventListener("keyup",handleSearch);

    var listData = document.querySelector("#reset");
    listData.addEventListener("click",function(event){
      render(dataNames);
    });

    window.addEventListener("load",handleClosestDates);
  }
