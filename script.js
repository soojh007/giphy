//This is a general API template that you can use with many of the API's you will find on the web.

//create variable that store button in javascript variable
let button = document.querySelector("#getData")


//add an event listener to the button. Run the function sendApiRequest when the button is clicked
button.addEventListener("click",()=>{
  sendApiRequest()
})


//fetch data from the API
async function sendApiRequest() {
  let userInput = document.querySelector("#input").value
  let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=5Gfz5QUuTJPWGc01zzowSzTEgqTzdUn3&q=${userInput}`)
  console.log(response)
  let gifs = await response.json()
  console.log(gifs)
  useApiData(gifs)
};


//do something with the API data you've received.
function useApiData(gifs){
  document.querySelector("#wrapper").innerHTML = `<img src = "${gifs.data[0].images.original.url}">`
}