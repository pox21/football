<template>
  <div class="preloader">
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="circle circle-3"></div>
    <div class="circle circle-4"></div>
    <div class="circle circle-5"></div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="css" scoped>
.preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  overflow: hidden;
}
.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle:before {
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 50%;
  opacity: 0.7;
  animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
}
.circle-1 {
  background-color: #49e5b1;
}
.circle-1:before {
  background-color: #49e5ac;
  animation-delay: 200ms;
}
.circle-2 {
  background-color: #1ed4a6;
}
.circle-2:before {
  background-color: #1ed4bf;
  animation-delay: 400ms;
}
.circle-3 {
  background-color: #2ad0bd;
}
.circle-3:before {
  background-color: #2ad0cb;
  animation-delay: 600ms;
}
.circle-4 {
  background-color: #3abcc8;
}
.circle-4:before {
  background-color: #3ac8bc;
  animation-delay: 800ms;
}
.circle-5 {
  background-color: #50bebe;
}
.circle-5:before {
  background-color: #50beac;
  animation-delay: 1000ms;
}
@keyframes scale {
  0% {
    transform: scale(1);
  }
  50%,
  75% {
    transform: scale(2.5);
  }
  78%,
  100% {
    opacity: 0;
  }
}
</style>
