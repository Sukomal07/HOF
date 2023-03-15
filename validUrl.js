const urlRegex = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+(\.[a-zA-Z]+)+$/;

function validateUrl(url) {
    if (urlRegex.test(url)) {
        console.log(`${url} is a valid URL.`);
    } else {
        console.log(`${url} is not a valid URL.`);
    }
}

const userInput = prompt("Please enter a URL:");

validateUrl(userInput);


// validateUrl("http://www.example.com");
// validateUrl("https://www.example.com");
// validateUrl("http://example.com/page.html?id=123");
// validateUrl("https://example.com");
// validateUrl("http://");
// validateUrl("https:/example.com");
// validateUrl("ftp://example.com"); 
