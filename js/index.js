import { createRow, validate } from "./function.js";

const wrapper = document.getElementById('wrapper');
const button = document.getElementById('button');
const name = document.getElementById('name');
const price = document.getElementById('price');
const describtion = document.getElementById('describtion');
const form = document.getElementById('form');

document.addEventListener('DOMContentLoaded', function(){
    fetch("https://auth-rg69.onrender.com/api/products/all", {
        method: "GET"
    })
        .then((res) => res.json())
        .then(data => {
            if (data.length){
                data.forEach((phone, index) => {
                    let card = createRow(phone, index + 1);
                    wrapper.innerHTML += card;
                });


                const deleteButtons = document.querySelectorAll('span.text-danger');
                if(deleteButtons.length) {
                    deleteButtons.forEach(del => {
                        del && del.addEventListener('click', function(){
                            let id = this?.parentNode.parentNode?.getAttribute('data-id').substring(5);
                            if (id) {
                                let isDelete = confirm('Rostdan ham ushbu malumotni ochirmoqchimisz ?')
                                if (isDelete) {
                                    fetch(`https://auth-rg69.onrender.com/api/products/${id}`, {
                                        method: "DELETE"
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            if (data.message == "Mahsulot muvaffaqiyatli o'chirildi"){
                                                window.location.reload();
                                            }
                                        })
                                        .catch(err => {
                                            console.log(err);
                                        })
                                }
                            }
                        })
                    })
                }
                const nameList = document.querySelectorAll('span.text-primary');
                if (nameList.length) {
                    nameList.forEach(item => {
                        item && item.addEventListener('click', function(){
                            let id = this.parentNode.parentNode.getAttribute('data-id').substring(5);
                            if(id){
                                window.location.assign('http://127.0.0.1:5500/pages/info.html?id=${id}')
                            }
                        })
                    })
                }
            }
        })
        .catch(err => {
            console.log(err);
        }); 
});

button && button.addEventListener('click', function(e) {
     e.preventDefault();

     if(validate(name, price)){
        let phone = {
            name: name.value,
            price: price.value,
            describtion: describtion.value,
            status: "active",
            category_id: "2"
        }

        fetch("https://auth-rg69.onrender.com/api/products", {
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(phone)
        })
            .then(res => res.json())
            .then(data => {
                if(data.id){
                    let row = createRow(phone, wrapper.children.length+1);
                    wrapper.innerHTML += row;
                    form.reset();
                }
            })
            .catch(err => {
                console.log(err);
            })
     }
})


