<template>
<div>
<h4>Home</h4>
<nav aria-label="breadcrumb mb-4">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
  </ol>
</nav>
  <div class="row painel">
    <div class="card text-white bg-primary ml-3 " style="width:500px;height:150px">
       <div class="card-header">
          <div class="row">
            <h5>Contatos <i class="fa fa-address-card"></i></h5>
            <h5 style="margin-left:350px;">{{totalContact}}</h5>
          </div>
        </div>
      </div>
      <div class="card text-white bg-secondary ml-3" style="width:515px;height:150px">
        <div class="card-header">
          <div class="row">
            <h5>Categorias <i class="fa fa-folder"></i></h5>
            <h5 style="margin-left:350px;">{{totalCategory}}</h5>
          </div>
        </div>
    </div>
  </div>  
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
   name:'Home',

   created(){
     this.$store.dispatch('Category/setCategories'),
     this.$store.dispatch('ContactBook/setContactBooks')
   }, 
   computed:{
     ...mapGetters({
          totalCategory:'Category/totalCategory',
          totalContact:'ContactBook/totalContactBook'
     })
   }
}
</script>

<style>
  .subtitle{
     color:#fff;
     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
     background-color: #000;
     display: flex;
     text-align: center;
     justify-content: center;
     align-items: center;
  }
</style>