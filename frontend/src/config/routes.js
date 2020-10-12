import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/template/Home'

import Category from '../components/Category/index'
import CategoryCreate from '../components/Category/create'
import CategoryEdit from '../components/Category/edit'

import ContactBook from '../components/ContactBook/index'
import ContactBookCreate from '../components/ContactBook/create'
import ContactBookEdit from '../components/ContactBook/edit'
import ContactBookShow from '../components/ContactBook/show'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component:Home
},{
    name:'categories',
    path:'/categories',                                                                                                                                                                                                                       
    component:Category
},{
    name:'category-create',
    path:'/category-create',                                                                                                                                                                                                                       
    component:CategoryCreate,
},{
    name:'category-edit',
    path:'/category/:id/edit',                                                                                                                                                                                                                       
    component:CategoryEdit,
    params:true  
},{
    name:'contact-book',
    path:'/contact-book',                                                                                                                                                                                                                       
    component:ContactBook
},{
    name:'contact-book-create',
    path:'/contact-book-create',                                                                                                                                                                                                                       
    component:ContactBookCreate,
},{
    name:'contact-book-edit',
    path:'/contact-book/:id/edit',                                                                                                                                                                                                                       
    component:ContactBookEdit,
    params:true  
},{
    name:'contact-book-show',
    path:'/contact-book/:id/show',                                                                                                                                                                                                                       
    component:ContactBookShow,
    params:true  
}]

export default new VueRouter({
    mode:'history',
    routes
})