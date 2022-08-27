// const primaryNav = document.querySelector(".sidebar");

// const navToggle = document.querySelector(".mobile-menu-btn");

// navToggle.addEventListener('click', () => {
//     primaryNav.classList.toggle('open')
// })

// const dropbtnvalue = document.querySelector(".dropdown-toggle").getAttribute('aria-expanded');
// const dropbtn = document.querySelector("# dropdownMenuButton")
// const dropdown = document.querySelector(".dropdown");
// const dropdownMenu = document.querySelector(".dropdown-menu");

// console.log(dropbtn)


// dropbtn.addEventListener('click', () => {
//     const visibility = dropbtn.getAttribute('aria-expanded')
//     console.log(visibility)
//     dropdown.classList.toggle('show')
//     dropdownMenu.classList.toggle('show')
// })

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultOpen").click();



document.addEventListener('click', (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-btn]")
    if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if(isDropdownButton){
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('show')
        
    }

    document.querySelectorAll("[data-dropdown].show").forEach(dropdown => {
        if(dropdown === currentDropdown) return
        dropdown.classList.remove('show')
    })
})

document.addEventListener('click', (e) => {
    const isLargeDropdownButton = e.target.matches("[data-large-dropdown-btn]")
    if(!isLargeDropdownButton && e.target.closest('[data-large-dropdown]') != null) return

    let largeCurrentDropdown
    if(isLargeDropdownButton){
        largeCurrentDropdown = e.target.closest('[data-large-dropdown]')
        largeCurrentDropdown.classList.toggle('active')
        
    }

    document.querySelectorAll("[data-large-dropdown].active").forEach(dropdown => {
        if(dropdown === largeCurrentDropdown) return
        dropdown.classList.remove('active')
    })
})

document.addEventListener('click', (e) => {
    const isSubmenuDropdownButton = e.target.matches("[data-submenu-dropdown-btn]")
    if(!isSubmenuDropdownButton && e.target.closest('[data-submenu-dropdown]') != null) return

    if(isSubmenuDropdownButton){
        console.log("iiiiorewwwerc")
    }

    let submenuCurrentDropdown
    if(isSubmenuDropdownButton){
        submenuCurrentDropdown = e.target.closest('[data-submenu-dropdown]')

        submenuCurrentDropdown.classList.toggle('show-submenu')
        
    }

    document.querySelectorAll("[data-submenu-dropdown].show-submenu").forEach(dropdown => {
        if(dropdown === submenuCurrentDropdown) return
        dropdown.classList.remove('show-submenu')
    })
})

document.addEventListener('click', (e) => {
    const personalInfo = e.target.matches("#personal_info");
    const newClient = e.target.matches("#newClient");

    const closebtn = e.target.matches("#closeButton");

    let personalInfoModal = document.querySelector('#personalInfoModal');
    let clientForm = document.querySelector('#client_form');


    let overlay = document.querySelector('#overlay');
    let header = document.querySelector('.header');

    if(personalInfo){
        
        // personalInfoModal.classList.toggle('show')
        personalInfoModal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        header.classList.remove('sticky');
    }else if(closebtn){
        
        personalInfoModal.classList.add('hidden');
        clientForm.classList.add('hidden');

        overlay.classList.add('hidden');
        header.classList.add('sticky');
        
    } else if(newClient){
        clientForm.classList.remove('hidden');
        overlay.classList.remove('hidden');
        header.classList.remove('sticky');
    }
    // if(!isLargeDropdownButton && e.target.closest('[data-large-dropdown]') != null) return

    // let largeCurrentDropdown
    

    // document.querySelectorAll("[data-large-dropdown].active").forEach(dropdown => {
    //     if(dropdown === largeCurrentDropdown) return
    //     dropdown.classList.remove('active')
    // })
})


