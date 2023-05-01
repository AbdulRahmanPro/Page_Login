
let  password = document.getElementById('password'); 
let  gmail = document.getElementById('gmail');
let submit = document.getElementById('submit');
var token = ""


function callServer(callback){

    axios.post('https://reqres.in/api/login', {
        "email": `${gmail.value}`,
        "password": `${password.value}`
      })
      .then(function (response) {
        token = localStorage.setItem('token', response.data.token)
        console.log( response.status)
        if(response.status == 200){
            window.location.href = "succeeded.html"
        }
      })
        .catch(function (error) {
            alert(error.response.data.error)
        });

}

submit.addEventListener('click', ()=>{
    callServer()
    console.log( localStorage.getItem('token'))

})