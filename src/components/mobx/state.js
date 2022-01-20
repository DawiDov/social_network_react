
export let store = {
  _state: {
    nav: {
        navList:[
            {title: 'Profile', link: '/profile'},
            {title: 'Messages', link: '/dialogs'},
            {title: 'News', link: '/news'},
            {title: 'Music', link: '/music'},
            {title: 'Settings', link: '/settings'},
          ],
    },
    dialogs: {
        userData:[
            {id:1, name: "Увася"},
            {id:2, name: "Петя"},
            {id:3, name: "Миха"},
            {id:4, name: "Паха"},
            {id:5, name: "Ира"},
            {id:6, name: "Таня"},
          ],
        messageData: [
            {id:1, message: "Yo"},
            {id:2, message: "Hi"},
            {id:3, message: "How are you?"},
            {id:4, message: "norm =)"},
            {id:5, message: "zaebys"},
            {id:6, message: "horosho"},
          ],
    },
    profile: {
        newPostText: " ",
        posts: [
            {name: 'Artur', like: 25, message: 'Привед Медвед'},
            {name: 'Artur', like: 12, message: 'Врот мне ноги'},
            {name: 'Artur', like: 2, message: 'Удаффф'},
            {name: 'Artur', like: 10, message: 'УпячГа'},
            {name: 'Artur', like: 13, message: 'Креведко'},
            {name: 'Artur', like: 19, message: 'Кто тут папа?'},
          ],
    },
    sidebar: {
      friends: [
      {name: 'Алла', link:'/listFriends/alla' ,ava: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3'},
      {name: 'Петька', link:'/listFriends/petya' ,ava: 'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg'},
      {name: 'Вазген', link:'/listFriends/vazgen' ,ava: 'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg'},
      {name: 'Таня', link:'/listFriends/tanya' ,ava: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3'},
      {name: 'Паха', link:'/listFriends/paha' ,ava: 'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg'},
      {name: 'Инга', link:'/listFriends/inga' ,ava: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3'},
      ]
    } 
  },
  getState() {
    return this._state
  },
  addPost() {
    let stateItem = {
      name: 'Artur' , like: '25', message: this._state.profile.newPostText } 
      this._state.profile.posts.unshift(stateItem)
      this._state.profile.newPostText = '';
      this.observer._callSuscriber(this._state); 
  },
  updateNewPostText(newText) {
    this._state.profile.newPostText = newText;  
    this.observer._callSuscriber(this._state);
  },
  removePost(post) {
    this._state.profile.posts.splice(post, 1)
    this.observer._callSuscriber(this._state);
  },
  _callSuscriber() {
    console.log("The function not redefined")
  },
  subscribe(observer) {
    this.observer._callSuscriber = observer
  },
};

window.store = store;