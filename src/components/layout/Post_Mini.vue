<template>
    <div class="post-mini">
        <div class="post-header">
            <img :src="author.avatar" :alt="author.name" class="avatar" />
            <div class="author-info">
                <h4>{{ author.name }}</h4>
                <span class="date">{{ formattedDate }}</span>
            </div>
        </div>
        <div class="post-content">
            <h3>{{ title }}</h3>
            <p>{{ content }}</p>
        </div>
        <div class="post-actions">
            <button @click="likePost" :class="{ liked: isLiked }">
                {{ isLiked ? 'Unlike' : 'Like' }} ({{ likes }})
            </button>
            <button @click="sharePost">Share</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostMini',
    props: {
        post: {
            type: Object,
            required: true,
            validator(value) {
                return value.title && value.content && value.author && value.date && value.likes !== undefined;
            }
        }
    },
    data() {
        return {
            isLiked: false
        };
    },
    computed: {
        title() {
            return this.post.title;
        },
        content() {
            return this.post.content;
        },
        author() {
            return this.post.author;
        },
        formattedDate() {
            return new Date(this.post.date).toLocaleDateString();
        },
        likes() {
            return this.post.likes;
        }
    },
    methods: {
        likePost() {
            this.isLiked = !this.isLiked;
            // Here you could emit an event to update the parent component
            this.$emit('like', this.post.id);
        },
        sharePost() {
            // Implement share logic
            alert('Post shared!');
        }
    }
};
</script>

<style scoped>
.post-mini {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
    background-color: #fff;
}

.post-header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 12px;
}

.author-info h4 {
    margin: 0;
    font-size: 16px;
}

.date {
    font-size: 12px;
    color: #666;
}

.post-content h3 {
    margin: 0 0 8px 0;
    font-size: 18px;
}

.post-content p {
    margin: 0;
    color: #333;
}

.post-actions {
    margin-top: 12px;
    display: flex;
    gap: 8px;
}

button {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button.liked {
    background-color: #007bff;
    color: white;
}
</style>