<template>
  <table class="table-auto">
    <thead>
      <tr>
        <th>SL</th>
        <th>Title</th>
        <th>Post</th>
        <th>Created at</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.content }}</td>
        <td>{{ post.created_at }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  data() {
    return {
      posts : []
    }
  },
  mounted() {
    this.fetchPosts()
  },
  methods : {
    fetchPosts() {
      axios.get('/api/posts')
      .then(response => this.posts = response.data)
      .catch(error => console.log(error))
    }
  }
}

</script>
