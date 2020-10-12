<template>
<div>
  <h4>Categorias</h4>
  <nav aria-label="breadcrumb mb-4">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
    
      <li class="breadcrumb-item active" aria-current="page">Categorias</li>
    </ol>
  </nav>
    <div class="form-group">
      <router-link class="btn btn-primary" tag="button" to="/category-create">Cadastrar</router-link>
    
      <input class="form-control col-md-3 mb-3" type="search" style="float: right;" name="nome" placeholder="Pesquisar" v-model="search">

    </div>

    <table class="table table-sm">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Status</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(category,i) in searching" :key="i">
          <td>{{category.name}}</td>
          <td>{{category.status}}</td>
          <td>              
            <router-link :to="{name:'category-edit',params:{id:category.id}}" tag="button" title="Editar" class="btn btn-warning"><i class="fa fa-pencil"></i></router-link>
            <button @click="removeCategory(category)" title="Deletar" class="btn btn-danger ml-2"><i class="fa fa-trash"></i></button>
          </td>    
        </tr>
      </tbody>
    </table>      
  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'
import swal from 'sweetalert'
export default {
 data(){
      return{
        name:'',
        search:''
        
      }
    },
  name:'categories',
  created(){
    this.$store.dispatch('Category/setCategories')
  },
 methods:{
   ...mapActions('Category',['postCategory','setCategories','updateCategory','removeCategory']),

  
        editCategory(){
          const update = {
            id:this.categories.id,
            name:this.categories.name,
            status:this.categories.status
          }
          this.updateCategory(update)
        },
        removeCategory(category){
           swal({
            title: "Você está certo disso ?",
            text: "Depois de excluído, você não será capaz de recuperar este contato!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
              if(willDelete) {
                this.$store.dispatch('Category/removeCategory',category)
                  swal("Categoria deletada com sucesso!", {
                icon: "success",
                });
              }else {
                swal("Operação cancelada!");
              }
          })
        }  
      },
 
  computed: {
    ...mapState('Category',{categories:state => state.categories}),
       searching:function() {
            return this.categories.filter(cat => {
                return cat.name.includes(this.search)
            })
       },
  }
}
</script>

<style>
    
</style>