import updateData from "./updateTransactions.js";
let letmyArray;
let dataTable = document.getElementById("data")
let suppliersTable = document.getElementById("suppliersTable")
let creditsTable = document.getElementById("creditsTable")


function submitting()
{
    let type = sessionStorage.getItem("submittingDataType")

    //document.getElementById("info").innerHTML = ""
    var currentTime = new Date()
    var timing= currentTime.getDate() + "/" + (currentTime.getMonth()+1) + "/" + currentTime.getFullYear() // currentTime.toTimeString().slice(0,5) 

    // when the invest and revenue fields are filled in
    if(document.getElementById("return").value!=="" && document.getElementById("invest").value!==""){
        
        if(type === "profitData"){
                //defining variables
            let returnmoney = document.getElementById("return").value
            let invest = document.getElementById("invest").value;
            let profitPercentage = 100*(returnmoney -invest)/invest
                    //avoiding the large degit as 33.3333333333 so we set them to two degits after the comma
            if(profitPercentage - Math.floor(profitPercentage) !== 0)
            {
                profitPercentage=profitPercentage.toFixed(2)
            }

            //defining an array 
            letmyArray = [timing,invest,returnmoney,profitPercentage+"%"]

            //creatin a row
            let row= document.createElement("tr")
            //adding it to the table
            dataTable.appendChild(row)
            //looping through our array
            for(let i=0;i<4;i++)
            {
                //creating a cell
                let td=document.createElement("td")
                //writing in the cell its value
                td.textContent=letmyArray[i]
                //givint it a class name (exp class_2)
                td.className = "class_"+i
                //adding it to the row we create 
                row.appendChild(td)

            }
            let transactions = JSON.parse(localStorage.getItem("transactions"))
            //adding an object to the array transactions
            transactions.push(                
                {
                time:timing,
                invest:invest,
                return:returnmoney,
                profitPercentage:profitPercentage,
                })
            //stringify it again and store it back to the data base
            localStorage.setItem("transactions",JSON.stringify(transactions))

            updateData()
        }
        else if(type === "suppliersData"){
            console.log("clickeeeeeeeeeeeeeeeeeeed")
                //defining variables
                let name = document.getElementById("invest").value
                let amount = document.getElementById("return").value;
                //defining an array 
                letmyArray = [timing,name,amount]

                //creatin a row
                let row= document.createElement("tr")
                //adding it to the table
                suppliersTable.appendChild(row)
                //looping through our array
                for(let i=0;i<3;i++)
                {
                    //creating a cell
                    let td=document.createElement("td")
                    //writing in the cell its value
                    td.textContent=letmyArray[i]
                    //givint it a class name (exp class_2)
                    td.className = "class_"+i
                    //adding it to the row we create 
                    td.textContent = letmyArray[i]
                    row.appendChild(td)

                }
                let suppliersData = JSON.parse(localStorage.getItem("suppliers"))
                //adding the submitted object to the array suppliersData

                suppliersData.push(
                    {
                        time:timing,
                        name:name,
                        amount:amount,
            
                    }
                )
            //stringify it and storing it in the database (localstorage)
            localStorage.setItem("suppliers",JSON.stringify(suppliersData))
        } 
        else if(type === "creditsData"){
            let name = document.getElementById("invest").value
            let amount = document.getElementById("return").value;
            let myArray = [timing,name,amount]
            let mainRow = document.createElement("tr")
            let rowData = document.createElement("tr")
            let rowSubmit = document.createElement("tr") 
            rowSubmit.style.display = "none"
            //cellSubmit.style.display = "none"
            for(let i=0;i<myArray.length;i++){
                let cell = document.createElement("td")
                cell.textContent = myArray[i]
                rowData.appendChild(cell)
                if(i==2){
                    cell.className = "amountCredit"
                }
            }
            let payInput= document.createElement("input")
            payInput.type = "number"
            let cell_1 = document.createElement("td") 
            cell_1.appendChild(payInput)
            rowSubmit.appendChild(cell_1)

            mainRow.className = "flexColumn"
            let btn = document.createElement("button")
            let cell_2 = document.createElement("td") 
            cell_2.appendChild(btn)
            btn.textContent = "pay"
            rowSubmit.appendChild(cell_2)

            btn.className = "unset"
            payInput.className = "unset"
            mainRow.appendChild(rowData)
            mainRow.appendChild(rowSubmit)
            creditsTable.appendChild(mainRow)
    
            let creditsData = JSON.parse(localStorage.getItem("credits"))
            //storing the submitted object in our array creditsData
            creditsData.push(
                {
                    time:timing,
                    name:name,
                    amount:amount,
        
                }
            )
            //stringify the array and store it in the localstorage
            localStorage.setItem("credits",JSON.stringify(creditsData))
           
            rowData.addEventListener("click",()=>{
                if(rowSubmit.style.display === "none"){
                    rowSubmit.style.display="block";
                    rowSubmit.style.animation = "fade_in_show 1s"
                }else{
                    rowSubmit.style.animation = "fade_out_show 2s"
                    setTimeout(() => {
                        rowSubmit.style.display="none"
                    }, 1000);
                }
            })

        }

    }  


    else{
        console.log("info message")
        document.getElementById("info").style.visibility = "visible"
        setTimeout(() => {
            document.getElementById("info").style.visibility ="hidden";

        }, 1000);
    }
        
    //deleting the values after displaying/storing them or after a wrong input
    document.getElementById("invest").value = "";
    document.getElementById("return").value = "";
}



export default submitting