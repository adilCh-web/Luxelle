

function deleteDb()
{
    if (confirm("Est ce que vous voulez effacer vos données")) {
        //delete 
        localStorage.clear()
      } else {
        //Nothing happened
      }
    
}

export default  deleteDb