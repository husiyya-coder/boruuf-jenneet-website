"use client";

import { useState } from "react";

export default function BoruufJenneetWebsite() {
const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24">
{/* Navigation Bar */}
<nav className="bg-slate-950/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">

  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    {/* Logo + Name */}
    <div className="flex items-center gap-3">
<button
  className="md:hidden text-white text-3xl"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>
      <img
        src="/logo/logo.png"
        alt="Logo"
        className="w-12 h-12 rounded-full"
      />

      <div>
        <h2 className="font-bold text-lg text-white">
          Boruuf Jenneet
        </h2>

        <p className="text-xs text-slate-300">
          Mutual Aid Association
        </p>
      </div>

    </div>

    {/* Navigation Links */}
    <div className="hidden md:flex gap-8 text-sm font-medium">

 <a href="#home" className="hover:text-orange-400 transition">
  Home
</a>

<a href="#about" className="hover:text-orange-400 transition">
  About
</a>

<a href="#membership" className="hover:text-orange-400 transition">
  Membership
</a>

<a href="#news" className="hover:text-orange-400 transition">
  News
</a>

<a href="#gallery" className="hover:text-orange-400 transition">
  Events
</a>

<a href="#news" className="hover:text-orange-400 transition">
  Reports
</a>

<a href="#contact" className="hover:text-orange-400 transition">
  Contact
</a>

    </div>

  </div>
{menuOpen && (
  <div className="md:hidden mt-4 flex flex-col gap-4 bg-slate-900 p-6 rounded-2xl">

    <a href="#home" onClick={() => setMenuOpen(false)}>
      Home
    </a>

    <a href="#about" onClick={() => setMenuOpen(false)}>
      About
    </a>

    <a href="#membership" onClick={() => setMenuOpen(false)}>
      Membership
    </a>

    <a href="#news" onClick={() => setMenuOpen(false)}>
      News
    </a>

    <a href="#gallery" onClick={() => setMenuOpen(false)}>
      Events
    </a>

    <a href="#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </a>

  </div>
)}
</nav>
      {/* Hero Section */}
<section
  id="home"
  className="bg-gradient-to-r from-emerald-700 via-blue-700 to-orange-500 py-24 px-6"
>

        <div className="max-w-7xl mx-auto text-center">

          {/* LOGO */}
          <img
            src="/logo/logo.png"
            alt="Boruuf Jenneet Logo"
            className="w-32 h-32 mx-auto mb-6"
          />

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Boruuf Jenneet Mutual Aid Association
          </h1>

          {/* MOTTO */}
          <p className="text-xl text-slate-100 max-w-3xl mx-auto mb-8">
            “Waa'ee Keenya, Ofii keenyaan” — Building stronger communities through solidarity,
            transparency, and mutual support.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4">

            <button className="bg-white text-emerald-700 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
              Become a Member
            </button>

            <button className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-slate-900 transition">
              Learn More
            </button>

          </div>
        </div>
      </section>
{/* About Section */}
<section id="about" className="py-24 px-6 bg-slate-950">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* Left Content */}
    <div>

      <h2 className="text-5xl font-bold mb-8 text-white">
        About Boruuf Jenneet
      </h2>

      <p className="text-slate-300 text-lg leading-relaxed mb-6">
        Boruuf Jenneet Mutual Aid Association is a community-based organization
        established to strengthen social solidarity, economic cooperation,
        and humanitarian support among members and the wider society.
      </p>

      <p className="text-slate-400 leading-relaxed">
        The association works to empower communities through organized mutual aid,
        financial cooperation, transparent governance, and sustainable social development.
      </p>

    </div>

    {/* Right Cards */}
    <div className="grid gap-6">

      {/* Mission */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">

        <h3 className="text-2xl font-bold mb-4 text-orange-400">
          Mission
        </h3>

        <p className="text-slate-300 leading-relaxed">
          To build strong social relationships, support humanitarian activities,
          and empower members through economic cooperation and mutual assistance.
        </p>

      </div>

      {/* Vision */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">

        <h3 className="text-2xl font-bold mb-4 text-emerald-400">
          Vision
        </h3>

        <p className="text-slate-300 leading-relaxed">
          To create a united and economically empowered community where members
          grow socially and financially through collective effort and modern mutual aid systems.
        </p>

      </div>

    </div>

  </div>

</section>{/* Membership Features */}
<section id="membership" className="py-24 px-6 bg-slate-900">

  <div className="max-w-7xl mx-auto">

    {/* Section Title */}
    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold text-white mb-6">
        Membership Services
      </h2>

      <p className="text-slate-300 max-w-3xl mx-auto text-lg">
        Modern digital services that support members through financial cooperation,
        social solidarity, and transparent community systems.
      </p>

    </div>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* Card 1 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition">

        <div className="text-5xl mb-5">
          👥
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Membership Registration
        </h3>

        <p className="text-slate-300 leading-relaxed">
          Secure member registration system with digital profiles and member management.
        </p>

      </div>

      {/* Card 2 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition">

        <div className="text-5xl mb-5">
          💳
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Financial Contributions
        </h3>

        <p className="text-slate-300 leading-relaxed">
          Transparent contribution tracking, payment records, and financial reporting.
        </p>

      </div>

      {/* Card 3 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition">

        <div className="text-5xl mb-5">
          📄
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Claims & Benefits
        </h3>

        <p className="text-slate-300 leading-relaxed">
          Digital claim submissions and transparent approval workflow for members.
        </p>

      </div>

      {/* Card 4 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition">

        <div className="text-5xl mb-5">
          🤝
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Community Support
        </h3>

        <p className="text-slate-300 leading-relaxed">
          Community events, humanitarian activities, and social support initiatives.
        </p>

      </div>

    </div>

   </div>
</section>

{/* Leadership Section */}
<section className="py-24 px-6 bg-slate-900">

  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold text-white mb-6">
        Leadership Team
      </h2>

      <p className="text-slate-300 text-lg max-w-3xl mx-auto">
        Meet the dedicated leadership team guiding Boruuf Jenneet
        Mutual Aid Association toward unity, transparency,
        and community development.
      </p>

    </div>

    {/* Leadership Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* Chairperson */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

        <img
          src="/images/chairperson.png"
          alt="Chairperson"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-6 border-4 border-emerald-500"
        />

        <h3 className="text-2xl font-bold text-white">
          Chairperson
        </h3>

        <p className="text-orange-400 mt-2">
          Executive Leadership
        </p>

        <p className="text-slate-300 mt-4">
          Oversees strategic direction, governance,
          and organizational development.
        </p>

      </div>

      {/* Vice Chairperson */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

        <img
          src="/images/vice-chairperson.png"
          alt="Vice Chairperson"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-6 border-4 border-blue-500"
        />

        <h3 className="text-2xl font-bold text-white">
          Vice Chairperson
        </h3>

        <p className="text-blue-400 mt-2">
          Operations Management
        </p>

        <p className="text-slate-300 mt-4">
          Supports organizational coordination
          and operational activities.
        </p>

      </div>

      {/* Accountant */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

        <img
          src="/images/accountant.png"
          alt="Accountant"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-6 border-4 border-orange-500"
        />

        <h3 className="text-2xl font-bold text-white">
          Accountant
        </h3>

        <p className="text-orange-400 mt-2">
          Financial Management
        </p>

        <p className="text-slate-300 mt-4">
          Handles financial records, contributions,
          and transparent reporting.
        </p>

      </div>

      {/* Secretary */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

        <img
          src="/images/secretary.png"
          alt="Secretary"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-6 border-4 border-cyan-500"
        />

        <h3 className="text-2xl font-bold text-white">
          Secretary
        </h3>

        <p className="text-cyan-400 mt-2">
          Committee Member
        </p>

        <p className="text-slate-300 mt-4">
          Coordinates documentation,
          communication, and member records.
        </p>

      </div>

      {/* Cashier */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

        <img
          src="/images/cashier.png"
          alt="Cashier"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-6 border-4 border-pink-500"
        />

        <h3 className="text-2xl font-bold text-white">
          Cashier
        </h3>

        <p className="text-pink-400 mt-2">
          Committee Member
        </p>

        <p className="text-slate-300 mt-4">
          Manages financial transactions,
          payment collection, and member support.
        </p>

      </div>

      {/* Auditor */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

        <img
          src="/images/auditor.png"
          alt="Auditor"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-6 border-4 border-purple-500"
        />

        <h3 className="text-2xl font-bold text-white">
          Auditor
        </h3>

        <p className="text-purple-400 mt-2">
          Committee Member
        </p>

        <p className="text-slate-300 mt-4">
          Reviews accountability, transparency,
          and organizational financial systems.
        </p>

      </div>

    </div>

  </div>

</section>
{/* Community Gallery */}
<section id="gallery" className="py-24 px-6 bg-slate-900">

  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold text-white mb-6">
        Community Activities
      </h2>

      <p className="text-slate-300 text-lg max-w-3xl mx-auto">
        Supporting communities through unity, humanitarian service,
        and collective social development activities.
      </p>

    </div>

    {/* Gallery Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Image 1 */}
      <div className="overflow-hidden rounded-3xl border border-white/10 hover:scale-105 transition duration-300">
        <img
          src="/images/event.png"
          alt="Community Activity"
          className="w-full h-72 object-cover"
        />
      </div>

      {/* Image 2 */}
      <div className="overflow-hidden rounded-3xl border border-white/10 hover:scale-105 transition duration-300">
        <img
          src="/images/community2.png"
          alt="Community Event"
          className="w-full h-72 object-cover"
        />
      </div>

      {/* Image 3 */}
      <div className="overflow-hidden rounded-3xl border border-white/10 hover:scale-105 transition duration-300">
        <img
         src="/images/meeting.png"
          alt="Association Meeting"
          className="w-full h-72 object-cover"
        />
      </div>

      {/* Image 4 */}
      <div className="overflow-hidden rounded-3xl border border-white/10 hover:scale-105 transition duration-300">
        <img
          src="/images/community4.png"
          alt="Community Support"
          className="w-full h-72 object-cover"
        />
      </div>

      {/* Image 5 */}
      <div className="overflow-hidden rounded-3xl border border-white/10 hover:scale-105 transition duration-300">
        <img
          src="/images/community5.png"
          alt="Humanitarian Activity"
          className="w-full h-72 object-cover"
        />
      </div>

      {/* Image 6 */}
      <div className="overflow-hidden rounded-3xl border border-white/10 hover:scale-105 transition duration-300">
        <img
          src="/images/community6.png"
          alt="Community Gathering"
          className="w-full h-72 object-cover"
        />
      </div>

    </div>

  </div>

</section>{/* Member Registration Section */}
<section className="py-24 px-6 bg-slate-950">

  <div className="max-w-5xl mx-auto">

    {/* Section Header */}
    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold text-white mb-6">
        Member Registration
      </h2>

      <p className="text-slate-300 text-lg max-w-3xl mx-auto">
        Join Boruuf Jenneet Mutual Aid Association and become part of
        a strong community built on solidarity, cooperation, and mutual support.
      </p>

    </div>

    {/* Registration Form */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-10">

      <form className="grid md:grid-cols-2 gap-6">

        {/* Full Name */}
        <div>
          <label className="block text-slate-300 mb-2">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter full name"
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 text-white outline-none focus:border-emerald-500"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-slate-300 mb-2">
            Gender
          </label>

          <select className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 text-white outline-none focus:border-emerald-500">

            <option>Male</option>
            <option>Female</option>

          </select>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-slate-300 mb-2">
            Date of Birth
          </label>

          <input
            type="date"
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 text-white outline-none focus:border-emerald-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-slate-300 mb-2">
            Phone Number
          </label>

          <input
            type="text"
            placeholder="+251..."
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 text-white outline-none focus:border-emerald-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-slate-300 mb-2">
            Email Address
          </label>

          <input
            type="email"
            placeholder="example@email.com"
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 text-white outline-none focus:border-emerald-500"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-slate-300 mb-2">
            Country
          </label>

          <input
            type="text"
            placeholder="Country"
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 text-white outline-none focus:border-emerald-500"
          />
        </div>

        {/* Nationality */}
        <div className="md:col-span-2">
          <label className="block text-slate-300 mb-2">
            Nationality
          </label>

          <input
            type="text"
            placeholder="Nationality"
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 text-white outline-none focus:border-emerald-500"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center mt-6">

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-500 px-10 py-4 rounded-2xl text-white font-bold text-lg transition hover:scale-105"
          >
            Register Membership
          </button>

        </div>

      </form>

    </div>

  </div>

</section>
      {/* Governance Section */}
      <section className="py-24 px-6 bg-slate-900">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>
              <h2 className="text-4xl font-bold mb-5">
                Governance & Transparency
              </h2>

              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Promote accountability through public financial reports,
                election systems, and community-driven governance tools.
              </p>

              <div className="flex flex-wrap gap-4">

                <button className="bg-emerald-600 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
                  Download Reports
                </button>

                <button className="border border-slate-500 px-6 py-3 rounded-2xl hover:bg-white hover:text-slate-900 transition">
                  Participate in Voting
                </button>

              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-2">12</h3>
                <p className="text-slate-300">Annual Reports Published</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-2">350+</h3>
                <p className="text-slate-300">Claims Processed</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-2">48</h3>
                <p className="text-slate-300">Community Events</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-2">99%</h3>
                <p className="text-slate-300">Member Satisfaction</p>
              </div>

            </div>
          </div>
        </div>
      </section>
{/* News & Events Section */}
<section id="news" className="py-24 px-6 bg-slate-950">

  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold text-white mb-6">
        News & Events
      </h2>

      <p className="text-slate-300 text-lg max-w-3xl mx-auto">
        Stay updated with the latest activities, community programs,
        meetings, and humanitarian initiatives of Boruuf Jenneet.
      </p>

    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">

        <img
          src="/images/meeting.png"
          alt="Community Meeting"
          className="w-full h-56 object-cover"
        />

        <div className="p-6">

          <p className="text-orange-400 text-sm mb-3">
            Community Meeting
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">
            Monthly Member Gathering
          </h3>

          <p className="text-slate-300 leading-relaxed">
            Members gathered to discuss development plans,
            transparency, and community cooperation.
          </p>

        </div>

      </div>

      {/* Card 2 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">

        <img
          src="/images/community2.png"
          alt="Humanitarian Activity"
          className="w-full h-56 object-cover"
        />

        <div className="p-6">

          <p className="text-emerald-400 text-sm mb-3">
            Humanitarian Activity
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">
            Community Support Program
          </h3>

          <p className="text-slate-300 leading-relaxed">
            Boruuf Jenneet continues supporting members
            through organized humanitarian activities.
          </p>

        </div>

      </div>

      {/* Card 3 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">

        <img
          src="/images/event.png"
          alt="Association Event"
          className="w-full h-56 object-cover"
        />

        <div className="p-6">

          <p className="text-blue-400 text-sm mb-3">
            Association Event
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">
            Social Development Initiative
          </h3>

          <p className="text-slate-300 leading-relaxed">
            Activities focused on strengthening unity,
            social welfare, and economic cooperation.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>{/* Contact Section */}
<section id="contact" className="py-24 px-6 bg-slate-900">

  <div className="max-w-7xl mx-auto text-center">

    <h2 className="text-5xl font-bold text-white mb-6">
      Contact Us
    </h2>

    <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-12">
      Reach out to Boruuf Jenneet Mutual Aid Association
      for membership, support, and community cooperation.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300">

        <h3 className="text-2xl font-bold text-orange-400 mb-4">
          Phone
        </h3>

        <p className="text-slate-300">
          +251 93 023 3786
        </p>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

        <h3 className="text-2xl font-bold text-emerald-400 mb-4">
          Email
        </h3>

        <p className="text-slate-300">
          borufjenet@gmail.com
        </p>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

        <h3 className="text-2xl font-bold text-blue-400 mb-4">
          Location
        </h3>

        <p className="text-slate-300">
          Adama, Oromia, Ethiopia
        </p>

      </div>

    </div>

  </div>

</section>
      {/* Footer */}
      <footer className="bg-emerald-700 text-white py-10 px-6 text-center">

        <h3 className="text-2xl font-bold mb-3">
          Boruuf Jenneet Mutual Aid Association
        </h3>

        <p className="text-emerald-100 mb-4 max-w-2xl mx-auto">
          Empowering communities through solidarity, transparency, and mutual support.
        </p>

        <p className="text-sm text-emerald-200">
          © 2026 Boruuf Jenneet Mutual Aid Association. All rights reserved.
        </p>

      </footer>

    </div>
  );
}