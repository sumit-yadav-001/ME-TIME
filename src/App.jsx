import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { PageLoader } from './components/ui/Loader';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Lazy loading pages
const Login = lazy(() => import('./pages/auth/Login'));
const VerifyOTP = lazy(() => import('./pages/auth/VerifyOTP'));
const SignUp = lazy(() => import('./pages/auth/SignUp'));
const Home = lazy(() => import('./pages/main/Home'));
const SalonDetails = lazy(() => import('./pages/main/SalonDetails'));
const Checkout = lazy(() => import('./pages/checkout/Checkout'));
const AddCard = lazy(() => import('./pages/checkout/AddCard'));
const Onboarding = lazy(() => import('./pages/onboarding/Onboarding'));
const Account = lazy(() => import('./pages/account/Account'));
const Booking = lazy(() => import('./pages/booking/Booking'));
const BrowserView = lazy(() => import('./pages/main/BrowserView'));
const Success = lazy(() => import('./pages/checkout/Success'));

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <h1 className="text-6xl font-bold text-brand-primary mb-4">404</h1>
      <p className="text-xl font-bold text-brand-dark mb-8">Oops! Page not found.</p>
      <Link to="/" className="bg-brand-dark text-white px-8 py-3 rounded-full font-bold shadow-lg">
        Go Home
      </Link>
    </div>
  );
}

function App() {
  const isOnboardingSeen = localStorage.getItem("onboardingSeen");

  return (
    <div className="min-h-screen bg-brand-gray flex justify-center items-start overflow-x-hidden">
      <div className="w-full min-h-screen bg-white shadow-2xl relative flex flex-col mx-auto">
        <Suspense fallback={<PageLoader />}>
          <Routes>

            {/* Public Routes */}
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<VerifyOTP />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Root Route (MAIN LOGIC) */}
            <Route
              path="/"
              element={
                !isOnboardingSeen ? (
                  <Navigate to="/onboarding" replace />
                ) : (
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                )
              }
            />

            {/* Protected Routes */}
            <Route path="/explore" element={
              <ProtectedRoute><BrowserView /></ProtectedRoute>
            } />
            <Route path="/salon/:id" element={
              <ProtectedRoute><SalonDetails /></ProtectedRoute>
            } />
            <Route path="/booking" element={
              <ProtectedRoute><Booking /></ProtectedRoute>
            } />
            <Route path="/account" element={
              <ProtectedRoute><Account /></ProtectedRoute>
            } />

            {/* Checkout */}
            <Route path="/checkout" element={
              <ProtectedRoute><Checkout /></ProtectedRoute>
            } />
            <Route path="/add-card" element={
              <ProtectedRoute><AddCard /></ProtectedRoute>
            } />
            <Route path="/success" element={
              <ProtectedRoute><Success /></ProtectedRoute>
            } />

            {/* 404 */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />

          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;