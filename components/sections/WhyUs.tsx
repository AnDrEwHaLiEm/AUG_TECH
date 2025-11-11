import { Eye, Award, Lightbulb, Headphones } from 'lucide-react';
import { FEATURES } from '@/lib/constants';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import ScrollFadeIn from '@/components/animations/ScrollFadeIn';

const iconMap = {
  Eye,
  Award,
  Lightbulb,
  HeadphonesIcon: Headphones,
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-white dark:bg-dark-950">
      <Container>
        <ScrollFadeIn>
          <SectionHeader
            title="ماذا نقدم؟"
            subtitle="مميزات تجعلنا الخيار الأمثل لعملائنا"
          />
        </ScrollFadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <ScrollFadeIn key={feature.id} direction="up" delay={index * 0.1}>
                <Card className="h-full text-center group">
                  <div className="flex flex-col items-center space-y-4">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {IconComponent && (
                        <IconComponent className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                      )}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollFadeIn>
            );
          })}
        </div>

        {/* Additional Content */}
        <ScrollFadeIn delay={0.6}>
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              نحن نؤمن بأن نجاح عملائنا هو نجاحنا، لذلك نسعى جاهدين لتقديم أفضل الخدمات
              والحلول التي تساعدهم على تحقيق أهدافهم وتطلعاتهم
            </p>
          </div>
        </ScrollFadeIn>
      </Container>
    </section>
  );
}
