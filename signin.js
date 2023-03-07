const emailEl = document.getElementById("email");
const passEl = document.getElementById("password");
const btnEl = document.getElementById("submitBtn");

btnEl.addEventListener('click', () => {
    const email = emailEl.value;
    const pass = passEl.value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[];
    
    if(user_records.some((v) => {return v.email==email && v.pass==pass})){
        const current_user = user_records.filter((v) => {return v.email==email && v.pass==pass})[0];
        localStorage.setItem('name', current_user.name);
        localStorage.setItem('email', current_user.email);
        alert('login pass');
        window.open('./profile.html');
    } else {
        alert('login fail')
    }
})