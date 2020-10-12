<template>
<div>

    <h4>Categorias</h4>
    <nav aria-label="breadcrumb mb-4">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page"><router-link to="/contact-book">Contatos</router-link></li>
        <li class="breadcrumb-item active">Visualizar</li>
        </ol>
    </nav>
    <div class="card">
        <h5 class="card-header"><i class="fa fa-user"></i> {{contactbook.name}}</h5>
        <div class="card-body">
            <h5 class="card-text"><i class="fa fa-folder"></i>Categoria: {{contactbook.categories.name}}</h5>
            <h5 class="card-text"><i class="fa fa-map-marker"></i> Cidade: {{contactbook.city}}</h5>
            <h5 class="card-text"><i class=" fa fa-phone"></i>  telefone: {{contactbook.phone}}</h5><br>
            <p class="card-text">  Observação: {{contactbook.observations}}</p>
            
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
           contactbook:{} 
        }
    },
    created(){
        this.teste(this.$route.params.id)
    },
    methods:{
       teste(id){
            axios.get(`http://localhost:8000/api/contactbooks/${id}`)
            .then(res => {
                this.contactbook = res.data
                console.log(res.data)
            })
        },
    }
    
}
</script>

<style>

</style>