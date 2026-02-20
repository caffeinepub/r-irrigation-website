import { Link } from '@tanstack/react-router';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTABlock() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/90 py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
          Ready to Get Your Sprinkler System Working Perfectly?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
          Call now for fast, reliable service or request a free estimate for your irrigation needs.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xl px-10 py-7 h-auto font-bold shadow-lg"
          >
            <a href="tel:9739558340">
              <Phone className="mr-2 h-6 w-6" />
              (973) 955-8340
            </a>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="border-2 border-primary-foreground bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-xl px-10 py-7 h-auto font-bold"
          >
            <Link to="/contact">Request Free Estimate</Link>
          </Button>
        </div>

        <p className="mt-6 text-sm text-primary-foreground/80">
          Licensed & Insured • Serving Northern NJ • Same-Day Service Available
        </p>
      </div>
    </section>
  );
}
