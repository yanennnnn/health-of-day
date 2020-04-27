<template>
  <div class="wrap">
    <navbar />
    <Alert />
    <router-view />
    <Footer />
  </div>
</template>


<script>
import navbar from '../../components/font/Navbar'
import Footer from '../../components/font/Footer';
import Alert from '../../components/AlertMessage';
// import ToTop from '../components/toTop';
export default {
  name: 'layout',
  components: {
    navbar,
    Footer,
    Alert,
  },
};
</script>