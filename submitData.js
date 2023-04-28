import updateData from "./updateTransactions.js";
let letmyArray;
let dataTable = document.getElementById("data")
let db = new Localbase("db");
let suppliersTable = document.getElementById("suppliersTable")



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

            //storing an object in our localBase
            db.collection("invest").add(
                {
                    time:timing,
                    invest:invest,
                    return:returnmoney,
                    profitPercentage:profitPercentage,
        
                }
            )

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

                //storing an object in our localBase
                db.collection("suppliers").add(
                    {
                        time:timing,
                        name:name,
                        amount:amount,
            
                    }
                )

                
        }

    }


    else{
        console.log("info message")
        document.getElementById("info").innerHTML = "Some of the Data are messing !!"
        setTimeout(() => {
            document.getElementById("info").innerHTML="";

        }, 1000);
    }
        
    //deleting the values after displaying/storing them or after a wrong input
    document.getElementById("invest").value = ""
    document.getElementById("return").value = ""

}



export default submitting