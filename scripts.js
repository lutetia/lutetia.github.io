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
    // Get the search terms from the input field
    var searchTerm = event.target.elements['search'].value;
    // Tokenize the search terms and remove empty spaces
    var tokens = searchTerm
                  .toLowerCase()
                  .split(' ')
                  .filter(function(token){
                    return token.trim() !== '';
                  });
   if(tokens.length) {
    //  Create a regular expression of all the search terms
    var searchTermRegex = new RegExp(tokens.join('|'), 'gim');
    var filteredList = books.filter(function(book){
      // Create a string of all object values
      var bookString = '';
      for(var key in book) {
        if(book.hasOwnProperty(key) && book[key] !== '') {
          bookString += book[key].toString().toLowerCase().trim() + ' ';
        }
      }
      // Return book objects where a match with the search regex if found
      return bookString.match(searchTermRegex);
    });
    // Render the search results
    render(filteredList);
   }
  };

  document.addEventListener('reset', function(event){
    event.preventDefault();
    render(books);
  });

  document.addEventListener('submit',handleSearch);
