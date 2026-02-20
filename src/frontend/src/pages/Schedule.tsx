import { useState } from 'react';
import { Calendar, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Schedule() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    preferredDate: '',
    timeWindow: '',
    serviceType: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const services = [
    'Sprinkler Repair',
    'Sprinkler Installation',
    'Spring Startup',
    'Winterization',
    'Leak Detection',
    'System Upgrades'
  ];

  const timeWindows = [
    'Morning (8am - 12pm)',
    'Afternoon (12pm - 4pm)',
    'Evening (4pm - 7pm)'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.address.trim()) newErrors.address = 'Service address is required';
    if (!formData.preferredDate) newErrors.preferredDate = 'Preferred date is required';
    if (!formData.timeWindow) newErrors.timeWindow = 'Time window is required';
    if (!formData.serviceType) newErrors.serviceType = 'Service type is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, this would send data to backend
      console.log('Scheduling request:', formData);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        preferredDate: '',
        timeWindow: '',
        serviceType: '',
        notes: ''
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-2xl border-secondary/20 shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <CheckCircle className="h-10 w-10 text-secondary" />
              </div>
              <CardTitle className="text-3xl font-bold text-primary">
                Service Request Received!
              </CardTitle>
              <CardDescription className="text-lg">
                Thank you for scheduling with R Irrigation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <p className="text-muted-foreground">
                We've received your service request and will contact you shortly to confirm your appointment.
              </p>
              <p className="text-muted-foreground">
                One of our team members will reach out within 24 hours to finalize the details.
              </p>
              <div className="mt-6 rounded-lg bg-primary/5 p-4">
                <p className="mb-2 font-semibold text-foreground">Need immediate assistance?</p>
                <a 
                  href="tel:9739558340" 
                  className="inline-flex items-center gap-2 text-lg font-bold text-primary hover:text-primary/80"
                >
                  <Phone className="h-5 w-5" />
                  (973) 955-8340
                </a>
              </div>
              <Button 
                onClick={() => setSubmitted(false)} 
                variant="outline" 
                className="mt-4"
              >
                Schedule Another Service
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
            <Calendar className="h-8 w-8 text-secondary" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Schedule Your Service
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Fill out the form below to request a service appointment. We'll contact you to confirm your preferred date and time.
          </p>
        </div>

        {/* Form */}
        <Card className="mx-auto max-w-3xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Service Request Form</CardTitle>
            <CardDescription>
              All fields marked with * are required
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(973) 555-1234"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={errors.phone ? 'border-destructive' : ''}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={errors.email ? 'border-destructive' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Service Address *</Label>
                  <Input
                    id="address"
                    type="text"
                    placeholder="123 Main St, Clifton, NJ 07011"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className={errors.address ? 'border-destructive' : ''}
                  />
                  {errors.address && (
                    <p className="text-sm text-destructive">{errors.address}</p>
                  )}
                </div>
              </div>

              {/* Service Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Service Details</h3>

                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => handleInputChange('serviceType', value)}
                  >
                    <SelectTrigger 
                      id="serviceType"
                      className={errors.serviceType ? 'border-destructive' : ''}
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.serviceType && (
                    <p className="text-sm text-destructive">{errors.serviceType}</p>
                  )}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred Date *</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className={errors.preferredDate ? 'border-destructive' : ''}
                    />
                    {errors.preferredDate && (
                      <p className="text-sm text-destructive">{errors.preferredDate}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeWindow">Preferred Time Window *</Label>
                    <Select
                      value={formData.timeWindow}
                      onValueChange={(value) => handleInputChange('timeWindow', value)}
                    >
                      <SelectTrigger 
                        id="timeWindow"
                        className={errors.timeWindow ? 'border-destructive' : ''}
                      >
                        <SelectValue placeholder="Select time window" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeWindows.map((window) => (
                          <SelectItem key={window} value={window}>
                            {window}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.timeWindow && (
                      <p className="text-sm text-destructive">{errors.timeWindow}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Please provide any additional details about your service needs..."
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    rows={4}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col gap-4 pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg font-semibold"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Submit Service Request
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  We'll contact you within 24 hours to confirm your appointment
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="mb-2 text-muted-foreground">
            Need immediate assistance or have questions?
          </p>
          <a 
            href="tel:9739558340" 
            className="inline-flex items-center gap-2 text-xl font-bold text-primary hover:text-primary/80"
          >
            <Phone className="h-5 w-5" />
            (973) 955-8340
          </a>
        </div>
      </div>
    </div>
  );
}
