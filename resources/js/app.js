import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler'
import PostsIndex from './components/Posts/Index.vue'

const app = createApp({})

app.component('posts-index', PostsIndex) 
app.mount('#app')