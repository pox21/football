<template>
  <li class="item">
    <router-link
      :to="{ name: `${$route.name}item`, params: { id: post.id } }"
      class="header__info"
    >
      <h2 class="item__title">
        {{ post.name }}
      </h2>
      <div class="item__wrapper">
        <span class="item__code">{{ post.area.countryCode }}</span>
        <span class="item__area">{{ post.area.name }}</span>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style lang="scss" scoped>
.item {
  height: 150px;
  border: 1px solid #5ba57a50;
  box-shadow: 0 0 10px #5ba57a;
  border-radius: 10px;
  line-height: 1;
  font-weight: 600;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
    border-color 0.3s ease-in-out;

  a {
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    border-color: #000;
    box-shadow: inset 0 0 10px #5ba57a, 0 0 10px #000;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  &__title {
    font-size: 20px;
    line-height: 1.3;
    text-align: center;
    margin: 0;
  }
}
</style>
