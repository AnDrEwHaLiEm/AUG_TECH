'use client';
import { FaBullseye, FaRegPaperPlane } from 'react-icons/fa';
import { GoGoal } from 'react-icons/go';
import { TbMessage2Heart } from 'react-icons/tb';

export default function SafetyZoneSection2() {
  return (
    <section
      id="about-safetyzone"
      className="w-full py-12  flex flex-col items-center text-center px-4"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
         <span className="text-[#bfa45a]"> عن سيفتي زون </span>
      </h2>

      {/* Underline */}
      <div className="w-56 h-1 bg-linear-to-r from-[#F6E468] to-[#90853D] mb-8 mt-2" style={{ maxWidth: '90%' }}></div>

      {/* Content Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full">
        {/* Vision Card */}
        <div className="bg-[#faf8f2] rounded-2xl shadow-md p-8 flex flex-col justify-between items-center border border-[#C7A64E] hover:shadow-lg transition duration-300">
          <div className="flex items-center gap-2 mb-4">
            <GoGoal  className="text-[#bfa45a] text-2xl" />
            <h3 className="text-2xl font-semibold text-gray-800">رؤيتنا</h3>
          </div>
          {/* Underline */}
      <div className="h-[0.5] bg-[#c4c1c1] mb-8" style={{ width: '100%', maxWidth: '320px' }}></div>
          <p className="text-gray-700 text-lg leading-relaxed">
            أن نكون المنصة الرائدة والأكثر ابتكارًا في تقديم خدمات السلامة لضمان أعلى معايير الأمان
            والسلامة لمختلف المنشآت المدنية.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-[#faf8f2] rounded-2xl shadow-md p-8 flex flex-col justify-between items-center border border-[#C7A64E] hover:shadow-lg transition duration-300">
          <div className="flex items-center gap-2 mb-4">
            <TbMessage2Heart  className="text-[#bfa45a] text-2xl" />
            <h3 className="text-2xl font-semibold text-gray-800 ">رسالتنا</h3>
          </div>
             {/* Underline */}
      <div className="h-[0.5] bg-[#c4c1c1] mb-8" style={{ width: '100%', maxWidth: '320px' }}></div>
          <p className="text-gray-700 text-lg leading-relaxed">
            توفير حلول تقنية سلسة وفعالة تربط المنشآت التجارية بمزودي الخدمات المعتمدين، لتبسيط
            إجراءات التعاقد وإدارة الصيانة وضمان جاهزية أنظمة السلامة.
          </p>
        </div>
      </div>
    </section>
  );
}
