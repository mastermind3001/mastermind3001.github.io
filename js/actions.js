const init = ($event) => {
    $event.preventDefault();
    let form = document.getElementsByClassName('footer__form');
    let name = document.getElementById('name');
    let address = document.getElementById('address');
    let phone = document.getElementById('phone');


    // Создаем объект XMLHttpRequest
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "/api/users");

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(JSON.stringify({
        name: "John Doe" + name.value,
        address: "Coruscant " + address.value,
        phone: "R2D2 " + phone.value,

    }));

    window.alert("Спасибо за заказ");
    console.log({
        name: "John Doe" + name.value,
        address: "Coruscant " + address.value,
        phone: "R2D2 " + phone.value,

    });
    form.item(0).reset();
}

document.getElementById('send').addEventListener('click', init);
