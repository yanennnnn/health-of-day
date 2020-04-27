<template>
    <div >
        <Nav />
        <Alert />
        <loading :active.sync="isLoading">
            <template slot="default">
                <img src="../../assets/images/juice-icon.png" width="70px">
                <img src="../../assets/images/juice-dribbble.gif" width="100px">
            </template>
        </loading>
        <div class=" container-fulid sign">
            
             <div class="container sign-form d-flex align-items-center ">
                <div class="m-auto form-signin" >
                    <form class="" @submit.prevent="signin">
                        <h2 class="h3 mb-4 font-weight-normal text-center">登入</h2>
                        <label for="inputEmail" class="sr-only">Email address</label>
                        <!-- <font-awesome-icon class="mr-1" :icon="[ 'fas', 'shopping-cart' ]" /> -->
                        <input type="email" id="inputEmail" class="form-control " placeholder="Email address" required autofocus v-model="user.username">
                        <label for="inputPassword" class="sr-only">Password</label>
                        <input type="password" id="inputPassword" class="form-control " placeholder="Password" required v-model="user.password">
                        <div class="custom-control custom-checkbox checkbox mb-2">
                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                            <label class="custom-control-label" for="customCheck1">Remember me</label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block rounded-0" type="submit">LOG IN</button>
                    </form>
                    <hr>
                    <p class="text-center">其他登入</p>
                    <div class="text-center other-signin "> 
                        <a href="#" class="d-inline-block text-light text-decoration-none rounded "><font-awesome-icon  :icon="[ 'fab', 'facebook-f' ]" /></a>
                        <a href="#" class="d-inline-block ml-4 text-light text-decoration-none rounded"><font-awesome-icon :icon="[ 'fab', 'google-plus-g' ]" /></a>
                    </div>
                </div>
                 
                <!-- <hr> -->
                <!-- <div class="sign-other">
                </div> -->
            </div>
            <div class=" sign-bg bg-filter">
            </div>
        </div>
       
       
    </div>
    
</template>

<script>
import Nav from '../../components/font/Navbar';
import Alert from '../../components/AlertMessage';
export default {
    components:{
        Nav,
        Alert
    },
    data(){
        return{
            user:{
                username: '',
                password: '',
            },
            isLoading:false
        }
    },
    methods:{
        signin(){
            const vm = this;
            const api=`${process.env.APIPATH}/admin/signin`;
            vm.isLoading=true;
            this.axios.post(api,vm.user).then((response) => {
                if (response.data.success){
                    vm.isLoading=false;
                    vm.$router.push('/admin/createProducts');
                }else{
                    vm.$bus.$emit("message:push","帳號密碼輸入錯誤!", "danger");
                    vm.isLoading=false;
                }
            });
        }
    }
}
</script>

<style scoped lang="scss">
    
</style>