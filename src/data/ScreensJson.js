const screens = {
  homepage: {
    components: {
      searchbar: {
        className: "searchbar",
      },
      search: {
        className: "search",
      },
      searchBtn: {
        className: "search-btn",
      },
      banner: {
        className: "banner",
        image: "./images/Frame292.png",
        title: "Recommended Recipes For you",
      },
      popularCategories: {
        className: "popular-categories",
        categories: ["Breakfast", "Noodles", "Desserts", "Salads", "Appetizers"],
      },
      recipes: {
        className: "recipes-cards",
        Items: [
          {
            name: "1",
            imageClass: "card-1",
            description: "CREAMY ROSÉ TORTELLINI SOUP.",
          },
          {
            name: "2",
            imageClass: "card-2",
            description: "Quick Summer Fresh Salad.",
          },
          {
            name: "3",
            imageClass: "card-3",
            description: "Fettuccine with chestnuts and steak",
          },
        ],
      },
    },
  },
  aboutpage: {
    title: "Welcome to Cooknet",
    image: "images/about.jpg",
    description:
      "  At Cooknet, we are passionate about making your cooking experience delightful and stress-free. Our website offers a range of innovative features designed to help you plan, prepare, and enjoy delicious meals effortlessly.Plan Your Week:With Cooknet, you can seamlessly plan your meals for the entire week. Our intuitive meal planner allows you to schedule what to eat each day, ensuring you have a well-balanced and varied diet. Whether you're looking to try new recipes or stick to your favorites, we've got you covered. Personalized Recipe Recommendations: We understand that everyone has unique tastes and dietary preferences. That's why Cooknet offers personalized recipe recommendations tailored just for you. By analyzing your preferences and past choices, we suggest recipes that you'll love, making it easier for you to discover new dishes that match your culinary interests. Ingredient Management:Never forget an ingredient again! Cooknet's ingredient management feature allows you to pick the missing ingredients for any recipe and add them to a convenient shopping list. You can organize your ingredients by recipe or category, ensuring you have everything you need for a perfect cooking experience.Share with Friends and Family: Cooking is more fun when shared. With Cooknet, you can easily share your shopping list with friends and family. Collaborate on meal planning, exchange recipes, and enjoy the joy of cooking together, no matter where you are.Join the Cooknet community today and transform the way you cook. Discover new recipes, plan your meals with ease, manage your ingredients efficiently, and share the joy of cooking with others. Cooknet - making cooking simple, enjoyable, and personalized just for you.",
  },
  contactpage: {
    title: "Contact Cooknet",
    address: "123 Recipe Street, City, Country",
    phone: "+1234567890",
    email: "info@recipeswebsite.com",
  },
  recipespage: {
    title: "Our Recipes",
    categories: [
      {
        name: "Appetizers",
        recipes: [
          {
            name: "Guacamole",
            image: "/images/guacamole.jpg",
            description:
              "Fresh and creamy avocado dip with tomatoes, onions, and lime juice.",
          },
          {
            name: "Bruschetta",
            image: "/images/bruschetta.jpg",
            description:
              "Italian appetizer made with toasted bread topped with tomatoes, basil, and garlic.",
          },
        ],
      },
      {
        name: "Main Dishes",
        recipes: [
          {
            name: "Lasagna",
            image: "/images/lasagna.jpg",
            description:
              "Layers of pasta, meat sauce, ricotta cheese, and mozzarella, baked to perfection.",
          },
          {
            name: "Grilled Salmon",
            image: "/images/grilled_salmon.jpg",
            description:
              "Fresh salmon fillets marinated in lemon, garlic, and herbs, grilled to juicy perfection.",
          },
        ],
      },
      {
        name: "Desserts",
        recipes: [
          {
            name: "Tiramisu",
            image: "/images/tiramisu.jpg",
            description:
              "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.",
          },
          {
            name: "Apple Pie",
            image: "/images/apple_pie.jpg",
            description:
              "Homemade pie with a flaky crust and sweet apple filling, best served warm with vanilla ice cream.",
          },
        ],
      },
    ],
  },
  mealplanner: {
    title: "Meal Planner",
    daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    initialMeals: {
      Monday: { breakfast: "", lunch: "", dinner: "", snacks: "" },
      Tuesday: { breakfast: "", lunch: "", dinner: "", snacks: "" },
      Wednesday: { breakfast: "", lunch: "", dinner: "", snacks: "" },
      Thursday: { breakfast: "", lunch: "", dinner: "", snacks: "" },
      Friday: { breakfast: "", lunch: "", dinner: "", snacks: "" },
      Saturday: { breakfast: "", lunch: "", dinner: "", snacks: "" },
      Sunday: { breakfast: "", lunch: "", dinner: "", snacks: "" },
    },
    sidebar: {
      buttons: [
        { name: "My Recipes", className: "sidebar-btn" },
        { name: "Planner", className: "sidebar-btn" },
        { name: "Grocery List", className: "sidebar-btn" },
        { name: "Re-Search", className: "sidebar-btn" },
        { name: "Saved", className: "sidebar-btn" },
      ],
    },
    topNav: {
      weeklyOptions: ["This Week", "Next Week"],
    },
  },
};

export default screens;