document.addEventListener('click', (e) => {
    const withdrawButton = e.target.matches("#withdraw"); //main withdraw button
    const closebtn = e.target.matches("#close"); //close main withdraw button


    const bankAccountBtn = e.target.matches("#bankAccountBtn"); //main bankAccountBtn button
    const newBankAccountBtn = e.target.matches("#newBankAccountBtn"); //main newBankAccountBtn button


    const walletAddressBtn = e.target.matches("#walletAddressBtn"); //wallet address button
    const newWalletAddressBtn = e.target.matches("#newWalletAddressBtn"); //new wallet Address button
    // const successbtn = e.target.matches("#successbtn"); //new wallet Address button


    let overlay = document.querySelector('#overlay'); //overlay
    let header = document.querySelector('.header'); //header

    let step1 = document.querySelector('#step1');

    //forms
    let bankAccountForm = document.querySelector('#bankAccountForm');
    let newBankAccountForm = document.querySelector('.newBankAccountForm');
    let walletAddressForm = document.querySelector('#walletAddressForm');
    let newWalletAddressForm = document.querySelector('.newWalletAddressForm');
    // let successfull = document.querySelector('.success');



    if(withdrawButton){
        // personalInfoModal.classList.toggle('show')
        step1.classList.remove('hidden');
        overlay.classList.remove('hidden');
        header.classList.remove('sticky');
    }else if(bankAccountBtn){
        step1.classList.add('hidden');
        bankAccountForm.classList.remove('hidden');
        // overlay.classList.add('hidden');
        // header.classList.add('sticky'); 
    }else if(newBankAccountBtn){
        // console.log("heyyyy")
        // // step1.classList.add('hidden');
        bankAccountForm.classList.add('hidden');

        newBankAccountForm.classList.remove('hidden');

        // overlay.classList.add('hidden');
        // header.classList.add('sticky'); 
    }else if(walletAddressBtn){
        walletAddressForm.classList.remove('hidden');
        overlay.classList.remove('hidden');
        header.classList.remove('sticky');
    }else if(newWalletAddressBtn){
        // console.log("heyyyy")
        // // step1.classList.add('hidden');
        walletAddressForm.classList.add('hidden');

        newWalletAddressForm.classList.remove('hidden');

        // overlay.classList.add('hidden');
        // header.classList.add('sticky'); 
    }else if(closebtn){
        step1.classList.add('hidden');
        overlay.classList.add('hidden');
        header.classList.add('sticky'); 
        bankAccountForm.classList.add('hidden');
        newBankAccountForm.classList.add('hidden');
        walletAddressForm.classList.add('hidden');
        newWalletAddressForm.classList.add('hidden');
    }

})


function onSubmit(){
    let successfull = document.querySelector('.success');
    let newWalletAddressForm = document.querySelector('.newWalletAddressForm');
    successfull.classList.remove('hidden');
    newWalletAddressForm.classList.add('hidden')


}
function onSave(){
    let successfull = document.querySelector('.invoice-success');
    let overlay = document.querySelector('#overlay'); //overlay
    let header = document.querySelector('.header'); //header
    header.classList.remove('sticky');
    successfull.classList.remove('hidden');
    overlay.classList.remove('hidden')
}
function onCloseSave(){
    let successfull = document.querySelector('.invoice-success');
    let overlay = document.querySelector('#overlay'); //overlay
    let header = document.querySelector('.header'); //header

    header.classList.add('sticky');
    successfull.classList.add('hidden');
    overlay.classList.add('hidden')
}
function onWithdraw(){
    let withdraw = document.querySelector('.withdraw');

    let bankAccountForm = document.querySelector('#bankAccountForm');
    let walletAddressForm = document.querySelector('#walletAddressForm');    
    
    if(withdraw){
        withdraw.classList.remove('hidden');
    
        bankAccountForm.classList.add('hidden');
        walletAddressForm.classList.add('hidden');
    }else{
        console.log("theres a problem")
    }
    


}



    // const newClient = e.target.matches("#newClient");

    // const closebtn = e.target.matches("#closeButton");

    // let personalInfoModal = document.querySelector('#personalInfoModal');
    // let clientForm = document.querySelector('#client_form');


    // let overlay = document.querySelector('#overlay');
    // let header = document.querySelector('.header');

    // if(personalInfo){
        
    //     // personalInfoModal.classList.toggle('show')
    //     personalInfoModal.classList.remove('hidden');
    //     overlay.classList.remove('hidden');
    //     header.classList.remove('sticky');
    // }else if(closebtn){
        
    //     personalInfoModal.classList.add('hidden');
    //     clientForm.classList.add('hidden');

    //     overlay.classList.add('hidden');
    //     header.classList.add('sticky');
        
    // } else if(newClient){
    //     clientForm.classList.remove('hidden');
    //     overlay.classList.remove('hidden');
    //     header.classList.remove('sticky');
    // }
    // if(!isLargeDropdownButton && e.target.closest('[data-large-dropdown]') != null) return

    // let largeCurrentDropdown
    

    // document.querySelectorAll("[data-large-dropdown].active").forEach(dropdown => {
    //     if(dropdown === largeCurrentDropdown) return
    //     dropdown.classList.remove('active')
    // })


