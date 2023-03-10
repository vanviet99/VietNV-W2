let chart = JSON.parse(localStorage.getItem("datatable"));

for (let i = 0; i < chart.length; i++) {
  const ctx = document.getElementById("myChart");
  const data = {
    labels: [chart[i].Device],
    datasets: [
      {
        label: "My First Dataset",
        data: [chart[i].soluong],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(255, 205, 87)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  new Chart(
    ctx,
    (config = {
      type: "doughnut",
      data: data,
    })
  );
}
// datatable;
// function adddevice() {
//   let chartname = document.querySelector(".chartname").value;

//   let chartsoluong = document.querySelector(".chartsoluong").value;
//   let data = [
//     {
//       Device: chartname,

//       soluong: chartsoluong,
//     },
//   ];
//   let datatable = JSON.parse(localStorage.getItem("datatable"));
//   let newdata = [...datatable, data];
//   localStorage.setItem("test", JSON.stringify(newdata));
// }
