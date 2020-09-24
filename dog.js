const BREED_LST_URL ="https://dog.ceo/api/breeds/list/all";
const breedPicker = document.getElementById("breed");
const mainImage = document.getElementById("main");
let dogBreed ="";

const promise = fetch(BREED_LST_URL)
    .then(function(response){
        return response.json();
    })
    .then (function(processedResponse){
        const breedsObject = processedResponse.message;
        const breedsArray = Object.keys(breedsObject);

        for (let i = 0; i < breedsArray.length; i++){
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            breedPicker.appendChild(option);
        }
})

const loader = document.getElementById("loader");

breedPicker.addEventListener('change', (event) => {
    loader.classList.add("show");
    mainImage.classList.remove("show");

    const dogImg = fetch(`https://dog.ceo/api/breed/${event.target.value}/images/random`)
    .then ((response) => {
        return response.json();})
    .then ((processedResponse) => {
        mainImage.src = processedResponse.message;
        loader.classList.remove("show");
        mainImage.classList.add("show");
    })
});

