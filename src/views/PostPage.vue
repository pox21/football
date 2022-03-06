<template>
  <main class="main">
    <div class="container">
      <div class="table">
        <div class="row">
          <div class="row__col">Элемент</div>
          <div class="row__col">Описание</div>
          <div class="row__col">Как заполнять</div>
        </div>
        <div class="row">
          <div class="row__col">
            <form-search />
          </div>
          <div class="row__col">
            <button @click="asd"></button>
          </div>
          <div class="row__col">-</div>
        </div>
        <div class="row">
          <div class="row__col">
          </div>
          <div class="row__col"></div>
          <div class="row__col">-</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import FormSearch from "../components/FormSearch.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { FormSearch },
  methods: {
    ...mapActions(["apiCompetitionsItem", "apiTeamsItem"]),
  },
  computed: {
    ...mapGetters[("getCompetitionsItem", "getTeamsItem")],
  },
  watch: {
    "$route.params.id": {
      handler() {
        switch (this.$route.name) {
          case "competitionsitem":
            if (this.$route.params.id) {
              this.apiCompetitionsItem(this.$route.params.id);
            }
            break;
          case "teamsitem":
            this.$route.params.id
              ? this.apiTeamsItem(this.$route.params.id)
              : "";
            break;
          default:
            break;
        }
      },
      immediate: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid #18d0f4;

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &:not(:first-child) {
    border-top: none;
  }

  &__col {
    padding: 15px;
    &:nth-child(2) {
      border-left: 1px solid #18d0f4;
      border-right: 1px solid #18d0f4;
    }
  }
}
</style>
