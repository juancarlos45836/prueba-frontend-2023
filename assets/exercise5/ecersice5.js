
const API = 'https://jsonplaceholder.typicode.com/users';
const box = null || document.getElementById('box');
const modal = null || document.getElementById('modal');
const wrapper = null || document.getElementById('wrapper');
const contentModal = document.getElementById('section-modal');



function fetchData(urlApi) {
    return fetch(urlApi);
}

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

function modalDataUser(user) {
    contentModal.setAttribute('style', 'display:inherit')
    const buttonClose = document.getElementById('button-close');
    buttonClose.addEventListener('click',()=> closeModal());

    const dataUser = `
        <div class="one" id="one"><p>Nombre</p></div>
        <div class="two" id="two"><p>${user.name}</p></div>
        <div class="three" id="three"><p>Nombre de Usuario</p></div>
        <div class="four" id="four"><p>${user.username}</p></div>
        <div class="five" id="five"><p>Email</p></div>
        <div class="six" id="six"><p>${user.email}</p></div>
        <div class="seven" id="seven"><p>Addres</p></div>
        <div class="eight" id="eight"><p>${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}</p></div>
        <div class="nine" id="nine"><p>Phone</p></div>
        <div class="ten" id="ten"><p>${user.phone}</p></div>
        <div class="five" id="five"><p>Web site</p></div>
        <div class="six" id="six"><p>${user.website}</p></div>
        <div class="seven" id="seven"><p>Company</p></div>
        <div class="eight" id="eight"><p>${user.company.name} ${user.company.catchPhrase}</p></div>
    `;
    wrapper.innerHTML = dataUser

}
function closeModal() {
    contentModal.setAttribute('style', 'display:none;')
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
            button.addEventListener('click',()=>modalDataUser(user));
        });
       
    } catch (error) {
        console.log(error);
    }
})();
 





       