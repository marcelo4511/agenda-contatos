<template>
  <div class="form-group">
    <h4>Categorias</h4>
    <nav aria-label="breadcrumb mb-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item"><router-link to="/categories">Categorias</router-link></li>
      
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

  <div class="form-group">
  
  <div class="m-3">
    <form class="form-group"  @submit.prevent="onSubmit">
      <div class="row">
      
        <div class="form-group col-6">
        <label for="" class="label label-default">Nome da Categoria</label>
        <input type="text" class="form-control col-md-12 mr-5" name="name" v-model="category.name">
        </div>
        
        <div class="form-group col-4">

          <label for="">Status</label>
            <select class="form-control" required v-model="category.status">
              <option selected value=Ativo>Ativo</option>
              <option value=Inativo>Inativo</option>
            </select>
        </div>
              
        </div>
          <div class="form-group">
            <button type="submit" class="btn btn-info mt-4">Atualizar</button>
          </div>
    </form>
  </div>
</div>

</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      category:{}
    }
  },
    created(){
       this.getCategory(this.$route.params.id)
    },
    methods:{
         onSubmit(){
          this.$store.dispatch('Category/updateCategory',this.category)
          try{
            this.$toasted.global.defaultSuccess()
              setTimeout(() => {
                this.$router.push('/categories')
              },3000)
          }catch(e) {
            this.$toasted.global.defaultError()
              console.log(e)
            }
        },
        getCategory(id){
            axios.get(`http://localhost:8000/api/categories/${id}`)
            .then(res => {
                this.category = res.data
                console.log(res.data)
            })
        },
    },
    
}
</script>

<style>

</style>