import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'react-tabs/style/react-tabs.css';
import 'tailwindcss/tailwind.css';
import UniviewImage1 from '../assets/images/Uniview.jpeg';
import UniviewImage2 from '../assets/images/Uniview.jpeg';
import HikvisionImage1 from '../assets/images/Hikvision.jpeg';
import HikvisionImage2 from '../assets/images/Hikvision.jpeg';
import HikvisionImage3 from '../assets/images/Hikvision.jpeg';
import DahuaImage1 from '../assets/images/Dahua.jpeg';
import DahuaImage2 from '../assets/images/Dahua.jpeg';
import DahuaImage3 from '../assets/images/Dahua.jpeg';
import DahuaImage4 from '../assets/images/Dahua.jpeg';

const CCTV = () => {
    const imageSets = {
        Uniview: [UniviewImage1, UniviewImage2],
        Hikvision: [HikvisionImage1, HikvisionImage2, HikvisionImage3],
        Dahua: [DahuaImage1, DahuaImage2, DahuaImage3, DahuaImage4],
    };

    const [selectedTab, setSelectedTab] = useState('Uniview');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleTabSelect = (tab) => {
        setSelectedTab(tab);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex + 1) % imageSets[selectedTab].length
        );
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prevIndex) =>
                (prevIndex - 1 + imageSets[selectedTab].length) %
                imageSets[selectedTab].length
        );
    };

    return (
        <div className="container mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6">CCTV Solutions</h1>

            <Tabs>
                <TabList className="flex justify-center space-x-4 md:space-x-8 mb-6">
                    {Object.keys(imageSets).map((tab, index) => (
                        <Tab
                            key={index}
                            className="px-4 md:px-6 py-2 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-600 transition duration-300"
                            onClick={() => handleTabSelect(tab)}
                        >
                            {tab}
                        </Tab>
                    ))}
                </TabList>

                {Object.keys(imageSets).map((tab) => (
                    <TabPanel key={tab}>
                        <div className="text-center mb-4 md:mb-6">
                            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-2 md:mb-4">{tab}</h2>
                        </div>
                        <div className="flex items-center justify-center relative">
                            <FaChevronLeft
                                onClick={prevImage}
                                className="absolute left-4 md:left-6 text-2xl md:text-3xl text-blue-600 cursor-pointer hover:text-blue-800 transition duration-300"
                            />
                            <img
                                src={imageSets[tab][currentImageIndex]}
                                alt={`${tab} Image`}
                                className="w-64 h-auto md:w-96 mx-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
                            />
                            <FaChevronRight
                                onClick={nextImage}
                                className="absolute right-4 md:right-6 text-2xl md:text-3xl text-blue-600 cursor-pointer hover:text-blue-800 transition duration-300"
                            />
                        </div>
                        <div className="max-w-3xl mx-auto bg-white p-4 md:p-6 mt-4 md:mt-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-blue-600">About {tab}</h3>
                            <p className="text-sm md:text-lg text-gray-700">
                                {tab === 'Uniview' &&
                                    'Uniview offers advanced IP and analog surveillance systems with AI features, delivering top-notch security solutions for modern needs.'}
                                {tab === 'Hikvision' &&
                                    'Hikvision provides cutting-edge security solutions with AI-powered IP and analog cameras for enterprises and home applications.'}
                                {tab === 'Dahua' &&
                                    'Dahua is known for its AI-enabled IP cameras and reliable analog systems, offering innovative security technologies.'}
                            </p>
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default CCTV;
