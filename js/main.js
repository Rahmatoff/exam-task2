const url= 'https://fakestoreapi.com/products';

(async()=>{
    try{
        const RESPONSE = await fetch(url);
        const DATA = await RESPONSE.json();
        render(DATA);
    }
    catch(error){
        console.log(error);
    }
})()

const cards = document.getElementById('cards');
function render(data){
    data.forEach(dataEl => {
        let img = document.createElement('img');
        img.src = dataEl.image;
        let price = document.createElement('p');
        price.innerHTML =`Price: ${dataEl.price}`;
        let desc = document.createElement('p');
        desc.innerHTML = `Desc: ${dataEl.title}`;
        let discount = document.createElement('p');
        discount.innerHTML = `Discount: ${dataEl.rating.count}` ;
        let name = document.createElement('p');
        name.innerHTML = `Name: ${dataEl.category}`; 
        let divCard = document.createElement('div');
        divCard.innerHTML = '<i class="fa fa-trash-can"></i>';
        divCard.append(img,price,discount,desc,name);
        cards.append(divCard);
    });

}

        



 
