<template>
  <div class="wrapper-contenido fixed w-full inset-0 z-50">
    <transition
      :enter-active-class="'animated fadeInRight'"
      :leave-active-class="'animated fadeOutRight'"
      :duration="{ enter: 1500, leave: 400 }"
    >
      <!-- <span  class="icon-close">  -->
      <div v-if="closeVisible" @click="close" class="icon-close" :class="{'closed': closed }"></div>
    </transition>
    <div
      class="contenido w-full relative objetivos overflow-hidden instalaciones-slider flex flex-wrap items-start md:items-end content-center md:content-around"
    >
      <!-- <div class="w-full"> -->
      <carousel
        :navigationEnabled="true"
        :paginationEnabled="false"
        :navigationNextLabel="`<div><img class='img-chevron' src='img/right-chevron.svg'></div>`"
        :navigationPrevLabel="`<div><img class='img-chevron' src='img/left-chevron.svg'></div>`"
        :perPageCustom="[[300, 1], [768, 2]]"
        :speed="1800"
        :scroll-per-page="false"
        class="mt-4 md:mt-0 w-full"
      >
        <!-- SLIDER INSTALACIONES -->
        <slide v-for="(o,i) in instalaciones" :key="i" class="h-full w-full">
          <div class="h-full relative flex flex-wrap items-center mx-6 sm:mx-6 md:mx-10">
            <div class="w-full flex items-center mt-10 md:mt-6">
              <div class="relative w-full mx-0 flex justify-center">
                <div v-if="instalaciones.length != i+1" class="relative mx-auto w-full text-center">
                  <img class="w-full" :src="o.img" alt="Instalaciones" />
                  <div class="img-borders-up"></div>
                  <div class="img-borders-down"></div>
                </div>
                <div v-else class="relative mx-auto w-full text-center"></div>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      closeVisible: false,
      closed: false,
      instalaciones: [
        {
          img: 'img/instalaciones/TAN_3828.jpg'
        },
        {
          img: 'img/instalaciones/TAN_3830.jpg'
        },
        {
          img: 'img/instalaciones/TAN_3832.jpg'
        },
        {
          img: 'img/instalaciones/TAN_3833.jpg'
        },
        {
          img: 'img/instalaciones/TAN_3834.jpg'
        },
        {
          img: 'img/instalaciones/TAN_3835.jpg'
        },
        {
          img: 'img/instalaciones/TAN_3836.jpg'
        },
        {
          img: 'img/instalaciones/TAN_3837.jpg'
        }
      ]
    }
  },
  created() {
    let _this = this
    setTimeout(function() {
      _this.closeVisible = true
    }, 1000)
  },
  methods: {
    close() {
      let _this = this
      this.closed = true
      setTimeout(function() {
        _this.$emit('close', true)
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.contenido {
  margin-top: 0px;
  // background: rgba(11, 22, 39, 0.9);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
}

/*  INSTALACIONES SLIDER  */
 .instalaciones-slider .VueCarousel-wrapper {
   transform: translateX(24%);
   overflow: visible ;
 }
 
 .instalaciones-slider .VueCarousel-navigation-button {
   position: relative !important;
   top: auto !important;
   left: auto !important;
   transform: none !important;
   margin-right: 0 !important;
 }
 
 .instalaciones-slider .VueCarousel-navigation-prev {
   position: relative;
   /* margin: 10px 0; */ 
 }
 
 .instalaciones-slider .VueCarousel-navigation {
     position: fixed;
     width: auto !important;
     height: auto;
     left: 50% !important;
     bottom: 0 !important;
     transform: translateX(-100%);
 }
@media(max-width: 550px) {
   .instalaciones-slider .VueCarousel-navigation {
     position: fixed;
     width: auto !important;
     height: auto;
     /* top: auto !important; */
     left: 50% !important;
     bottom: 0 !important;
     transform: translateX(-50%);
   }  
   .instalaciones-slider .VueCarousel-wrapper {
     transform: translateX(0%);
     overflow: visible ;
   }
 
}

.wrapper-contenido {
  margin-top: 64px;
  background: rgba(11, 22, 39, 0.9);
}

.img-borders-up,
.img-borders-down {
  &::before,
  &::after {
    display: block;
    content: '';
    width: 30px;
    height: 30px;
    position: absolute;
  }
}

.img-borders-up {
  &::before {
    top: -13px;
    left: -13px;
    border-top: 2px solid var(--color-yellow);
    border-left: 2px solid var(--color-yellow);
  }
  &::after {
    top: -13px;
    right: -13px;
    border-top: 2px solid var(--color-yellow);
    border-right: 2px solid var(--color-yellow);
  }
}

.img-borders-down {
  &::before {
    bottom: -13px;
    left: -13px;
    border-bottom: 2px solid var(--color-yellow);
    border-left: 2px solid var(--color-yellow);
  }
  &::after {
    bottom: -13px;
    right: -13px;
    border-bottom: 2px solid var(--color-yellow);
    border-right: 2px solid var(--color-yellow);
  }
}

.icon-close {
  // position: relative;
  position: absolute;
  width: 75px;
  height: 75px;
  right: 7px;
  top: 5px;
  z-index: 30;
  cursor: pointer;
  @media (max-width: 650px) {
    width: 50px;
    height: 50px;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: rgb(218, 218, 218);
    transition: transform 0.25s ease-out;
  }

  /* Vertical line */
  &:before {
    top: 0;
    left: 50%;
    width: 3px;
    height: 100%;
    margin-left: -2px;
    transform: rotate(45deg);
  }

  /* horizontal line */
  &:after {
    top: 50%;
    left: 0;
    width: 100%;
    height: 3px;
    margin-top: -1px;
    transform: rotate(225deg);
  }

  &.closed {
    cursor: pointer;

    &:before {
      transform: rotate(90deg);
    }
    &:after {
      transform: rotate(180deg);
    }
  }
}
</style>
