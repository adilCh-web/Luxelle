import loadGraph from "./plotGraphs.js";
import submitting from "./submitData.js";
import showSubNav from "./showSubNav.js";
import {loadData} from "./loadData.js";
import deleteDb from "./deleteData.js";
import loadSuppliers from "./loadSuppliers.js";

//sessionStorage.setItem("submittingDataType","profitData")

sessionStorage.setItem("arrowDown","true")
let submit = document.getElementById("s")

sessionStorage.setItem("submittingDataType","profitData")

loadData()


let dataTable = document.getElementById("data")
let suppliersTable = document.getElementById("suppliersTable")
let insightTable = document.getElementById("insight")
submit.addEventListener("click",submitting)



    

document.getElementById("loadGraph").addEventListener("click",loadGraph)
document.getElementById("s").addEventListener("click",submitting)

document.getElementById("loadSubNav").addEventListener("click",showSubNav)
document.getElementById("loadDataTransactions").addEventListener("click",loadData)

document.getElementById("deleteData").addEventListener("click",deleteDb)

document.getElementById("showDataSuppliers").addEventListener("click",loadSuppliers)

