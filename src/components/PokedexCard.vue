<template>
  <q-card class="poke-card" v-if="!isFetching">
    <q-card-section>
      <img :src="pokemon.sprites.front_default" class="poke-icon" />
      <div class="text-caption caption-text">#{{ this.padId(pokemon.id) }}</div>
      <div class="text-h5">{{ formatName(name) }}</div>
      <div class="row q-gutter-xs">
        <div v-for="(slot, index) in pokemon.types" :key="index">
          <q-badge
            rounded
            align="middle"
            class="type-badge justify-center items-center"
            :label="$t(`types.${slot.type.name}`)"
            :class="slot.type.name"
          />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: ["name", "url"],
  data() {
    return {
      pokemon: {},
      isFetching: true,
    };
  },
  methods: {
    async getPokeData() {
      try {
        const res = await this.$axios.get(this.url);
        this.pokemon = res.data;
        this.isFetching = false;
      } catch (error) {
        console.log(error);
      }
    },
    padId(id) {
      return String(id).padStart(3, 0);
    },
    formatName(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
  },
  async created() {
    await this.getPokeData();
  },
};
</script>

<style lang="scss" scoped>
.poke-card {
  width: 170px;
  margin: 20px;
}

.poke-icon {
  width: 100%;
}

.type-badge {
  width: 50px;
}
</style>
