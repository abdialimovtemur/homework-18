const url = "https://product-feedback-data.vercel.app/";
const categories = document.querySelector(".categories");
const mainSection = document.querySelector(".mainSection");

const categoriesRender = (categoryData) => {
    categories.innerHTML = categoryData.map((item) => `
        <button class="text-[#4661E6] bg-[#F2F4FF] flex text-xs p-4 rounded-xl hover:bg-blue-500 hover:text-white category-btn transition duration-300" data-category="${item}">
            ${item}
        </button>
    `).join('');

    if (categoryData.length > 0) {
        getMainSection(categoryData[0]);
    
        document.querySelectorAll(".category-btn")[0].classList.add("bg-blue-500", "text-white");
    }
};

const mainSectionRender = (data) => {
    mainSection.innerHTML = data.map((item) => `
    <div class="flex gap-20 bg-white py-5 rounded-lg items-center px-10 hover:shadow-2xl justify-start items-center shadow-md transition duration-300">
        <p class="bg-[#F2F4FE] rounded-sm w-12 h-14 text-center flex items-center justify-center rounded-md font-bold text-[#3A4374]">${item.votes}</p>
        <div class="flex flex-col gap-2"> 
            <p class="text-[#3A4374] text-xl font-bold">${item.title}</p>
            <p class="text-[#647196]">${item.description}</p>
            <p class="text-[#4661E6] p-2 rounded-xl font-semibold bg-[#F2F4FF]">${item.tags}</p>
        </div>
    </div>
    `).join('');
};

const getMainSection = async (categoryName) => {
    try {
        const res = await fetch(`${url}${categoryName}`);
        const data = await res.json();
        mainSectionRender(data);
    } catch (error) {
        console.log(error);
    }
};

const GetCategories = async () => {
    try {
        const res = await fetch(`${url}category`);
        const categoryData = await res.json();
        categoriesRender(categoryData);
    } catch (error) {
        console.log(error);
    }
};

GetCategories();


categories.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {

        document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("bg-blue-500", "text-white"));
        
        e.target.classList.add("bg-blue-500", "text-white");

        const categoryName = e.target.dataset.category;
        getMainSection(categoryName); 
    }
});
