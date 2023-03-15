function validateLinkedInUrl(url) {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    if (regex.test(url)) {
        console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
        console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
}

const userInput = prompt("Please enter a URL:");

validateLinkedInUrl(userInput);

// validateLinkedInUrl("https://www.linkedin.com/in/duttasukomal"); // valid URL
// validateLinkedInUrl("https://www.linkedin.com/in/dutta.sukomal"); // invalid URL
// validateLinkedInUrl("https://www.linkedin.com/in/duttasukomal-"); // invalid URL
