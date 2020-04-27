<template>
    <div class="container customerOrder">
        <loading :active.sync="isLoading">
            <template slot="default">
                <img src="../../assets/images/juice-icon.png" width="70px">
                <img src="../../assets/images/juice-dribbble.gif" width="100px">
            </template>
        </loading>
        <h2 class="pt-5 text-center">訂購資料</h2>
        <div class="mt-4  border-primary row justify-content-center" >
            <div class="col-lg-5 col-md-7 col-10  customerOrder-cart ">
                <p class="h5 my-3 ml-2 ">訂單明細</p>
                <div class="">
                    <table class="table">
                        <tbody>
                            <tr  v-for="item in cart.carts" :key="item.id">
                                <th scope="row" class="align-middle text-center d-sm-block d-none"><img :src="item.product.imageUrl" width="60" height="65" alt=""></th>
                                <td class="align-middle">
                                    <span>{{item.product.title}}</span>
                                    <br>
                                    <span class="text-muted">x {{item.qty}}</span>
                                </td>
                                <td class="align-middle" width="20" >{{item.final_total | currency}}</td>
                                <!-- <td>@mdo</td> -->
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="3" class="text-right p-0 pr-2" style="border:none">運費:<span class="ml-4 mr-1">$0</span></td>
                                <!-- <td class=" text-danger text-right" style="border:none">$80</td> -->
                            </tr>
                            <tr><td colspan="3" class="text-right  text-danger font-weight-bold" style="border:none">總計: <span class="h2">{{ cart.final_total | currency }}</span></td>
                                <!-- <td class=" text-danger text-right " ></td> -->
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <div class="col-sm-9 col-11 mt-5">
                <p class="h3 text-center">收件資料</p>
                <div class="mt-3">
                    <form  @submit.prevent="createOrder">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="userName">收件人姓名*</label>
                                <input type="text" class="form-control" id="userName" name="name" placeholder="請輸入姓名" v-model="form.user.name" :class="{'is-invalid': errors.has('name')}" v-validate="'required'">
                                <small class="text-danger" v-if="errors.has('name')">姓名不得為空</small>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="userTel">手機號碼*</label>
                                <input type="text" class="form-control" id="userTel" name="tel" placeholder="請輸入手機號碼" v-model="form.user.tel" :class="{'is-invalid': errors.has('tel')}" v-validate="'required'"  onkeyup="value=value.replace(/[^0-9]/g,'')">
                                <small class="text-danger" v-if="errors.has('tel')">手機號碼不得為空</small>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="userEmail">信箱*</label>
                            <input type="email" class="form-control" id="userEmail" name="email"  placeholder="請輸入信箱" v-model="form.user.email" :class="{'is-invalid': errors.has('email')}" v-validate="'required|email'">
                            <small class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</small>
                        </div>
                        <div class="form-group">
                            <label for="userAddress">地址*</label>
                            <input type="text" class="form-control" id="userAddress" name="address" placeholder="請輸入地址" v-model="form.user.address" :class="{'is-invalid': errors.has('address')}" v-validate="'required'">
                            <small class="text-danger" v-if="errors.has('address')">地址不得為空</small>
                        </div>
                        <div class="form-group">
                            <label for="userTextarea">留言備註</label>
                            <textarea class="form-control" id="userTextarea" rows="3" v-model="form.message"></textarea>
                        </div>
                        <!-- <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity">
                            </div>
                            <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                            </div>
                            <div class="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input type="text" class="form-control" id="inputZip">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck">
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                            </div>
                        </div> -->
                         <div class="d-flex justify-content-center mt-5">
                             <!-- <button class="py-sm-2 py-0 btn btn-outline-primary mx-2 d-block" style="width:220px">返回上一步 </button> -->
                            <button type="submit" class="py-2 btn btn-primary mx-2 d-block" style="width:250px">確認送出 </button>
                        </div>
                    </form>
                </div>
                
            </div>   
        </div>

        <!-- modal -->
        <div class="modal fade" id="CreateOrder" tabindex="-1" role="dialog" aria-labelledby="CreateOrderCenterTitle" aria-hidden="true"  data-backdrop="static">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body leave-modal">
                        <p>您的訂單資料尚未送出，確定要離開此頁?</p>
                        <div class="text-right">
                        <button type="button" class="mr-2 confirm" data-dismiss="modal">確定</button>
                        <button type="button" class="cancel" data-dismiss="modal">取消</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
export default {
    data(){
        return{
            cart:{
                carts:[],
            },
            form:{
                user:{
                    name:'',
                    tel:'',
                    email:'',
                    address:'',
                },
                message:''
            },
            isLoading:false,
            leave:false
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
        createOrder(){
            const vm=this;
            const url=`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
            const order=vm.form;
            vm.isLoading=true;
            this.$validator.validate().then((result) => { //防止沒有驗證也能送出表單
                if (result) {
                    this.$http.post(url, { data: order }).then((response) => {
                        vm.leave = true;
                        vm.getCart();
                        if (response.data.success) {//建立成功跳轉到customer_checkout
                            vm.$router.push(`/customerCheckout/${response.data.orderId}`);
                            vm.$bus.$emit("cartCreate:push"); 
                        }
                        vm.isLoading = false;
                    });
                } else {
                    vm.isLoading = false;
                    return
                   
                }
            });
        }
    },
    created(){
        this.getCart();
    },
    beforeRouteLeave (to, from, next) {
         const vm = this;
        if (vm.leave) {
            next();
        } else {
            $('#CreateOrder').modal('show');
            $('.confirm').on('click', () => {
                next();
            });
            $('.cancel').on('click', () => {
                next(false);
            });
        }
    }
}
</script>
<style scoped lang="scss">
    .customerOrder{
        margin-top: 71px;
        &-cart{
            border-top: thick double;
            box-shadow: 0 0 10px #ccc;
        }
    }
</style>