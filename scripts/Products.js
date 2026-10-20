import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = `<ul>`

    for (const product of products) {
        html += `<li>${product.title}</li>`
    }

    html += `</ul>`

    return html
}
document.addEventListener("click",
    (clickEvent) => {
        const itemClicked = clickEvent.target 

        if (itemClicked.dataset.type === "product") {
            const productId = parseInt(itemClicked.dataset.id)
            for (const product of products) {
                if (product.id === productId) {
                    const message = product.name + "costs $" + product.price 
                    window.alert(message)
                }
            }
        }
    })


