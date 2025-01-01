import React, { useState } from "react";
import {
  FaApple,
  FaAndroid,
  FaCode,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const AppFaq = () => {
  const [activeTab, setActiveTab] = useState("ios");
  const [expanded, setExpanded] = useState({});

  const filterFAQ = (tab) => {
    setActiveTab(tab);
    setExpanded({}); // Reset expanded state when switching tabs
  };

  const toggleFAQ = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const faqData = {
    ios: [
      {
        question: "How do you ensure compatibility with iOS devices?",
        answer:
          "We ensure compatibility by following Apple’s Human Interface Guidelines, performing extensive testing on different iOS versions and devices, and keeping up-to-date with the latest iOS updates and hardware releases.",
      },
      {
        question: "What technologies do you use for iOS development?",
        answer:
          "We primarily use Swift and Objective-C for native iOS development, along with tools like Xcode and CocoaPods for efficient app building and dependency management.",
      },
      {
        question: "Can you help with App Store submission?",
        answer:
          "Yes, we handle the entire App Store submission process, including preparing app metadata, complying with App Store guidelines, and resolving any issues raised during the review process.",
      },
      {
        question: "What is your experience with Swift and Objective-C?",
        answer:
          "Our team has years of experience with both Swift and Objective-C, enabling us to develop robust and efficient iOS applications. We use Swift for modern projects and Objective-C for maintaining or upgrading legacy applications.",
      },
      {
        question: "Do you provide maintenance for iOS apps?",
        answer:
          "Yes, we offer ongoing maintenance and support to ensure your app stays compatible with the latest iOS updates, fixes bugs, and delivers optimal performance.",
      },
    ],
    android: [
      {
        question: "What versions of Android do you support?",
        answer:
          "We support Android versions starting from Android 6.0 (Marshmallow) to the latest Android versions, ensuring broad compatibility across devices.",
      },
      {
        question: "Can you build apps for the Google Play Store?",
        answer:
          "Yes, we specialize in developing and submitting apps to the Google Play Store, adhering to its guidelines for approval and optimizing apps for better visibility.",
      },
      {
        question: "Do you offer support for Android tablets?",
        answer:
          "Absolutely! We design and test apps to be fully functional and visually optimized for Android tablets, ensuring a great user experience on larger screens.",
      },
      {
        question: "What tools do you use for Android development?",
        answer:
          "We use Android Studio, Java, Kotlin, and Gradle as our primary tools and programming languages. Additionally, we employ Firebase for backend services and testing tools like Espresso.",
      },
      {
        question: "How do you handle Android OS fragmentation?",
        answer:
          "We address fragmentation by testing apps on a wide range of devices and screen sizes, using responsive designs, and utilizing tools like Firebase Test Lab for broader device coverage.",
      },
    ],
    cross: [
      {
        question: "What frameworks do you use for cross-platform development?",
        answer:
          "We use modern frameworks like Flutter and React Native to build cross-platform apps that run seamlessly on both iOS and Android devices.",
      },
      {
        question: "Can you deploy cross-platform apps to both stores?",
        answer:
          "Yes, cross-platform apps are designed to be deployed on both the Apple App Store and Google Play Store, ensuring a consistent user experience across platforms.",
      },
      {
        question: "What are the cost benefits of cross-platform development?",
        answer:
          "Cross-platform development reduces costs by using a single codebase for both iOS and Android, decreasing development time and effort while maintaining quality.",
      },
      {
        question: "Do cross-platform apps compromise performance?",
        answer:
          "No, with advanced frameworks like Flutter and React Native, performance is almost on par with native apps. We optimize apps to ensure smooth operation and responsiveness.",
      },
      {
        question: "What testing tools do you use for cross-platform apps?",
        answer:
          "We use tools like Appium, BrowserStack, and native testing libraries to ensure cross-platform apps function correctly on various devices and operating systems.",
      },
    ],
  };

  const icons = {
    ios: (
      <FaApple className="transition-colors duration-300 text-[#005880] group-hover:text-white" />
    ),
    android: (
      <FaAndroid className="transition-colors duration-300 text-[#005880] group-hover:text-white" />
    ),
    cross: (
      <FaCode className="transition-colors duration-300 text-[#005880] group-hover:text-white" />
    ),
  };

  return (
    <section className="py-10 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* FAQ Category Bar */}
        <div className="flex justify-center gap-4">
          {["ios", "android", "cross"].map((tab) => (
            <button
              key={tab}
              className={`faq-tab group flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                activeTab === tab
                  ? "bg-[#005880] text-white"
                  : "bg-white text-gray-800 hover:bg-[#005880] hover:text-white"
              }`}
              onClick={() => filterFAQ(tab)}
            >
              {icons[tab]} {tab.toUpperCase()}
            </button>
          ))}
        </div>
        <br />

        {/* FAQ Questions */}
        <div className="space-y-4">
          {faqData[activeTab].map((faq, index) => (
            <div key={index} className="faq-content">
              <div className="bg-[#005880] rounded-md overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-4 text-left text-white font-medium"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  {expanded[index] ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {expanded[index] && (
                  <div className="p-4 bg-[#004259] text-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppFaq;
