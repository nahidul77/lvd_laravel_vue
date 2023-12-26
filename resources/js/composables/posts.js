import axios from "axios";
import { Ref } from "vue";

export default function usePosts() {

    const posts = ref([]); // using ref makes posts variable reactive.

    const getPosts = async () => {
        axios.get('/api/posts')
        .then(response => {
            this.posts = response.data;
        })
    }
    return {posts, getPosts}
}
