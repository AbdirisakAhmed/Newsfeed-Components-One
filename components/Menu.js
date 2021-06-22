// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
    'Students',
    'Faculty',
    "What's New",
    'Tech Trends',
    'Music',
    'Log Out'
  ];
  


  function menuMaker (data){
    // step 1: Samee elements-ka
    const menu = document.createElement("div")
    const unOrder = document.createElement("ul")
    // Step 2: Isku xir
    menu.appendChild(unOrder)
    // Step 3: Soo jiido array-ga magacyada menu-ga ay ku jiraan, adigoo parameter-ka functionka soo marinaayo, kadib map ku samee. Sameynta 'li' oo dhan iyo isku xirka 'ul' iyo 'li' waxay galaayaan map-ka dhexdiisa. Taas waxay sameyneysaa hadaa menu cusub ku darto, inuu si automatic ah u sameysmani doono.
    data.map(function(item) {
      const list = document.createElement("li")
        unOrder.appendChild(list)
      list.textContent = item
    })
    // Step 4: Class-ka ku dar
    menu.classList.add("menu")
    // Step 5: Click method-ka samee, u yeer '.menu-button', kadib addEventListener ku xir, kadib gudaheeda, 'menu' kore u yeer oo 'menu--open' class ah toggle dheh
    const menuButton = document.querySelector(".menu-button")
    menuButton.addEventListener("click", function(event){
        menu.classList.toggle("menu--open")
    })
    return menu
  }
  // Step 6: Soo jiido '.header' kadib appendChild ku dheh function-ka adigoo function-ka siinaayo data-da kor ku taalo oo list of menu ku jiraan.
    const myHeader = document.querySelector(".header")
    myHeader.appendChild(menuMaker(menuItems));
 
  /* 
    Step 1: Write a component called 'menuMaker' to create a menu like the markup below:
  
    <div class="menu">
      <ul>
        {each menu item as an <li>}
      </ul>
    </div>
  
    The 'menuMaker' takes an array of menu items as its only argument.
  
    Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
    Add those items to the <ul>
  
    Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').
  
    Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).
  
    Step 5: Don't forget to return your div.menu.
  
    Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
  */
  