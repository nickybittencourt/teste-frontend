<template>
  <div class="flex main-logo-container justify-center items-center">
    <img src="../assets/pokemon-main-logo.png" class="main-logo" />
  </div>
  <div class="flex input-container justify-center items-center">
    <q-input
      rounded
      outlined
      v-model="searchTerm"
      :label="$t('search')"
      class="search-input"
    />
  </div>
  <div class="q-gutter-xs flex flex-center buttons-wrapper">
    <div v-for="(type, index) in types" :key="index">
      <q-btn
        rounded
        text-color="white"
        class="type-badge justify-center items-center"
        :label="$t(`types.${type}`)"
        :class="type"
        @click="filterByType(type, $event)"
      />
    </div>
  </div>
  <q-page class="flex justify-center items-start" v-if="!isFetching">
    <div
      v-for="pokemonCard in filteredPokemon"
      :key="pokemonCard.name"
      class="pokemon-list"
    >
      <PokedexCard
        class="poke-card"
        :name="pokemonCard.name"
        :url="pokemonCard.url"
        @click="toPokemonProfile(pokemonCard.name, pokemonCard.url)"
      ></PokedexCard>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import PokedexCard from "../components/PokedexCard.vue";

export default defineComponent({
  name: "IndexPage",
  components: { PokedexCard },
  data() {
    return {
      pokemon: [],
      isFetching: true,
      searchTerm: "",
      types: [
        "grass",
        "poison",
        "fire",
        "flying",
        "water",
        "bug",
        "normal",
        "electric",
        "ground",
        "fairy",
        "fighting",
        "psychic",
        "steel",
        "ice",
        "ghost",
        "dragon",
        "rock",
      ],
      selectedType: "",
      pokemonOfType: [],
    };
  },
  computed: {
    filteredPokemon() {
      if (!this.searchTerm.trim() && this.pokemonOfType.length === 0)
        return this.pokemon;

      if (!this.searchTerm.trim())
        return this.pokemon.filter((item) =>
          this.pokemonOfType.includes(item.name)
        );

      if (this.pokemonOfType.length === 0)
        return this.pokemon.filter((item) =>
          item.name.toLowerCase().includes(this.searchTerm.trim().toLowerCase())
        );

      const filteredPokemon = this.pokemon
        .filter((item) =>
          item.name.toLowerCase().includes(this.searchTerm.trim().toLowerCase())
        )
        .filter((item) => this.pokemonOfType.includes(item.name));
      return filteredPokemon;
    },
  },
  methods: {
    async getAllPokemon() {
      this.$q.loading.show();
      try {
        const res = await this.$api.get("pokemon?limit=151");
        this.pokemon = res.data.results;
        this.isFetching = false;
        this.$q.loading.hide();
      } catch (error) {
        console.log(error);
      }
    },
    toPokemonProfile(name) {
      this.$router.push(`/pokemon/${name}`);
    },
    async filterByType(type, e) {
      console.log(e.target.className);
      if (this.selectedType === type) {
        this.selectedType = 0;
        this.pokemonOfType = [];
        return;
      }

      this.selectedType = type;
      this.$q.loading.show();
      try {
        const res = await this.$api.get(`type/${type}`);
        this.pokemonOfType = res.data.pokemon.map(
          (pokemon) => pokemon.pokemon.name
        );
        this.$q.loading.hide();
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    await this.getAllPokemon();
  },
});
</script>

<style lang="scss" scoped>
.main-logo-container {
  margin: auto;
}

.main-logo {
  margin: auto;
  max-height: 200px;
}
.input-container {
  margin: auto;
}

.search-input {
  width: 30vw;
}

.pokemon-list {
  margin-top: 10px;
}

.buttons-wrapper {
  margin-top: 2%;
}

.poke-card:hover {
  border: 2px solid $primary;
}

.selected {
  border: 3px solid $secondary;
}
</style>
