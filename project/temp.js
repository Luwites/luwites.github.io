//your code here

window.onload = function login() {
    let loginTemplate = `<h1>Login Please</h1>
    <input type="text" id="username" placeholder="User name" required /><br><br>
    <input type="text" id="password" placeholder="Passwod" required /><br><br>
    <button type="button" id="loginButton" class="btn btn-primary btn-lg">Login</button>`;
    document.querySelector('div').innerHTML = loginTemplate;

    document.getElementById('loginButton').onclick = async function log() {
        let inputsObj = {}
        inputsObj.username = document.getElementById("username").value
        inputsObj.password = document.getElementById("password").value
        //console.log(inputsObj)

        const fetchedData = await fetch('https://cs445-project.herokuapp.com/api/login', {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputsObj)

        })
        .then(response => response.json())
        .then((response) => response.status === true? console.log("yey"):console.log("nooo")) //
        // return fetchedData.json()
        // parsedData = await fetchedData.json();
        // console.log(parsedData)
    }
  // JSON data parsed by `data.json()` call

}
{/* <script>
var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
</script>

    */}