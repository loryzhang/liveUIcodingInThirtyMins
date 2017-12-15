
$(document).ready(function() {
  let backStack = [];
  let forwardStack = [];
  let currentPage = "";
  $('button.gobutton').on('click', function(e) {   if (forwardStack.length > 0) {
      forwardStack = [];  
    }
    var current = $('input').val();
    if (currentPage === "") {
      currentPage = current;
    } else {
      backStack.push(currentPage);
      currentPage = current;
    }
    displayCurrent(currentPage);
    displayBackstack(backStack);
    displayForward(forwardStack);
  });
  $('button.backbutton').on('click', function(e) {
    if (backStack.length > 0) {
      forwardStack.push(currentPage);
      currentPage = backStack.pop();
      displayCurrent(currentPage);
      displayBackstack(backStack);
      displayForward(forwardStack);
    }
  });
  $('button.forwardbutton').on('click', function(e) {
    if (forwardStack.length > 0) {
      backStack.push(currentPage);
      currentPage = forwardStack.pop();
      displayCurrent(currentPage);
      displayBackstack(backStack);
      displayForward(forwardStack);
    }
  });

  var displayCurrent = (url) => {
    $('div #current').text(url);
  };

  var displayBackstack = (list) => {
      $('div #back').empty();
      list.forEach(url => {
      var li = '<li>' +url+ '</li>';
      $('div #back').prepend(li);
    });
    
  };

  var displayForward = (list) => {
    $('div #forward').empty();
    list.forEach(url => {
     var li = '<li>' +url+ '</li>'
      $('div #forward').prepend(li);
    });
  };
});
