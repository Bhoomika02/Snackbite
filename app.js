const menu = [
  {
    id: 1,
    title: "cheesy fries",
    category: "starters",
    price: 15.99,
    img: "./images/1.jpg",
    desc: `Easy and fast, these Cheddar cheese fries are served with bacon and dipped in ranch dressing`,
  },
  {
    id: 2,
    title: "american cheese burger",
    category: "Burgers",
    price: 13.99,
    img: "./images/2.jpg",
    desc: `This thick, juicy, succulent burger is grilled to perfection, then topped with smokey bacon and sharp Cheddar cheese. You'll love the taste and texture of the home-ground meat! `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "desserts",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `A thick milkshake that blends fall spices and chocolate together. Top with whipped cream and an extra sprinkle of cinnamon on top.`,
  },
  {
    id: 4,
    title: "dragon chicken",
    category: "Chef-Special",
    price: 20.99,
    img: "./images/4.jpg",
    desc: `This colourful meal combines lentils, quinoa, zucchini, and tomatoes. For a spicier dish, try garnishing with sliced onions `,
  },
  {
    id: 5,
    title: " breakfast nachos",
    category: "starters",
    price: 22.99,
    img: "./images/5.jpg",
    desc: `Healthy vegetarian nacho mixture loaded with green onions, black olives, cherry tomatoes, and jalapeno pepperss `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "desserts",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Layers of cookies, pudding, and Cool Whip make this Oreo shake a huge hit!`,
  },
  {
    id: 7,
    title: "eggplosive",
    category: "Burgers",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `The flat top grill is the best way to cook an all around, eat anytime burger with cheese and a fried egg. 
    The fried egg adds an extra bit of richness and the flour makes an excellent crust. `,
  },
  {
    id: 8,
    title: "chicken nuggets",
    category: "starters",
    price: 12.99,
    img: "./images/8.jpg",
    desc: `Delicious chicken nuggets with a surprisingly good crunch. Different in design, but yummily young. Perfect for small kids and great for spending time as a family making them.  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "Burgers",
    price: 16.99,
    img: "./images/9.jpg",
    desc: `Lunch meat, cheese and chili are blended and baked onto buns to make delicious pizza-like treats.`,
  },
  {
    id: 10,
    title: "pizza fries",
    category: "Chef-Special",
    price: 22.99,
    img: "./images/10.jpg",
    desc: `Pizza fries for dipping, snacking, and sharing. The cheese melts out a little, that is perfect. Cool, then dip into marinara and enjoy`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
            <button class="btn">ADD TO CART</button>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");


  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}




