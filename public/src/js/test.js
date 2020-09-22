$(document).ready(function(){
    try{
        //레인지 슬라이더1
        (function(){
            var select1 = document.getElementById('slider1-select1');

            // Append the option elements
            for (var i = -20; i <= 40; i++) {

                var option = document.createElement("option");
                option.text = i;
                option.value = i;

                select1.appendChild(option);
            }

            var select2 = document.getElementById('slider1-select2');

            for (var i = -20; i <= 40; i++) {

                var option2 = document.createElement("option");
                option2.text = i;
                option2.value = i;

                select2.appendChild(option2);
            }

            var html5Slider = document.getElementById('slider1');

            noUiSlider.create(html5Slider, {
                start: [10, 30],
                connect: true,
                range: {
                    'min': -20,
                    'max': 40
                }
            });





            html5Slider.noUiSlider.on('update', function (values, handle) {

                var value = values[handle];

                if (handle) {
                    select2.value = Math.round(value);
                } else {
                    select1.value = Math.round(value);
                }
            });

            select1.addEventListener('change', function () {
                html5Slider.noUiSlider.set([this.value, null]);
            });

            select2.addEventListener('change', function () {
                html5Slider.noUiSlider.set([null, this.value]);
            });
        }());
        //레인지 슬라이더2
        (function(){
            var select1 = document.getElementById('slider2-select1');

            // Append the option elements
            for (var i = -20; i <= 40; i++) {

                var option = document.createElement("option");
                option.text = i;
                option.value = i;

                select1.appendChild(option);
            }

            var select2 = document.getElementById('slider2-select2');

            for (var i = -20; i <= 40; i++) {

                var option2 = document.createElement("option");
                option2.text = i;
                option2.value = i;

                select2.appendChild(option2);
            }

            var html5Slider = document.getElementById('slider2');

            noUiSlider.create(html5Slider, {
                start: [10, 30],
                connect: true,
                range: {
                    'min': -20,
                    'max': 40
                }
            });





            html5Slider.noUiSlider.on('update', function (values, handle) {

                var value = values[handle];

                if (handle) {
                    select2.value = Math.round(value);
                } else {
                    select1.value = Math.round(value);
                }
            });

            select1.addEventListener('change', function () {
                html5Slider.noUiSlider.set([this.value, null]);
            });

            select2.addEventListener('change', function () {
                html5Slider.noUiSlider.set([null, this.value]);
            });
        }());
    }catch(e){}
    //차트
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
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
});
