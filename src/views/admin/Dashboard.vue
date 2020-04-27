<template>
    <div>
        <navbar />
        <Alert />
        <router-view></router-view>
   </div>
</template>

<script>
import navbar from '../../components/admin/Nav';
import Alert from '../../components/AlertMessage';

export default {
    name:'dashboard',
    components:{
        navbar,
        Alert,
    },
    
}
</script>

