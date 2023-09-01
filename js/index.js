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
    const technologies = data.data;
    console.log(technologies);
    const technologiesContainer = document.getElementById('technologies-container');
    technologies.forEach( technology => {
        const technologyCard = document.createElement('div');
        technologyCard.innerHTML = `
                        <div class="card  bg-base-100 shadow-xl p-4">
                            <figure><img src="${technology.thumbnail}" alt="Shoes" /></figure>
                            <div class="card-body">
                                    <h2 class="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
        `;
        technologiesContainer.appendChild(technologyCard)
    })
  
    

    
}
loadData()