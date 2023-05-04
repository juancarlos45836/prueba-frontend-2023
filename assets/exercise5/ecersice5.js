
const API = 'https://jsonplaceholder.typicode.com/users';
const box = null || document.getElementById('box');



function fetchData(urlApi) {
    return fetch(urlApi);
}

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const users = await fetchData(API);
        users.map((user,index) => {
            let button = document.createElement('button');
            button.classList.add('button');
            button.setAttribute('id',user.id);
            box.appendChild(button);
            button.append(user.name);
            
        });
       
    } catch (error) {
        console.log(error);
    }
})();
 





       