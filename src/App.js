import React, {Suspense} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

const DefaultLayout = React.lazy(() => import('./common/layout/DefaultLayout'))

function App() {

  return (
  
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            Loading...
          </div>
        }
      >
        <Routes>
            <Route path="*" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    
  );
}

export default App;
