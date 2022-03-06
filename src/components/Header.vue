<template>
  <header class="header">
    <div class="container header__container">
      <a href="#" class="header__logo logo">
        <img src="img/logo.jpeg" alt="Logo" class="logo__img" />
      </a>
      <nav class="nav">
        <btn-nav
          linkName="competitions"
          @click.prevent="classChange($event.target)"
          text="Лиги"
          :class="{ nav__btn_active: className === 'Лиги' }"
        />
        <btn-nav
          linkName="teams"
          @click.prevent="classChange($event.target)"
          text="Команды"
          :class="{ nav__btn_active: className === 'Команды' }"
        />
      </nav>
    </div>
  </header>
</template>
<script>
import BtnNav from "./BtnNav.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { BtnNav },
  props: ["posts"],
  methods: {
    ...mapActions(["apiCompetitions", "apiTeams"]),
    classChange(el) {
      this.className = el.textContent;
    },
  },
  computed: {
    ...mapGetters(["getCompetitions", "getTeams"]),
  },
  data() {
    return {
      className: "",
    };
  },
  watch: {
    getTeams() {
      this.$emit("update:posts", this.getTeams);
    },
    getCompetitions() {
      this.$emit("update:posts", this.getCompetitions);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #090b10;
  box-shadow: 0 0 10px #090b10;

  &__container {
    display: flex;
    align-items: center;
    gap: 40px;
  }
}

.logo {
  width: 175px;
  height: 100px;
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:focus {
    outline: 1px solid #c3e98d;
  }
}

.nav {
  display: flex;
  align-items: center;
  gap: 40px;
}
</style>
