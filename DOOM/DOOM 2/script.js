document.addEventListener('DOMContentLoaded', function(params) {
    const contentDiv = document.getElementById('content');
    const title = document.createElement('h1');
    title.textContent = 'Hello World!!';
    
    const img1 = document.createElement('img');
    img1.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Porsche_992_GT3_1X7A0323.jpg/800px-Porsche_992_GT3_1X7A0323.jpg';
    img1.alt = 'Porsche';

    const img2 = document.createElement('img');
    img2.src = 'https://autos93.com/cdn/shop/products/image_c5853f88-e2e2-4b68-83c0-ac09795513c6_4032x.heic?v=1679172674';
    img2.alt = 'Bmw';

    const text = document.createElement('p');
    text.textContent = 'This is a text'

    const button = document.createElement('button');
    button.textContent = 'Enviar'

    contentDiv.appendChild(title);
    contentDiv.appendChild(img1);
    contentDiv.appendChild(img2);
    contentDiv.appendChild(text);
    contentDiv.appendChild(button);

})