import React, { useState } from "react";
import styles from "./Blog.module.css";
import Article1 from "../../assets/Blog/article1.jpg";
import Article2 from "../../assets/Blog/article2.jpg";
import Article3 from "../../assets/Blog/article3.jpg";
import Article4 from "../../assets/Blog/article4.jpg";
import Article5 from "../../assets/Blog/article5.jpg";
import Pagination from "./Pagination";
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { FaExternalLinkAlt,} from 'react-icons/fa';
import App from '../../assets/images/Blog.jpg';

const categories = [
  "All",
  "Mobile Development",
  "CCTV Installation",
  "Networking",
  "POS Systems",
  "Web Development",
];

const articles = [
  {
    id: 1,
    image: Article4,
    title: "How React and React Native Are Revolutionizing Mobile App Development",
    date: "2024 Dec, 22",
    author: "info@rtechsl.com",
    category: "Mobile Development", 
    content: `React, a powerful JavaScript library developed by Facebook, has revolutionized mobile app development by offering efficient and flexible solutions. With React Native, developers can create cross-platform apps for iOS and Android using a single codebase, significantly reducing development time and costs while delivering a native-like experience. Its reusable components promote modularity and simplify updates, while features like hot reloading enable real-time code changes, speeding up development. React’s virtual DOM ensures optimized performance, even for complex applications, and its extensive ecosystem provides tools, libraries, and community support for continuous innovation. These features make React a game-changer in modern mobile app development.

React also fosters a collaborative development environment. Since React Native is based on JavaScript, one of the most widely used programming languages, teams can easily onboard new developers and ensure seamless collaboration. The shared codebase enables front-end and back-end developers to work cohesively, improving productivity and minimizing communication gaps. Furthermore, the library’s emphasis on component-based architecture allows teams to maintain consistent styling and behavior across applications.

As mobile devices continue to dominate the tech landscape, React’s adaptability to new tools and platforms ensures its relevance for years to come. Its growing ecosystem, including libraries like Expo and state management tools such as Redux, further solidifies its position in the development world. For businesses seeking rapid, cost-effective, and high-quality mobile solutions, React and React Native stand as invaluable tools.

React Native also empowers developers to write apps that have access to native device capabilities like GPS, camera, and sensors, ensuring that mobile applications are not limited by the constraints of the web environment. This opens up a new world of possibilities for app development, as developers can leverage the power of native APIs with a unified codebase. React Native's growing popularity and continuous updates promise an even brighter future, making it the go-to framework for mobile app developers.

The growing community surrounding React Native further boosts its potential. With contributors from all over the world constantly sharing their knowledge, libraries, and best practices, developers are supported in creating solutions for nearly every use case imaginable. The collaborative nature of this community ensures that React Native will continue to evolve, meeting the ever-growing demands of modern mobile app development.`,
  },
  {
    id: 2,
    image: Article2,
    title: "The Timeless Power of HTML and CSS in Modern Web Development",
    date: "2024 Dec, 22",
    author: "info@rtechsl.com",
    category: "Web Development",  
    content: `HTML and CSS form the foundation of web development, enabling developers to create the structure and style of websites with precision and creativity. HTML provides the backbone, organizing content into meaningful sections, while CSS adds life through design and layout. Together, they power responsive and visually appealing websites, ensuring compatibility across devices. With modern advancements like CSS Grid, Flexbox, and media queries, developers can craft dynamic, interactive, and mobile-friendly experiences. HTML and CSS continue to be indispensable tools for building user-centric, functional, and visually engaging web platforms.

These technologies are further enhanced by tools and frameworks that streamline the development process. Frameworks such as Bootstrap and Tailwind CSS simplify the creation of consistent and responsive designs, while preprocessors like Sass and Less extend CSS’s capabilities with variables, nesting, and mixins. Additionally, browser developer tools make it easier than ever to debug and refine CSS and HTML for optimal performance.

The adaptability of HTML and CSS also ensures their relevance in emerging trends, such as web accessibility and SEO optimization. By adhering to semantic HTML standards and leveraging CSS for visual hierarchy, developers can create websites that are inclusive, user-friendly, and optimized for search engines. As the web evolves, HTML and CSS remain the cornerstones of innovation and creativity in web development.

As web applications continue to grow in complexity, HTML and CSS remain central to ensuring maintainability and scalability. Modular CSS architectures, like BEM (Block Element Modifier), promote reusability and consistency across large projects. By writing clean, organized code, developers can ensure that projects remain flexible and adaptable, even as they scale up in size and complexity.

The future of HTML and CSS looks even more promising with the rise of CSS-in-JS libraries, allowing developers to encapsulate styles within JavaScript components. This approach integrates styles directly with the component logic, offering a more streamlined, declarative way to manage styles for modern, dynamic web applications. This innovation ensures that HTML and CSS will continue to evolve and thrive in the ever-changing world of web development.`,
  },
  {
    id: 3,
    image: Article1,
    title: "Why PHP and Laravel Are a Winning Combination for Web Applications",
    date: "2024 Dec, 22",
    author: "info@rtechsl.com",
    category: "Web Development", 
    content: `PHP remains one of the most versatile and widely used server-side scripting languages, powering millions of websites and applications. When combined with Laravel, a robust PHP framework, it unlocks new levels of efficiency and scalability. Laravel streamlines development with its elegant syntax, built-in tools for routing, authentication, and database management, and a vibrant ecosystem. This combination allows developers to quickly build secure, high-performance web applications tailored to business needs. From startups to enterprise solutions, PHP and Laravel offer a reliable foundation for modern, feature-rich web applications.

Laravel also excels in simplifying complex development tasks. Features like Eloquent ORM make database queries intuitive, while the Artisan CLI tool boosts productivity by automating repetitive tasks. Additionally, Laravel’s support for RESTful APIs enables seamless integration with front-end frameworks, making it ideal for developing modern single-page applications (SPAs) and mobile app backends.

With the rise of cloud-based applications and microservices, Laravel continues to evolve to meet the demands of modern development. Its integration with tools like Docker and its support for serverless architectures allow businesses to scale applications efficiently. The combination of PHP’s universality and Laravel’s innovative features makes it an enduring choice for developers worldwide.

Another benefit of PHP and Laravel is their vast community and ecosystem. The Laravel community provides a wealth of resources, including forums, tutorials, and third-party packages, which can accelerate development and solve common challenges. Additionally, Laravel's built-in support for testing and automated deployments ensures that applications are robust and production-ready.

Laravel’s built-in security features, such as CSRF protection, encryption, and rate limiting, help developers mitigate common security risks. By using Laravel’s built-in tools, developers can ensure that web applications remain secure without needing to implement custom security measures from scratch. This level of security makes PHP and Laravel a go-to choice for developing secure and scalable web applications.
`,
  },
  {
    id: 4,
    image: Article3,
    title: "Java: The Reliable Workhorse of Enterprise and Mobile Development",
    date: "2024 Dec, 23",
    author: "info@rtechsl.com",
    category: "Mobile Development", 
    content: `Java has been a cornerstone of software development for decades, renowned for its stability, portability, and performance. As a platform-independent language, Java powers a wide range of applications, from enterprise-level solutions to Android mobile apps. Its robust security features, extensive libraries, and large developer community make it ideal for building scalable, mission-critical systems. With innovations like Spring Boot and Jakarta EE, Java remains a preferred choice for developing backend services, APIs, and cloud-based solutions, proving its enduring relevance in an ever-evolving tech landscape.

Java’s role in enterprise environments is particularly notable. Tools like Hibernate and Spring Framework provide powerful abstractions for managing data and application logic, reducing the complexity of large-scale systems. Furthermore, Java’s scalability ensures that enterprise applications can handle increasing user demands without compromising performance or reliability.

In the mobile space, Java continues to be the backbone of Android development. The introduction of Kotlin as an alternative language for Android has only strengthened Java’s ecosystem, as both languages integrate seamlessly. This dual-language support, combined with Java’s strong compatibility with legacy systems, ensures its continued dominance in enterprise and mobile development.

Java’s popularity in the enterprise sector is due to its stability and extensive support for multi-threading, which is essential for handling large-scale, concurrent operations. With features like garbage collection and memory management, Java provides the tools necessary to ensure applications run smoothly, even under heavy loads.

Looking ahead, Java’s adaptability continues to shine. Its strong support for microservices architecture, containerization, and cloud platforms such as AWS and Azure positions it as a language of choice for developing cloud-native applications. Java's cross-platform capabilities, coupled with its robust tools, ensure it remains an integral part of enterprise-level systems and mobile development for years to come.
`,
  },
  {
    id: 5,
    image: Article5,
    title: "React and Tailwind CSS: A Perfect Match for Modern UI Development",
    date: "2024 Dec, 23",
    author: "info@rtechsl.com",
    category: "Web Development",  
    content: `The combination of React and Tailwind CSS is redefining how developers build user interfaces. React’s component-based architecture enables the creation of dynamic, reusable UI elements, while Tailwind CSS offers a utility-first approach to styling, making it easy to create custom designs directly in the markup. Together, they streamline the development process, reducing boilerplate code and ensuring consistency across the application. This synergy is perfect for crafting responsive, visually stunning, and highly interactive user experiences, making React and Tailwind CSS a go-to duo for modern frontend development.

Tailwind CSS also empowers developers to quickly prototype designs. Its extensive library of utility classes allows for rapid experimentation without the need for custom CSS, enabling teams to bring their ideas to life faster. Additionally, Tailwind’s flexibility ensures that it can adapt to any project, from small-scale applications to enterprise-grade systems.

The React-Tailwind combination also excels in maintaining design consistency across applications. By integrating Tailwind classes directly within React components, developers can ensure that UI elements remain visually consistent, even as projects grow in complexity. This approach not only improves efficiency but also enhances user satisfaction by delivering polished, cohesive designs.

Tailwind’s flexibility allows developers to adjust the design at the component level, offering a high degree of customization without having to manage large CSS files. As the demand for custom, responsive designs increases, this utility-first approach becomes even more powerful, allowing for quick and precise adjustments that ensure a seamless user experience.

As React continues to evolve, its integration with Tailwind CSS will only improve. The combination of React's declarative nature and Tailwind’s utility classes creates an ideal environment for teams to quickly iterate on designs and build user interfaces that are both functional and aesthetically pleasing, further cementing this duo’s place at the forefront of modern UI development.
`,
  },
];

