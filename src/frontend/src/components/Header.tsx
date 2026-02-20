import { Link, useRouterState } from '@tanstack/react-router';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/service-areas', label: 'Service Areas' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto">
        <div className="flex h-20 items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/assets/generated/logo.dim_300x100.png" 
              alt="R Irrigation" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Phone & CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <a 
              href="tel:9739558340" 
              className="flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="h-5 w-5" />
              (973) 955-8340
            </a>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
              <Link to="/contact">Get Free Estimate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t md:hidden">
            <nav className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? 'text-primary' : 'text-foreground/80'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a 
                href="tel:9739558340" 
                className="flex items-center gap-2 text-lg font-semibold text-primary"
              >
                <Phone className="h-5 w-5" />
                (973) 955-8340
              </a>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold w-full">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Get Free Estimate</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
