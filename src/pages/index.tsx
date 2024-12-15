// src/pages/index.tsx
import type {NextPage} from 'next';
import Head from 'next/head';
import {useState} from 'react';
import {Clock, MapPin, Mail, Phone, MessageSquare} from 'lucide-react';
import {CONTACT_INFO, SERVICES} from '@/constants';
import BookingForm from '@/components/BookingForm';
import type {BookingFormData} from '@/types';

const Home: NextPage = () => {
    const [showBookingForm, setShowBookingForm] = useState(false);
    const handleBookingSubmit = async (data: BookingFormData) => {
        try {
            // Format the message for WhatsApp
            const message = `
New Booking Request!

👤 Name: ${data.name}
📞 Phone: ${data.phone}
📧 Email: ${data.email}
🏥 Mode: ${data.mode}
💬 Message: ${data.message}
    `.trim();

            // Create WhatsApp URL - using the direct api.whatsapp.com format
            const whatsappUrl = `https://api.whatsapp.com/send/?phone=${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;

            // Open WhatsApp in new tab
            window.open(whatsappUrl, '_blank');

            // Close the form
            setShowBookingForm(false);
        } catch (error) {
            console.error('Booking error:', error);
            alert('Something went wrong. Please try reaching out on WhatsApp directly.');
        }
    };

    return (
        <>
            <Head>
                <title>Ms. Kshama Pathak - Clinical Psychologist</title>
                <meta name="description"
                      content="Professional counseling and psychological services by Ms. Kshama Pathak"/>
            </Head>

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                {/* Hero Section */}
                <header className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 pb-24 pt-16">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <img
                                src="/kp.png"
                                alt="Ms. Kshama Pathak"
                                className="w-48 h-48 rounded-full object-cover mx-auto mb-8 shadow-xl border-4 border-white hover:scale-105 transition-transform duration-300"
                            />
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">Ms. Kshama Pathak</h1>
                            <p className="text-xl text-gray-600 mb-4">Clinical Psychologist | M.A. Psychology</p>
                            <p className="text-gray-600 mb-8">22 Years of Experience in Transforming Lives</p>

                            <button
                                onClick={() => setShowBookingForm(true)}
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl"
                            >
                                Book a Session
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
                    {/* Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        <div
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="p-3 bg-blue-50 rounded-full">
                                    <MapPin className="w-6 h-6 text-blue-600"/>
                                </div>
                                <h3 className="font-medium text-lg">Location</h3>
                                <p className="text-gray-600">{CONTACT_INFO.location}</p>
                            </div>
                        </div>
                        <div
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="p-3 bg-blue-50 rounded-full">
                                    <Clock className="w-6 h-6 text-blue-600"/>
                                </div>
                                <h3 className="font-medium text-lg">Hours</h3>
                                <p className="text-gray-600">{CONTACT_INFO.hours}</p>
                            </div>
                        </div>
                        <div
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="p-3 bg-blue-50 rounded-full">
                                    <MessageSquare className="w-6 h-6 text-blue-600"/>
                                </div>
                                <h3 className="font-medium text-lg">Consultation</h3>
                                <p className="text-gray-600">Online & In-clinic</p>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                            Areas of Expertise
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {SERVICES.map((service) => (
                                <div
                                    key={service.id}
                                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center hover:bg-blue-50 transform hover:-translate-y-1"
                                >
                                    <span className="text-gray-700 font-medium">{service.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact */}
                    <section className="bg-gradient-to-br from-white to-blue-50 p-10 rounded-2xl shadow-lg mb-20">
                        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Phone Card */}
                            <div
                                className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                                <div className="p-3 bg-blue-50 rounded-full">
                                    <Phone className="w-5 h-5 text-blue-600"/>
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">Phone</h3>
                                    <a
                                        href={`tel:${CONTACT_INFO.phone}`}
                                        className="text-gray-600 hover:text-blue-600 transition-colors"
                                    >
                                        {CONTACT_INFO.phone}
                                    </a>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div
                                className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                                <div className="p-3 bg-blue-50 rounded-full">
                                    <Mail className="w-5 h-5 text-blue-600"/>
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">Email</h3>
                                    <a
                                        href={`mailto:${CONTACT_INFO.email}`}
                                        className="text-gray-600 hover:text-blue-600 transition-colors"
                                    >
                                        {CONTACT_INFO.email}
                                    </a>
                                </div>
                            </div>
                            <div
                                className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow md:col-span-2">
                                <div className="p-3 bg-blue-50 rounded-full">
                                    <MapPin className="w-5 h-5 text-blue-600"/>
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">Location</h3>
                                    <p className="text-gray-600">
                                        {CONTACT_INFO.location}
                                        <a
                                            href={CONTACT_INFO.mapLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-2 text-blue-600 hover:text-blue-700 hover:underline"
                                        >
                                            View on Map →
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div
                                className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow md:col-span-2">
                                <div className="p-3 bg-blue-50 rounded-full">
                                    <MessageSquare className="w-5 h-5 text-blue-600"/>
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">Profile</h3>
                                    <p className="text-gray-600">
                                        <a
                                            href="https://www.practo.com/gurgaon/doctor/kshama-pathak-psychologist-1?specialization=Psychologist&practice_id=701644"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-700 hover:underline"
                                        >
                                            Find on Practo →
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-gradient-to-b from-transparent to-gray-50 py-8">
                    <div className="max-w-5xl mx-auto px-4 text-center text-gray-600">
                        <p className="hover:text-gray-900 transition-colors">
                            © {new Date().getFullYear()} Ms. Kshama Pathak. All rights reserved.
                        </p>
                    </div>
                </footer>

                {/* Booking Form Modal */}
                {showBookingForm && (
                    <BookingForm
                        onClose={() => setShowBookingForm(false)}
                        onSubmit={handleBookingSubmit}
                    />
                )}
            </div>
        </>
    );
};

export default Home;
