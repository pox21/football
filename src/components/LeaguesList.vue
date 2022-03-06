<template>
  <ul class="list">
    <ListItem v-for="post in posts" :key="post.id" :post="post" />
  </ul>
</template>

<script>
import ListItem from "./PostItem.vue";

export default {
  props: ["posts"],
  components: {
    ListItem,
  },
};
</script>

<style lang="scss" scoped>
.list {
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
}
</style>
