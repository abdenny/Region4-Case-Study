import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loading from 'components/Loading';

const PageNotFound = lazy(() => import('views/PageNotFound'));
const AllBooks = lazy(() => import('views/AllMovies'));
const BookDetail = lazy(() => import('views/MovieDetail'));

const AppRoutes = (): JSX.Element => (
  <Suspense
    fallback={
      <div className="flex h-screen items-center justify-center">
        <Loading />
      </div>
    }
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllBooks />} />
        <Route path="/movie/:id" element={<BookDetail />} />

        {/* Fallback route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);

export default AppRoutes;
