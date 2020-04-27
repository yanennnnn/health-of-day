<template>
    <div>
        <loading :active.sync="isLoading">
            <template slot="default">
                <img src="../../assets/images/juice-icon.png" width="70px">
                <img src="../../assets/images/juice-dribbble.gif" width="100px">
            </template>
        </loading>
        <div class="container-fulid">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="carousel-img-1 bg-cover">
                            <div class="carousel-caption d-none d-md-block text-dark">
                            
                            </div>
                        </div>
                    
                    </div>
                    <div class="carousel-item">
                        <div class="carousel-img-2 bg-cover">
                            <div class="carousel-caption d-none d-md-block text-dark">
                                
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                         <div class="carousel-img-3 bg-cover">
                            <div class="carousel-caption d-none d-md-block text-dark">
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-3 products-info">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-white">
                    <li class="breadcrumb-item">
                        <router-link to="/index" class="text-maple">Home</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link to="/products" class="text-maple">Products</router-link>
                    </li>
                </ol>
            </nav>
            <div class="products-info-category">
                <ul class="d-flex list-unstyled mb-0 ml-3 ">
                    <li class="text-center m-sm-0 mr-2" :class="{active: category == 'all'}"><a href="#" class="py-1 px-sm-2 px-0 rounded-top  products-list "  @click.prevent="category='all'" :class="{active: category == 'all'}">全部商品</a></li>
                    <li class="text-center m-sm-0 mr-2" :class="{active: category == '經典商品'}"><a href="#" class="py-1 px-sm-2 px-0  rounded-top  products-list" @click.prevent="category='經典商品'" :class="{active: category == '經典商品'}">經典商品</a></li>
                    <li class="text-center m-sm-0 mr-2" :class="{active: category == '活力果汁'}"><a href="#" class="py-1 px-sm-2 px-0  rounded-top  products-list" @click.prevent="category='活力果汁'" :class="{active: category == '活力果汁'}">活力果汁</a></li>
                    <li class="text-center m-sm-0 mr-2" :class="{active: category == '營養沙拉'}"><a href="#" class="py-1 px-sm-2 px-0  rounded-top  products-list" @click.prevent="category='營養沙拉'" :class="{active: category == '營養沙拉'}">營養沙拉</a></li>
                    <li class="text-center m-sm-0 mr-2" :class="{active: category == '酸甜優格'}"><a href="#" class="py-1 px-sm-2 px-0  rounded-top  products-list" @click.prevent="category='酸甜優格'" :class="{active: category == '酸甜優格'}">酸甜優格</a></li>
                </ul>
            </div>
            <div class="outline p-md-5 p-1 rounded" :style="{borderColor:outlineColor}">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12 mb-4" v-for="item in activeProducts" :key="item.id" v-if="item.is_enabled">
                        <div class="card border-0 ">
                            <router-link  :to="`/detail/${item.id}`" class="products-info-img text-center text-decoration-none rounded" :style="{backgroundImage: `url(${item.imageUrl})`}"><div>more...</div></router-link>
                            <div class="card-body ">
                                <router-link  :to="`/detail/${item.id}`" class="card-title text-center d-block text-decoration-none h5">{{item.title}}</router-link>
                                <p class="card-text products-info-content text-muted">{{item.content}}</p>
                                <div class="d-flex justify-content-between ">
                                    <div class="products-info-price ml-1 " v-if="item.price!==item.origin_price"><span class="text-danger">{{item.price | currency }}</span><span class="ml-2" style="font-style:oblique;text-decoration:line-through">{{item.origin_price | currency }}</span></div>
                                    <div class="products-info-price ml-1 " v-else><span class="">{{item.price | currency }}</span></div>
                                    <a  href="#" ><font-awesome-icon  class="align-middle" style="font-size:20px" @click.prevent="addToCart(item.id)" :icon="[ 'fas', 'shopping-basket' ]" /></a>
                                </div> 
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <Pagination :pageData="pagination" @emitpage="getAllProducts" v-if="category=='all'"></Pagination>
                </div>
                
            </div>
        </div>
    </div>
    
</template>

<script>
import Pagination from '../../components/pagination';
export default {
    components:{
        Pagination
    },
    data(){
        return{
            allProducts:[],
            products:[],
            category:'all',
            isLoading: false,
            pagination:{},
        }
    },
    methods:{
        tempCategory(category){
            const vm=this;
            vm.category=category;
        },
        
        getProduct(){
            const vm=this;
            const url=`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
            vm.isLoading = true;
            this.$http.get(url).then(response => {
                vm.products = response.data.products;
                // vm.allProducts = response.data.products;
                vm.isLoading = false;
            });
        },
        getAllProducts(page = 1){
            // const api=`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/products`;
             const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
            //所申請的APIPath
            const vm=this;
            vm.isLoading=true;//開啟loading
            this.$http.get(api).then((response) => {
            vm.isLoading=false;//資料抓取完關閉loading
            vm.allProducts=response.data.products;
            vm.pagination = response.data.pagination;// 把分頁資訊存到 pagination 變數
            })
        },

        addToCart(id,qty=1){
            const vm=this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            vm.isLoading = true;
            const cart={ //資料結構建立
                product_id:id,
                qty:qty//自動帶入變數直
            };
            this.$http.post(url,{data:cart}).then((response) => {//讀取改post
                if(response.data.success) {
                    vm.$bus.$emit("message:push","已加入購物車", "success");
                    vm.$bus.$emit("cartCreate:push");
                    vm.isLoading = false;
                }else{
                    vm.$bus.$emit("message:push","出現錯誤!", "danger");
                    vm.isLoading = false;
                }
            });
        }
    },
    computed:{
        activeProducts(){
            const vm=this;
             if(vm.category=="all"){
                return vm.allProducts;
                
            }else{
                return vm.products.filter(function(item) {
                    if (item.category == vm.category) {
                        return item;
                    }
                });
            }
        },
        outlineColor(){
            const vm=this;
            if(vm.category=='all'){
                return'#3D6654';
            }
            else if(vm.category=='經典商品'){
                  return '#FF935E';
            }
            else if(vm.category=='活力果汁'){
                  return '#A1BF5B';
            }
            else if(vm.category=='營養沙拉'){
                  return '#F8E800';
            }
            else if(vm.category=='酸甜優格'){
                  return '#fd7e14';
            }
        }
    },
    created(){
        const vm=this;
        vm.getProduct();
        vm.getAllProducts();
        $( "html,body" ).scrollTop(0);
    }
}
</script>