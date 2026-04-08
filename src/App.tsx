/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  MapPin, 
  Clock, 
  Star, 
  Activity, 
  HeartPulse, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2,
  Menu,
  X,
  Stethoscope,
  UserCheck
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-primary-100 selection:text-primary-700">
      
      {/* Top Bar */}
      <div className="bg-primary-700 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Pune, Maharashtra</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> Mon-Sat: 9:00 AM - 8:00 PM</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+919876543210" className="flex items-center hover:text-primary-100 transition-colors">
              <Phone className="w-4 h-4 mr-2" /> +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-md py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-primary-600 text-white p-2 rounded-lg">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 leading-tight">Dr. Pallavi Bhore</h1>
              <p className="text-xs text-primary-600 font-medium">Advanced Physiotherapy Clinic</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Services</a>
            <a href="#conditions" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Conditions</a>
            <a href="#about" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">About</a>
            <a href="#testimonials" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Reviews</a>
            <a href="#contact" className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md flex items-center">
              <Calendar className="w-4 h-4 mr-2" /> Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col space-y-4">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-medium p-2 hover:bg-slate-50 rounded-lg">Services</a>
            <a href="#conditions" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-medium p-2 hover:bg-slate-50 rounded-lg">Conditions</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-medium p-2 hover:bg-slate-50 rounded-lg">About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-primary-600 text-white text-center px-5 py-3 rounded-xl font-medium mt-2">
              Book Appointment
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-slate-50 -z-10" />
        
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                <span className="text-sm font-medium text-slate-600">Accepting New Patients in Pune</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
                Recover Faster. <br/>
                <span className="text-primary-600">Live Pain-Free.</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                Expert physiotherapy care in Pune tailored to your body. We treat the root cause of your pain, not just the symptoms, so you can get back to the life you love.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <a href="#contact" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center">
                  Book Assessment <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Us
                </a>
              </div>

              <div className="mt-10 flex items-center space-x-4 text-sm text-slate-500 font-medium">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-slate-700 font-bold mr-1">5.0</span>
                  <span>(120+ Google Reviews)</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:ml-auto"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Dr. Pallavi Bhore treating a patient" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Dr. Pallavi Bhore</p>
                      <p className="text-sm text-slate-600">BPT, MPT (Ortho) • 10+ Yrs Exp</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years Experience", value: "10+" },
              { label: "Happy Patients", value: "5,000+" },
              { label: "Google Rating", value: "5.0" },
              { label: "Advanced Techniques", value: "15+" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-2"
              >
                <h3 className="text-3xl sm:text-4xl font-bold text-primary-600">{stat.value}</h3>
                <p className="text-sm sm:text-base text-slate-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Specialized Physiotherapy Services</h3>
            <p className="text-lg text-slate-600">We provide evidence-based treatments tailored to your specific condition, ensuring a faster and safer recovery.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: Activity, title: "Orthopedic Rehab", desc: "Treatment for joint pains, arthritis, and musculoskeletal disorders." },
              { icon: HeartPulse, title: "Sports Injuries", desc: "Rapid recovery protocols for athletes and active individuals." },
              { icon: UserCheck, title: "Post-Surgery Rehab", desc: "Guided rehabilitation following orthopedic or general surgeries." },
              { icon: Stethoscope, title: "Spine & Posture", desc: "Specialized care for back pain, neck pain, and postural correction." },
              { icon: ShieldCheck, title: "Geriatric Care", desc: "Improving mobility, balance, and independence for the elderly." },
              { icon: CheckCircle2, title: "Manual Therapy", desc: "Hands-on techniques to mobilize joints and soft tissues." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Conditions Treated (SEO Focus) */}
      <section id="conditions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:w-1/2">
              <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Conditions We Treat</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Don't let pain limit your lifestyle.</h3>
              <p className="text-lg text-slate-600 mb-8">
                Whether you're dealing with acute injury or chronic discomfort, we have the expertise to diagnose and treat a wide range of physical conditions.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Sciatica & Slip Disc", "Frozen Shoulder", 
                  "Knee Osteoarthritis", "Cervical Spondylosis",
                  "Tennis Elbow", "Plantar Fasciitis",
                  "Ligament Sprains", "Muscle Strains"
                ].map((condition, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{condition}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a href="#contact" className="text-primary-600 font-semibold hover:text-primary-700 flex items-center">
                  Not sure what you have? Consult us <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="lg:w-1/2 w-full">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-6">Our 3-Step Recovery Process</h4>
                <div className="space-y-8">
                  {[
                    { step: "01", title: "Detailed Assessment", desc: "We thoroughly evaluate your condition, medical history, and movement patterns to find the root cause." },
                    { step: "02", title: "Personalized Treatment", desc: "A custom plan combining manual therapy, modalities, and targeted exercises for pain relief." },
                    { step: "03", title: "Active Rehabilitation", desc: "Strengthening and conditioning to prevent future recurrence and restore full function." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-700 font-bold">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h5>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary-200 font-semibold tracking-wide uppercase text-sm mb-3">Patient Stories</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Trusted by the Pune Community</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rahul D.", issue: "Severe Back Pain", text: "I had severe lower back pain that made sitting impossible. Dr. Pallavi's diagnosis was spot on. Within 5 sessions, I was back to my normal routine. Highly recommended!" },
              { name: "Sneha M.", issue: "Post-ACL Surgery", text: "My post-surgery rehab was handled exceptionally well. The clinic has great equipment and Dr. Pallavi gives personal attention to every exercise. I'm running again!" },
              { name: "Anil K.", issue: "Frozen Shoulder", text: "I couldn't lift my arm above my chest. The manual therapy sessions worked wonders. Very professional, clean clinic, and a truly caring doctor." }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-primary-50 mb-6 leading-relaxed">"{review.text}"</p>
                <div>
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-sm text-primary-200">Treated for {review.issue}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid lg:grid-cols-2">
              
              {/* Form Side */}
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Book an Appointment</h3>
                <p className="text-slate-600 mb-8">Fill out the form below or call us directly. We'll get back to you to confirm your slot.</p>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">What are you seeking help for?</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white">
                      <option>Back/Neck Pain</option>
                      <option>Joint Pain (Knee, Shoulder, etc.)</option>
                      <option>Sports Injury</option>
                      <option>Post-Surgery Rehab</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-colors shadow-md hover:shadow-lg">
                    Request Appointment
                  </button>
                </form>
              </div>

              {/* Info Side */}
              <div className="bg-slate-900 p-8 md:p-12 text-white flex flex-col justify-center">
                <h4 className="text-2xl font-bold mb-8">Clinic Information</h4>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-primary-400 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg mb-1">Location</p>
                      <p className="text-slate-300 leading-relaxed">
                        123 Health Avenue, Near Main Square,<br />
                        Kothrud, Pune, Maharashtra 411038
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-primary-400 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg mb-1">Working Hours</p>
                      <p className="text-slate-300">Mon - Sat: 9:00 AM - 8:00 PM</p>
                      <p className="text-slate-300">Sunday: By Appointment Only</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary-400 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg mb-1">Contact</p>
                      <p className="text-slate-300">+91 98765 43210</p>
                      <p className="text-slate-300">dr.pallavi@exampleclinic.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-800">
                  <p className="text-sm text-slate-400 mb-4">Need immediate assistance?</p>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-xl transition-colors">
                    <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Activity className="w-6 h-6 text-primary-500" />
                <span className="text-xl font-bold text-white">Dr. Pallavi Bhore</span>
              </div>
              <p className="mb-4 max-w-md">Dedicated to providing the highest quality physiotherapy care in Pune. Helping you move better, feel better, and live pain-free.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-primary-400 transition-colors">Services</a></li>
                <li><a href="#conditions" className="hover:text-primary-400 transition-colors">Conditions Treated</a></li>
                <li><a href="#about" className="hover:text-primary-400 transition-colors">About Dr. Pallavi</a></li>
                <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Dr. Pallavi Bhore Physiotherapy Clinic. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed for Patient Care in Pune.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile WhatsApp CTA */}
      <a 
        href="https://wa.me/919876543210" 
        className="md:hidden fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
