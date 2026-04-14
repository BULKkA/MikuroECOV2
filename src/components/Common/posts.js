import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
    currentPost: null,
    loading: false,
    error: null,
    pagination: {
      page: 1,
      limit: 10,
      total: 0,
      hasNext: false,
    },
  }),
  getters: {
    getAllPosts: (state) => state.posts,
    getPostById: (state) => (id) => state.posts.find(post => post.id === id),
  },
  actions: {
    async fetchPosts(params = {}) {
      this.loading = true;
      this.error = null;
      try {
        // Simulate API call
        console.log('Fetching posts with params:', params);
        await new Promise(resolve => setTimeout(resolve, 1500));
        const newPosts = [
          { id: 1, title: 'First Post', excerpt: 'This is the first post.', author: 'Admin', date: '2023-01-01', tags: ['Vue'] },
          { id: 2, title: 'Second Post', excerpt: 'Another interesting post.', author: 'Editor', date: '2023-01-02', tags: ['JS'] },
        ];
        this.posts = newPosts; // For simplicity, later append for infinite scroll
        this.pagination.total = newPosts.length;
        this.pagination.hasNext = false;
        console.log('Posts fetched:', this.posts);
      } catch (err) {
        this.error = 'Failed to fetch posts: ' + err.message;
      } finally {
        this.loading = false;
      }
    },
    async fetchPostById(id) {
      this.loading = true;
      this.error = null;
      try {
        console.log('Fetching post by ID:', id);
        await new Promise(resolve => setTimeout(resolve, 1000));
        const post = { id: id, title: `Post ${id}`, body: `Content of post ${id}. This is a **markdown** example.`, author: 'Test Author', date: '2023-01-01', media: [] };
        this.currentPost = post;
        console.log('Post fetched:', this.currentPost);
      } catch (err) {
        this.error = 'Failed to fetch post: ' + err.message;
      } finally {
        this.loading = false;
      }
    },
    addPost(post) { this.posts.push(post); },
    updatePost(updatedPost) {
      const index = this.posts.findIndex(p => p.id === updatedPost.id);
      if (index !== -1) { this.posts[index] = updatedPost; }
    },
    deletePost(id) { this.posts = this.posts.filter(p => p.id !== id); },
    clearPosts() {
      this.posts = []; this.currentPost = null;
      this.pagination = { page: 1, limit: 10, total: 0, hasNext: false };
    }
  },
});