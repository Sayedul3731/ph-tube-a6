// loadData function here 
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
    technologyDisplay(technologies[0].category_id)
}

// technologyDisplay function here 
const technologyDisplay = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    const technologies = data.data;
    console.log(technologies);
    const technologiesContainer = document.getElementById('technologies-container');
    technologiesContainer.textContent = '';
    technologies.forEach( technology => {
        console.log(technology);
        const technologyCard = document.createElement('div');
        technologyCard.innerHTML = `
                        <div class="card  bg-base-100 shadow-xl p-4">
                            <figure><img src="${technology.thumbnail}" alt="technology-photo" /></figure>
                            <div class="card-body">
                                   <div class="flex text-center justify-center">
                                   <img class="w-12 h-12 rounded-full" src="${technology.authors[0].profile_picture}" />
                                   <p class="mt-3 font-medium">${technology.title}</p>
                                   </div>
                                   <p>${technology.authors[0].profile_name}</p>
                                   <p></p>
                            </div>
                        </div>
        `;
        technologiesContainer.appendChild(technologyCard)
    })
  
    

    
}
loadData()