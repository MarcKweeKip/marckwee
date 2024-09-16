'use client';
import Image from 'next/image';
import useScrollBackgroundColor from './hooks/useScrollBackgroundColor';
import Header from './components/header';

import Panel from './components/panel';
import Slider from './components/slider';

import About from './components/about';
import Contact from './components/contact';
import { PageProvider } from './context/PageContext';
import Expertise from './components/expertise';
import References from './components/references';
import Cta from './components/cta';

// @refresh reset
export default function Home() {
  useScrollBackgroundColor();

  return (
    <PageProvider>
      <Contact />
      <Header />
      <Panel color='#403A42'>
        <Expertise />
      </Panel>
      {/* <Panel color='#312D33'>
        <Slider />
      </Panel> */}
      <div className="min-h-screen bg-gradient-to-b from-[#8073B2] to-[#6DA7A3]">
        <References />
      </div>
      {/* <Panel color='#000000'>
        
      </Panel> */}
      <Panel color='#32AF7F'>
        <About />
      </Panel>
      <Panel color='#EBF3E0'>
        <Cta />
      </Panel>


      {/* <Panel color='#FAF089'>Panel 4</Panel> */}
    </PageProvider>
  );
}
