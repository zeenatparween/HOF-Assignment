let linkedinInValidation = ((pattern, input) => {
    if(pattern.test(input)){
        return "valid Profile";
    }
    return "Invalid Profile"
}); 

let urlPattern =  /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

console.log(linkedinInValidation(urlPattern ,"https://www.linkedin.com/in/zeenat967")); // valid
console.log(linkedinInValidation(urlPattern ,"https://www.linkedin.com/in/zeenat-967")); //valid
console.log(linkedinInValidation(urlPattern ,"https://www.linkedin.com/in/zeenat_967")); //valid
console.log(linkedinInValidation(urlPattern ,"https://www.linkedin.com/in/zeenat967!")); //invalid
console.log(linkedinInValidation(urlPattern ,"https://www.linkedin.com/in/zeenat_9674567345645-gfjhf564532565")); // more than 30
console.log(linkedinInValidation(urlPattern ,"https://www.linkedin.com/in/zee")); // less than 5
console.log(linkedinInValidation(urlPattern ,"https://www.linkedin.com/in/zee_12345gf-0e")); //valid

