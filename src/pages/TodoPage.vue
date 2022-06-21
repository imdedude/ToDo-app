<template>
  <q-page padding>
    <q-list
      bordered separator
      v-if="Object.keys(tasks).length"
    >
      <task
        v-for="(task,key) in tasks"
        :id="key"
        :task="task"
      ></task>
    </q-list>

    <div class="absolute-bottom q-mb-lg text-center">
      <q-btn
        @click="alert = true"
        size="25px"
        color="green"
        dense
        rounded
        icon="add"
      />
    </div>
    <q-dialog v-model="alert">
      <add-task/>
    </q-dialog>
  </q-page>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      alert: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    'task': require('components/Task.vue').default,
    'add-task': require('components/addTask.vue').default
  },

}
</script>

<style>

.text-through {
  text-decoration: line-through
}

</style>

