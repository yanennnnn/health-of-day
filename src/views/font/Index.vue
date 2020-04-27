<template>
    <div>
        <loading :active.sync="isLoading">
            <template slot="default">
                <img src="../../assets/images/juice-icon.png" width="70px">
                <img src="../../assets/images/juice-dribbble.gif" width="100px">
            </template>
        </loading>
        <div class=" banner jumbotron jumbotron-fluid d-flex align-items-center">
            <div class="container-fluid ml-1">
                <div class="jumbotron-bg  d-md-inline-block d-block text-center text-md-left">
                    <h2 class="display-4 text-light font-weight-bolder">Juice & salad</h2>
                    <p class="lead text-light">Day juice day salad day of life<br>給忙碌的你一天驚喜</p>
                </div>
            </div>
            <a href="#introduction" class="toggle-down text-white " @click.prevent="toTarget('introduction')">
                <!-- <i class="fas fa-angle-down"></i><i class="fas fa-angle-down"></i> -->
                <ul class="toggle_down_group justify-content-center align-items-center d-flex flex-column">
                    <li class="toggle_down_group_item"></li>
                    <li class="toggle_down_group_item"></li>
                    <li class="toggle_down_group_item"></li>
                    <li class="toggle_down_group_item itemRow"><font-awesome-icon  :icon="[ 'fas', 'angle-down' ]" /></li>
                </ul>
            </a>
        </div>
        <section class="introduction container-fluid h-auto" id="introduction">
            <div class="row ">
                <div class="col-12">
                    <div class="row farm ">
                        <div class="col-md-6  col-12 farm_bg bg-cover content "></div>
                        <div class="col-md-6  col-12 farm_text p-5 inner-hide">
                            <h3 class="font-weight-bold farm_text_h3"> <!--<font-awesome-icon  class=" d-md-inline d-none" :icon="[ 'fas', 'caret-left' ]" /><font-awesome-icon  class=" d-inline d-md-none" :icon="[ 'fas', 'caret-up' ]" />   -->
                            <font>新鮮陽光新鮮口感</font>
                            <br>
                            <font>給予最真誠自在的味道</font>
                            </h3>
                            <hr class="bg-light">
                            <p class=" farm_text_p ">
                                <font>100%純有機天然，</font>
                                <br>
                                <font>真實濃郁口感</font>
                                <br>
                                <font>使用原汁原味，</font>
                                <br>
                                <font>完美而細緻。</font>
                            </p>
                            <!-- <p>隨著現代科技進步，人們利用化學合成的方法，得以取得許多天然食物中不存在的化學物質作為添加物，來達到一些在食品製程上的特定目的。為了健康，我們堅持每天人工製作，堅持使用有機蔬果，堅持使用在地當季新鮮蔬果，100%純天然，不添加人工糖分、色素、香料，品質保證</p> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="row farm2 ">
                        <div class="col-md-6 col-12 order-md-2 farm2_bg bg-cover content"></div>
                        <div class="col-md-6 col-12 farm2_text align-self-center  p-5 inner-hide">
                                <h3 class="font-weight-bold h3 farm2_text_h3 ">
                                     <font>和味蕾享受</font> <!--<font-awesome-icon class=" d-md-inline d-none" :icon="[ 'fas', 'caret-right' ]" /><font-awesome-icon  class=" d-inline d-md-none" :icon="[ 'fas', 'caret-up' ]" />  -->
                                     <br>
                                     <font>當天最新鮮的快感</font>
                                    </h3>
                            <hr class="bg-light">
                            <p class="farm2_text_p mt-5 mb-5">
                                <font>當日採收當日現做</font>
                                <br>
                                <font>不添加人工香料</font>
                                <br>
                                <font>品質保證</font>
                            </p>
                            <hr class="bg-light mt-5 ">
                            <p class="farm2_text_sm">
                                <font><small>當你食用的瞬間</small></font>
                                <br>
                                <font><small>你就知道我們說的都是真的</small></font>
                            </p>
                            <!-- <p>為了保持新鮮，我們冷壓榨汁技術以及HPP冷高壓殺菌，加上冷藏以及冷凍溫度宅配，以最快速的快遞送達到府，全年無休，週末假日照常出貨。我們在台北市也配合外送平台，讓你輕鬆享用每日蔬果</p> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container-fulid  delivery pt-5 pb-5 bg-beige">
                <div class="text-center text-primary delivery-tittle">
                    <p class="font-weight-bold">READY TO EAT</p>
                    <p class="font-weight-bolder">
                        <font>最美味</font>
                        <br>
                        <font>最精緻的食物</font>
                    </p>
                    <p>
                        交給你的蔬果，我們做了很多努力...
                    </p>
                </div>
                <div class="mt-5 delivery-info inner-hide container">
                    <div class="row justify-content-center ">
                        <div class="col-9 col-md-4 col-lg-3   mb-md-0 mb-4 delivery-info-card">
                            <div class="card   rounded-0 h-100 bg-primary box-shadow" >
                                <div class="card-body text-beige">
                                    <h5 class="card-title">當天製作</h5>
                                    <p class="card-text text-center delivery-info-card-icon"><font-awesome-icon :icon="[ 'fas', 'temperature-low' ]" /></p>
                                    <p class="card-text text-md-left text-center">冷壓榨汁技術以及HPP冷高壓殺菌，保留蔬果原味</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-9 col-md-4 col-lg-3 mb-md-0 mb-4 delivery-info-card">
                            <div class="card rounded-0   h-100 bg-primary box-shadow" >
                                <div class="card-body  text-beige">
                                    <h5 class="card-title">快速到貨</h5>
                                    <p class=" card-text text-center delivery-info-card-icon"><font-awesome-icon :icon="[ 'fas', 'truck-moving' ]" /></p>
                                    <p class="card-text  text-md-left text-center">使用冷藏以及冷凍溫度宅配，保持最佳新鮮</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-9 col-md-4 col-lg-3 delivery-info-card ">
                            <div class="card rounded-0  h-100 bg-primary box-shadow" >
                                <div class="card-body  text-beige">
                                    <h5 class="card-title">賞味期間</h5>
                                    <p class=" card-text text-center delivery-info-card-icon"><font-awesome-icon :icon="[ 'fas', 'snowflake' ]" /></p>
                                    <p class="card-text text-md-left text-center">離開冰箱後，請在最佳品嘗時間內食用完畢</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class=" coupon jumbotron jumbotron-fluid  d-flex align-items-center ">
                <div class="container-fluid ml-1 text-center ">
                    <div class="jumbotron-bg container text-center ">
                        <h3 class="display-4 text-light font-weight-bolder">母親節大放送</h3>
                    </div>
                    <div class="jumbotron-bg container text-center ">
                        <p class="display-4 text-light font-weight-bolder">輸入折扣碼，不限金額88折</p>
                    </div>
                    <div class="jumbotron-bg container text-center mt-5 d-md-inline-block d-block">
                        <p class="display-4 text-primary font-weight-bolder ">折扣碼: Mon5200</p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container-fulid best-self py-5">
                <div class="text-center mb-5">
                    <h3 class="text-primary font-weight-bold ">經典商品</h3>
                </div>
                <div class="d-flex rowup">
                    <div class="d-flex stop"  v-if="products.length">
                        <div v-for='item in hotProducts' :key="item.id ">
                            <div class="card rounded-0 ml-1 mr-1 best-self-card" >
                                <div class="best-self-img d-flex" :style="{backgroundImage: `url(${item.imageUrl})`}">
                                    <div class="card-body text-center d-flex flex-column justify-content-center">
                                        <h5 class="card-title font-weight-bold">{{item.title}}</h5>
                                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                                        <router-link
                                            :to="`/detail/${item.id}`"
                                            class="btn btn-atomic-tangerine rounded-0" style="margin:0 auto"
                                        >查看更多</router-link>
                                        <!-- <a href="#" class="btn btn-atomic-tangerine rounded-0" style="margin:0 auto">查看更多</a> -->
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="d-flex stop"  v-if="products.length">
                        <div v-for='item in hotProducts' :key="item.id ">
                            <div class="card rounded-0 ml-1 mr-1 best-self-card">
                                <div class="best-self-img d-flex"  :style="{backgroundImage: `url(${item.imageUrl})`}">
                                    <div class="card-body text-center d-flex flex-column justify-content-center">
                                        <h5 class="card-title font-weight-bold">{{item.title}}</h5>
                                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                                        <router-link
                                            :to="`/detail/${item.id}`"
                                            class="btn btn-atomic-tangerine rounded-0" style="margin:0 auto"
                                        >查看更多</router-link>
                                        <!-- <a href="#" class="btn btn-atomic-tangerine rounded-0" style="margin:0 auto">查看更多</a> -->
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import $ from 'jquery';
export default {
    data(){
        return{
            products:[],
            isLoading: false
        }
    },
    methods:{
        toTarget(target){
            const gettop=$(`#${target}`).offset().top-71;
            if (target) {
                $('html,body').animate({ scrollTop: gettop }, 1000);
             }
        },
        getProducts(){
            const vm=this;
            const url=`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
            vm.isLoading = true;
            this.$http.get(url).then((response)=>{
                vm.products=response.data.products;
                vm.isLoading = false;
                
            });
        },
        
    },
    computed:{
        hotProducts(){
            const vm = this;
            return vm.products.filter(function(item) {
                if (item.category == "經典商品") {
                return item;
                }
               
            });
        },
    },
    mounted(){
        const vm = this;
        // vm.getrouter();
        $(window).scroll(()=>{
            const scrollPos = $(window).scrollTop();
            
            const windowHeight = $(window).height();
            $('.farm').each(function(){
                const thisPos = $(this).offset().top;
                
                if (windowHeight + scrollPos >= thisPos + 100){
                    $('.farm_text').removeClass('inner-hide');
                     $('.farm_text').addClass('inner-show')
                }
            })
            $('.farm2').each(function(){
                const thisPos = $(this).offset().top;
                if (windowHeight + scrollPos >= thisPos + 100){
                    $('.farm2_text').removeClass('inner-hide');
                     $('.farm2_text').addClass('inner-show')
                }
            })
            $('.delivery-info').each(function(){
                const thisPos = $(this).offset().top;
                if (windowHeight + scrollPos >= thisPos + 100){
                    $(this).removeClass('inner-hide');
                     $(this).addClass('inner-show')
                }
            })
        })
        
    },
    created() {
        this.getProducts();
        $( "html,body" ).scrollTop(0);
    }
}
</script>
<style scoped lang="scss">

</style>