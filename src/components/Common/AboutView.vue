<template>
    <section class="about-block">
        <div class="about-block__content">
            <p class="about-block__text">
                Сайт предназначен для ведения личного блога и публикации дневников разработки. 
                Здесь я буду щитпостить как никогда, а также делиться деталями разработки.
            </p>
            <ul class="about-block__contacts">
            <li
                v-for="contact in contacts"
                :key="contact.name"
                @click="openContact(contact.name)"
            >
                <span class="nav-icon" >{{ contact.icon }}</span>
                <span class="nav-text" :href="contact.url" target="_blank">{{ contact.label }}</span>
            </li>
        </ul>
        </div>
    </section>
</template>

<script setup>

const contacts = [
    { name: 'github', url: 'https://github.com/BULKkA', label: 'GitHub', icon: '🐙' },
    { name: 'discord', url: 'https://discord.com', label: 'Discord', icon: '🎮' },
    { name: 'email', url: 'mailto:saki.chan.2314@gmail.com', label: 'Email', icon: '📧' },
    { name: 'telegram', url: 'https://t.me/OlezhaPotapov', label: 'Telegram', icon: '📱' },
]

function openContact(contactName) {
    const contact = contacts.find(c => c.name === contactName)
    if (contact) {
        window.open(contact.url, '_blank')
    }
}

</script>

<style scoped>
.about-block {
  padding: 40px 20px;
  box-sizing: border-box;
}
.about-block__content {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.about-block__text {
  font-size: clamp(16px, 2vw, 18px);
  color: #333;
  margin-bottom: 30px;
  line-height: 1.65;
}
.about-block__contacts {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
.about-block__contacts li {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: color 0.3s;
}
.about-block__contacts li:hover {
  color: #1976d2;
}
.nav-icon {
  font-size: 24px;
}
.nav-text {
  font-size: 16px;
}

@media (max-width: 768px) {
  .about-block {
    padding: 24px 16px;
  }

  .about-block__content {
    padding: 0 8px;
  }

  .about-block__text {
    margin-bottom: 24px;
    font-size: 15px;
    text-align: left;
  }

  .about-block__contacts {
    gap: 12px;
    justify-content: center;
  }

  .about-block__contacts li {
    padding: 10px 12px;
    border-radius: 14px;
    background: rgba(0, 0, 0, 0.04);
    flex: 1 1 auto;
    justify-content: center;
  }

  .nav-icon {
    font-size: 20px;
  }

  .nav-text {
    font-size: 14px;
  }
}
</style>