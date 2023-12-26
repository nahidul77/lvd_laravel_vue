<template>
  <table class="table-auto">
    <thead>
      <tr>
        <th>SL</th>
        <th>Title</th>
        <th>Category</th>
        <th>Post</th>
        <th>Created at</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.category }}</td>
        <td>{{ post.content }}</td>
        <td>{{ post.created_at }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { onMounted } from 'vue';
import usePosts from '../../composables/posts';

export default {
    setup() {
        const { posts , getPosts } = usePosts();

        onMounted(getPosts)

        return { posts };
    }
}

</script>
