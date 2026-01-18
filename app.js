const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input"); //맨처음 태크를 사용
const greeting = document.querySelector("#greeting");

const string_username = "username";


const logout = document.querySelector("#logout_form input");  


function onLoginSubmit(event){
    event.preventDefault();

    const username= loginInput.value;

    if(username !==null){

        localStorage.setItem(string_username, username);

        loginForm.classList.add("hidden");

        greeting.innerText = `환영합니다! ${username}`;

        greeting.classList.remove("hidden");

        logout.classList.remove("hidden");
    }



}

loginForm.addEventListener("submit", onLoginSubmit);



//const savedUsername = localStorage.getItem(string_username);
// const savedUsername = username 을 할 경우 어떻게 되는가?
// savedUsername == loginInput.value가 되므로 이름이 미리 저장되어있기만 할 경우 틀리게 나온다.


function onLogoutSubmit(event){


    event.preventDefault();
    localStorage.removeItem(string_username);

    loginInput.value ="";
    greeting.innerText="";
    greeting.classList.add("hidden");
    logout.classList.add("hidden");
    loginForm.classList.remove("hidden");


    
}

logout.addEventListener("click", onLogoutSubmit);  //click말고 submit으로 하면 안 된다. 왜 그럴까?



if(localStorage["username"] !== undefined){


    const initialUsername = localStorage["username"]

    loginForm.classList.add("hidden");
    greeting.innerText = `환영합니다! ${initialUsername}`;
    greeting.classList.remove("hidden");
    logout.classList.remove("hidden");


} else{


    loginInput.value ="";
    greeting.innerText="";
    greeting.classList.add("hidden");
    logout.classList.add("hidden");
    loginForm.classList.remove("hidden");

}