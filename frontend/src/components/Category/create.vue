<template>
<div>
  <h4>Categorias</h4>
    <nav aria-label="breadcrumb mb-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item"><router-link to="/categories">Categorias</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Criar</li> </ol>
    </nav>

    <div class="form-group">
      
      <div class="m-3">
        <form class="form-group" @submit.prevent="onSubmit">
          <div class="row">
          
            <div class="form-group col-6">
            <label for="" class="label label-default">Nome da Categoria</label>
            <input type="text" class="form-control col-md-12 mr-5" name="name" placeholder="Nome da categoria" required v-model="category.name">
            </div>
            
            <div class="form-group col-4">

              <label for="">Status</label>
                <select class="form-control" required v-model="category.status">
                  <option value=Ativo>Ativo</option>
                  <option value=Inativo>Inativo</option>
                </select>
            </div>
                  
            </div>
              <div class="form-group">
                <button type="submit" class="btn btn-info mt-4">Salvar</button>
              </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'

export default {
 data(){
      return{
        category:{
          name:'',
          status:''
        },
      }
    },
  name:'categories',
  
 methods:{
   ...mapActions('Category',['postCategory']),

  
      onSubmit() {
        this.$store.dispatch("Category/postCategory",{
          name:this.category.name,
          status:this.category.status
        })
        try{
          this.$toasted.global.defaultSuccess()
       setTimeout(() => {
         this.$router.push('/categories')
       },3000)
         } catch(e) {
           this.$toasted.global.defaultError()
           console.log('errou',e)
         }
        },
       },
 
  computed: {
    ...mapState('Category',{categories:state => state.categories}),
  
  }
}
</script>

<style>
    
</style>