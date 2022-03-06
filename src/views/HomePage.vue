<template>
  <Header v-model:posts="posts" />
  <main class="main">
    <div class="container">
      <form-search v-model:filterPosts="filterPosts" />
      <preloader v-if="loadPosts" />
      <post-list v-else :posts="postsPaginate" />
      <base-pagination
        v-if="countPosts"
        v-model:page="page"
        :count="countPosts"
        :per-page="postsPerPage"
      />
    </div>
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import Preloader from "../components/Preloader.vue";
import FormSearch from "../components/FormSearch.vue";
import PostList from "../components/PostList.vue";
import BasePagination from "../components/BasePagination.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      posts: [],
      countPosts: 0,
      loadPosts: false,
      page: 1,
      postsPerPage: 9,

      filterPosts: "",
    };
  },
  methods: {
    ...mapActions(["apiCompetitions", "apiTeams"]),
    getPosts() {
      switch (this.$route.name) {
        case "competitions":
          this.posts = this.getCompetitions.length
            ? this.getCompetitions
            : this.apiCompetitions();
          break;
        case "teams":
          this.posts = this.getTeams.length ? this.getTeams : this.apiTeams();
          break;
        case "Home":
          this.posts = [];
          this.loadPosts = false;
          break;
        default:
          console.log(this.$route, ": default");
          break;
      }
    },
    filter() {
      if (this.filterPosts.length > 2) {
        const arr = this.posts.filter((item) =>
          item.name.toLowerCase().includes(this.filterPosts.toLowerCase())
        );
        if (arr.length) {
          this.posts = arr;
        }
      } else {
        this.getPosts();
      }
    },
  },
  components: {
    PostList,
    Header,
    FormSearch,
    BasePagination,
    Preloader,
  },
  computed: {
    ...mapGetters(["getCompetitions", "getTeams"]),
    postsPaginate() {
      const offset = (this.page - 1) * this.postsPerPage;
      return this.posts.length > 0
        ? this.posts.slice(offset, offset + this.postsPerPage)
        : [];
    },
  },
  watch: {
    posts() {
      if (this.posts.length) {
        this.loadPosts = false;
        this.page = 1;
        this.countPosts = this.posts.length;
      } else {
        this.loadPosts = this.$route.name !== "Home" || false;
        this.countPosts = 0;
      }
    },
    filterPosts() {
      this.filter();
    },
    "$route.name": {
      handler() {
        this.getPosts();
      },
      immediate: true,
    },
  },
};
</script>
