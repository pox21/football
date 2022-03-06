<template>
  <form class="form-search">
    <div class="form-control">
      <label for="search">
        <span class="search__icon icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.9999 20.9999L16.6499 16.6499"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </label>
      <input
        class="form-control__input"
        type="text"
        id="search"
        placeholder="Поиск"
        v-model="filterPostsValue"
      />
    </div>
  </form>
</template>
<script>
export default {
  props: ["filterPosts"],
  data() {
    return {
      filterPostsValue: "",
    };
  },
  watch: {
    filterPostsValue() {
      this.$emit("update:filterPosts", this.filterPostsValue);
    },
  },
};
</script>
<style lang="scss" scoped>
.form-control {
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: fit-content;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #5ba57a;
  color: #fff;
  transition: border-color 0.3s ease-in-out;

  &__input {
    background-color: transparent;
    border: none;
    outline: none;
    color: inherit;
  }

  &:focus-within {
    border-color: #18d0f4;
    .icon {
      color: #18d0f4;
    }
  }
}

.icon {
  display: block;
  width: 20px;
  height: 20px;
  transition: color 0.3s ease-in-out;
  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
