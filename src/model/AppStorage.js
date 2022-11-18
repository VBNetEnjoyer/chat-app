export default(()=>{
    const KEY_FOR_LOCAL_STORAGE = "MMIS CHAT";

    let data = null;

    if(!localStorage.getItem(KEY_FOR_LOCAL_STORAGE)){
        data = {
            users: [
                {
                    id: 0, 
                    login: "admin",
                    password: "admin", 
                    username: "First Admin",
                    status: false, 
                    contacts: [
                        1
                    ],
                    userChats: [
                        Date.now()
                    ]
                },
                {
                    id: 1, 
                    login: "admin2", 
                    password: "admin2", 
                    username: "Second Admin",
                    status: false, 
                    contacts: [
                        0,2
                    ],
                    userChats: [
                        Date.now()
                    ]
                },
                {
                    id: 2, 
                    login: "login", 
                    password: "password", 
                    username: "Hey",
                    status: false, 
                    contacts: [
                        1
                    ],
                    userChats: [

                    ]
                },
            ],
            chats: [
                {
                    id: Date.now(),
                    messages:[],
                }
            ],
            firstPage: {
                authUserId: null
            },
            secondPage: {
                authUserId: null
            },
        };
        updateLocalStorage();
    } else {
        data = JSON.parse(localStorage.getItem(KEY_FOR_LOCAL_STORAGE)); 
    }

    function addMessage(chatId, msg){
        data.chats.filter(el => el.id === chatId)[0].messages.push(msg);
        updateLocalStorage();
    }
    function getUserById(userId){
        return data.users.filter(el => el.id === userId)[0];
    }

    function getChatById(chatId){
        return data.chats.filter(el => el.id === chatId)[0];
    }

    function getUserByLogin(login=""){
        return data.users.filter(el => el.login === login)[0];
    }

    function createNewChat(firstUserId, secondUserId){
        let newChat = {
            id: Date.now(),
            messages: [],
        }
        data.chats.push(newChat);
        getUserById(firstUserId).userChats.push(newChat.id);
        getUserById(secondUserId).userChats.push(newChat.id);
        return newChat.id
    }

    function updateLocalStorage(){
        localStorage.setItem(KEY_FOR_LOCAL_STORAGE, JSON.stringify(data))
    }

    function updateFirstPageAuth(userId=null){
        data.firstPage.authUserId = userId;
        if(userId !== null){
            getUserById(userId).status = true;
        }
        updateLocalStorage();
    }

    function updateSecondPageAuth(userId=null) {
        data.secondPage.authUserId = userId;
        if(userId !== null){
            getUserById(userId).status = true;
        }
        updateLocalStorage();
    }

    function logOutFirstPage(userId){
        updateFirstPageAuth();
        getUserById(userId).status = false;
        updateLocalStorage();
    }
    function logOutSecondPage(userId){
        updateSecondPageAuth();
        getUserById(userId).status = false;
        updateLocalStorage();
    }


    return{
        data,
        addMessage,
        getUserById,
        getChatById,
        createNewChat,
        getUserByLogin,
        updateFirstPageAuth,
        updateSecondPageAuth,
        logOutFirstPage,
        logOutSecondPage
    }

})();