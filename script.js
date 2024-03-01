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
                <div class="name">Name PlaceHolder</div>
                <div class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
            `
            container.innerHTML += cardV
        })
    }
}

renderCards()