<template>
  <q-item
        @click="updateTask({id: id, update: {completed: !task.completed
        }})"
        :class="!task.completed ? 'bg-amber-2' : 'bg-light-green-13' "
        v-ripple
        clickable>
        <q-item-section side top>
          <q-checkbox
            :modelValue="task.completed"
            class="no-pointer-events"/>
        </q-item-section>
        <q-item-section>
          <q-item-label
            :class="task.completed ? 'text-through' : ''"
          >{{task.name}}
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-icon
            name="event"
            size="20px"
          />
          <q-item-label caption>{{task.dueDate}}</q-item-label>
          <q-item-label caption>
          <small>{{task.dueTime}}</small>
          </q-item-label>
        </q-item-section>

    <q-item-section side>
      <q-btn
        @click.stop="deleteItem(id)"
        color="white"
        text-color="black"
        icon="delete"
        dense rounded
      />
    </q-item-section>
      </q-item>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['task','id'],
  methods: {
    ...mapActions('tasks',['updateTask', 'deleteTask']),
    deleteItem(id) {
      this.deleteTask(id)
    }
  },

}

</script>

<style>

</style>

