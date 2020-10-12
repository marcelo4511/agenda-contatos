<template>
    <div>
        <h4>Contatos</h4>
        <nav aria-label="breadcrumb mb-4">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                <li class="breadcrumb-item active" aria-current="page"><router-link to="/contact-book">Contatos</router-link></li>
                <li class="breadcrumb-item active">Editar</li>
            </ol>
        </nav>

        <form @submit.prevent="onSubmit">

            <div class="row">

                <div class="form-group w-50">
                
                    <div class="form-group col-md-12">
                        <label for="">Nome</label>
                        <input type="text" name="name" placeholder="Nome do contato" class="form-control col-md-auto" required v-model="contactbook.name">
                    </div>     

                    <div class="form-group col-md-12">
                        <label for="">Cidade</label>
                        <input type="text" name="city" placeholder="Cidade" class="form-control col-md-auto" required  v-model="contactbook.city">
                    </div>  

                    <div class="form-group col-md-12">
                        <label for="">Telefone celular</label>
                        <input type="text" name="phone" placeholder="Telefone celular" class="form-control col-md-auto" @keyup="phoneValidate()" @blur="phoneLength()" v-model="contactbook.phone">
                    </div>   
                </div>
                
                <div class="form-group w-50">
                
                    <div class="form-group col-md-12">
                            <label for="">Categoria</label>
                            <select  v-model="contactbook.category_id" required class="form-control col-md-auto">
                                <option  disabled selected value="">selecione</option>
                                <option  v-for="(category, key) in categories" v-show="category.status == 'Ativo'" :key="key" :value="category.id">{{category.name}}</option>
                            </select>
                        </div> 

                    <div class="form-group col-md-12">
                        <label for="">Observações</label>
                        <textarea class="form-control" name="observations" placeholder="Observações" cols="20" rows="5" required v-model="contactbook.observations"></textarea>
                    </div>
                </div>
            </div>

            <button type="submit" class="btn btn-info">Atualizar</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    
    data(){
        return{
            contactbook:{}
        }
    },
    created(){
       this.teste(this.$route.params.id)
       this.$store.dispatch('Category/setCategories')
    },
    methods:{
        
        onSubmit(){
          this.$store.dispatch('ContactBook/updateContactBook',this.contactbook)
          try{
            this.$toasted.global.defaultSuccess()
              setTimeout(() => {
                this.$router.push('/contact-book')
              },3000)
          }catch(e){
            this.$toasted.global.defaultError()
              console.log(e)
            }
        },
        teste(id){
            axios.get(`http://localhost:8000/api/contactbooks/${id}`)
            .then(res => {
                this.contactbook = res.data
                console.log(res.data)
            })
        },
        phoneValidate(){
            var x = this.contactbook.phone.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
            this.contactbook.phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        },   
        
        phoneLength(){
            if(this.contactbook.phone.length < 15){
                alert('Telefone celular inválido!')
            }
        } 
    },
    computed:{
        ...mapState('Category',{categories:state => state.categories}),
    }
}
</script>

<style>

</style>