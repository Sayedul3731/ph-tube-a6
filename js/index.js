const loadData = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await res.json();
    const technologies = data.data;
    const technologiesBtnContainer = document.getElementById('technologies-btn-container');
    technologies.forEach( technology => {
        console.log(technology);
        const div = document.createElement('div');
        div.innerHTML = `<button onclick="technologyDisplay('${technology.category_id}')" class="btn hover:bg-[#FF1F3D] hover:text-white">${technology.category}</button>`;
        technologiesBtnContainer.appendChild(div);
    });
}
const technologyDisplay = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    console.log(data);
}
loadData()