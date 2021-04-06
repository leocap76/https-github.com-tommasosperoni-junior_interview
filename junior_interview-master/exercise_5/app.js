document.addEventListener('DOMContentLoaded', () => {
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
    var filteredType = [];
    var buttonContainer = document.querySelector('#filterContent');
    var cardContent = document.querySelector('#cardContent');
    //stampo i buttons
    obj.forEach(element => {
        //all'inizio li stampo tutti
        cardContent.innerHTML += `
            <div class="col">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">${element.type}</p>
                    </div>
                </div>
            </div> 
        `;
        //creo i buttons univoci
        if (!filteredType.includes(element.type)) {
            filteredType.push(element.type);
            var newButton = document.createElement('button');
            newButton.innerHTML = element.type;
            buttonContainer.appendChild(newButton);
            //gestisco al click
        }
    });
    //gestisco il click dei buttons
    var buttons = Array.from(buttonContainer.children);
    buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                if (e.target.innerHTML == 'All') {
                    cardContent.innerHTML = '';
                    obj.forEach(element => {
                        //li stampo tutti
                        cardContent.innerHTML += `
                            <div class="col">
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <h5 class="card-title">${element.name}</h5>
                                        <p class="card-text">${element.type}</p>
                                    </div>
                                </div>
                            </div> 
                        `;
                    });
                } else {
                //creo l'array filtrato
                var filteredArray = obj.filter(album => {
                    return album.type == e.target.innerHTML;
                });
                //svuoto il cardContent
                cardContent.innerHTML = '';
                //stampo gli elementi dell'array
                filteredArray.forEach(element => {
                    cardContent.innerHTML += `
                    <div class="col">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <h5 class="card-title">${element.name}</h5>
                                <p class="card-text">${element.type}</p>
                            </div>
                        </div>
                    </div> 
                    `;
                })
            }
        });
    });
});
