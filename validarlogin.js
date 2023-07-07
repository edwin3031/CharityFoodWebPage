const email = document.getElementById("email")

const password = document.getElementById("password")

const loginform = document.getElementById("loginform")

const parrafo = document.getElementById("warnings")

loginform.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/   
    parrafo.innerHTML=""



    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings += `Email is invalid <br>`
        entrar = true
    }

    if(!password.value.length>0){
        warnings += `Password is invalid <br>`
        entrar = true
    }

    if(email.value.includes("admin") && password.value.includes("password")){
        location.href = "CharityFood_EventsDonations.html"
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
    else{
                location.href = "CharityFood_MyProfile.html"
    }

})


//==================Validar sign up==============================

const newemail = document.getElementById("newemail")

const newpassword = document.getElementById("newpassword")

const fname = document.getElementById("firstname")

const lname = document.getElementById("lastname")

const signform = document.getElementById("signupform")

const parrafo2 = document.getElementById("warnings2")

signform.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings2 = ""
    let entrar2 = false
    let regexEmail2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/   
    parrafo2.innerHTML=""



    console.log(regexEmail2.test(newemail.value))
    if(!regexEmail2.test(newemail.value)){
        warnings2 += `Email is invalid <br>`
        entrar2 = true
    }

    if(!newpassword.value.length>0){
        warnings2 += `Password is invalid <br>`
        entrar2 = true
    }

    if(!fname.value.length>0){
        warnings2 += `Firts name is invalid <br>`
        entrar2 = true
    }

    if(!lname.value.length>0){
        warnings2 += `Last name is invalid <br>`
        entrar2 = true
    }

    if(entrar2){
        parrafo2.innerHTML = warnings2
    }
    else{
                location.href = "CharityFood_MyProfile.html"
    }

})

//==============Botones de cambio===========================
const loginBox = document.getElementById("loginbox")
const signupBox = document.getElementById("signupbox")

function opennewlogin(){

    loginBox.style.display = "flex"
    parrafo2.innerHTML=""
    parrafo.innerHTML=""
}

function closelogin(){
    loginBox.style.display = "none"
    signupBox.style.display = "none"
}

function opensignup(){
    signupBox.style.display = "flex"
    loginBox.style.display = "none"
}

function openlogin(){
    loginBox.style.display = "flex"
    signupBox.style.display = "none"
}

//============================================Imagenes=================================================================
const fulImgBox = document.getElementById("fulimgbox")
const videomedia = document.getElementById("videomedia")
fulImg = document.getElementById("fulImg")

function openFulImg(referece){
    fulImgBox.style.display = "flex"
    fulImg.style.display = "block"
    videomedia.style.display = "none"
    fulImg.src=referece
}

function openvideo(){
    fulImgBox.style.display = "flex"
    fulImg.style.display = "none"
    videomedia.style.display = "block"
}

function closeImg(){
    fulImgBox.style.display = "none";
    if(!videomedia.paused){
        videomedia.pause()
    }
    
}


//=========================================Donate==================================

const thankyouBox = document.getElementById("thankyoubox")
function openthankyou(){

    thankyouBox.style.display = "flex"
}

function paypalthankyou(){
    window.open("https://www.paypal.com/ni/home", "_blank")
    thankyouBox.style.display = "flex"
}

function closethankyou(){
    thankyouBox.style.display ="none"
    location.reload()
}

const donationform = document.getElementById("donationform")

const tribute = document.getElementById("tribute")

const inmemoryof = document.getElementById("inmemoryof")

const donationamount = document.getElementById("donationamount")

const address = document.getElementById("address")

const nameoncard = document.getElementById("nameoncard")

const cardnumber = document.getElementById("cardnumber")

const month = document.getElementById("month")

const year = document.getElementById("year")

const cv = document.getElementById("cv")

const warningsdonate = document.getElementById("warningsdonate")


function validatedonation() {
    let warningsdon = ""
    let entrardonate = false
    warningsdonate.innerHTML=""
  

    if(!donationamount.value.length>0){
        warningsdon += `Donation Amount is invalid <br>`
        entrardonate = true
    }

    if(tribute.checked){
        if(!inmemoryof.value.length>0)
        warningsdon += `Name of Tribute is invalid <br>`
        entrardonate = true
    }

    if(!address.value.length>0){
        warningsdon += `Address is invalid <br>`
        entrardonate = true
    }

    if(!nameoncard.value.length>0){
        warningsdon += `Name on card is invalid <br>`
        entrardonate = true
    }

    if(!cardnumber.value.length>0){
        warningsdon += `Card Number is invalid <br>`
        entrardonate = true
    }

    if(!year.value.length>0){
        warningsdon += `Year is invalid <br>`
        entrardonate = true
    }

    if(!month.value.length>0){
        warningsdon += `Month is invalid <br>`
        entrardonate = true
    }

    if(!cv.value.length>0){
        warningsdon += `CV is invalid <br>`
        entrardonate = true
    }


    if(entrardonate){
        warningsdonate.innerHTML = warningsdon
    }
    else{
        openthankyou()
    }

}