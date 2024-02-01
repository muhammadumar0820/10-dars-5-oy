function createRow(phone, index){
    return `
        <tr data-id = 'data_${phone.id}'>
            <th scope="row">${index}</th>
            <td>
                <span class="text-primary" style='cursor: pointer'>${phone.name}</span>
            </td>
            <td>${phone.price}</td>
            <td>${phone.description}</td>
            <td>
                <span class="text-danger" style="cursor: pointer">delete</span>
                <span class="text-info" style="cursor: pointer">update</span>
            </td>
        </tr>

    `;
}

function validate(name, price){
    if(!name.value){
        alert("Nomi kamida 3 ta belgidan tashkil topishi kerak");
        name.focus();
        return false;
    }

    if(name.value.trim().length < 3){
        alert("Nomini kiritish kerak");
        name.focus();
        return false;
    }


    if(!price.value){
        alert("Narxini kiritish kerak");
        price.focus();
        return false;
    }

    if(price.value <= 0){
        alert("Narx manfiy bo'lishi kerak emas");
        price.focus();
        return false;
    }

    if(!Number(price.value)){
        alert("Narx raqamlarda kiritilishi kerak");
        price.focus();
        return false;
    }

    return true;
}

export{createRow, validate}