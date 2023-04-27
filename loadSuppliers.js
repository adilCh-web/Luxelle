let suppliersTable = document.getElementById("suppliersTable");
let form = document.querySelector(".form")
let graphs = document.getElementById("canvas")
let db = new Localbase("db");




function loadSuppliers(){
    sessionStorage.setItem("submittingDataType","suppliersData")
    //console.log(sessionStorage.getItem("submittingDataType"))
    form.style.display = "block"
    document.getElementById("transActionsTables").style.display="none"
    document.getElementById("subNav").style.display="none"
    document.getElementById("arrow").className="fa fa-caret-down";
    suppliersTable.style.display="block"
    graphs.style.display="none"
    document.querySelectorAll("label")[0].innerHTML = '<input type="string" id="invest" required> Nom'
    document.querySelectorAll("label")[1].innerHTML = '<input type="number" id="return" required> Montant';
    form.style.display = "block"

    document.getElementById("info").innerHTML = ""
    graphs.style.display="none";

    if (db.collection("suppliers") !== "undefined"){
        db.collection("suppliers").get().then(
            suppliers =>{
                for(let i=0;i<suppliers.length;i++){
                    let myArray = [suppliers[i].time,suppliers[i].name,suppliers[i].amount];
                    let row =document.createElement("tr")
                    for(let j=0;j<myArray.length;j++){
                        let cell = document.createElement("td")
                        cell.textContent = myArray[j]
                        row.appendChild(cell)

                    }
                    suppliersTable.appendChild(row)
                }
            }


        )
    }

}


export default loadSuppliers