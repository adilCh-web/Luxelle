import loadGraph from "./plotGraphs.js";
import submitting from "./submitData.js";
import showSubNav from "./showSubNav.js";
import {loadData} from "./loadData.js";
import deleteDb from "./deleteData.js";
import loadSuppliers from "./loadSuppliers.js";
import loadCredits from "./loadCredits.js";

//sessionStorage.setItem("submittingDataType","profitData")

sessionStorage.setItem("arrowDown","true")
let submit = document.getElementById("s")

sessionStorage.setItem("submittingDataType","profitData")

//let db = new Localbase("db");
let emptyarray = []
if(localStorage.length === 0){
    localStorage.setItem("transactions",JSON.stringify(emptyarray))
    localStorage.setItem("credits",JSON.stringify(emptyarray))
    localStorage.setItem("suppliers",JSON.stringify(emptyarray))
    console.log("new Started")
}




loadData()

submit.addEventListener("click",submitting)



    

document.getElementById("loadGraph").addEventListener("click",loadGraph)
document.getElementById("s").addEventListener("click",submitting)

document.getElementById("loadSubNav").addEventListener("click",showSubNav)
document.getElementById("loadDataTransactions").addEventListener("click",loadData)

document.getElementById("deleteData").addEventListener("click",deleteDb)

document.getElementById("showDataSuppliers").addEventListener("click",loadSuppliers)

document.getElementById("showDataCredit").addEventListener("click",loadCredits)