import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import projectCategories from './js/data'
import ProjectCategoryNavigation from './components/project-category-navigation';
import ProjectCategorySection from './components/project-category-section';

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/


ReactDOM.createRoot(document.getElementById('projectCategoryNav')).render(
  <>
    {projectCategories.map((projectCategory) => <ProjectCategoryNavigation key={projectCategory.name} projectCategory={projectCategory} />)}
  </>
)


ReactDOM.createRoot(document.getElementById('projectCategories')).render(
  <>
    {projectCategories.map((projectCategory) => <ProjectCategorySection key={projectCategory.name} projectCategory={projectCategory} />)}
  </>
)

reportWebVitals();
