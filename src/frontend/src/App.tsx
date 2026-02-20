import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceAreas from './pages/ServiceAreas';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Schedule from './pages/Schedule';
import CliftonNJ from './pages/CliftonNJ';
import ParamusNJ from './pages/ParamusNJ';
import WayneNJ from './pages/WayneNJ';
import HackensackNJ from './pages/HackensackNJ';

// Layout component with Header and Footer
function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Create root route with layout
const rootRoute = createRootRoute({
  component: Layout
});

// Create routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: Services
});

const serviceAreasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/service-areas',
  component: ServiceAreas
});

const reviewsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reviews',
  component: Reviews
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact
});

const scheduleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/schedule',
  component: Schedule
});

const cliftonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/clifton-nj',
  component: CliftonNJ
});

const paramusRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/paramus-nj',
  component: ParamusNJ
});

const wayneRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/wayne-nj',
  component: WayneNJ
});

const hackensackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/hackensack-nj',
  component: HackensackNJ
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  serviceAreasRoute,
  reviewsRoute,
  contactRoute,
  scheduleRoute,
  cliftonRoute,
  paramusRoute,
  wayneRoute,
  hackensackRoute
]);

// Create router
const router = createRouter({ routeTree });

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
