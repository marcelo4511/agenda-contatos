<template>
  <aside>
   
     <ul class="title">
      <router-link to="/" tag="span">
        <li>
         <i class="fa fa-home"></i> Home
        </li>
       </router-link>

       <router-link to="/contact-book" tag="span">
       <li>
        <i class="fa fa-address-card"></i> Contatos
       </li>
       </router-link>
       
       <router-link to="/categories" tag="span">
       <li>
        <i class="fa fa-folder"></i> Categorias
       </li>
       </router-link>
     </ul>
  </aside>
</template>

<script>

export default {
  
 
}
</script>
<style>

    aside{
      grid-area: lado;
        background-color:black;
    }
   
    aside ul{
      margin-top: 100px;
    }
    aside ul li {
      display: flex;
      font-family: Arial, Helvetica, sans-serif;
      justify-content: flex-start;
      align-items: center;
      text-align: center;
      font-size: 25px;
      height: 80px;
      padding: 10px;
      color:#fff;
      text-decoration: none;
      cursor: pointer;
    }

    aside ul li:hover{
      background-color: blue;
      color: #fff;
      transition: 3ms;
      text-decoration: none;
    }

    
     aside ul li a{
      text-decoration: none;
    }

    @media(max-width:768px) {
      aside {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      aside a {
        display: inline;
        padding: 10px;
        margin:0px;
        color: black;
      }

      aside{
        justify-content: space-around;
      }

            
    }
       @media(max-width:576px) {
        aside ul{
        margin-top: 25px;
        height: 25px;
        padding: 10px;
        }

        aside ul li {
        display: flex;
        font-family: Arial, Helvetica, sans-serif;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        font-size: 25px;
        height: 25px;
        
        color:#fff;
        text-decoration: none;
        cursor: pointer;
    }
  }
</style>