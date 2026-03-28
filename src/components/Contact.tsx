import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

// ─── EmailJS Config ──────────────────────────────────────────────────────────
// 1. Go to https://www.emailjs.com/ → sign up free
// 2. Add Email Service (connect your Gmail) → copy Service ID below
// 3. Create Email Template → copy Template ID below
// 4. Go to Account → API Keys → copy Public Key below
const EMAILJS_SERVICE_ID  = "service_5pphdxa";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_11hcmik";  // e.g. "template_xyz456"
const EMAILJS_PUBLIC_KEY  = "ZH-V037WpZbp6GOKg";   // e.g. "abcXYZ123..."

// In your EmailJS template use these variables:
//   {{from_name}}    → sender's name
//   {{from_email}}   → sender's email
//   {{subject}}      → subject
//   {{message}}      → message body
//   {{to_name}}      → Rakesh  (set as fixed text in template or keep this)
// ─────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          subject:    formData.subject,
          message:    formData.message,
          to_name:    "Rakesh",
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent! ✅",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send ❌",
        description: "Something went wrong. Please try emailing directly at rakeshkapilavayi978@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "rakeshkapilavayi978@gmail.com",
      link: "mailto:rakeshkapilavayi978@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9010047744",
      link: "tel:+919010047744",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bhimavaram, Andhra Pradesh",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in data science internships or ML projects? I'd love to collaborate!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing data science internships, ML projects,
                or just having a chat about artificial intelligence and analytics.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="card-gradient hover-lift transition-smooth border border-primary/20"
                >
                  <CardContent className="p-4">
                    <a
                      href={info.link}
                      className="flex items-center gap-3 hover:text-primary transition-smooth"
                    >
                      <div className="p-2 rounded-lg primary-gradient">
                        <info.icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">{info.title}</p>
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-right">
            <Card className="card-gradient border border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-muted/50 border-primary/20 focus:border-primary transition-smooth"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-muted/50 border-primary/20 focus:border-primary transition-smooth"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project discussion, collaboration, etc."
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-primary/20 focus:border-primary transition-smooth"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or how I can help you..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-primary/20 focus:border-primary transition-smooth resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSending}
                    className="w-full primary-gradient hover-glow transition-smooth"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;