'use client';

import { motion } from "framer-motion";

export default function SafetyZoneSection4() {
    const clientBenefits = [
        {
            title: "إدارة وتقديم الخدمات بكفاءة عالية",
            description: "ارسال الطلبات لمزودين الخدمة. - استقبل عرض سعر للطلبات. - التواصل الفوري وتتبع حالة الطلب. - جدولة زيارات الصيانة وإصدار تقارير الزيارة الموثقة",
            image: "/images/gem6.png",
        },
        {
            title: "التحسين المالي والإداري",
            description: "التوقيع الإلكتروني (للعقود أو التقارير)- الدفع إلكترونيًا (للمستحقات)- تقليل التكاليف وزيادة كفاءة العمل - القضاء على العقود والتقارير الوهمية",
            image: "/images/gem4.png",
        },
        {
            title: "التحليل والتتبع",
            description: "التقارير التحليلية الشاملة. - تنبيهات وإشعارات لكل حدث (لضمان عدم فوات أي موعد صيانة أو طلب) - تكليف موظف بالمهام",
            image: "/images/gem2.png",
        },
        {
            title: "القيمة المضافة والضمان",
            description: "تحسين تجربة العميل - الضمان الذهبي بتوفير مزود خدمة بديل في حالة عدم الالتزام مزود الخدمة بالمهام المتفق عليها ",
            image: "/images/gem8.png",
        },


    ];

    const providerBenefits = [
        {
            title: " إدارة وتقديم الخدمات بكفاءة عالية",
            description: "استقبال طلبات العملاء - تقديم عرض سعر لطلبات (العملاء) بسرعة وكفاءة - التواصل الفوري وتتبع حالة الطلب- جدولة زيارات الصيانة وإصدار تقارير الزيارة الموثقة",
            image: "/images/gem5.jpg",
        },
        {
            title: " التحسين المالي والإداري",
            description: "التوقيع الإلكتروني (للعقود أو التقارير). - تحصيل المستحقات فوري إلكترونياً. - تقليل التكاليف الإدارية وزيادة كفاءة العمل",
            image: "/images/gem7.jpg",
        },
        {
            title: "التحليل والتتبع",
            description: "التقارير التحليلية لأداء مزود الخدمة - تنبيهات وإشعارات لكل حدث (لضمان عدم فوات أي موعد أو طلب) - تكليف موظف بالمهام",
            image: "/images/gem3.jpg",
        },
        {
            title: "القيمة المضافة",
            description: "تحسين تجربة العميل والوصول إلى شريحة أوسع من العملاء",
            image: "/images/gem1.jpg",
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="safety-zone-section-4" className=" py-20 px-6 text-right font-sans">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center"
                    style={{ fontFamily: 'Cairo, sans-serif' }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    مزايا التحول الإلكتروني في سَفتي زون
                </motion.h2>
                {/* Underline */}
                <motion.div 
                    className="h-1 bg-linear-to-r from-[#F6E468] to-[#90853D] mb-6 mt-2 mx-auto" 
                    style={{ width: 'clamp(200px, 60%, 480px)', maxWidth: '90%' }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                ></motion.div>
                <motion.p
                    className="text-lg text-gray-600 leading-relaxed mb-6 text-center"
                    initial={{ opacity: 0 }}
                    style={{ fontFamily: 'Cairo, sans-serif' }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    عقدك ساري؟ خدماتنا مجانية! <br />
                    لا تنتظر انتهاء عقدك، طوّر إدارتك اليوم. سجّل الآن واستخدم منصتنا
                    لإدارة عقد صيانـتك الحالي، تتبع البلاغات، واستقبال التنبيهات بكفاءة
                    أعلى. <br />
                    كل هذا مجاناً تماماً، دون أي تكاليف عليك، أو على مزود خدمتك الحالي.
                </motion.p>

                {/* مزايا العميل */}
                <motion.h3
                    className="text-2xl font-[32px] text-[#4E4E4E] mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    style={{ fontFamily: 'Cairo, sans-serif' }}
                >
                    مزايا التحول الإلكتروني لأعمالك (للعميل)
                    <span className="font-[26px] text-[#C7A64E]" style={{ fontFamily: 'Cairo, sans-serif' }}>
                        (هذه الخدمات مجانية على العميل)
                    </span>
                </motion.h3>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
                    {clientBenefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="bg-white shadow-md  overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={benefit.image}
                                alt={benefit.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h4 className="text-[16px] text-center font-bold text-gray-800 mb-2" style={{ fontFamily: 'Cairo, sans-serif' }}>
                                    {benefit.title}
                                </h4>
                                <p className="text-gray-600 text-center font-semibold text-[14px] leading-relaxed" style={{ fontFamily: 'Cairo, sans-serif' }}>
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* مزايا المزود */}
                <motion.h3
                    className="text-2xl font-[32px] text-[#4E4E4E] mb-8"
                    style={{fontFamily:'Cairo, sans-serif'}}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    مزايا التحول الإلكتروني لأعمالك
                    <span className="font-[26px] text-[#C7A64E]" style={{fontFamily:'Cairo, sans-serif'}}>
                        (لمزود الخدمة)
                    </span>
                </motion.h3>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {providerBenefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="bg-white shadow-md  overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={benefit.image}
                                alt={benefit.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h4 className="text-[16px] text-center font-bold text-gray-800 mb-2" style={{fontFamily:'Cairo, sans-serif'}}>
                                    {benefit.title}
                                </h4>
                                <p className="text-gray-600 text-center font-semibold  text-[14px] leading-relaxed" style={{fontFamily:'Cairo, sans-serif'}}>
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
