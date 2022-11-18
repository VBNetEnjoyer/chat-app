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
                    username: "Admin",
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
                        0
                    ],
                    userChats: [
                        Date.now()
                    ]
                },
            ],
            chats: [
                {
                    id: 2224,
                    messages:[
                        {
                            ownerId: 0,
                            body: "test",
                            date: Date.now(),
                        },
                        {
                            ownerId: 1,
                            body: "test",
                            date: Date.now()+1,
                        },
                    ]
                }
            ],

            
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

    function createNewChat(firstUserId, secondUserId){
        let newChat = {
            id: Date.now(),
            messages: [],
        }
        data.chats.push(newChat);
        getUserById(firstUserId).userChats.push(newChat.id);
        getUserById(secondUserId).userChats.push(newChat.id);
    }

    function updateLocalStorage(){
        localStorage.setItem(KEY_FOR_LOCAL_STORAGE, JSON.stringify(data))
    }

    return{
        data,
        addMessage,
        getUserById,
        getChatById
    }

})();