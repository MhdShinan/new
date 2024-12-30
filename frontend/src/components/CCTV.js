import { useState } from 'react';
import Hikvision from '../assets/images/hikvision.jpg';
import Camera2 from '../assets/images/camera1.jpg';
import Camera from '../assets/images/camera2.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const tabs = [
  {
    id: 'uniview',
    name: 'Uniview',
    title: 'Uniview',
    description: "Uniview's IP cameras combine advanced AI analytics, exceptional image clarity and reliable performance. These solutions offer comprehensive security features including facial recognition, perimeter protection and behavior analytics. From basic to advanced models, these systems provide scalable, cost-effective surveillance solutions for residential, commercial and enterprise applications.",
    analogDescription: "Uniview's analog systems deliver reliable surveillance through proven technology. Features include HD video quality, easy installation and robust durability. These systems offer straightforward setup, stable performance and excellent value for basic security needs. Ideal for small-scale surveillance applications."
  },
  {
    id: 'hikvision',
    name: 'Hikvision',
    title: 'Hikvision',
    About: 'Hikvision leverages advanced technologies in machine perception, artificial intelligence, and big data to drive the future of AIoT, enhancing connectivity, intelligence, and convenience in everyday life. The company offers a comprehensive range of physical security products and AI-powered integrated solutions, including video security, access control, and alarm systems, tailored to diverse industry needs. With expertise in vertical markets such as smart cities, transportation, retail, logistics, and education, Hikvision delivers innovative and intelligent solutions to meet specific demands.',
    description: "HIKVISION IP cameras feature AI-powered analytics, ultra-HD video quality and comprehensive security features. Advanced capabilities include facial recognition, crowd analysis, vehicle recognition and thermal imaging. These systems deliver exceptional performance in demanding environments, combining cutting-edge technology with user-friendly operation to meet complex security requirements.",
    analogDescription: "HIKVISION's analog systems offer traditional but high-performance HD surveillance. Features include reliable video quality, simple setup and proven durability. These systems provide stable monitoring with minimal maintenance, making them ideal for basic security needs."
  },
  {
    id: 'dahua',
    name: 'Dahua',
    title: 'Dahua',
    description: "Dahua's IP camera lineup combines superior image quality with advanced AI capabilities. Key innovations include smart motion detection, facial recognition and perimeter protection. These systems deliver reliable performance, easy integration and scalable solutions. Ideal for both small businesses and large enterprise deployments.",
    analogDescription: "Dahua's analog systems offer reliable, straightforward surveillance with advanced features. Benefits include HD video quality, simple installation and proven reliability. These traditional systems provide dependable monitoring without complex setup. Perfect for basic security needs."
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('uniview');
  const images = [Hikvision, Camera, Camera2];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-blue-800">CCTV Solutions</h1>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content */}
        {tabs.map((tab) => (
          <div key={tab.id} className={`${activeTab === tab.id ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Hero Image */}
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
                {/* Hero Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
</div>


                {/* Swiper (Sliding Images) */}
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 2000 }}
                  loop={true}
                  className="absolute inset-0 w-full h-full"
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Description Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-blue-800">IP</h3>
                  <p className="text-sm sm:text-base text-gray-600">{tab.description}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-blue-800">Analog</h3>
                  <p className="text-sm sm:text-base text-gray-600">{tab.analogDescription}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
