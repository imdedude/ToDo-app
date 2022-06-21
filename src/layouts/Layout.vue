<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-positive" >
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Awesome TODO :)
        </q-toolbar-title>

      </q-toolbar>
    </q-header>
    <q-footer>
        <q-tabs
      >
          <q-route-tab
          v-for="link in navs"
          :key="link.title"
          v-bind="link"
          :label="link.title"
          class="bg-positive"
          />
      </q-tabs>
    </q-footer>
    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="600"
      show-if-above
      bordered
      class="bg-positive"
    >
      <q-list dark>
        <q-item-label
          header
        >
          Navigation
        </q-item-label>

        <Navs
          v-for="link in navs"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Navs from 'components/Navs.vue'

const linksList = [
  {
    title: 'ToDo',
    icon: 'list',
    to: '/'
  },
  {
    title: 'Settings',
    icon: 'settings',
    to: '/settings'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    Navs
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      navs: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style>
@media screen and (min-width: 600px) {
  .q-footer {
    display:none
  }
  .q-drawer .q-router-link--exact-active {
    color: white;
  }
}
</style>
