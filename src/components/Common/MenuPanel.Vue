<template>
    <div class="menu-panel">
        <nav class="menu-nav">
            <image src="/favicon.ico" alt="Logo" class="menu-logo" />
            <ul class="menu-list">
                <li class="menu-item">
                    <a href="#" class="menu-link">Вход</a>
                </li>
                <li class="menu-item">
                    <a href="#" class="menu-link">Регистрация</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'MenuPanel',
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.menu-panel {
    border-bottom: 1px solid #ddd;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    display: block;
}

.menu-nav {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between
}

.menu-list {
    list-style: none;
    padding: 0;
    margin: 0 0 0 auto;
    display: flex;
    flex-direction: row;
    padding: 0.75rem 1.25rem;     /* вместо px */
    font-size: clamp(0.95rem, 2.5vw, 1.15rem);   
    justify-content: right;
}

.menu-item {
    margin: 0;
}

.menu-link {
    display: block;
    padding: 12px 20px;
    text-decoration: none;
    color: #333;
    transition: background-color 0.3s;
    gap: 0.5rem;
    flex-wrap: wrap;
    font-size: clamp(0.95rem, 2.5vw, 1.15rem); 
}

.menu-link:hover {
    background-color: #e0e0e0;
}

.menu-logo {
    width: 40px;
    height: 40px;
    margin-left: 1rem;
    margin-right: 1rem;
    align-self: center;
    flex-shrink: 0;
}

</style>