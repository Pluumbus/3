<template>
  <div class="wrapper-content wrapper-content--fixed">
      <section class="about">
          <div class="container">
              <h1 class="title">About my blog</h1>             
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa similique eveniet dolorum corporis voluptate magnam at ipsam. Sequi maxime, illo expedita voluptatum velit perspiciatis a deleniti culpa facere magni!</p>
              <intro title="Lorem, ipsum dolor sit.." />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa similique eveniet dolorum corporis voluptate magnam at ipsam. Sequi maxime, illo expedita voluptatum velit perspiciatis a deleniti culpa facere magni!</p>
              <img src="@/assets/img/about.jpg" alt="">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa similique eveniet dolorum corporis voluptate magnam at ipsam. Sequi maxime, illo expedita voluptatum velit perspiciatis a deleniti culpa facere magni!</p>
          </div>
      </section>
  </div>
</template>

<script>
import intro from '@/components/UI/Intro.vue'
export default {
    components: {intro}
}
</script>

<style lang="scss" scoped>
.about{
    text-align: center;
    p, img{
        margin-bottom: 17px;
    }
    

}
</style>