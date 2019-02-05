const submit = document.getElementById('form');
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');

slider.addEventListener('change', function() {
    sliderValue.textContent = slider.value;
});

// event listener for submission
    // object for all submissions

submit.addEventListener('submit', function() {
    event.preventDefault();

    const name = submit.elements.name.value;
    const ssn = submit.elements.ssn.value;
    const read = submit.elements.read.value;
    const shorts = submit.elements.shorts.value;

    const allOptions = submit.elements.options;
    const chosenOptions = [];

    for(let i = 0; i < allOptions.length; i++) {
        const selected = allOptions[i];
        if(selected.checked) {
            chosenOptions[i] = selected.value;
        }
    }

    const submittedApp = {
        name: name,
        ssn: ssn,
        literacy: read,
        areShortsReal: shorts,
        favoriteOptions: chosenOptions,
        hateShortsAmmount: slider.value
    }

    console.log(submittedApp);
    
});


