const viewpage = document.getElementById("notedit")
const editpage = document.getElementById("editaccount")

function openedit(){
    editinformation()
    viewpage.style.display= "none"
    editpage.style.display="grid"
}

function openview(){
    saveinformation()
    viewpage.style.display = "grid"
    editpage.style.display = "none"
}

const Firstname = document.getElementById("Firstname")
const Lastname = document.getElementById("Lastname")
const birthdate = document.getElementById("birthdate")
const gender = document.getElementById("gender")
const race_ethhnicity = document.getElementById("race_ethhnicity")
const primarycountry = document.getElementById("primarycountry")
const primarystreet = document.getElementById("primarystreet")
const primartycity = document.getElementById("primartycity")
const mailingstate = document.getElementById("mailingstate")
const primatypostal = document.getElementById("primatypostal")
const preferredemail = document.getElementById("preferredemail")
const workemail = document.getElementById("workemail")
const personalemail = document.getElementById("personalemail")
const preferredphone = document.getElementById("preferredphone")
const mobile = document.getElementById("mobile")
const homephone = document.getElementById("homephone")
const workphone = document.getElementById("workphone")


const FirstNameBox = document.getElementById("FirstNameBox")
const LastnameBox = document.getElementById("LastnameBox")
const Birthdatebox = document.getElementById("Birthdatebox")
const selectgender = document.getElementById("selectgender")
const Race_Etchnicitybox = document.getElementById("Race_Etchnicitybox")
const Primary_Countrybox = document.getElementById("Primary_Countrybox")
const Primary_streetbox = document.getElementById("Primary_streetbox")
const Primary_citybox = document.getElementById("Primary_citybox")
const Mailing_statebox = document.getElementById("Mailing_statebox")
const Primary_Zip_Codebox = document.getElementById("Primary_Zip_Codebox")
const emailbox = document.getElementById("emailbox")
const workemailbox = document.getElementById("workemailbox")
const personalemailbox = document.getElementById("personalemailbox")
const phonebox = document.getElementById("phonebox")
const mobilebox = document.getElementById("mobilebox")
const homephonebox = document.getElementById("homephonebox")
const workphonebox = document.getElementById("workphonebox")
const warningsdonate = document.getElementById("warningsdonate")


function editinformation(){
    FirstNameBox.value = Firstname.textContent
    LastnameBox.value = Lastname.textContent
    Birthdatebox.value = birthdate.textContent
    Race_Etchnicitybox.value = race_ethhnicity.textContent
    Primary_Countrybox.value = primarycountry.textContent
    Primary_streetbox.value = primarystreet.textContent
    Primary_citybox.value = primartycity.textContent
    Mailing_statebox.value = mailingstate.textContent
    Primary_Zip_Codebox.value = Number(primatypostal.textContent)
    emailbox.value = preferredemail.textContent
    workemailbox.value = workemail.textContent
    personalemailbox.value = personalemail.textContent
    phonebox.value = Number(preferredphone.textContent)
    mobilebox.value = Number(mobile.textContent)
    homephonebox.value = Number(homephone.textContent)
    workphonebox.value = Number(workphone.textContent)
}

function saveinformation(){
    Firstname.innerHTML = FirstNameBox.value + "<br>"
    Lastname.innerHTML = LastnameBox.value + "<br>"
    birthdate.innerHTML = Birthdatebox.value + "<br>" 
    gender.innerHTML = selectgender.value + "<br>"
    race_ethhnicity.innerHTML = Race_Etchnicitybox.value + "<br>"
    primarycountry.innerHTML = Primary_Countrybox.value + "<br>"
    primarystreet.innerHTML = Primary_streetbox.value + "<br>"
    primartycity.innerHTML = Primary_citybox.value + "<br>"
    mailingstate.innerHTML = Mailing_statebox.value + "<br>"
    primatypostal.innerHTML = Primary_Zip_Codebox.value + "<br>"
    preferredemail.innerHTML = emailbox.value + "<br>"
    workemail.innerHTML = workemailbox.value + "<br>"
    personalemail.innerHTML = personalemailbox.value + "<br>"
    preferredphone.innerHTML = phonebox.value + "<br>"
    mobile.innerHTML = mobilebox.value + "<br>"
    homephone.innerHTML = homephonebox.value + "<br>"
    workphone.innerHTML = workphonebox.value + "<br>"
}