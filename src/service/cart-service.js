const addCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let index = cart.findIndex((item) => item.product.id === product.product.id);
    if (index === -1) {
        cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
};

const getCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
}


export default {
    addCart,
    getCart
};
