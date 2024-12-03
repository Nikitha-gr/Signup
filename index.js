//Signup function
function signup(userName){
    let array = ["Nikitha","Giana","Anayra","Radha","Nithin"];
    for(i=0;i<array.length;i++){
        if(userName==array[i]) {
            //console.log(array);
            return console.log("User Already Registered,Please Login")
        }
    }
    array = [...array,userName];
    //console.log(array);
    return console.log("Signup Successful, Please Login")
}
//Calling signup function
signup("Nisha");

//Creating new branch including login function
function login(userName,password){
    let array = ["Nikitha","Giana","Anayra","Radha","Nithin"];
    for(let i=0;i<array.length;i++){
        if(userName==array[i]){
            if(password=="Emp@123"){
                return console.log("Login Successful");
            }
            else {
                return console.log("Wrong Password")
            }
        }
    }
    return console.log("User Not Found,Please Signup")
}

login("Nikitha","Emp@123")
login("Nikitha","Emp0123")
login("Nisha","Emp@123")