<template>
  <div class="content">
    <router-link to="/planes" tag="a" class="rounded btn btn-yellow-degree btn-inscripcion">
      <span>Inscribite ahora</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.content {
  position: fixed;
  right: 3%;
  top: 30%;
  width: 232px;
  height: 70px;
//   transform: translateY(-50%) rotate(-90deg);
  transform-origin: 100% 100%;
  z-index: 5;
  // transition: all .2s ease-out;
  animation: fromRight 2s;
  -webkit-animation-fill-mode: forwards;
  @media (max-width: 800px) {
    display: none;
  }
}

@keyframes fromRight {
  from {
    position: fixed;
    right: 3%;
    // top: calc(50% - 232px);
    transform: translateY(-50%) translateX(50%) rotate(-90deg);
    transform-origin:  bottom 100%;
    opacity: 1;
  }
  to {
    position: fixed;
    right: 3%;
    // top: calc(50% - 232px);
    transform: translateY(-50%) translateX(0) rotate(-90deg);
    transform-origin:  bottom 100%;
    opacity: 1;
  }
}
</style>

