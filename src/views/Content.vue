<template>
  <div class="content">
    <about-page id='about' class='section'></about-page>
    <portfolio-page id='portfolio' class='section'></portfolio-page>
    <skillset-page id='skillset' class='section'></skillset-page>
    <contact-page id='contact' class='section'></contact-page>
  </div>
</template>

<script>
import About from '@/views/About'
import Portfolio from '@/views/Portfolio'
import Skillset from '@/views/Skillset'
import Contact from '@/views/Contact'

export default {
  components: {
    'about-page': About,
    'portfolio-page': Portfolio,
    'skillset-page': Skillset,
    'contact-page': Contact
  },
  name: 'Content',
  data () {
    return {

    }
  }
}
</script>
