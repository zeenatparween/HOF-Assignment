let checkvalidURL = ((pattern, input) => {
    if(pattern.test(input)){
        return "Valid Input"
    }
    return "Invalid input"
})

const urlPattern = /^https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]{2,}$/;

let url1 = "https://www.soeb.Khanum.com";
let url2 = "http//www.DelhiSeminar.com";

console.log(checkvalidURL(urlPattern, url1))
console.log(checkvalidURL(urlPattern , url2))