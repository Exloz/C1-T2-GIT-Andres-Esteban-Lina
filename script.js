import { getProducts } from "./utils/api.js";

const renderCards = async() => {
    const container = document.querySelector('.contenedor')
    const datos = await getProducts()
    if(datos){
        datos.forEach(item => {
            const cardV = `
                <div class="card">
                <div class="card-image">
                    <img src=${item.image} />
                </div>
                <div class="name">${item.title}</div>
                <div class="description">
                    ${item.description}
                </div>
            </div>
            `
            container.innerHTML += cardV
        })
    }
}

renderCards()