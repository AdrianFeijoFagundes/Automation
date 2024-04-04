const username = document.querySelector('#name');
const local = document.querySelector('#local');
const item = document.querySelector('#item');
const itemValue = document.querySelector('#value');


const recordValue = (event) => {
    event.preventDefault();


    const data = {
        data: [
            {
                'id': "INCREMENT",
                'nome': username.value,
                'aonde foi?': local.value,
                'o que foi?': item.value, 
                'valor': itemValue.value,
                'data': "DATETIME"
            }
        ]
    };

    fetch('https://sheetdb.io/api/v1/eat6lwcbrd5yp', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        alert('Registrado com sucesso')
        console.log(data)
    });

    username.value = ''
    local.value = ''
    item.value = ''
    itemValue.value = ''

}

document.querySelector('#main-form').addEventListener('submit', recordValue)
