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