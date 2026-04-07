<template>
    <section class="about-block">
        <div class="about-block__inner">
            <div class="about-block__content">
                <span class="about-block__eyebrow">О нас</span>
                <h2 class="about-block__title">Современный подход к разработке</h2>
                <p class="about-block__text">
                    Мы создаем удобные интерфейсы, которые работают быстро и адаптируются под любые устройства.
                    Простота, эффективность и современный дизайн — в основе каждой нашей реализации.
                </p>
                <div class="about-block__stats">
                    <div class="about-block__stat">
                        <strong>12+</strong>
                        <span>лет опыта</span>
                    </div>
                    <div class="about-block__stat">
                        <strong>150+</strong>
                        <span>реализованных проектов</span>
                    </div>
                    <div class="about-block__stat">
                        <strong>24/7</strong>
                        <span>поддержка клиентов</span>
                    </div>
                </div>
                <button class="about-block__button" type="button">Узнать больше</button>
            </div>

            <div class="about-block__media">
                <div class="about-block__card">
                    <div class="about-block__card-header">
                        <span>Наши ценности</span>
                    </div>
                    <p class="about-block__card-text">
                        Легкая адаптация под задачи бизнеса, прозрачная коммуникация и надежность на каждом этапе.
                    </p>
                    <div class="about-block__card-meta">
                        <span>UI/UX дизайн</span>
                        <span>Frontend</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
.about-block {
    padding: 48px 24px;
    background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
}
.about-block__inner {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 32px;
    grid-template-columns: 1.2fr 0.8fr;
    align-items: center;
}
.about-block__content {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.about-block__eyebrow {
    display: inline-block;
    color: #2563eb;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.85rem;
}
.about-block__title {
    font-size: clamp(2rem, 3vw, 3rem);
    margin: 0;
    line-height: 1.05;
    color: #111827;
}
.about-block__text {
    color: #4b5563;
    line-height: 1.75;
    max-width: 680px;
}
.about-block__stats {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}
.about-block__stat {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 18px 20px;
    min-width: 140px;
}
.about-block__stat strong {
    display: block;
    font-size: 1.5rem;
    color: #111827;
}
.about-block__stat span {
    color: #6b7280;
    font-size: 0.95rem;
}
.about-block__button {
    width: fit-content;
    border: none;
    background: #2563eb;
    color: #ffffff;
    padding: 14px 26px;
    border-radius: 999px;
    cursor: pointer;
    font-weight: 600;
    transition: transform 0.2s ease, background-color 0.2s ease;
}
.about-block__button:hover {
    background: #1d4ed8;
    transform: translateY(-1px);
}

.about-block__media {
    display: flex;
    justify-content: center;
}
.about-block__card {
    width: 100%;
    max-width: 420px;
    background: #1f2937;
    color: #f9fafb;
    border-radius: 28px;
    padding: 28px;
    box-shadow: 0 25px 80px rgba(15, 23, 42, 0.18);
}
.about-block__card-header {
    font-size: 0.95rem;
    color: #93c5fd;
    margin-bottom: 18px;
}
.about-block__card-text {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 24px;
}
.about-block__card-meta {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}
.about-block__card-meta span {
    background: rgba(255, 255, 255, 0.08);
    padding: 10px 14px;
    border-radius: 999px;
    font-size: 0.9rem;
}

@media (max-width: 900px) {
    .about-block__inner {
        grid-template-columns: 1fr;
    }
}
</style>