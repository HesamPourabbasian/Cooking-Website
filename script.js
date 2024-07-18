const paragraphText = "دنیایی از طعم‌ها را کشف کنید و بگذارید عطر هنر آشپزی در آشپزخانه‌تان پخش شود."; // Text to be typed
const typingSpeed = 50; // Milliseconds between characters (adjust for typing speed)
let currentCharIndex = 0; // Keeps track of the current character being typed

const paragraphElement = document.getElementById('typing-paragraph');

function typeWriter() {
  if (currentCharIndex < paragraphText.length) {
    paragraphElement.textContent += paragraphText.charAt(currentCharIndex);
    currentCharIndex++;
    setTimeout(typeWriter, typingSpeed);
  }
}

typeWriter();






// br
document.addEventListener("DOMContentLoaded", function() {
  const recipes = [
      {
          category: "dinner",
          title: "خورشت هویج",
          description: "خورش هویج یکی از انواع خورش های خوشمزه و خاص ایرانی است که اصالت آن متعلق به شهر تبریز می باشد. این خورش خوشمزه را به سلیقه خود می توانید با گوشت قرمز یا گوشت مرغ درست کنید",
          image: "./img/havij.jpg",
       
      },
      {
        category: "dinner",
        title: "زرشک پلو با مرغ",
        description: "زرشک پلو با مرغ یکی از انواع غذاهای خوشمزه و پرطرفدار ایرانی است که با دستورهای متنوعی تهیه می شود. این غذای خوشمزه یکی از مجلسی ترین غذاهای ایرانی محسوب می شود",
        image: "./img/zereshk.webp",
     
    },
      {
          category: "dinner",
          title: "سبزی پلو با ماهی",
          description: "سبزی پلو با ماهی یکی از انواع غذاهای خوشمزه و پرطرفدار ایرانی است که معمولا برای شب عید نوروز تهیه می شود",
          image: "./img/sabzi.jpg",
      
      },
      {
          category: "lunch",
          title: " خوراک ماهی قزل آلا",
          description: "خوراک ماهی قزل آلا یکی از انواع خوراک های خوشمزه دریایی است که با طعم های متنوعی تهیه می شود",
          image: "./img/mahi.jpg",
        
      },
      {
          category: "breakfast",
          title: "حلیم",
          description: "حلیم یکی دیگر از صبحانه‌های ایرانی سنتی است که طعم لذیذ آن برای ایرانی‌ها همچنان جذاب است. البته حلیم، نه تنها جایگاه خاصی در میان مردم ایران دارد بلکه از آن به عنوان یکی از محبوب‌ترین غذاها در سراسر جهان یاد می‌شود.",
          image: "./img/haleem.webp",
      },
      {
        category: "breakfast",
        title: " کله پاچه",
        description: "املت گوجه فرنگی یکی از انواع املت های پر طرفدار ایرانی است که به خاطر محبوبیت زیادش در قهوه خانه ها هم سرو می شود.",
        image: "./img/kale.jpg",
    },{
      category: "breakfast",
      title: "املت",
      description: "املت گوجه فرنگی یکی از انواع املت های پر طرفدار ایرانی است که به خاطر محبوبیت زیادش در قهوه خانه ها هم سرو می شود.",
      image: "./img/omllet-goje-farangi.jpg",
  },
      {
          category: "lunch",
          title: "ماکارونی",
          description: "ماکارونی یکی از غذاهای بسیار محبوب در جهان است که به عنوان یک غذای بین المللی در سراسر جهان شناخته شده می باشد. ماکارونی هم مانند غذاهایی مثل لازانیا و پاستا اصالتی ایتالیایی دارد",
          image: "./img/makaroni.jpg",
        
      },
      {
          category: "lunch",
          title: "خوراک عدس و بادمجان",
          description: "طرز تهیه خوراک عدس و بادمجان رو اگر بلد باشید، می‌تونید یک غذای سنتی و خیلی خوشمزه رو به راحتی تو خونه درست کنید. این غذا، با عدس و بادمجان که هر کدوم به تنهایی مزایای زیادی دارن",
          image: "./img/bad.webp",
     
      }
  ];

  const filters = document.querySelectorAll(".filter-btn");
  const recipesContainer = document.querySelector(".recipes");

  filters.forEach(filter => {
      filter.addEventListener("click", function() {
          filters.forEach(btn => btn.classList.remove("active"));
          this.classList.add("active");
          const category = this.getAttribute("data-category");
          displayRecipes(category);
      });
  });

  function displayRecipes(category) {
      recipesContainer.innerHTML = "";
      const filteredRecipes = category === "all" ? recipes : recipes.filter(recipe => recipe.category === category);
      filteredRecipes.forEach(recipe => {
          const recipeElement = document.createElement("div");
          recipeElement.classList.add("recipe");
          recipeElement.innerHTML = `
              <img src="${recipe.image}" alt="${recipe.title}">
              <h3>${recipe.title}</h3>
              <p>${recipe.description}</p>
              <a href="#" class="view-recipe">دستور عمل</a>
          `;
          recipesContainer.appendChild(recipeElement);
      });
  }

  // Display all recipes by default
  displayRecipes("all");
});







