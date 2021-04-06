document.addEventListener("DOMContentLoaded", function() {
    var obj = [
        {
            name: 'Madagascar',
            type: 'Africa',
        },
        {
            name: 'Kenya',
            type: 'Africa',
        },
        {
            name: 'Vietnam',
            type: 'Asia',
        },
        {
            name: 'India',
            type: 'Asia',
        },
        {
            name: 'Colombia',
            type: 'South America',
        },
        {
            name: 'Argentina',
            type: 'South America',
        }
        ];
        var btnField = document.getElementById('filterContent');
        obj.forEach(element => {
            btnField.innerHTML += '<button type="button" class="btn btn-primary btn-block">' + element['type'] +'</button>';
        });
        var cardContent = document.getElementById('cardContent');
        obj.forEach(element => {
            cardContent.innerHTML += '<div class="col"><div class="card shadow-sm"><div class="card-body"><h5 class="card-title">' + element['name'] + '</h5> <p class="card-text">' + element['type'] + '</p></div></div></div>';
        });


        // var btn = document.querySelector('button');
        // btn.addEventListener("click", function(e){
        //     var target = e.target;
        //     // var card = document.querySelector('.card');
        //     if (target.textContent === "Asia") {
        //         alert('prova')
        //      }
        //    });
    });
