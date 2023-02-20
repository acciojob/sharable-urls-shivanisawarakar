// your code here
let tempString ;
let tempMsg = document.getElementById('url');



function appendString() {
    let namee = document.getElementById('name').value;
    let year = document.getElementById('year').value;
    tempMsg.textContent = '';

 if (namee != '' && year === '') {
        // 1
        tempString = `https://localhost:8080/?name=${namee}`;
        console.log(`1`);
        tempMsg.textContent = tempString;
        console.log(` tempMsg.textContent`);
    } else if (namee === '' && year != '') {
        // 2
        tempString = `https://localhost:8080/?year=${year}`;
        console.log(`2`);
        tempMsg.textContent = tempString;
        console.log(` tempMsg.textContent`);
    } else if(namee != '' && year != ''){
        // 3
        tempString = `https://localhost:8080/?name=${namee}&year=${year}`;
        console.log(`3`);
        tempMsg.textContent = tempString;
        console.log(` tempMsg.textContent`);
document.getElementById("button").addEventListener("click", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var year = document.getElementById("year").value;
    var url;
    if (name != "" && year != "") {
        url = "https://localhost:8080/?" + "name=" + name + "&year=" + year;
    } else if (name != "") {
        url = "https://localhost:8080/?" + "name=" + name;
    } else if (year != "") {
        url = "https://localhost:8080/?" + "year=" + year;
    } else {
        // 4
        tempString = `https://localhost:8080/`;
        console.log(`4`);
        tempMsg.textContent = tempString;
        console.log(` tempMsg.textContent`);
    } 
}
        url = "https://localhost:8080/";
    }
    document.getElementById("url").innerHTML = url;
});