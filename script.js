

const button =document.querySelector("a");


function toggleDropdown() {
    const dropdownMenu = document.querySelector('.features-content');
    const icon = document.querySelector('.dropdown-icon');
    const navRight=document.querySelector(".nav_right");
    
    // Toggle dropdown menu visibility
    if (dropdownMenu.style.display === 'grid') {
      dropdownMenu.style.display = 'none';
      dropdownMenu.style.tansform="scaleY(0)";
      navRight.style.backgroundColor="white";
      navRight.style.paddingLeft="0%";
    } else {
      dropdownMenu.style.display = 'grid';
      dropdownMenu.style.tansform="scaleY(1)"; // Set as grid when shown
      navRight.style.backgroundColor="#fafaf9";
      navRight.style.paddingLeft="10%";
    }
    
    // Toggle the rotation of the SVG icon
    icon.classList.toggle('rotate-icon');
  }
console.log(Screen.width);
  