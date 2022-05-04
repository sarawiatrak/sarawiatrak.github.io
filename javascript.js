var ctx = document.getElementById('myChart').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');
var lbls_year = [1975,1995,2004,2008,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021];
for (let i = 0; i < lbls_year.length; i++) {
  lbls_year[i] = lbls_year[i].toString();
}
var data_year = [1,1,1,1,3,4,6,13,16,12,20,16,3,3];
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: lbls_year,
        datasets: [{
            label: 'Number of Songs Released',
            data: data_year,
            backgroundColor: [
                '#AFB83B'
            ]
        }
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Top 100 Most Streamed Songs on Spotify by Release Year',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'About half of the Top 100 songs were released within the last 5 years.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});
// chart 2
var lbls_genre = ['canadian contemporary r&b','canadian hip hop','canadian pop','dance pop',
'dfw rap','electropop','emo rap','folk-pop','latin','melodic rap','modern rock','pop',
'rap','other'];
var data_genre = [4,2,6,28,7,4,2,2,2,3,6,11,2,21];
// color randomizing function retrieved from StackOverflow
var color = [];
function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
for (let i = 0; i < lbls_genre.length; i++) {
  color[i] = random_rgba();
}
var myChart2 = new Chart(ctx2, {
  type: 'doughnut',    
  data: {
      labels: lbls_genre,
      datasets: [{
        label: 'Number of Songs in each Genre',
        data: data_genre,
        backgroundColor: color,
        hoverOffset: 4
      }
  ]
  },
  options: {
      responsive: true,
      plugins: {
          title: {
              display: true,
              text: 'Top 100 Most Streamed Songs on Spotify by Genre',
              font: {
                  size: 18
              }
          },
          subtitle: {
              display: true,
              text: 'About half of the Top 100 songs are categorized in a pop genre.'
          }
      },
      
  },
});