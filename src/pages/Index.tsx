import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-medical.jpg";
const Index = () => {
  const features = [{
    title: "Достоверная информация",
    description: "Только проверенные медицинские данные от ведущих специалистов и исследователей в области здравоохранения.",
    icon: "🔬"
  }, {
    title: "Персональные рекомендации",
    description: "Индивидуальный подход к каждому пациенту с учетом особенностей здоровья и медицинской истории.",
    icon: "👤"
  }, {
    title: "Удобный поиск",
    description: "Быстрый поиск симптомов, заболеваний, лекарств и ближайших медицинских учреждений.",
    icon: "🔍"
  }, {
    title: "Экспертные консультации",
    description: "Возможность получить профессиональную консультацию от квалифицированных врачей онлайн.",
    icon: "💬",
    variant: "highlighted" as const
  }];
  const testimonials = [{
    content: "Отличный ресурс для получения медицинской информации. Помог мне лучше понять свое состояние и подготовиться к визиту к врачу.",
    author: "Анна К.",
    role: "Пациент"
  }, {
    content: "Использую для консультаций с пациентами. Качественная база знаний и актуальная информация о лекарственных препаратах.",
    author: "Д-р Михаил П.",
    role: "Терапевт"
  }, {
    content: "Удобный интерфейс и понятная подача медицинской информации. Рекомендую всем, кто следит за своим здоровьем.",
    author: "Елена В.",
    role: "Медсестра"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mx-0">
          <div className="lg:col-span-8">
            <div className="mb-6">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium">
                ЗДРАВООХРАНЕНИЕ
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Как медицинская индустрия препятствует тому, что могло бы сделать страну здоровее
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Исследование показывает влияние лоббизма на политические решения в сфере здравоохранения. 
              Узнайте, как промышленность влияет на принятие важных медицинских решений.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                🔊 Прослушать статью
              </Button>
              <p className="text-sm text-muted-foreground flex items-center">
                Статья проверена врачом • <span className="text-primary ml-1">7 мин чтения</span>
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Медицинская индустрия и лоббизм" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Лоббисты медицинской индустрии влияют на политические решения
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Наши преимущества
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Предоставляем достоверную медицинскую информацию и качественные услуги здравоохранения
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} variant={feature.variant} />)}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-medical-gray py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Отзывы пользователей
            </h2>
            <p className="text-lg text-muted-foreground">
              Что говорят наши пациенты и врачи
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => <Testimonial key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} />)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-primary to-secondary text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Получите персональную консультацию
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Запишитесь на консультацию к квалифицированному специалисту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Записаться на прием
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Узнать больше
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>;
};
export default Index;