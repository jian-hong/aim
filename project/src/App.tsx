import React from 'react';
import { Smartphone, Users, Zap, Shield, Globe, CreditCard, Sparkles, ChevronRight } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            AIM
          </h1>
          <p className="text-2xl text-indigo-600 mb-8 font-medium">
            Accelerating Interactive Moments
          </p>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Redefine how you connect with people through seamless, secure, and intuitive social interactions.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors flex items-center">
              Get Started <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-medium border-2 border-indigo-600 hover:bg-indigo-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute right-0 top-0 w-72 h-72 bg-indigo-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute left-0 bottom-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Smartphone}
            title="Shake-to-Connect"
            description="Discover nearby users and groups within 100m with a simple shake of your phone."
          />
          <FeatureCard 
            icon={Zap}
            title="NFC Tap to Connect"
            description="Exchange contact details or join groups instantly by tapping phones together."
          />
          <FeatureCard 
            icon={Users}
            title="Real-Time Groups"
            description="Form dynamic groups instantly with nearby users for seamless collaboration."
          />
          <FeatureCard 
            icon={Globe}
            title="Location Check-Ins"
            description="Share your location and create lasting memories with friends and groups."
          />
          <FeatureCard 
            icon={Shield}
            title="Privacy First"
            description="Control your visibility with granular privacy settings and anonymity options."
          />
          <FeatureCard 
            icon={CreditCard}
            title="Integrated Payments"
            description="Send money, split bills, and manage group expenses effortlessly."
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-2 bg-indigo-500 rounded-full mb-8">
            <Sparkles className="h-8 w-8" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Social Experience?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users already connecting in new and meaningful ways.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-medium hover:bg-indigo-50 transition-colors">
            Download Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">© 2024 AIM. All rights reserved.</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-600">Terms of Service</a>
              <a href="#" className="hover:text-indigo-600">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;