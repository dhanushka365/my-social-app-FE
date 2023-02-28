function getUserData(){
    fetch('http://localhost:9000/api/v1/current-user-details')
    .then(Response => Response.json())
    .then(data =>{
        console.log(data);
    })
}