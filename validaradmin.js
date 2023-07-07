const thankyouBox = document.getElementById("thankyoubox")

const eventname = document.getElementById("eventname")

const goalamount = document.getElementById("goalamount")

const closedate = document.getElementById("closedate")

const warningsdonate = document.getElementById("warnings")



//======================================================================================

const eventsgrid = document.getElementById("eventsgrid")

const currentamountgrid = document.getElementById("currentamountgrid")

const goalamountgrid = document.getElementById("goalamountgrid")

const dategrid = document.getElementById("dategrid")

function updategrid(){
    eventsgrid.innerHTML += eventname.value + "<br>"
    currentamountgrid.innerHTML += "$0<br>"
    goalamountgrid.innerHTML += "$" + goalamount.value+"<br>"
    dategrid.innerHTML += closedate.value + "<br>"
}

function openthankyou(){

    thankyouBox.style.display = "flex"
}

function closethankyou(){
    thankyouBox.style.display ="none"


}

function validatedonation() {
    let warningsdon = ""
    let entrardonate = false
    warningsdonate.innerHTML=""
  

    if(!eventname.value.length>0){
        warningsdon += `Event name is invalid <br>`
        entrardonate = true
    }

    if(!goalamount.value.length>0){
        warningsdon += `Goal amount is invalid <br>`
        entrardonate = true
    }

    if(!closedate.value.length>0){
        warningsdon += `Close date is invalid <br>`
        entrardonate = true
    }


    if(entrardonate){
        warningsdonate.innerHTML = warningsdon
    }
    else{
        updategrid()
        closethankyou()

        eventname.value = ""

        goalamount.value = ""

        closedate.value =  ""

    }

}