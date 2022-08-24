var openButton = document.getElementById('payment-btn');
var header = document.getElementById('header');
var dialog = document.getElementById('step_1');
var stepTwo = document.getElementById('step_2');
var closeButton = document.getElementById('close');
var closeButtonStepTwo = document.getElementById('closeButtonStepTwo');
var nextButton = document.getElementById('next');
var overlay = document.getElementById('overlay');


// show the overlay and the dialog
openButton.addEventListener('click', function () {
    dialog.classList.remove('hidden');
    overlay.classList.remove('hidden');
    dialog.classList.add('fade');
    header.classList.remove('sticky');
});

// hide the overlay and the dialog
closeButton.addEventListener('click', function () {
    dialog.classList.add('hidden');
    overlay.classList.add('hidden');
    header.classList.add('sticky');

});




closeButtonStepTwo.addEventListener('click', function () {
    overlay.classList.add('hidden');
    stepTwo.classList.add('hidden');

    header.classList.add('sticky');

});
nextButton.addEventListener('click', function () {
    dialog.classList.add('hidden');
    stepTwo.classList.remove('hidden');
    header.classList.remove('sticky');
    


});