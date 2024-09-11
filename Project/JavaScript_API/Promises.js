const promiseOne = new Promise(function(resolve, reject){
    //Do an Async task
    //DB Calls, Cryptography
    setTimeout(function(){
        console.log('Async Task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promice Consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async task resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Bishnu",email: "KamilaBishnu.1@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "Bishnupada", password : "kamila@123"})
        }else{
            reject('ERROR: Something wents wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((myUsername)=>{
    console.log(myUsername);
})
.catch(function(err){
    console.log(err);
})
.finally(function(){
    console.log("The promise is either resolve or rejected");
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "javascript", password : "js@123"})
        }else{
            reject("ERROR: JS wents wrong")
        }
    },1000)
})
async function consumePromiseFive(){
   try{
    const response = await promiseFive
    console.log(response);
   }catch(error){
    console.log(error);
   }
}

consumePromiseFive()

const PromiceSix = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "kamila@123",password : "bishnupada@123"})
    },1000)
})
PromiceSix.then(function(){
    console.log("Promise Six Executed");
})


const promiseSeven = new Promise(function(resolve, reject){
    setTimeout({function(){
        resolve({userName : "SecE@cutm", passwod : "cit@cutm"})
    }})
},1000)


fetch('https://jsonplaceholder.typecode.com/user')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})



