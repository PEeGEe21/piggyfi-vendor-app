const hideBanner = document.querySelector("#hideBanner");
const banner = document.querySelector(".banner");


hideBanner.addEventListener('click', function () {
    banner.classList.add('hidden');

});
