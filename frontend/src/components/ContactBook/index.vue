<template>
  <div>
  <h4>Contatos</h4>
  <nav aria-label="breadcrumb mb-4">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
    
      <li class="breadcrumb-item active" aria-current="page">Contatos</li>
    </ol>
  </nav>
    <div class="form-group">
        <router-link class="btn btn-primary" tag="button" to="/contact-book-create">Cadastrar</router-link>
    
      <input class="form-control col-md-3 mb-3" type="search" style="float: right;" name="sarch" placeholder="Buscar" v-model="search">

    </div>

    <table class="table table-sm">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Cidade</th>
          <th scope="col">Telefone</th>          
          <th scope="col">Categoria</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(contactbook,i) in searching" :key="i">
          <td>{{contactbook.name}}</td>
          <td>{{contactbook.city}}</td>
          <td>{{contactbook.phone}}</td>
          <td>{{contactbook.categories.name}}</td>
          <td>        
            <router-link :to="{name:'contact-book-show',params:{id:contactbook.id}}" class="btn btn-primary mr-2" title="Visualizar"><i class="fa fa-eye"></i> </router-link>      
            <router-link :to="{name:'contact-book-edit',params:{id:contactbook.id}}" class="btn btn-warning" title="Editar"><i class="fa fa-pencil"></i></router-link>
            <button @click="DeleteContact(contactbook)" class="btn btn-danger ml-2"><i class="fa fa-trash" title="Deletar"></i></button>
          </td>    
        </tr>
      </tbody>
    </table>      
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import swal from 'sweetalert'
export default {
  name:'contact-book',
  data(){
    return {
      contactbook:{
        name:'',
        city:'',
        phone:'',
        category_id:'',
        observations:'',
      },
      search:[]
    }
  },
  created(){
    this.$store.dispatch('ContactBook/setContactBooks')
  },
  methods:{
    ...mapActions('ContactBook',['setContactBooks','removeContactBook']),

    DeleteContact(contactbook){
      swal({
            title: "Você está certo disso ?",
            text: "Depois de excluído, você não será capaz de recuperar este contato!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
              if(willDelete) {
                this.$store.dispatch('ContactBook/removeContactBook',contactbook)
                  swal("Contato deletado com sucesso!", {
                icon: "success",
                });
              }else {
                swal("Operação cancelada!");
              }
          })
        }  
  },
  computed:{
     ...mapState('ContactBook',{contactbooks:state => state.contactbooks}),
     searching:function(){
      return this.contactbooks.filter(contactbook => {
        return contactbook.name.includes(this.search)
      })
    }
  }
}
</script>

<style>

</style>