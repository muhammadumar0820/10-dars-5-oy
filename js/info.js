const name = document.getElementById('name');
const price = document.getElementById('price');
const description = document.getElementById('descripton');

document.addEventListener('DOMContentLoaded', function(){
    let id = window.location.href.substring(window.location.href.search('id=') + 3);
    if(window.location.href.search('id=') > 0){
        fetch(`https://auth-rg69.onrender.com/api/products${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.id){
                    name.innerHTML = data.name,
                    price.innerHTML = data.price,
                    description.innerHTML = data.description
                }
            })
            .catch(err => {
                console.log(err);
            })
    }else{
        window.location.assign('http://127.0.0.1:5500/index.html')
    }
})