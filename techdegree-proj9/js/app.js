//Variables
var traffic = document.getElementById('trafficChart');
var dailyTChart = document.getElementById('dailyTrafficChart');
var mobileChart = document.getElementById("mobileUsersChart");
const warningDiv = document.querySelector('.warning'); 
const xButton = document.querySelector('.close-warning');


//for removing the warning div upon clicking the red X
xButton.addEventListener("click", function(){
    
});

$(xButton).click(function(){
    $(warningDiv).remove();
});


//Creating charts for the website

//Traffic chart

var myLineChart = new Chart(traffic, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
        label: 'TRAFFIC',
        data: [500, 1000, 1500, 1800, 2000, 1450,1750,1250,1750,2250,1750,2500],
        borderWidth: 2,
			backgroundColor: "rgba(255,160,122,0.4)",
            borderColor: "rgba(75,192,192,1)",
			lineTension: 0,
			pointBackgroundColor: 'white',
			pointBorderWidth: 3,
			responsive: true,
			maintainAspectRatio: false,
        }]
    },
    options:  {
        legend: {
        display: false
    }
    }
    
    
});

//Daily Traffic Chart

var myBarChart = new Chart(dailyTChart, {
    type: 'bar',
	data : {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
        {
            label: "Daily Traffic",
			 backgroundColor: [
				
                'rgba(255,160,122, 0.9)',
				 'rgba(75, 192, 192, 0.7)',
				 'rgba(255,160,122, 0.9)',
				 'rgba(75, 192, 192, 0.7)',
				 'rgba(255,160,122, 0.9)',
				 'rgba(75, 192, 192, 0.7)',
				 'rgba(255,160,122, 0.9)',
               
            ],
            borderWidth: 1,
            data: [75, 100, 175, 125, 225, 200, 100],
        }
    ]
},
	options: {
        legend: {
        display: false
    }
    }
	
});

//Mobile users chart

var myDoughnutChart = new Chart(mobileChart, {
    type: 'doughnut',
    data: {
    labels: [
        "Phones",
        "Tablets",
        "Desktops"
    ],
    datasets: [
        {
            data: [100, 50, 300],
            backgroundColor: [
                "darkcyan",
                "red",
                "lightsalmon"
            ],
            hoverBackgroundColor: [
                "darkblue",
                "tomato",
                "orange"
            ]
        }]
},
    options: {
        legend: {
        display: true,
			position: "right",
    }
    }
});


//Notifications drop down


const notificationLink = document.querySelector('.dropdown > a');
const notificationWrapper = document.querySelector('.dropdown img');
const notificationCount = document.querySelectorAll('.dropdown__content li');
const notificationsContent = document.querySelector('.dropdown__content');
const notificationHidden = document.querySelector('.is-hidden');


const followersWrapper = document.querySelector('#js__followers');
const sharesWrapper = document.querySelector('#js__shares');
const serverWrapper = document.querySelector('#js__server');

notificationWrapper.addEventListener('click', (e)=>{
  e.preventDefault();
  let display = notificationsContent.style.display;
  if(display === 'block'){
    notificationsContent.style.display = 'none';
  }else{
    notificationsContent.style.display = 'block';
  }
});

// Notification event Listeners
followersWrapper.addEventListener('click', () =>{
  followersWrapper.style.display = 'none';
});
sharesWrapper.addEventListener('click', () =>{
  sharesWrapper.style.display = 'none';
});
serverWrapper.addEventListener('click', () =>{
  serverWrapper.style.display = 'none';
});

// form validation

const send = document.querySelector('#send');
send.addEventListener('click', (e)=>{
  let searchbox = document.querySelector('#name').value;
  let message = document.querySelector('#msg').value;
  e.preventDefault();
  if(searchbox && message){
    alert("message has successfully been sent!");
   
  }else{
    alert("oops, you need to fill in both areas first!")
  }
});