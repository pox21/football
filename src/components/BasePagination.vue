<template>
  <ul class="pagination">
    <li class="pagination__item">
      <a
        class="pagination__link pagination__link_arrow"
        href="#"
        :class="{ pagination__link_disabled: page === 1 }"
        aria-label="Предыдущая страница"
        @click.prevent="paginatePrev(page)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
          fill="currentColor"
        >
          <path
            d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
          />
        </svg>
      </a>
    </li>
    <li class="pagination__item" v-for="pageNum in pages" :key="pageNum">
      <a
        href="#"
        class="pagination__link"
        :class="{
          pagination__link_current: pageNum === page,
        }"
        @click.prevent="pagination(pageNum)"
      >
        {{ pageNum }}
      </a>
    </li>
    <li class="pagination__item">
      <a
        class="pagination__link pagination__link_arrow"
        :class="{ pagination__link_disabled: page === pages }"
        href="#"
        aria-label="Следующая страница"
        @click.prevent="paginateNext(page)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
          fill="currentColor"
        >
          <path
            d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
          />
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["page", "count", "perPage"],

  methods: {
    pagination(page) {
      this.$emit("update:page", page);
    },
    paginateNext(page) {
      page < this.pages ? page++ : page;
      this.$emit("update:page", page);
    },
    paginatePrev(page) {
      page !== 1 ? page-- : page;
      this.$emit("update:page", page);
    },
  },
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
};
</script>
<style lang="scss" scoped>
.pagination {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: 1px solid #8adcff;
    color: #8adcff;
    transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;

    svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    &:hover {
      background-color: #8adcff30;
    }

    &_current {
      border-color: #de14a8;
      color: #de14a8;
    }

    &_disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>
