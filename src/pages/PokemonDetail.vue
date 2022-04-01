<template>
  <div class="wrapper flex">
    <q-card class="flex-center poke-card" v-if="!isFetching">
      <q-card-section>
        <div class="text-h3 flex flex-center">
          {{ formatName(name) }}
          <span class="caption-text"> #{{ this.padId(pokemon.id) }}</span>
        </div>
        <div class="q-gutter-xs flex flex-center">
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

      <div class="flex flex-center">
        <img
          :src="pokemon.sprites.other['official-artwork'].front_default"
          class="poke-icon"
        />
      </div>
    </q-card>

    <q-card
      class="flex-center poke-stats-card"
      :class="pokemon.types[0].type.name"
      v-if="!isFetching"
    >
      <q-card-section class="stat-section">
        <div class="flex flex-center">
          <div class="poke-height-weight">
            <p class="text-h4 stat-title">{{ $t("height") }}</p>
            <p class="text-h6 stat">{{ $n(convertedHeight, "height") }}</p>
          </div>
          <div class="poke-height-weight">
            <p class="text-h4 stat-title">{{ $t("weight") }}</p>
            <p class="text-h6 stat">{{ $n(convertedWeight, "weight") }}</p>
          </div>
        </div>
      </q-card-section>
      <!-- <q-card-section class="stat-section">
        <div class="flex flex-center">
          <div class="poke-height-weight">
            <p class="text-h4 stat-title">{{ $t("abilities") }}</p>
            <div
              v-for="(slot, index) in pokemon.abilities"
              :key="index"
              class="stat-wrapper"
            >
              <p class="text-h6 stat">{{ slot.ability.name }}</p>
            </div>
          </div>
        </div>
      </q-card-section> -->
      <q-card-section class="q-pa-md stat-section">
        <div class="flex-center">
          <div class="poke-height-weight">
            <p class="text-h4 stat-title">{{ $t("baseStats") }}</p>
          </div>
          <div class="row justify-center">
            <div
              v-for="(slot, index) in pokemon.stats"
              :key="index"
              class="col-6 base-stat text-h6"
            >
              <span class="stat-title">{{ $t(slot.stat.name) }}: </span>
              {{ slot.base_stat }}
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {
      pokemon: {},
      isFetching: true,
    };
  },
  methods: {
    async getPokeData() {
      try {
        const res = await this.$api.get(`/pokemon/${this.name}`);
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
  computed: {
    convertedHeight() {
      switch (this.$i18n.locale) {
        case "pt-BR":
          return this.pokemon.height / 10;
          break;
        case "en-US":
          return this.pokemon.height / 3.048;
          break;
        default:
          return this.pokemon.height;
          break;
      }
    },
    convertedWeight() {
      switch (this.$i18n.locale) {
        case "pt-BR":
          return this.pokemon.weight / 10;
          break;
        case "en-US":
          return this.pokemon.weight / 4.536;
          break;
        default:
          return this.pokemon.height;
          break;
      }
    },
  },
  async created() {
    await this.getPokeData();
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-image: url(../assets/pokemon-background.jpeg);
  height: 115vh;
}
.type-badge {
  margin-top: 15%;
  width: 100px;
  font-size: 13px;
}

.poke-card {
  margin: auto;
  margin-top: 3%;
  width: 80%;
  max-width: 800px;
  background-color: #e1e7e7e9;
}

.poke-icon {
  width: 40vw;
  max-width: 400px;
}

.poke-stats-card {
  margin: auto;
  margin-top: 0%;
  width: 80%;
  max-width: 800px;
}

.poke-height-weight {
  margin: 5%;
  margin-top: 1%;
  color: white;
  text-align: center;
}

.stat-title {
  color: white;
  font-weight: 700;
}

.stat {
  color: black;
}

.base-stat {
  text-align: center;
}
</style>
