/**
 * Function for validate the firstname
 */
function firstName() {
    let pattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
    let input;
    
        input = document.getElementById("FirstName").value;
        let status = pattern.test(input);
        if (status) {
            alert("Valid Firstname");
        }
        else{
            alert("Invalid FirstName (Enter first letter is upper case and remaining letters are lower case)"); 
        }
    
    return input;
}
function emailId() {
    let pattern = new RegExp('^[a-z]+[.][a-zA-Z]+[@][a-zA-Z]+[.][a-z]{2,3}([.][a-zA-Z]{2,3})*$');
    let input;
    
        input = document.getElementById("emailId").value;
        let status = pattern.test(input);
        if (status) {
            alert("Valid emailId");
        }
        else{
            alert("Invalid emailId (Example:- abc.xyz@bl.co.in)"); 
        }
    
    return input;
}
function mobileNumber() {
    let pattern = new RegExp('^[6-9]{1}[0-9]{9}$');
    let input;
    
        input = document.getElementById("mobileNumber").value;
        let status = pattern.test(input);
        if (status) {
            alert("Valid mobileNumber");
        }
        else{
            alert("Invalid mobileNumber (Enter like Example:- 91 9611035548)"); 
        }
    
    return input;
}
function passWord() {
    let pattern = new RegExp('^[A-Za-z0-9]{8,}$');
    let input;
    
        input = document.getElementById("passWord").value;
        let status = pattern.test(input);
        if (status) {
            alert("Valid passWord");
        }
        else{
            alert("Invalid passWord (Enter Minimum 8 Charcters)"); 
        }
    
    return input;
}
function validationRules() {
    firstName();
    emailId();
    mobileNumber();
    passWord();
}