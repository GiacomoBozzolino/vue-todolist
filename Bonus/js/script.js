const { createApp } = Vue

createApp({
    data() {
      return {
       
        newTask : '',
        tasks:[
            { text: 'Comprare una valigia',
            done: false,
            edit:false

            },
            { text: 'Lavare la macchina',
            done: true,
            edit:false

            },
            { text: 'Preparare lo zaino',
            done: false,
            edit:false

            },
            { text: 'Controllare la carica delle batterie',
            done: true,
            edit:false

            },
            { text: 'Mettere la macchina fotografica nello zaino',
            done: true,
            edit:false

            },
            { text: 'Telefonare all\'hotel',
            done: false,
            edit:false

            },
            { text: 'Fare il pieno alla macchina',
            done: false,
            edit:false
            },
        ],
      }
    },
    methods: {
      // funzione cambiamento stato task
      taskDone(index){
        this.tasks[index].done=!this.tasks[index].done
      },
      // funzione cancellazione task
      delateTask(index){
        this.tasks.splice(index,1)
        console.log(this.tasks.slice)
      },
      // funzione aggiunta nuova task
      addNewTask(newTask){
        let obj = {
            text: newTask,
            done: false,
        }
        this.tasks.push(obj)
        this.newTask=''
        console.log(newTask)
      },

      // funzione modifica task
      editTask(index){
        this.tasks[index].edit=!this.tasks[index].edit

      }
    },
  }).mount('#app')