<template>   
    <div >
        <loading :active.sync="isLoading">
            <template slot="default">
                <img src="../../assets/images/juice-icon.png" width="70px">
                <img src="../../assets/images/juice-dribbble.gif" width="100px">
            </template>
        </loading>
        <div class="container px-md-5 px-0 cart  text-center">
            <h2 class="pt-4">購物車內容</h2>
            <div class="mt-4" v-if="cart.carts.length!==0">
                <table class="table  ">
                    <thead>
                        <tr>
                        <th scope="col" width="10"></th>
                        <th scope="col" class="d-md-block d-none" >商品圖片</th>
                        <th scope="col">商品名稱</th>
                        <th scope="col" width="30">數量</th>
                        <th scope="col">金額</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in cart.carts" :key="item.id">
                            <td scope="row" class="align-middle" ><button class="btn btn-sm btn-outline-danger " @click.prevent="removeCartItem(item.id)"><font-awesome-icon  :icon="[ 'far', 'trash-alt' ]" /></button></td>
                            <td class="d-md-block d-none"><img :src="item.product.imageUrl" width="70" height="70" alt=""></td>
                            <td class="align-middle dropdown-menu-title" >{{item.product.title}}</td>
                            <td class="align-middle text-nowrap" >{{item.qty}} / {{item.product.unit}}</td>
                            <td class="align-middle" v-if="cart.total == cart.final_total">{{item.final_total | currency}}</td>
                            <td class="align-middle " v-else>{{item.final_total | currency}} <div class="text-success" v-if="item.coupon">已套用優惠券</div></td>
                            
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr >
                            <td colspan="5" class="text-right " v-if="cart.total == cart.final_total">小計: <span class="mr-1" >{{ cart.final_total | currency }}</span></td>
                            <td colspan="5" class="text-right text-success" v-else >小計: <span class="mr-1"  >{{ cart.final_total | currency }}</span></td>
                        </tr>
                        <tr>
                            <td colspan="5" class="text-right " style="border:none">運費:<span class="ml-4 mr-1">$0</span></td> 
                        </tr>
                        <tr><td colspan="5" class="text-right text-danger font-weight-bold" >總計: <span class="h2">{{ cart.final_total | currency }}</span></td>   
                        </tr>
                    </tfoot>
                </table>
                <div class="input-group mb-3 input-group-md text-right "  >
                        <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼" >
                        <div class="input-group-append">
                            <button class="btn btn-outline-primary" type="button" @click="addCouponCode">
                            套用優惠碼
                            </button>
                        </div>
                </div>
                <div class="text-right">
                    <button class="py-2 btn btn-primary m-md-0 mr-2" @click="goCheckOrder">確認訂單，前往下一步 <font-awesome-icon class="text-light" :icon="[ 'fas', 'arrow-right' ]" /></button>
                </div>
            </div>
            <div v-else class="mt-4 " >
                <p style="padding:70px 0 70px 0">尚未有商品，快來去逛逛吧!</p>
                <!-- <button class="btn btn-secondary"  @click="goProduct">前往商品</button> -->
                <p class="text-primary h2 font-weight-bold mt-5">為你推薦!</p>
                <hr>
                <productSwiper />
                
            </div>
        </div>
    </div>
    
</template>

<script>
// import $ from "jquery";
import productSwiper from '../../components/font/productSwiper'
export default {
    components:{
        productSwiper
    },
    data(){
        return{
            cart:{
                carts:[]
            },
            isLoading:false,
            coupon_code:'',
        }
    },
     methods:{
        getCart(){
            const vm=this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            vm.isLoading=true;
            this.$http.get(url).then((response) => {
                vm.cart = response.data.data;
                vm.isLoading=false;
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
                    vm.$bus.$emit("cartCreate:push");
                    vm.getCart();
                    vm.isLoading = false;
                }else{
                    vm.$bus.$emit("message:push", "出現錯誤!", "danger");
                    vm.isLoading = false;
                }
                
                
            });
        },
        addCouponCode(){
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
            const coupon = {
                code: vm.coupon_code,
            };
            vm.isLoading = true;
            this.$http.post(url,{data:coupon}).then((response) => {
                if(response.data.success){
                    vm.$bus.$emit("message:push", "優惠卷套用成功", "success");
                    vm.getCart();//重整購物車
                    vm.isLoading = false;
                }else{
                    vm.$bus.$emit("message:push", "出現錯誤!", "danger");
                    vm.isLoading = false;
                }
                
            
            });
        },
        goCheckOrder(){
            this.$router.push('/customerOrder');
        },
    },
    created(){
        const vm=this;
        vm.getCart();
        vm.$bus.$on("cartCreate:push", () => {
            vm.getCart();
        });
        $( "html,body" ).scrollTop(0);
    }
}
</script>