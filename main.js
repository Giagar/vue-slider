var app = new Vue({
    el: "#root",
    data: {
        urls: [
            "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
            "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg",
        ],
        index: 0,

    },
    methods: {
        // funzione che controlla il pulsante prev
        prev: function() {
            // se sono alla prima img, index torna all'ultima immagine + una posizione (che poi verrà tolta dalla riga seguente)
            if (this.index === 0) {
                this.index = this.urls.length 
            }

            // tolgo 1 a index
            this.index--;
        },

        next: function() {
            if (this.index === (this.urls.length - 1)) {
                this.index = -1;
            }
            this.index++;
        },
    }

})

Vue.config.devtools = true;