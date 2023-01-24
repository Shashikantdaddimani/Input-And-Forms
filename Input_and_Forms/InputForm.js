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
function validationRules() {
    firstName();
}