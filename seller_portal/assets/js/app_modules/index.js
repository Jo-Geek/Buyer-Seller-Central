window.randomScalingFactor = function () {
    return Math.round(Samples.utils.rand(0, 400));
};

window.randomScalingFactorNeg = function () {
    return Math.round(Samples.utils.rand(-200, 0));
};


var YEARS = ["2015", "2016", "2017", "2018"];
var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var MONTHS_Short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var MONTHS_Short_Year = [['Jan \'18'], ['Feb \'18'], ['Mar \'18'], ['Apr \'18'], ['May \'18'], ['Jun \'18'], ['Jul \'18'], ['Aug \'18'], ['Sep \'18'], ['Oct \'18'], ['Nov \'18'], ['Dec \'18']];
var Colors = ["#FF9F40", "#36A2EB", "#9AB900", "#4BC0C0", "#FF6384", "#F03337", "#9158ff"];
//var ColorsTrans = ["#8BAAD155", "#0099e655", "#8CBC4F55", "#01b53055", "#ff606055", "#e2003155", "#2a3aff55"];

var makeTrans = function (color) {
    return color + "88";
}


var makeTransRGB = function (color) {
    console.log("rgba" + color.substr(3, name.length - 1) + ",0.5)");
    return "rgba" + color.substr(3, name.length - 1) + ",0.5)";
}

var makeTrans1 = function (color) {
    return color + "33";
}

//var color = Chart.helpers.color;

var RevData = {
    labels: MONTHS_Short,
    datasets: [
        {
            type: 'line',
            label: 'Revenue',
            backgroundColor: 'transparent',
            borderColor: Colors[3],
            borderWidth: 0,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }
    ]

};



$(document).ready(function () {
    chartRevenue();
});

function chartRevenue() {
    var ctx = document.getElementById('cnvRevenue').getContext('2d');
    window.chartMRR = new Chart(ctx, {
        type: 'line',
        data: RevData,
        options: {
            elements: {
                line: {
                    tension: 0.000001
                }
            },
            title: {
                display: false,
                text: 'Revenue Summary'
            },
            legend: {
                display: false,
                position: "right"
            },
            tooltips: {
                mode: 'index',
                intersect: true
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{

                    stacked: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        callback: function (label, index, labels) {
                            return "$ " + label + 'K';
                        }
                    }
                    ,
                    stacked: true

                }]
            }
        }
    });
}

