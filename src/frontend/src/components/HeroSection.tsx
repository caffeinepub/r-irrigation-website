import { Link } from '@tanstack/react-router';
import { Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/assets/generated/hero-sprinkler.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Sprinkler & Irrigation Services in Northern New Jersey
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Expert sprinkler repairs, professional installations, spring startup services, and winterization for your lawn irrigation system. Serving homeowners throughout Bergen and Passaic Counties.
          </p>
          
          {/* CTA Buttons */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto font-semibold"
            >
              <a href="tel:9739558340">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-2 border-secondary bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 h-auto font-semibold"
            >
              <Link to="/contact">Request Free Estimate</Link>
            </Button>
          </div>

          {/* Trust Line */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-foreground md:gap-6 md:text-base">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-secondary" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-secondary" />
              <span>Fast Response</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-secondary" />
              <span>5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
