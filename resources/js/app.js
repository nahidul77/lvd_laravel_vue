import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler'
import PostsIndex from './components/Posts/Index.vue'
import PostsCompose from './components/Posts/Compose.vue'

const app = createApp({})

app.component('posts-index', PostsIndex)
app.component('posts-compose', PostsCompose)
app.mount('#app')
