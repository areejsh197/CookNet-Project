import React, { useState } from 'react';
import screens from '../data/ScreensJson.js';
import Footer from '../components/Layout/Footer.js';
import '../Styles/ServiceStyles.css';

const MealPlanner = () => {
  const { title, daysOfWeek, initialMeals, sidebar, topNav } = screens.mealplanner;
  const [meals, setMeals] = useState(initialMeals);
  const [week, setWeek] = useState(topNav.weeklyOptions[0]);

  const handleMealChange = (day, mealType, value) => {
    setMeals(prevMeals => ({
      ...prevMeals,
      [day]: {
        ...prevMeals[day],
        [mealType]: value
      }
    }));
  };

  const handleWeekChange = (e) => {
    setWeek(e.target.value);
  };

  return (
    <div className="meal-planner-page">
      <header>
        <h1>{title}</h1>
        <div className="week-selector">
          <label>Weekly:</label>
          <select value={week} onChange={handleWeekChange}>
            {topNav.weeklyOptions.map((option, index) => (
              <option key={index} value={option.toLowerCase().replace(' ', '-')}>{option}</option>
            ))}
          </select>
        </div>
      </header>
      <aside className="sidebar2">
        {sidebar.buttons.map((button, index) => (
          <button key={index} className={button.className}>{button.name}</button>
        ))}
      </aside>
      <div className="main-content2">
        <main>
          <div className="meal-planner">
            {daysOfWeek.map(day => (
              <div key={day} className="day">
                <h2>{day}</h2>
                {['breakfast', 'lunch', 'dinner', 'snacks'].map(mealType => (
                  <div key={mealType} className="meal">
                    <label>{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</label>
                    <input
                      type="text"
                      value={meals[day][mealType]}
                      onChange={(e) => handleMealChange(day, mealType, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MealPlanner;
