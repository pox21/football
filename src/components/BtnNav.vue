<template>
  <router-link :to="{ name: linkName }" class="nav__btn">
    {{ text }}
  </router-link>
</template>
<script>
export default {
  props: ["text", "linkName"],
};
</script>
<style lang="scss">
.nav__btn {
  padding: 0;
  border: none;
  background-color: transparent;
  position: relative;
  color: inherit;
  font-weight: 600;
  font-size: 21px;
  transition: color 0.3s ease-in-out;
  outline: none;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #c3e98d;
    position: absolute;
    bottom: -7px;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover,
  &:focus {
    color: #c3e98d;
    text-shadow: 0 0 10px #c3e98d;
    &::after {
      transform: scaleX(1);
    }
  }

  &_active {
    color: #c3e98d;
    &::after {
      transform: scaleX(1);
    }
  }
}
</style>