const articlesPerPage = 2;

function BlogArticle({ id, image, title, date, author, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSeeMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.article}>
      <img src={image} alt={title} className={styles.articleImage} />
      <h2 className={styles.articleTitle}>{title}</h2>
      <div className={styles.articleMeta}>
        <span className={styles.articleDate}>{date}</span>
        <span className={styles.articleAuthor}>By {author}</span>
      </div>
      <p className={styles.articleContent}>
        {isExpanded ? content : `${content.slice(0, 400)}...`}
      </p>
      <button className={styles.seeMoreButton} onClick={handleSeeMore}>
        {isExpanded ? "See Less" : "See More"}
      </button>
    </div>
  );
}

function BlogPost() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const totalFilteredArticles = filteredArticles.length;
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  return (
    <div className={styles.blog}>
<section id="home" className="pt-20 pb-16 md:pt-28 md:pb-24 relative overflow-hidden">
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
  className="text-4xl md:text-5xl font-bold leading-tight text-[#005880] pl-1 md:pl-20"
>
  Welcome to the R Tech Solutions Blog!
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="text-lg text-gray-600 pl-1 md:pl-20"
>
  Delve into expert insights, practical tips, and the latest updates on cutting-edge web development, advanced CCTV installation, and innovative technology solutions. Stay informed with in-depth discussions on system integration, security solutions, and emerging tech trends.
</motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
<div className="flex flex-col  pl-1 md:pl-20 sm:flex-row gap-4">
  <button className="btn btn-primary flex items-center gap-2 px-6 py-3 text-white bg-[#005880] rounded-lg shadow-lg hover:bg-[#004A66] transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto max-w-xs mx-auto">
    Get Started <ArrowRight size={20} />
  </button>

  <button className="btn btn-secondary flex items-center gap-2 px-6 py-3 text-[#005880] border-2 border-[#005880] rounded-lg hover:bg-[#005880] hover:text-white transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto max-w-xs mx-auto">
    Learn More <FaExternalLinkAlt size={20} />
  </button>
</div>




                
              </motion.div>
             
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
  }}
  src={App}
  alt="App Development"
  className="mx-auto"
/>


            </div>
          </div>
        </div>
      </section>
      <div className={styles.categoryContainer}>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`${styles.categoryButton} ${selectedCategory === category ? styles.selectedCategory : ""}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <main className={styles.mainContent}>
        {totalFilteredArticles > 0 ? (
          <>
            {paginatedArticles.map((article) => (
              <BlogArticle key={article.id} {...article} />
            ))}

            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(totalFilteredArticles / articlesPerPage)}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <p className={styles.noarticles}>No articles to show.</p>
        )}
      </main>
    </div>
  );
}

export default BlogPost;
