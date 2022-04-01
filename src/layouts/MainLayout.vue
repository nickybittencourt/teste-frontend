<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <router-link to="/">
          <q-avatar>
            <img src="../assets/pokemon-logo.png" alt="" />
          </q-avatar>
        </router-link>

        <q-toolbar-title> Pokedex </q-toolbar-title>

        <q-btn-dropdown rounded color="secondary" icon="language">
          <q-list>
            <q-item clickable v-close-popup @click="itemClick('pt-BR')">
              <q-item-section>
                <q-item-label>Português</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="itemClick('en-US')">
              <q-item-section>
                <q-item-label>English</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { usei18nStore } from "stores/i18n";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  setup() {
    const store = usei18nStore();

    return { store };
  },
  methods: {
    itemClick(language) {
      this.$i18n.locale = language;
      this.store.changeLanguage(language);
    },
  },
});
</script>
