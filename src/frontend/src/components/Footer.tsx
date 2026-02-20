import { Link } from '@tanstack/react-router';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const serviceAreas = [
    'Clifton', 'Paramus', 'Wayne', 'Hackensack', 'Paterson', 'Passaic',
    'Fair Lawn', 'Garfield', 'Lodi', 'Elmwood Park', 'Saddle Brook'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href="tel:9739558340" 
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="text-lg font-semibold">(973) 955-8340</span>
              </a>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>info@rirrigation.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1" />
                <span>Serving Northern New Jersey<br />Bergen & Passaic Counties</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Service Areas</h3>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span 
                  key={area}
                  className="rounded bg-primary-foreground/10 px-2 py-1 text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <Link to="/service-areas" className="text-secondary hover:underline">
                View all service areas →
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Request Estimate</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <Label htmlFor="footer-name" className="text-primary-foreground">Name</Label>
                <Input
                  id="footer-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>
              <div>
                <Label htmlFor="footer-phone" className="text-primary-foreground">Phone</Label>
                <Input
                  id="footer-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>
              <div>
                <Label htmlFor="footer-email" className="text-primary-foreground">Email</Label>
                <Input
                  id="footer-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>
              <div>
                <Label htmlFor="footer-message" className="text-primary-foreground">Message</Label>
                <Textarea
                  id="footer-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
              >
                Send Request
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm">
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} R Irrigation. All rights reserved. | Built with{' '}
            <Heart className="h-4 w-4 fill-secondary text-secondary" /> using{' '}
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'r-irrigation')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
