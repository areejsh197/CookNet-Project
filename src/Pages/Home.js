import React from 'react';
import screens from '../data/ScreensJson';
import '../Styles/HomeStyles.css';
import Header from '../components/Layout/Myheader.js';
import Footer from '../components/Layout/Footer.js';

const Home = () => {
  const components = screens.homepage.components;

  return (
    <>
      <Header />
      <div className="home-page">
        <div className="main-content">
          <div className={components.searchbar.className}>
            <div className={components.search.className}>
              <input type="text" placeholder="Search for recipes" />
            </div>
            <button className={components.searchBtn.className}>
              Search
            </button>
          </div>

          <div className={components.banner.className}>
            <h5>{components.banner.title}</h5>
          </div>

          <div className={components.popularCategories.className}>
            {components.popularCategories.categories.map((category, index) => (
              <button key={index} className="category-button">
                {category}
              </button>
            ))}
          </div>

          <div className="recipes">
            {components.recipes.Items.map((item, index) => (
              <div key={index} className={`recipes-card card-${index + 1}`}>
                <div className="description">
                  <h3>{item.description}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
