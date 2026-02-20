import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', phone: '', email: '', serviceType: '', message: '' });
  };

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Contact R Irrigation
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Get in touch for fast, reliable irrigation service in Northern New Jersey
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a 
                  href="tel:9739558340" 
                  className="flex items-start gap-3 rounded-lg border p-4 hover:bg-muted/50 transition-colors"
                >
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-lg font-bold text-primary">(973) 955-8340</p>
                    <p className="text-sm text-muted-foreground">Call for immediate service</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 rounded-lg border p-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-primary">info@rirrigation.com</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border p-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Service Area</p>
                    <p className="text-muted-foreground">Northern New Jersey</p>
                    <p className="text-sm text-muted-foreground">Bergen & Passaic Counties</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border p-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Business Hours</p>
                    <p className="text-muted-foreground">Monday - Saturday</p>
                    <p className="text-sm text-muted-foreground">7:00 AM - 6:00 PM</p>
                    <p className="text-sm text-muted-foreground mt-1">Emergency service available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Request a Free Estimate</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        placeholder="(973) 555-1234"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="serviceType">Service Needed</Label>
                    <Input
                      id="serviceType"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      placeholder="e.g., Sprinkler Repair, New Installation, Spring Startup"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      placeholder="Tell us about your irrigation needs..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
                  >
                    Send Request
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Or call us directly at{' '}
                    <a href="tel:9739558340" className="font-semibold text-primary hover:underline">
                      (973) 955-8340
                    </a>
                    {' '}for immediate assistance
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
