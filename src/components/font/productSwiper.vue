  
<template>
  <swiper class="swiper" :options="swiperOption" v-if="products.length > 0">
    <swiper-slide v-for='item in recommendProduct' :key="item.id "> 
          <div class="row justify-content-center">
              <div class=" mb-4 mx-2"  >
                  <div class="card border-0 " >
                      <router-link  :to="`/detail/${item.id}`" class="products-info-img text-center text-decoration-none rounded" :style="{backgroundImage: `url(${item.imageUrl})`}"><div>more...</div></router-link>
                      <div class="card-body ">
                          <router-link  :to="`/detail/${item.id}`" class="card-title text-center d-block text-decoration-none h5">{{item.title}}</router-link>
                          <p class="card-text products-info-content text-muted">{{item.content}}</p>
                          
                      </div>
                  </div>
                  <hr>
              </div>
            </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: 'swiper-example-space-between',
    title: 'Space between slides',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          speed: 300,
          autoplay: true,
          loop:true,//開啟迴圈模式,
          // slidesPerView: 1,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          breakpoints: {
          // 當寬度小於等於 544
            544: {
              slidesPerView: 1
            },
            // 當寬度小於等於 767
            767: {
              slidesPerView: 2,
              centeredSlides: false
            },
            // 當寬度小於等於 991
            991: {
              slidesPerView: 3,
              centeredSlides: true
            }
         },
        },
        products:[],
        recommendproduct:[],
      }
    },
    methods:{
        getProduct(){
            const vm=this;
            const url=`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
            this.$http.get(url).then((response)=>{
                vm.products=response.data.products; 
            });

        }
    },
    computed:{
        recommendProduct(){
            const vm = this;
        
            return vm.products.filter(function(item, index, array) {

                return index % 4 === 0
            
            });
        }
    },
    created(){
        const vm=this;
        vm.getProduct();
        
    }
  }
</script>

<style scoped lang="scss">
    .swiper-container{
        height: 450px;
    }
</style>