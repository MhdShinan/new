import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import App from '../assets/images/app-dev.png';
import Pro1 from '../assets/images/project1.jpg';
import Pro2 from '../assets/images/project2.jpg';
import Pro3 from '../assets/images/project3.jpg';
import Pro4 from '../assets/images/project4.jpg';
import Pro5 from '../assets/images/project5.jpg';
import Pro6 from '../assets/images/project6.jpg';
import Pro7 from '../assets/images/project7.jpg';
import Pro8 from '../assets/images/project8.jpg';
import Pro9 from '../assets/images/project9.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye } from '@fortawesome/free-solid-svg-icons';// Same for Mission logo
import Brand from '../assets/images/brand.jpg';

const projects = [
  {
    id: 1,
    title: "Echo Tours Lanka Website Development",
    description: "Echo Tours Lanka has excelled in website development tailored for local tourism. Their platform is intuitive, showcasing Sri Lanka's rich tapestry of cultural, natural, and historical attractions with stunning visuals and detailed itineraries. The site's design emphasizes user engagement through interactive maps, local insights, and an easy booking system. It highlights unique experiences like eco-tours, wildlife safaris, and authentic village visits, ensuring tourists connect deeply with Sri Lanka's heritage. Their commitment to sustainability and community support is evident, promoting local businesses and conservation efforts. Echo Tours Lanka's website is a gateway to experiencing the authentic charm of Sri Lanka.",
    image: Pro1,
    link: "https://echotourslanka.com/",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Adspire DIGITAL Website Development A Hub for Marketing Excellence",
    description: "Adspire Digital is a platform that offers a diverse range of marketing services. From social media management to digital advertising, they provide a one-stop solution for businesses seeking to elevate their online presence. With a team of experienced professionals, Adspire Digital ensures top-notch strategies tailored to each client’s unique needs. Their commitment to excellence and innovation makes them a go-to destination for businesses looking to thrive in the digital landscape.",
    image: Pro2,
    link: "https://adspiredigital.co/",
    tags: ["Vue.js", "Express", "PostgreSQL"]
  },
  {
    id: 3,
    title: "SoapstoRis Website Development",
    description: "SoapstoRis offers a variety of handmade soaps that are crafted with care and attention to detail. The website provides a range of unique scents and ingredients that cater to different preferences and skin types. With their dedication to quality and craftsmanship, SoapstoRis ensures that customers receive a luxurious and pampering experience with each use of their products.",
    image: Pro3,
    link: "https://soapstoris.com/",
    tags: ["Python", "TensorFlow", "NLP"]
  },
  {
    id: 4,
    title: "ELINE Technologies Website Development",
    description: "Elinetechnologies.com is a platform offering a range of tech solutions. The site provides services like web development, app design, and digital marketing. This one-stop-shop approach simplifies the process for businesses seeking to enhance their online presence. By offering diverse services under one roof, elinetechnologies.com makes it convenient for clients to address multiple digital needs efficiently.",
    image: Pro4,
    link: "https://elinetechnologies.com/",
    tags: ["React Native", "Firebase", "GraphQL"]
  },
  {
    id: 5,
    title: "Heartland Trading Website Development",
    description: "User-Friendly Interface: The website’s easy-to-navigate interface ensures a smooth shopping experience. This makes finding and purchasing items hassle-free. Secure Transactions: Heartland-Trading.com prioritizes the security of online transactions. Customers can shop with confidence knowing their information is protected. Heartland-Trading.com stands out for its quality products, user-friendly interface, and commitment to customer security, making it a reliable choice for online shopping.",
    image: Pro5,
    link: "https://heartland-trading.com/",
    tags: ["Next.js", "WebRTC", "Socket.io"]
  },
  {
    id: 6,
    title: "Champika Export Marketing Website Development",
    description: "Champika Export Marketing’s website showcases a variety of products and services. This online platform provides a convenient way for customers to explore the offerings and contact the company for further information. The website’s design and user interface play a crucial role in attracting potential clients and creating a positive impression of the business. This digital presence is essential for modern businesses to stay competitive in the global market.",
    image: Pro6,
    link: "https://champikaexportmarketing.com/",
    tags: ["IoT", "React", "MQTT"]
  },
  {
    id: 7,
    title: "Ride With Me Website Development",
    description: "RideWithMee.lk is a platform that connects riders with drivers for convenient and safe transportation. Riders can easily book rides through the website, ensuring a hassle-free experience. The platform offers a reliable and efficient way for users to travel to their destinations, making it a popular choice for those looking for transportation solutions.",
    image: Pro7,
    link: "https://ridewithmee.lk/",
    tags: ["Solidity", "Ethereum", "Web3.js"]
  },
  {
    id: 8,
    title: "Twilight Blue Security Systems and Trading Website Development",
    description: "Our mission is to help enterprises accelerate adoption of new technologies, untangle complex issues that always emerge during digital evolution, and orchestrate ongoing innovation. If you are looking for a trustworthy and reputable company to build your operational Security Systems or transform your systems. Thank you for reaching out to Twilight Blue! Please fill the form right.",
    image: Pro8,
    link: "https://tbsst.ae/",
    tags: ["Unity", "ARKit", "C#"]
  },
  {
    id: 9,
    title: "X-guard Website Development",
    description: "AD CAUSAM SUPERIOREM We can tailor-fit services to meet your requirements and exceed expectations. Our highly skilled managers can sit with you to discuss the best-fit solution for you, and they will advise you on your needs.",
    image: Pro9,
    link: "https://x-guard.lk/",
    tags: ["Python", "scikit-learn", "Flask"]
  }
];

