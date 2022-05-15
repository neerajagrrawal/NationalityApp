


function findNationality () {
    var firstName = document.forms["myForm"]["firstName"].value;
    var url = "https://api.nationalize.io?name=" + firstName ; 
    getNationality(url).catch(error => {
        console.error(error);
        });
    alert ("You typed: " + url);
}

async function getNationality(url){
    const response = await fetch(url);
    const data = await response.json();
    const firstCountryName = data.country[0].country_id ;
    const firstCountryProbability = (data.country[0].probability * 100).toFixed(2) ;
    const secondCountryName = data.country[1].country_id ;
    const secondCountryProbability = (data.country[1].probability * 100).toFixed(2) ;

    document.getElementById("firstCountryName").innerHTML = firstCountryName ;
    document.getElementById("firstCountryProbability").innerHTML = firstCountryProbability ;
    document.getElementById("secondCountryName").innerHTML = secondCountryName ;
    document.getElementById("secondCountryProbability").innerHTML = secondCountryProbability ;
    
    }



