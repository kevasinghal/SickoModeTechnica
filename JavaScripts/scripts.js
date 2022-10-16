var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}



// ---------- CHARTS ----------

// BAR CHART
var barChartOptions = {
  series: [{
    data: [16651, 2958, 240, 130, 76, 50]
  }],
  chart: {
    type: 'bar',
    height: 450,
    toolbar: {
      show: false
    },
  },
  colors: [
    "#246dec",
    "#246246",
    "#cc3c43",
    "#367952",
    "#f5b74f",
    "#f5bf6f",
    "#4f35a1"
  ],

  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ["Tuition", "Rent", "Credit", "Dining Dollars", "Debit", "Terrapin Express"],
  },
  yaxis: {
    title: {
      text: "Count"
    }
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();
    
// SIDEBAR TOGGLE
const fs = require("fs")
const csv = require("csv-parser");

const results = [];

fs.createReadStream('Expenses.csv')
  .pipe(csv({}))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    const monthexpenses = [];
    results.forEach(element => {monthexpenses.push(parseFloat(element.Money))});
});


