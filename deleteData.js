

function deleteDb()
{
    if (confirm("Est ce que vous voulez effacer vos données")) {
        //delete 
        localStorage.clear()
        localStorage.setItem("transactions",JSON.stringify([]))
        localStorage.setItem("credits",JSON.stringify([]))
        localStorage.setItem("suppliers",JSON.stringify([]))
        console.log("new Started")
      } else {
        //Nothing happened
      }
    
}

export default  deleteDb