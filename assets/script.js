const element = document.getElementById('characters'); 
const container = document.getElementById('container');
let characterIndex = 0; 
let counterPrimary = 1;
let counterSecondary= 6;
let counterThirdy= 11;

async function getPrimary(){
    if(counterPrimary>5) return

    try {
        const response = await fetch("https://swapi.dev/api/people/" + counterPrimary, {
          method: 'GET',
          headers: {}
        })
        const result = await response.json();
        // const element = document.getElementById('charactersPrimary');

        console.log(result)
        injectInfo(result,'charactersPrimary');
        counterPrimary++;
    } catch (error) {
        console.error(error);
    }

}

async function getSecondary(){
    if(counterSecondary>10) return

    try {
        const response = await fetch("https://swapi.dev/api/people/" + counterSecondary, {
          method: 'GET',
          headers: {}
        })
        const result = await response.json();
        // const element = document.getElementById('charactersPrimary');

        console.log(result)
        injectInfo(result,'characterSecondary');
        counterSecondary++;
    } catch (error) {
        console.error(error);
    }

}

async function getThirdy(){
    if(counterThirdy>15) return

    try {
        const response = await fetch("https://swapi.dev/api/people/" + counterThirdy, {
          method: 'GET',
          headers: {}
        })
        const result = await response.json();
        // const element = document.getElementById('charactersPrimary');

        console.log(result)
        injectInfo(result,'characterThirdy');
        counterThirdy++;
    } catch (error) {
        console.error(error);
    }

}

function injectInfo (character,idElement) {
    let card = `
    <div class="col-12 col-md-6 col-lg-4">
                                    <div id="card" class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
                                        <div class="timeline-icon"><i class="fa fa-address-card" aria-hidden="true"></i></div>
                                        <div class="timeline-text">
                                            <h6> Name: ${character.name}</h6>
                                            <p> Weight: ${character.mass} kg</p>
                                            <p> Height: ${character.height} cm</p>
                                        </div>
                                    </div>
                                </div>`
    document.getElementById(idElement).innerHTML+=card 
}

