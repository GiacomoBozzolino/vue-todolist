const { createApp } = Vue

createApp({
    data() {
      return {
        tasks:[
            { text: 'Comprare una valigia',
            done: false

            },
            { text: 'Lavare la macchina',
            done: false

            },
            { text: 'Preparare lo zaino',
            done: false

            },
            { text: 'Controllare la carica delle batterie',
            done: false

            },
            { text: 'Mettere la macchina fotografica nello zaino',
            done: false

            },
            { text: 'Telefonare all\'hotel',
            done: false

            },
            { text: 'Fare il pieno alla macchina',
            done: false

            },


        ],




        
      }
    }
  }).mount('#app')