function showNav(NumberNav){
    document.getElementById("Main").classList.remove("active")
    document.getElementById("List").classList.remove("active")
    document.getElementById("Sirkel").classList.remove("active")
    document.getElementById("Memory").classList.remove("active")


    if (NumberNav === 1){
        document.getElementById("Main").classList.add("active")
    } else if (NumberNav === 2){
        document.getElementById("List").classList.add("active")
    } else if (NumberNav === 3){
        document.getElementById("Sirkel").classList.add("active")
    } else if (NumberNav === 4){
        document.getElementById("Memory").classList.add("active")
    }

}

function showImage() {
    document.querySelector('.ContainerFoto').style.opacity = '1';
  }

  function hideImage() {
    document.querySelector('.ContainerFoto').style.opacity = '0';
  }


//   function ahaw(show, hidden) {
//     document.getElementById(show).classList.remove("hidden")
//     document.getElementById(hidden).classList.add("hidden")
//     return false;
// }   


// window.onscroll = function() {myFunction()};

// var header = document.getElementById("header2");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
