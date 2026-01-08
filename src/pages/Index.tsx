import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: 'Video',
      title: 'Видео-анимация',
      description: 'Создаем захватывающие анимированные видео для вашего бренда'
    },
    {
      icon: 'Sparkles',
      title: 'Моушн-графика',
      description: 'Динамичная графика для рекламы и социальных сетей'
    },
    {
      icon: 'Zap',
      title: '3D-анимация',
      description: 'Объемные визуализации и анимированные модели'
    },
    {
      icon: 'Palette',
      title: 'Дизайн заставок',
      description: 'Эффектные интро и outro для вашего контента'
    }
  ];

  const portfolio = [
    {
      title: 'Промо Tech Startup',
      category: 'Реклама',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop'
    },
    {
      title: 'Заставка Fashion Brand',
      category: 'Брендинг',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    },
    {
      title: '3D Product Demo',
      category: '3D-визуализация',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop'
    },
    {
      title: 'Анимация для соцсетей',
      category: 'Контент',
      image: 'https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=800&h=600&fit=crop'
    }
  ];

  const process = [
    { step: '01', title: 'Бриф', desc: 'Обсуждаем идею и цели' },
    { step: '02', title: 'Концепт', desc: 'Разрабатываем визуальную концепцию' },
    { step: '03', title: 'Анимация', desc: 'Создаем магию движения' },
    { step: '04', title: 'Финализация', desc: 'Полировка и сдача проекта' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold gradient-text">LZT</h1>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#process" className="hover:text-primary transition-colors">Процесс</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="gradient-bg hover-glow">
            Начать проект
          </Button>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-glow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-6 z-10 text-center">
          <div className="animate-fade-in">
            <h2 className="text-7xl md:text-9xl font-extrabold mb-6 gradient-text animate-float">
              LZT MOTION
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Превращаем идеи в визуальные истории через силу анимации
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="gradient-bg text-lg px-8 py-6 hover-scale hover-glow">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо-рил
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale border-2 border-primary">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section id="services" className="py-32 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения в моушн-дизайне для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="bg-card border-border hover-scale hover-glow cursor-pointer transition-all"
                onMouseEnter={() => setActiveService(idx)}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6 ${
                    activeService === idx ? 'animate-float' : ''
                  }`}>
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Портфолио</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Наши лучшие работы, которыми мы гордимся
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl hover-scale cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-sm text-primary font-semibold">{item.category}</span>
                    <h3 className="text-3xl font-bold mt-2">{item.title}</h3>
                    <Button className="mt-4 gradient-bg">
                      <Icon name="Play" size={18} className="mr-2" />
                      Смотреть проект
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">О студии LZT</h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Мы - команда креативных профессионалов, которые живут и дышат анимацией. 
                С 2020 года создаем визуальные истории, которые вдохновляют и продают.
              </p>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Наша миссия - сделать ваш бренд незабываемым через силу движения и цвета.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-5xl font-bold gradient-text mb-2">150+</div>
                  <div className="text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-5xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-muted-foreground">Клиентов</div>
                </div>
                <div>
                  <div className="text-5xl font-bold gradient-text mb-2">4+</div>
                  <div className="text-muted-foreground">Года опыта</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl gradient-bg animate-glow" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="Sparkles" size={120} className="text-white animate-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Процесс работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачный и эффективный подход к каждому проекту
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="text-center group hover-scale">
                <div className="text-8xl font-bold gradient-text mb-6 group-hover:animate-float">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Начнем проект?</h2>
              <p className="text-xl text-muted-foreground">
                Расскажите о вашей идее, и мы превратим её в реальность
              </p>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input placeholder="Иван Иванов" className="bg-background border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="ivan@example.com" className="bg-background border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" className="bg-background border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Расскажите о проекте</label>
                    <Textarea
                      placeholder="Опишите вашу идею, цели и пожелания..."
                      className="bg-background border-border min-h-32"
                    />
                  </div>
                  <Button className="w-full gradient-bg text-lg py-6 hover-glow hover-scale">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-6 mt-12">
              <Button variant="outline" size="lg" className="hover-scale border-2 border-primary">
                <Icon name="Mail" size={20} className="mr-2" />
                hello@lzt.studio
              </Button>
              <Button variant="outline" size="lg" className="hover-scale border-2 border-secondary">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (999) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-4xl font-bold gradient-text">LZT</div>
            <div className="flex gap-6">
              <a href="#" className="hover-scale">
                <Icon name="Instagram" size={24} className="text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="#" className="hover-scale">
                <Icon name="Youtube" size={24} className="text-muted-foreground hover:text-secondary transition-colors" />
              </a>
              <a href="#" className="hover-scale">
                <Icon name="Linkedin" size={24} className="text-muted-foreground hover:text-accent transition-colors" />
              </a>
            </div>
            <div className="text-muted-foreground">
              © 2024 LZT Motion Studio. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
