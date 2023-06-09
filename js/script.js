const { createApp } = Vue

createApp({
    data() {
      return {
        tasks:[
            { text: 'Comprare una valigia',
            done: false

            },
            { text: 'Lavare la macchina',
            done: true

            },
            { text: 'Preparare lo zaino',
            done: false

            },
            { text: 'Controllare la carica delle batterie',
            done: true

            },
            { text: 'Mettere la macchina fotografica nello zaino',
            done: true

            },
            { text: 'Telefonare all\'hotel',
            done: false

            },
            { text: 'Fare il pieno alla macchina',
            done: false

            },


        ],
      }
    },
    methods: {
      taskDone(index){
        this.tasks[index].done=!this.tasks[index].done
      },
      delateTask(index){
        this.tasks.splice(index,1)
        console.log(this.tasks.slice)
      }
    },
  }).mount('#app')