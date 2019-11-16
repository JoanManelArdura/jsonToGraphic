//var formData = JSON.stringify($("#myForm").serializeArray());

var title3 = document.querySelector("#title");
var valuesToShow2 = document.querySelector("#valuesToShow");
var boto1 = document.querySelector("#boto1");
var xhttp = new XMLHttpRequest();
var ctx = document.getElementById('myChart');
//var pdf = new jsPDF();


function sendJson(){
	let title = title3.value;
	let valuesToShow = valuesToShow2.value.split(",");
	var myJsonString = JSON.stringify({ "title" : title, "valuesToShow": valuesToShow});
	xhttp.open("POST", "localhost:8080/graphic", true);
	xhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
	xhttp.send(myJsonString);
	console.log(myJsonString);
	// aqui definim la taula a myChart
	var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: title,
            data: valuesToShow,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}

function exportToPdf(){
	
    pdf.addImage(dataURL, 'JPEG', 0, 0);
    pdf.save("download.pdf");
}

window.onload=function(){

boto1.addEventListener("click", sendJson, false);
exportButton.addEventListener("click", exportToPdf, false);



}