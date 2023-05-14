let theme = localStorage.getItem('data-theme');

const changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark") // set theme to dark
    localStorage.setItem("data-theme", "dark") // save theme to local storage
}

const changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light") // set theme light
    localStorage.setItem("data-theme", 'light') // save theme to local storage
}

const checkbox = document.getElementById("switch");
// Apply retrived them to the website
checkbox.addEventListener('click', () => {
    let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage
    if (theme ==='dark'){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }   
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const user_name = urlParams.get('user_name');

if(user_name){
    localStorage.setItem('user_name',user_name);
}
let user = localStorage.getItem('user_name');

const heading=document.querySelector('h1');

heading.innerHTML= `Hello ${user}`;

