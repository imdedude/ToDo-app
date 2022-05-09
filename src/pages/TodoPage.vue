<template>
  <q-page padding>
  <ul>
    <task
      v-for="(task,index) in tasks"
          :task="task"
          :index="index"
          :deleteTask="deleteTask"
          :key="id"
    >
    </task>
  </ul>
  </q-page>
</template>

<script>

export default {
    data() {
      return {
        tasks: [
          {
            id: 1,
            name: "Get bananas",
            dueDate: '2019-05-02',
            dueTime: '18:30'
          },
          {
            id: 2,
            name: "Get apples",
            dueDate: '2019-05-02',
            dueTime: '18:30'
          },
          {
            id: 3,
            name: "Go to shop",
            dueDate: '2019-05-02',
            dueTime: '18:30'
          },

        ]
      }
    },
  methods: {
      deleteTask(index){
        this.tasks.splice(index,1)
      }
  },
  components: {
      'task' : require('components/Task.vue').default
  }
}
</script>

<style>

</style>
