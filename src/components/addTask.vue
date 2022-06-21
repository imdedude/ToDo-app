<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add new TASK</div>
      <q-space></q-space>
      <q-btn v-close-popup icon="close" dense rounded></q-btn>
    </q-card-section>

    <q-card-section class="q-pt-none" style="height: 250px; width: 350px">
      <q-input
        outlined
        v-model="taskToSubmit.name"
        label="Name"
        :rules="[val => !!val || 'Field is required']"
        ref="name"
      />
      <q-input
        outlined
        v-model="taskToSubmit.dueDate"
        label="Due Date"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale" style="height: 500px">
              <q-date v-model="taskToSubmit.dueDate">
                <div class="row items-center justify-end">
                  <q-btn
                    v-close-popup
                    label="Submit"
                    flat
                  />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

       <q-input
         outlined
         v-model="taskToSubmit.dueTime"
         label="Due Time"
       >
        <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-time v-model="taskToSubmit.dueTime">
                <div class="row items-center justify-end">
                  <q-btn
                    v-close-popup
                    label="Submit"
                    flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn
        @click="submitForm"
        flat
        label="Save"
        color="primary" v-close-popup/>
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapActions} from "vuex";

export default {
  data() {
    return {
      taskToSubmit: {
        name: '',
        dueDate: '',
        dueTime: ''
      }
    }
  },
  methods: {
    ...mapActions('tasks',['addTask']),
    submitForm() {
      this.$refs.name.validate()
      this.submitTask()
    },
    submitTask(){
      this.addTask(this.taskToSubmit)
    }
  }
}

</script>
