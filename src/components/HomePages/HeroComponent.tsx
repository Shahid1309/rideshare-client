

import Image from 'next/image';
import Link from 'next/link';
import img1 from "../../../public/Images/Connect.png"

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-green-50 to-green-100 py-16 px-4 text-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="lg:text-left text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full text-green-800 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Trusted by 10,000+ Users
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl lg:text-4xl font-black text-green-800 leading-tight">
              Affordable & Easy{' '}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Ride Sharing
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-green-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Connect with verified drivers for your next trip. Experience the perfect blend of{' '}
              <span className="font-semibold text-green-800">safety, speed, and affordability</span> in every journey.
            </p>

            {/* Features List */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-green-700">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Verified Drivers</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Best Prices</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/search">
                <button className="group bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Find a Ride</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
              <Link href="/how-it-works">
                <button className="px-8 py-4 border-2 border-green-600 text-green-700 rounded-full hover:bg-green-50 transition-all duration-300 font-semibold text-lg hover:border-green-700 hover:text-green-800">
                  How It Works
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-green-200">
              <div>
                <div className="text-3xl font-bold text-green-800">50K+</div>
                <div className="text-green-600 font-medium">Happy Riders</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-800">1000+</div>
                <div className="text-green-600 font-medium">Verified Drivers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-800">25+</div>
                <div className="text-green-600 font-medium">Cities</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:order-last order-first">
            <div className="relative">
              {/* Decorative background for image */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-green-300/30 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-6 rounded-3xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src={img1}
                  alt="Hero Driver"
                  width={500}
                  height={400}
                  className="mx-auto rounded-2xl"
                  priority
                />
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-green-600 text-white p-3 rounded-full shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-600 text-white p-3 rounded-full shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;