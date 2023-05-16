var url = `https://api.kanye.rest`
var btn = document.getElementById("btn")
    
function bear(){
    fetch(url)
    .then(res => res.json())
    .then(data => {

        var quote = data.quote

        console.log(data.quote)

        document.getElementById("text").innerHTML = `"${quote}"`;
    })
}
btn.addEventListener('click', bear);