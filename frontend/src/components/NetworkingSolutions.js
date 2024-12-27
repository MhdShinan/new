import React, { useState, useEffect } from 'react';

const companies = {
  cisco: {
    name: 'Cisco',
    images: [
      '/placeholder.svg?height=400&width=800&text=Cisco1',
      '/placeholder.svg?height=400&width=800&text=Cisco2',
      '/placeholder.svg?height=400&width=800&text=Cisco3'
    ],
    content: {
      switches: {
        title: "Enterprise Switches",
        description: "Cisco switches are designed for performance and reliability, supporting scalable networks for enterprises and SMBs. Their advanced switching capabilities ensure smooth data traffic and low latency.",
        icon: "🔄"
      },
      manageableSwitches: {
        title: "Smart Managed Switches",
        description: "Cisco manageable switches enable superior control over network traffic with advanced configurations. Equipped with features like VLAN, QoS, and port mirroring.",
        icon: "⚡"
      },
      cat6Wiring: {
        title: "Cat 6 Infrastructure",
        description: "Cisco Cat 6 wiring ensures high-speed data transmission with minimal crosstalk and interference. Designed for gigabit and multi-gigabit ethernet connections.",
        icon: "🔌"
      },
      loadBalancers: {
        title: "Advanced Load Balancing",
        description: "Cisco load balancers provide efficient traffic distribution across servers, enhancing application availability and performance.",
        icon: "⚖"
      }
    }
  },
  ruijie: {
    name: 'Ruijie',
    images: [
      '/placeholder.svg?height=400&width=800&text=Ruijie1',
      '/placeholder.svg?height=400&width=800&text=Ruijie2',
      '/placeholder.svg?height=400&width=800&text=Ruijie3'
    ],
    content: {
      switches: {
        title: "Next-Gen Switches",
        description: "Ruijie switches deliver enterprise-grade performance with innovative features for modern networks. Advanced security protocols ensure data protection.",
        icon: "🔒"
      },
      manageableSwitches: {
        title: "Intelligent Management",
        description: "Ruijie manageable switches offer comprehensive network management capabilities with intuitive interfaces and robust security features.",
        icon: "🎯"
      },
      cat6Wiring: {
        title: "High-Performance Cabling",
        description: "Ruijie Cat 6 solutions provide reliable, high-speed connectivity with superior electromagnetic interference protection.",
        icon: "⚡"
      },
      loadBalancers: {
        title: "Smart Load Distribution",
        description: "Ruijie load balancing solutions ensure optimal resource utilization and seamless failover capabilities.",
        icon: "🔄"
      }
    }
  },
  netgear: {
    name: 'NETGEAR',
    images: [
      '/placeholder.svg?height=400&width=800&text=Netgear1',
      '/placeholder.svg?height=400&width=800&text=Netgear2',
      '/placeholder.svg?height=400&width=800&text=Netgear3'
    ],
    content: {
      switches: {
        title: "Business Switches",
        description: "NETGEAR switches combine reliability with ease of use, perfect for small to medium businesses. Smart switching features enhance network efficiency.",
        icon: "💼"
      },
      manageableSwitches: {
        title: "Pro Series Management",
        description: "NETGEAR managed switches provide advanced traffic management and monitoring capabilities with user-friendly interfaces.",
        icon: "📊"
      },
      cat6Wiring: {
        title: "Professional Cabling",
        description: "NETGEAR Cat 6 solutions deliver consistent high-speed performance with easy installation and maintenance.",
        icon: "🔧"
      },
      loadBalancers: {
        title: "Traffic Optimization",
        description: "NETGEAR load balancers optimize network traffic distribution with intelligent algorithms and real-time monitoring.",
        icon: "📈"
      }
    }
  }
};

function NetworkingSolutions() {
  const [activeCompany, setActiveCompany] = useState('cisco');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const interval = setInterval(() => {
      if (!isLoading) {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [isLoading]);

  const handleCompanyClick = (company) => {
    setActiveCompany(company);
    setCurrentSlide(0);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-[#005880]">
          Networking Solutions
        </h1>

        <div className="flex justify-center mb-8">

        <div className="inline-flex rounded-md shadow-sm space-x-4" role="group">
  {Object.keys(companies).map((company) => (
    <button
      key={company}
      className={`px-4 py-2 text-sm font-medium ${
        activeCompany === company
          ? 'bg-[#005880] text-white'
          : 'bg-white text-[#005880] hover:bg-gray-50'
      } border border-[#005880] focus:z-10 focus:ring-2 focus:ring-[#005880] transition-colors`}
      onClick={() => handleCompanyClick(company)}
    >
      {companies[company].name}
    </button>
  ))}
</div>

        </div>

        <div className="relative mb-12">
          {isLoading ? (
            <div className="flex justify-center items-center h-96">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#005880]"></div>
            </div>
          ) : (
            <>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                {companies[activeCompany].images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                      currentSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${companies[activeCompany].name} Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                {companies[activeCompany].images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full mx-1 ${
                      currentSlide === index ? 'bg-[#005880]' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(companies[activeCompany].content).map(([key, section]) => (
            <div
              key={key}
              className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 ${
                isLoading ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{section.icon}</span>
                <h3 className="text-xl font-semibold text-[#005880]">{section.title}</h3>
              </div>
              <p className="text-gray-600">{section.description}</p>
              <div className="mt-4 w-16 h-1 bg-[#005880]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NetworkingSolutions;
