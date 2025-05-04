'use client';
import Image from 'next/image';
import { useState } from 'react';
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  ThumbsUp,
  FileText,
  Lightbulb,
  Users,
  Smile,
  Book,
} from 'lucide-react';

export default function Home() {
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Navbar */}
      <div className="w-full sticky top-0 z-50 bg-white shadow-md">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 lg:px-12 py-12 border-b border-gray-300 text-sm text-gray-700 relative">
          {/* Left - Email and Phone */}
          <div className="flex items-center gap-6">
            <span>📧 icfp.yamunanagar@gmail.com</span>
            <span>📞 8929199313</span>
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/icfp_logo-removebg-preview.png"
              alt="ICFP Logo"
              width={200}
              height={50}
              priority
            />
          </div>

          {/* Right - Socials */}
          <div className="flex items-center gap-4">
            <a href="#"><Instagram size={18} className="hover:text-blue-600" /></a>
            <a href="#"><Facebook size={18} className="hover:text-blue-600" /></a>
            <a href="#"><Twitter size={18} className="hover:text-blue-600" /></a>
            <a href="#"><Linkedin size={18} className="hover:text-blue-600" /></a>
            <a href="#"><Youtube size={18} className="hover:text-blue-600" /></a>
          </div>
        </div>

        {/* Bottom Nav */}
        <nav className="flex justify-between items-center px-6 lg:px-12 py-3">
          <div className="flex gap-8 text-gray-800 font-medium">
            <a href="#" className="hover:text-blue-700 transition">Home</a>
            <a href="#" className="hover:text-blue-700 transition">About</a>
            <div
              className="relative group"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <button className="hover:text-blue-700 transition">Courses</button>
              {coursesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-md w-48 mt-2 z-10">
                  <a href="#" className="block px-4 py-2 hover:bg-blue-50">Online Courses</a>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-50">Offline Courses</a>
                </div>
              )}
            </div>
            <a href="#" className="hover:text-blue-700 transition">Career</a>
            <a href="#" className="hover:text-blue-700 transition">Contact</a>
          </div>

          <div className="flex gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition">
              Enquiry
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg shadow transition">
              Sign In
            </button>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[600px]">
        <Image
          src="/hero-bg1.jpg"
          alt="Hero Banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Features Section */}
      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature Cards */}
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center p-6 border rounded-xl hover:shadow-lg transition">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <ThumbsUp className="text-green-600" size={48} />
            </div>
            <h3 className="text-lg  text-gray-600 font-bold mb-2">Expert Faculty Support</h3>
            <p className="text-gray-600 text-sm">
              &quot;Our expert faculty provides exceptional guidance, ensuring high-quality education that empowers students to excel and succeed.&quot;
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center p-6 border rounded-xl hover:shadow-lg transition">
            <div className="bg-indigo-100 p-4 rounded-full mb-4">
              <FileText className="text-indigo-600" size={48} />
            </div>
            <h3 className="text-lg  text-gray-600 font-bold mb-2">Recognized Certifications</h3>
            <p className="text-gray-600 text-sm">
            &quot;Earn recognized certifications and attend workshops that enhance skills, broaden knowledge, and boost career opportunities.&quot;
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center p-6 border rounded-xl hover:shadow-lg transition">
            <div className="bg-red-100 p-4 rounded-full mb-4">
              <Lightbulb className="text-red-600" size={48} />
            </div>
            <h3 className="text-lg  text-gray-600 font-bold mb-2">Placements Assistance</h3>
            <p className="text-gray-600 text-sm">
            &quot;Our dedicated placement assistance ensures every student is well-prepared and connected to rewarding career opportunities.&quot;
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center p-6 border rounded-xl hover:shadow-lg transition">
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <Users className="text-purple-600" size={48} />
            </div>
            <h3 className="text-lg  text-gray-600 font-bold mb-2">Happy Learners</h3>
            <p className="text-gray-600 text-sm">
            &quot;At our institute, joy and learning thrive together, creating a vibrant, nurturing environment for happy, successful learners.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Stats + About Section */}
      <section className="py-16 px-6 lg:px-12 bg-gray-50">
      <h2 className="text-1xl lg:text-2xl text-center font-bold text-cyan-700 mb-3">
      </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Users className="text-purple-600" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">20</h3>
              <p className="text-gray-600 text-sm">Years of experience</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Smile className="text-green-600" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">2354</h3>
              <p className="text-gray-600 text-sm">Happy Learners</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <Book className="text-yellow-500" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">99</h3>
              <p className="text-gray-600 text-sm">All Courses</p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <ThumbsUp className="text-blue-600" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">100%</h3>
              <p className="text-gray-600 text-sm">Clients Satisfaction</p>
            </div>
          </div>

          {/* About Text */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-1xl lg:text-2xl font-bold text-cyan-700 mb-3">
              <span className="text-red-500 mt-2">ACCOUNT & FINANCE.</span>
            </h2>
            <p  className="text-gray-700 text-sm mt-4">
            We welcome you to join one of the most stable and growing profession across the world<br></br>
            </p>
            <p className="text-gray-700 text-sm mt-4">
              Accounting functions as the bottom line of every business enterprise, as such those who are expert in practical accounting are pillars of the organization & they enjoy maximum trust of the organization.
            </p>
            <p className="text-gray-700 text-sm mt-4">
              But there is huge gap in the skills that industry demands in a candidate & what candidate possesses. Your choice for training institute is an important one. All training institutes have their own special characteristic & methods.
            </p>
            <p className="text-gray-700 text-sm mt-4">
              You can pursue training programme along with college studies at the same time to enhance your qualification & skills.
            </p>

            {/* Director Info */}
            <div className="flex items-center gap-4 mt-6">
              <Image
                src="/director.jpg"
                alt="Director Photo"
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-bold text-cyan-700">Harish Nagpal</h4>
                <p className="text-gray-500 text-sm">Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
{/* Footer Section */}
<footer className="bg-black-900 text-gray-300 pt-10 pb-6">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
    
    {/* Company Info */}
    <div>
    <div>
            <Image
              src="/icfp_logo-removebg-preview.png"
              alt="ICFP Logo"
              width={200}
              height={50}
              priority
            />
      </div>
      {/* <p className="text-sm mb-4">
      Accounting functions as the bottom line of every business enterprise, as such those who are expert in practical accounting are pillars of the organization & they enjoy maximum trust of the organization      </p> */}
      <div className="flex space-x-4 mt-4">
      <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          {/* Example social icon */}
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-white">Home</a></li>
        <li><a href="#" className="hover:text-white">About Us</a></li>
        <li><a href="#" className="hover:text-white">Career</a></li>
        <li><a href="#" className="hover:text-white">Contact</a></li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Our Courses</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-white">Tally</a></li>
        <li><a href="#" className="hover:text-white">Programming</a></li>
        <li><a href="#" className="hover:text-white">Basic</a></li>
        <li><a href="#" className="hover:text-white">More..</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
      <ul className="space-y-2 text-sm">
        <li><span className="font-bold">Address:</span> #556 (1st Floor), M.L.N. College Road, Near Santpura Gurudwara, Opp. Sant Nishcal B.ed College</li>
        <li><span className="font-bold">Phone:</span> +91 8929999313, 8929199313</li>
        <li><span className="font-bold">Email:</span> icfp.yamunanagar@gmail.com</li>
      </ul>
    </div>

  </div> 

  {/* Bottom Bar */}
  <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
    © 2025 ICFP. All rights reserved.
  </div>
</footer>

    </div>
  );
}
