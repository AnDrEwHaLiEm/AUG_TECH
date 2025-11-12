import SafetyZoneHeader from '@/components/layout/SafetyZoneHeader';
import Footer from '@/components/layout/Footer';
import SafetyZoneSection1 from '@/components/sections/SafetyZoneSection1';
import SafetyZoneSection2 from '@/components/sections/SafetyZoneSection2';
import SafetyZoneSection3 from '@/components/sections/SafetyZoneSection3';
import SafetyZoneSection4 from '@/components/sections/SafetyZoneSection4';
import SafetyZoneSection5 from '@/components/sections/SafetyZoneSection5';
import SafetyZoneSection6 from '@/components/sections/SafetyZoneSection6';
import SafetyZoneSection7 from '@/components/sections/SafetyZoneSection7';

export default function SafetyZonePage() {
  return (
    <main className="min-h-screen" style={{ 
      width: '100%',
      maxWidth: '100vw',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      <SafetyZoneHeader />
      <SafetyZoneSection1 />
      <SafetyZoneSection2 />
      <SafetyZoneSection3 />
      <SafetyZoneSection4 />
      <SafetyZoneSection5 />
      <SafetyZoneSection6 />
      <SafetyZoneSection7 />
      <Footer />
    </main>
  );
}
