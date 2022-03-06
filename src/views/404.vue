<template>
  <div class="not-found">
    <h1>404</h1>
    <div class="cloak__wrapper">
      <div class="cloak__container">
        <div class="cloak"></div>
      </div>
    </div>
    <div class="info">
      <h2>We can't find that page</h2>
      <p>
        We're fairly sure that page used to be here, but seems to have gone
        missing. We do apologise on it's behalf.
      </p>
      <router-link to="/">go to home page</router-link>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&family=Roboto:wght@100;300;700&display=swap");

.not-found * {
  box-sizing: border-box;
  transform-style: preserve-3d;
}
.not-found {
  position: relative;
  min-height: 100vh;
  display: flex;
  font-family: "Roboto", sans-serif;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fafafa;
}
a {
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  padding: 1rem 4rem;
  border-radius: 4rem;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.05rem;
  background-color: #fff;
}
p {
  font-weight: 100;
}
h1 {
  font-size: clamp(5rem, 40vmin, 20rem);
  font-family: "Open Sans", sans-serif;
  margin: 0;
  margin-bottom: 1rem;
  letter-spacing: 1rem;
  background: radial-gradient(var(--lit-header), var(--header) 45%) var(--x)
    100%/200% 200%;
  color: transparent;
}
h1:after {
  content: "404";
  position: absolute;
  top: 0;
  left: 0;
  color: #fafafa;
}
.cloak__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
}
.cloak__container {
  height: 250vmax;
  width: 250vmax;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.info {
  text-align: center;
  line-height: 1.5;
  max-width: clamp(16rem, 90vmin, 25rem);
}
.info > p {
  margin-bottom: 3rem;
}
</style>
