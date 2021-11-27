import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import PagesPromotionSearch from './Promotion/Search/Search';
import PagesPromotionForm from './Promotion/Form/Form';

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create" component={PagesPromotionForm} />
        <Route path="/edit/:id" component={PagesPromotionForm} />
        <Route path="/" component={PagesPromotionSearch} />
      </Routes>
    </Router>
  );
};

export default Root;


//No react-router-dom v6, "Switch" é substituído por rotas "Routes".
