/**
 * App router
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */
// GENERIC IMPORT
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES IMPORT
import DogBreedPage from '../pages/dogBreedPage';

// ROUTER IMPORT
import * as PATH from './constants';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={PATH.DOG_BREED_PATH} element={<DogBreedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
