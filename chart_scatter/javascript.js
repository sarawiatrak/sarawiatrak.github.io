var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#3cba9f",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                  {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#E49A2F",
                backgroundColor: "rgb(228, 154, 47,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                  {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#FE0000",
                backgroundColor: "rgb(254, 0, 0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                  {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#00AA19",
                backgroundColor: "rgb(0, 170, 25,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                  {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#002DFF",
                backgroundColor: "rgb(0, 45, 255,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                  {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#7500FF",
                backgroundColor: "rgb(117, 0, 255,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                  {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#FF00FE",
                backgroundColor: "rgb(255, 0, 255,0.1)",
                borderWidth:2,
                
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'GDP per Capita vs Life Expectancy in Top 10 Countries',
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: 'US and Japan shows significant difference compared to other countries'
                }
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });