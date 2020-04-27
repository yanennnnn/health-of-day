<template>
    <div>  
        <loading :active.sync="isLoading">
            <template slot="default">
                <img src="../../assets/images/juice-icon.png" width="70px">
                <img src="../../assets/images/juice-dribbble.gif" width="100px">
            </template>
        </loading>
        <nav class="navbar navbar-expand-md  nav ">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <font-awesome-icon class="text-primary" :icon="[ 'fas', 'bars' ]" />
                </button>
                <router-link to="/index" class="navbar-brand nav-logo order-0" href="#">health-of-day</router-link>
                <div class="collapse navbar-collapse justify-content-end order-2 " id="navbarNavAltMarkup">
                    <ul class="navbar-nav ">
                        <li class="nav-item ">
                            <router-link  class="nav-link nav-text" href="#" to="/index"><font-awesome-icon class="mr-1" :icon="[ 'fas', 'home' ]" />Home<span class="sr-only">(current)</span></router-link>
                        </li>
                        <li class="nav-item ">
                            <router-link  class="nav-link nav-text" href="#" to="/products"><font-awesome-icon class="mr-1" :icon="[ 'fas', 'box-open' ]" />Products</router-link>
                        </li>
                        <li class="nav-item ">
                            <router-link  class="nav-link nav-text" href="#"  to="/login"><font-awesome-icon class="mr-1" :icon="[ 'fas', 'user-cog' ]" />Login</router-link>
                        </li>
                        <!-- <li class="nav-item ">
                            <router-link  class="nav-link nav-text" href="#"  to="/cart"><font-awesome-icon class="mr-1" :icon="[ 'fas', 'user-cog' ]" />Login</router-link>
                            
                            
                        </li> -->
                    </ul>
                </div>
                <div class="dropdown nav-Cart order-1 order-md-2">
                        <a class="nav-Cart-text dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <font-awesome-icon class="mr-1" :icon="[ 'fas', 'shopping-cart' ]" />Cart
                        </a>
                        <span class="badge  badge-danger rounded-circle" v-if="cart.carts.length">{{cart.carts.length}}</span>
                        <div class="dropdown-menu  dropdown-menu-right px-2 mt-2 "  aria-labelledby="dropdownMenuButton">
                            <div v-if="cart.carts.length!==0">
                                <p class="h5 ml-2">選購商品</p>
                                <hr class="m-0">
                                <table class="table">
                                    <tbody>
                                        <tr v-for="item in cart.carts" :key="item.id">
                                        <td scope="row" ><button class="btn btn-sm btn-outline-danger align-middle" @click.prevent="removeCartItem(item.id)"><font-awesome-icon  :icon="[ 'far', 'trash-alt' ]" /></button></td>
                                        <td class="align-middle dropdown-menu-title" >{{item.product.title}}</td>
                                        <td class="align-middle text-nowrap" >{{item.qty}} {{item.product.unit}}</td>
                                        <td class="align-middle">{{item.final_total | currency}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <router-link   href="#" class="btn btn-primary btn-block text-light"  to="/cart">結帳去</router-link>
                            </div>
                            <div v-else class="py-2">
                                <p class="text-center font-weight-bold">購物車尚未有商品</p>
                            </div>
                        </div>             
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import $ from 'jquery';
export default {
    name:"Nav",
    data(){
        return{
            cart:{
                carts:[]
            },
            isLoading: false
        }
        
    },
    methods:{
        getrouter(){
            const { path } = this.$route;
             const search = '/index';
            //  console.log(path);
             if(path.indexOf(search)===-1){
                 $('.navbar').addClass('nav-light');
                 $('.nav-item').each(function(e){
                     $(this).removeClass('indexTop')
                     $(this).addClass('otherTop');
                    // console.log(this);
                 })
                 $('.nav-Cart').removeClass('indexTop')
                 $('.nav-Cart').addClass('otherTop')
             }else{
                  $('.navbar').removeClass('nav-light');
                  $('.nav-item').each(function(e){
                     $(this).addClass('indexTop')
                     $(this).removeClass('otherTop')
                    // console.log(this);
                 })
                 $('.nav-Cart').addClass('indexTop')
                 $('.nav-Cart').removeClass('otherTop')

             }
        },
        getCart(){
            const vm=this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            this.$http.get(url).then((response) => {
                vm.cart = response.data.data;
            });
        },
        removeCartItem(id){
            const vm = this;
        //用戶端取得路徑
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
            vm.isLoading = true;
            this.$http.delete(url).then( response => {
                if(response.data.success){
                    vm.$bus.$emit("message:push", "商品成功刪除", "success");
                    vm.getCart();
                    vm.isLoading = false;
                }else{
                    vm.$bus.$emit("message:push", "出現錯誤!", "danger");
                    vm.isLoading = false;
                }
                
                
            });
            
        },
    },
    mounted(){
        const vm = this;
        vm.getrouter();
        $(window).scroll(()=>{
            const { path } = vm.$route;
            const search = 'index';
            const scrollPos = $(window).scrollTop();
            const windowHeight = $(window).height();
            //  console.log(windowHeigh);
            if (path.indexOf(search) === -1) {
            return;
            }
            $('.nav').each(function(){
                const thisPos = $(this).offset().top;
                // console.log(thisPos);
                if (thisPos+scrollPos>= windowHeight){
                    $(this).addClass('nav-light')
                    $('.nav-item').each(function(e){
                        $(this).removeClass('indexTop')
                        $(this).addClass('otherTop')
                    // console.log(this);
                    })
                    $('.nav-Cart').removeClass('indexTop')
                     $('.nav-Cart').addClass('otherTop')
                    // $(this).removeClass('indexTop')
                    // $(this).addClass('otherTop');
                }
                if(thisPos + scrollPos <= windowHeight){
                    $(this).removeClass('nav-light')
                    $('.nav-item').each(function(e){
                        $(this).addClass('indexTop')
                        $(this).removeClass('otherTop')
                    // console.log(this);
                    })
                    $('.nav-Cart').addClass('indexTop')
                    $('.nav-Cart').removeClass('otherTop')
                }
            })
        })
       
    },

    watch: {
        // eslint-disable-next-line object-shorthand
        '$route'() {
            this.getrouter();
         },
    },
    created(){
        const vm = this;
        vm.getCart();
        vm.$bus.$on("cartCreate:push", () => {
            vm.getCart();
        });
    }
}
</script>

