<template>
    <section class="about-block">
        <div class="about-block__content">
            <div class="hero-section">
                <div class="hero-text">
                    <p class="hero-eyebrow">{{ t('aboutPage.servicesTitle') }}</p>
                    <h1>{{ t('aboutPage.title') }}</h1>
                    <p class="about-block__text">{{ t('aboutPage.description') }}</p>
                    <div class="hero-actions">
                        <button class="primary-button" @click="contactEmail">{{ t('aboutPage.action') }}</button>
                        <span class="hero-note">{{ t('language') }}: {{ t(`languages.${lang}`) }}</span>
                    </div>
                </div>
                <div class="hero-card">
                    <p class="hero-card__headline">{{ t('aboutPage.quote') }}</p>
                    <ul class="hero-card__list">
                        <li v-for="item in benefits" :key="item">{{ item }}</li>
                    </ul>
                </div>
            </div>

            <div class="services-section">
                <h2>{{ t('aboutPage.servicesTitle') }}</h2>
                <div class="services-grid">
                    <article v-for="item in services" :key="item" class="service-card">
                        <span class="service-icon">✔️</span>
                        <p>{{ item }}</p>
                    </article>
                </div>
            </div>

            <div class="contact-section">
                <h2>{{ t('aboutPage.contactTitle') }}</h2>
                <p class="contact-subtitle">{{ t('aboutPage.contactSubtitle') }}</p>
                <ul class="about-block__contacts">
                    <li
                        v-for="contact in contactItems"
                        :key="contact.name"
                        @click="openContact(contact.name)"
                    >
                        <span class="nav-icon">{{ contact.icon }}</span>
                        <span class="nav-text">{{ contact.label }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, inject } from 'vue'

const t = inject('t')
const lang = inject('lang')

const services = computed(() => t('aboutPage.services'))
const benefits = computed(() => t('aboutPage.benefits'))

const contactItems = computed(() => [
    { name: 'github', url: 'https://github.com/BULKkA', icon: '🐙', label: t('contact.github') },
    { name: 'discord', url: 'https://discord.com', icon: '🎮', label: t('contact.discord') },
    { name: 'email', url: 'mailto:saki.chan.2314@gmail.com', icon: '📧', label: t('contact.email') },
    { name: 'telegram', url: 'https://t.me/OlezhaPotapov', icon: '📱', label: t('contact.telegram') }
])

function openContact(contactName) {
    const contact = contactItems.value.find(c => c.name === contactName)
    if (contact) {
        window.open(contact.url, '_blank')
    }
}

function contactEmail() {
    window.open('mailto:saki.chan.2314@gmail.com', '_blank')
}
</script>

<style scoped>
.about-block {
  padding: 40px 20px;
  box-sizing: border-box;
}
.about-block__content {
  max-width: 1080px;
  margin: 0 auto;
}
.hero-section {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 24px;
  align-items: start;
  margin-bottom: 40px;
}
.hero-eyebrow {
  margin: 0 0 12px;
  color: #2563eb;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.85rem;
}
.hero-text h1 {
  margin: 0 0 20px;
  font-size: clamp(2rem, 3vw, 2.75rem);
  line-height: 1.05;
}
.about-block__text {
  font-size: 1rem;
  color: #334155;
  margin-bottom: 24px;
  line-height: 1.75;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
}
.primary-button {
  border: none;
  background: #2563eb;
  color: white;
  padding: 14px 24px;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.primary-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 30px rgba(37, 99, 235, 0.25);
}
.hero-note {
  color: #475569;
  font-size: 0.95rem;
}
.hero-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.hero-card__headline {
  margin: 0 0 10px;
  font-weight: 700;
  font-size: 1.1rem;
}
.hero-card__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}
.hero-card__list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #334155;
}
.hero-card__list li:before {
  content: '•';
  color: #2563eb;
  font-weight: 700;
}
.services-section {
  margin-bottom: 40px;
}
.services-section h2 {
  margin-bottom: 24px;
  font-size: 1.6rem;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
.service-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 18px;
  min-height: 120px;
  display: flex;
  align-items: center;
  gap: 14px;
}
.service-icon {
  font-size: 1.25rem;
}
.service-card p {
  margin: 0;
  font-size: 0.98rem;
  color: #334155;
}
.contact-section h2 {
  margin-bottom: 12px;
  font-size: 1.6rem;
}
.contact-subtitle {
  margin-bottom: 20px;
  color: #475569;
  line-height: 1.7;
}
.about-block__contacts {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.about-block__contacts li {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease;
  border-radius: 18px;
  border: 1px solid #e2e8f0;
  padding: 14px 18px;
  background: white;
}
.about-block__contacts li:hover {
  background: #eef2ff;
  transform: translateY(-1px);
}
.nav-icon {
  font-size: 1.2rem;
}
.nav-text {
  font-size: 1rem;
  font-weight: 600;
}

@media (max-width: 960px) {
  .hero-section {
    grid-template-columns: 1fr;
  }
  .services-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .about-block {
    padding: 24px 16px;
  }
  .hero-card,
  .service-card,
  .about-block__contacts li {
    padding: 16px;
  }
  .hero-actions {
    flex-direction: column;
    align-items: flex-start;
  }
  .primary-button {
    width: 100%;
  }
  .about-block__contacts {
    justify-content: stretch;
  }
  .about-block__contacts li {
    flex: 1 1 calc(50% - 12px);
  }
}
</style>