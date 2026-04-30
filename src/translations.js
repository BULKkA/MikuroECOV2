export const messages = {
  ru: {
    menu: {
      login: 'Вход',
      register: 'Регистрация'
    },
    nav: {
      home: 'Домик',
      feed: 'Лента',
      profile: 'Профиль',
      about: 'Обо мне'
    },
    index: {
      title: 'Добро пожаловать в MikuroECOV2',
      description: 'Это главная страница вашего личного блога и дневников разработки. Здесь вы можете найти общую информацию, а свежие записи доступны во вкладке «Лента».',
    },
    login: {
      title: 'Вход',
      subtitle: 'Здесь будет форма входа.'
    },
    register: {
      title: 'Регистрация',
      subtitle: 'Здесь будет форма регистрации.'
    },
    profile: {
      title: 'Профиль пользователя',
      subtitle: 'Здесь будет информация о профиле и настройки.'
    },
    postDetail: {
      title: 'Детали поста',
      idLabel: 'Просмотр поста с ID',
      notFound: 'Пост не найден.',
      description: 'Здесь будет отображаться полный текст поста, медиа и комментарии.'
    },
    admin: {
      title: 'Панель администратора',
      subtitle: 'Здесь будут инструменты для управления пользователями и контентом.'
    },
    roll: {
      emptyState: 'Нет постов для отображения',
      author: 'Автор',
      tags: 'Теги'
    },
    notFound: {
      title: '404 - Страница не найдена',
      subtitle: 'Извините, запрашиваемая страница не существует.'
    },
    aboutPage: {
      title: 'Я помогаю бизнесу внедрять автоматизацию',
      subtitle: 'Автоматизация 1С, Python-боты, сайты и торговое оборудование',
      description: 'Я создаю решения для автоматизации рутинных задач, интегрирую 1С и торговую технику, разрабатываю ботов для сайтов, а также настраиваю стабильные рабочие процессы для бизнеса.',
      servicesTitle: 'Услуги',
      services: [
        'Автоматизация 1С: отчеты, обмены, документооборот',
        'Разработка Python-ботов и скриптов для веб-автоматизации',
        'Интеграция торгового оборудования: кассы, весы, терминалы',
        'Настройка потоков данных между ERP и сайтом'
      ],
      benefitsTitle: 'Что вы получите',
      benefits: [
        'Уменьшение ручной работы и ошибок',
        'Быстрый запуск решения и рабочая поддержка',
        'Совместимость с 1С и торговым оборудованием',
        'Адаптивное решение под ваш бизнес'
      ],
      contactTitle: 'Где со мной связаться',
      contactSubtitle: 'Выберите удобный канал, чтобы получить коммерческое предложение и консультацию.',
      action: 'Заказать услугу',
      quote: 'Готовы автоматизировать бизнес-процессы и вывести работу на новый уровень?'
    },
    contact: {
      github: 'GitHub',
      discord: 'Discord',
      email: 'Email',
      telegram: 'Telegram'
    },
    language: 'Язык',
    languages: {
      ru: 'Русский',
      en: 'English'
    }
  },
  en: {
    menu: {
      login: 'Login',
      register: 'Register'
    },
    nav: {
      home: 'Home',
      feed: 'Feed',
      profile: 'Profile',
      about: 'About'
    },
    index: {
      title: 'Welcome to MikuroECOV2',
      description: 'This is the main page of your personal blog and development journal. You can find general information here, while the latest posts are available in the Feed tab.',
    },
    login: {
      title: 'Login',
      subtitle: 'The login form will be here.'
    },
    register: {
      title: 'Register',
      subtitle: 'The registration form will be here.'
    },
    profile: {
      title: 'User Profile',
      subtitle: 'Profile information and settings will be displayed here.'
    },
    postDetail: {
      title: 'Post details',
      idLabel: 'Viewing post with ID',
      notFound: 'Post not found.',
      description: 'The full post text, media and comments will appear here.'
    },
    admin: {
      title: 'Admin panel',
      subtitle: 'Tools for managing users and content will be available here.'
    },
    roll: {
      emptyState: 'No posts available',
      author: 'Author',
      tags: 'Tags'
    },
    notFound: {
      title: '404 - Page not found',
      subtitle: 'Sorry, the requested page does not exist.'
    },
    aboutPage: {
      title: 'I help businesses implement automation',
      subtitle: '1C automation, Python bots, websites and retail equipment',
      description: 'I build automation solutions for repetitive tasks, integrate 1C and retail hardware, develop bots for websites, and establish reliable workflows for business.',
      servicesTitle: 'Services',
      services: [
        '1C automation: reports, data exchange, document workflow',
        'Python bots and web automation scripts',
        'Retail hardware integration: cash registers, scales, terminals',
        'Data synchronization between ERP and website'
      ],
      benefitsTitle: 'What you get',
      benefits: [
        'Less manual work and fewer errors',
        'Fast deployment and ongoing support',
        'Compatibility with 1C and retail equipment',
        'Solutions tailored to your business'
      ],
      contactTitle: 'Contact channels',
      contactSubtitle: 'Choose the best way to get a quote and consultation.',
      action: 'Order service',
      quote: 'Ready to automate business processes and take your work to the next level?'
    },
    contact: {
      github: 'GitHub',
      discord: 'Discord',
      email: 'Email',
      telegram: 'Telegram'
    },
    language: 'Language',
    languages: {
      ru: 'Русский',
      en: 'English'
    }
  }
}

export function translate(lang, key) {
  return key.split('.').reduce((obj, part) => obj?.[part], messages[lang]) || key
}