const categories = [
  { id: 'all', name: 'All Projects' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen z-10 container mx-auto flex  justify-center md:px-4 lg:px-40 py-8 relative bg-gray-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-primary-dark opacity-10"></div>
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 20,
            }}
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          ></motion.div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold leading-tight text-[#005880]"
              >
                Future of App Web Development, POS Solutions, CCTV Installation, Networking in Sri Lanka
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-md text-gray-600"
              >
                We deliver cutting-edge IT solutions that drive innovation and business growth. Our expertise spans across web development, cloud solutions, digital transformation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >


              </motion.div>
              <div className="flex flex-row items-center gap-6 md:hidden sm:hidden">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-primary" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-primary" />
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-primary" />
                  <span>Secure Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-primary" />
                  <span>Expert Team</span>
                </div>
              </div>

            </div>
            <div>
              <motion.img
                initial={{ opacity: 0, x: -20, y: 0 }}
                animate={{ opacity: 1, x: 0, y: -10 }}
                transition={{
                  duration: 1.5,
                  delay: 0.4,
                  repeat: Infinity, // Make the float continuous
                  repeatType: 'reverse', // Reverse animation to create a floating effect
                  ease: 'easeInOut', // Smooth animation transition
                }}
                style={{
                  borderRadius: '25px',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', // Box shadow
                  width: window.innerWidth <= 480 ? '300px' : '500px', // Adjust size based on screen width
                  height: 'auto',
                }}
                src={Brand}
                alt="App Development"
                className="mx-auto sm:mx-0 responsive-img"
              />


            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-4">
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {/* {categories.map((category) => (
              <button
                key={category.id}
                className={`btn ${activeCategory === category.id ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))} */}
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mt-4">{project.description}</p>
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary">
                      <FaEye size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="vision-mission">
        <div

        >
          <div className="relative z-10 text-center mb-8">
            <h2 className="text-4xl font-extrabold text-[#005880]">Our Vision & Mission</h2>
            <p className="text-lg text-[#005880] mt-4">
              We are committed to driving innovation and excellence in every aspect of our work.
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Vision Card */}
              <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-all hover:scale-105 duration-300 ease-in-out max-w-sm mx-auto">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative flex flex-col items-center justify-center text-white p-6 space-y-4">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="w-16 h-16 mb-4 transform transition-transform duration-500 ease-in-out hover:scale-110 text-white"
                  />
                  <h3 className="text-3xl font-extrabold tracking-tight text-center text-[#005880]">
                    Our Vision
                  </h3>
                  <p className="text-lg text-center font-medium text-[#005880]">
                    We envision a world where technology drives innovation and creates limitless possibilities.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-all hover:scale-105 duration-300 ease-in-out max-w-sm mx-auto">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative flex flex-col items-center justify-center text-white p-6 space-y-4">
                  <FontAwesomeIcon
                    icon={faBullseye}
                    className="w-16 h-16 mb-4 transform transition-transform duration-500 ease-in-out hover:scale-110 text-white"
                  />
                  <h3 className="text-3xl font-extrabold tracking-tight text-center text-[#005880]">
                    Our Mission
                  </h3>
                  <p className="text-lg text-center font-medium text-[#005880]">
                    Our mission is to provide cutting-edge IT solutions that empower businesses and enhance digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
