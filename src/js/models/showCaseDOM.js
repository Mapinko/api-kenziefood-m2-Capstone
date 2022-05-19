import { ApiRequest } from "../controller/apiRequest.js";
class showCase extends ApiRequest{
    static data = ApiRequest.requisition()
    static async homePage(){   
        let body = document.querySelector("body")

        let main = document.createElement("main")
        body.appendChild(main)

        let navbar = document.createElement("nav")
        navbar.innerHTML=`
            <button class="filter">Todos</button>
            <button class="filterBread">Panificadora</button>
            <button class="filterFruit">Frutas</button>
            <button class="filterDrink">Bebidas</button>
            
        `
        main.appendChild(navbar)

        let showCase = document.createElement("section")
        showCase.classList="showCase"
        main.appendChild(showCase)
    }

    static async displayProducts(){
        let productArray = await this.data
        console.log(productArray)
        productArray.forEach(element => {
            let productCard = document.createElement("article")
                productCard.classList="product"
                productCard.innerHTML=`
                    <article class="product">
                        <picture class="img">
                            <img src="${element.imagem} " alt="${element.nome}">
                        </picture>
                        <h3 class="name">${element.nome}</h3>
                        <p class="description">${element.descricao}</p>
                        <small class="category">${element.categoria}</small>
                        <aside class="price">
                            <p>R$ ${element.preco}</p>
                            <div>
                            <img src='./src/img/Cart--image.png' alt = 'Carrinho de compras'>
                            <button class="addCart">Adicionar ao Carrinho</button>
                            </div>
                        </aside>
                    </article>
                `
                document.querySelector(".showCase").appendChild(productCard)
            });
    }
}
export {showCase}