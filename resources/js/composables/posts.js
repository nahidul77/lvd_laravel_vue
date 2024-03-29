import axios from "axios";
import { ref } from "vue";

export default function usePosts() {

    const posts = ref([]); // using ref makes posts variable reactive.

    const getPosts = async () => {
        axios.get('/api/posts')
        .then(response => {
            posts.value = response.data;
        })
    }
    return {posts, getPosts}
}
