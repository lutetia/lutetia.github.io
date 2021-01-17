  var books = [
    {
      "title": "Cracking the coding interview",
      "subtitle":"189 programming questions and solutions",
      "author":"Gayle Laakmann McDowell",
      "category":"Programming",
      "publisher":"CareerCup, LLC"
    },
    {
      "title": "No friend but the mountains",
      "subtitle":"Writing from manu prison",
      "author":"Behrouz Boochani",
      "category":"Literature",
      "publisher":"Pan Macmillan Australia"
    },
    {
      "title": "Indian Harvest",
      "subtitle":"Classic and contemporary vegetarian dishes",
      "author":"Vikas Khanna",
      "category":"Cuisine",
      "publisher":"Bloomsbury USA"
    },
  ];
  
  var render = function(data) {
    var app = document.getElementById('app');
    var booksHTMLString = '<ul>'+
      data.map(function(book){
        return '<li>'+
                '<strong>Title: </strong>' + book.title + '<br/>' +
                '<strong>Subtitle: </strong>' + book.subtitle + '<br/>' +
                '<strong>Author: </strong>' + book.author + '<br/>' +
                '<strong>Category: </strong>' + book.category + '<br/>' +
                '<strong>Publisher: </strong>' + book.publisher + '<br/>' +
              '</li>';
      }).join('');
      + '</ul>';

    app.innerHTML = booksHTMLString;
  }

  var handleSearch = function(event) {
    event.preventDefault();
    var searchTerm = event.target.value;
    var tokens = searchTerm
                  .toLowerCase()
                  .split(' ')
                  .filter(function(token){
                    return token.trim() !== '';
                  });
   if(tokens.length) {
    var searchTermRegex = new RegExp(tokens.join('|'), 'gim');
    var filteredList = books.filter(function(book){
      var bookString = '';
      for(var key in book) {
        if(book.hasOwnProperty(key) && book[key] !== '') {
          bookString += book[key].toString().toLowerCase().trim() + ' ';
        }
      }
      return bookString.match(searchTermRegex);
    });
    render(filteredList);
   }
  };

  document.addEventListener('reset', function(event){
    event.preventDefault();
    render(books);
  });

  var search_input = document.querySelector("#search");
  search_input.addEventListener("keyup",handleSearch);
