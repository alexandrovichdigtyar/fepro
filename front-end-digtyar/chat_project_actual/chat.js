export default initChat;


const chatWindow = document.getElementById('chat-window');
const logoutButton = document.getElementById('logout-button')
const btnEnter = document.getElementById('button-enter')
const inputMsg = document.getElementById('input-massage');
const checkBoxReconnect = document.getElementById('scales');
const usersWindow = document.getElementById('postItemsInUsersTemplate');

function initChat(){
    checkLocalStorage();

    let socket = new WebSocket("wss://fep-app.herokuapp.com/");

    initConnection()
    function initConnection(){
        socket = new WebSocket("wss://fep-app.herokuapp.com/");

        socket.onopen = function (event){
           let parsedMasseges = JSON.parse(localStorage.getItem('messages'));
            if( parsedMasseges.length == 0){
                sendMessage(event.target,"connected");    
            }
        }
           
        socket.onclose = () => {
            if(checkBoxReconnect.checked){
                socket = null;
                setTimeout(initConnection, 5000)
            }
            console.log("close");
        } 
        socket.onmessage = (event) => {
        
            const {payload} = JSON.parse(event.data);
          
            showMessage(payload);
            
            let dataMessages = JSON.parse(localStorage.getItem('messages'));
            let uniqueUsers = getUniqueUsers(dataMessages);

            checkForNewUser(uniqueUsers,payload)
            dataMessages.push(payload); 
            
            localStorage.setItem('messages', JSON.stringify(dataMessages));
        }
    }

    function onBtnEnterClick() {
        if(!inputMsg.value.trim() == ""){
            sendMessage(socket, inputMsg.value);
        }
        makeClearInput();
    }
    
    function showMessage(payload) {
        let html = postItemsInTemplate.innerHTML
            .replace("{{name}}", payload.username)
            .replace("{{massage}}", payload.message)
    
        massages.insertAdjacentHTML("beforeend", html);
        
    }

    function sendMessage(socket, msg){
       
        socket.send(JSON.stringify({
            type: "message",
            payload: {
                username: `${localStorage.login}`,
                message: `${msg}`
            }
        }))
      
    }
    
    function checkLocalStorage(){
        if(localStorage.getItem('messages')){
            let messages = JSON.parse(localStorage.getItem('messages'));
            messages.forEach(element => {
                showMessage(element)
            });
            indicateUsers(messages);
        }else{
            localStorage.setItem('messages', JSON.stringify([]));
        }
    }
    
    function logout() {
        localStorage.clear();
        document.location.reload();
    }
    
    function makeClearInput() {
        inputMsg.value = "";
    }

    function showUser(user){ 
        let html = usersWindow.innerHTML
        .replace("{{user}}", user)

        users.insertAdjacentHTML("beforeend", html)
    }

   function indicateUsers(messages){
    let users = getUniqueUsers(messages)
        for(let i = 0; i < users.length; i ++){
            showUser(users[i])
        }
    }
    
    function checkForNewUser(uniqueUsers,payload){
        if(!uniqueUsers.includes(payload.username)){
            showUser(payload.username)
        }
    }

    function getUniqueUsers(messages){
        let users = [];
        for(let i = 0; i < messages.length; i++){
            users.push(messages[i].username)
        }
        users = [...new Set(users)]
        return users;
    }

    logoutButton.addEventListener('click', logout);
    btnEnter.addEventListener('click', onBtnEnterClick);
}
