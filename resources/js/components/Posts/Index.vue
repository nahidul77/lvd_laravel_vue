<template>
  <div class="mb-4">
    <select v-model="selectedCategory" name="" id="">
      <option value="" selected>-- Filter by category --</option>
      <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
    </select>
  </div>
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

export default {
  data() {
    return {
      posts : [],
      categories : [],
      selectedCategory : ''
    }
  },
  mounted() {
    this.fetchPosts(),
    this.fetchCategories()
  },
  methods : {
    fetchPosts() {
      axios.get('/api/posts')
      .then(response => this.posts = response.data.data)
      .catch(error => console.log(error))
    },
    fetchCategories() {
      axios.get('/api/categories')
      .then(response => this.categories = response.data.data)
      .catch(error => console.log(error))
    }
  }
}

</script>
