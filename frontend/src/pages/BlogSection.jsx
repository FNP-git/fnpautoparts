import React from 'react';
import './BlogSection.css';
import Navbar from '../components/Navbar';
import bgImage from '../assets/bgImage.jpeg';
import BBB from '../assets/bbb-badge.png';
import Footer from '../components/Footer';
import Bbb from '../components/Bbb';
import BlogCard from '../components/BlogCard';

import blg1 from '../assets/blg1.svg';
import blg2 from '../assets/blg2.svg';
import HamburgerMenu from '../components/HamburgerMenu';

const blogData = [
  {
    id: 1,
    image: blg1,
    title: 'Your trusted source for used engines and transmissions!',
    description:
      'At FNP Auto Parts, we deliver tested, reliable, and cost-effective used parts nationwide. Every component undergoes quality checks to ensure durability.',
  },
  {
    id: 2,
    image: blg2,
    title: 'Get your deal now for used engines and transmissions!',
    description:
      'FNP Auto Parts offers premium, performance-checked parts with service guarantees. Save time, money, and get expert support.',
  },
  {
    id: 3,
    image: blg1,
    title: 'How to choose the right used engine for your vehicle',
    description:
      'Consider compatibility, mileage, warranties, and certifications when picking a used engine. Learn how to shop smartly.',
  },
  {
    id: 4,
    image: blg2,
    title: '5 Signs Your Transmission Might Be Failing',
    description:
      'Grinding noises, delayed shifting, fluid leaks, and warning lights are common signs. Read this to catch issues early.',
  },
  {
    id: 5,
    image: blg1,
    title: 'Top 10 Tips for Engine Maintenance',
    description:
      'From regular oil changes to filter care, these expert-backed tips can extend engine life and improve performance.',
  },
  {
    id: 6,
    image: blg2,
    title: 'Used vs. Remanufactured Transmissions: What’s Best?',
    description:
      'Learn the key differences, benefits, and considerations between used and reman transmissions before you buy.',
  },
];

const BlogSection = () => {
  return (
    <>
      <Navbar />
      <HamburgerMenu />
      <div className="blg-sectionn">
        <div className="blog-overlay">
          <div className="blog-content">
            <h2 className="blog-heading">BLOGS/POSTS</h2>
            <h3 className="blog-subheading">Helpful Guides, Tips & Auto Insights</h3>
            <p className="blog-description">
              From decoding engine codes to spotting scam sellers, we post everything you need to buy used parts smartly and safely.
            </p>

            <div className="blog-stats">
              <div className="blog-stat-box hover-scale">
                <h3>10,000+</h3>
                <p>Parts Shipped</p>
              </div>
              <div className="blog-stat-box hover-scale">
                <img src={BBB} alt="BBB Accredited" className="stat-icon" />
                <p>Accredited Business</p>
              </div>
              <div className="blog-stat-box hover-scale">
                <h3>100%</h3>
                <p>Compatibility Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Cards Section */}
      <section className="blog-card-wrapper">
        <h2 className="blog-card-heading">Latest Insights</h2>
        <div className="blog-card-flex">
          {blogData.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              onClick={() => console.log('Opening blog:', blog)}
            />
          ))}
        </div>
      </section>

      <Bbb />
      <Footer />
    </>
  );
};

export default BlogSection;
