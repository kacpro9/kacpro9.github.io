console.log("Pobieranie uzytkownika");

let btnGetUser = document.getElementById('get-user');

const getUser = () => {

    let divDp = document.getElementById('dane-programisty');
    divDp.innerHTML = '';

    fetch(`https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php`, {
        mode: 'cors',
        method: 'GET',
    }).then(res => res.json()).then(resJSON => {
            console.log(resJSON);

            divDp.innerText = resJSON.imie;
           
    }).catch((error) => {
            console.error('Error', error);
        });

}
btnGetUser.addEventListener('click', getUser);