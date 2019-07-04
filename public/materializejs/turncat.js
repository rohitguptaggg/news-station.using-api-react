function truncateText(selector,maxLength) {
    var element = document.querySelector(selector),
        truncated = element.innerText;
  
    if (truncated.length > maxLength) {
        truncated = truncated.substr(0,maxLength) + '...';
    }
    return truncated;
  }
  //You can then call the function with something like what i have below.
  document.querySelector('p').innerText = truncateText('p', 5);