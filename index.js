const userNameEl = document.getElementById("userName");
const emailEl = document.getElementById("email");
const passEl = document.getElementById("password");
const btnEl = document.getElementById("submitBtn");

btnEl.addEventListener('click', () => {
    const userName = userNameEl.value;
    const email = emailEl.value;
    const pass = passEl.value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[];
    
    if(user_records.some((v) => {return v.email==email})){
        alert('email is already taken, try another one!')
    } else {
        user_records.push({
            "name": userName,
            "email": email,
            "pass": pass
        });
        alert('successefully signup!');
        window.open('./signIn.html')
        const setData = localStorage.setItem('users', JSON.stringify(user_records));
    }
})