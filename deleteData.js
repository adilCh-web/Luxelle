let db = new Localbase("db");

function deleteDb()
{
    db.collection('invest').delete();
    db.collection('suppliers').delete();
    location.reload();
}

export default  deleteDb