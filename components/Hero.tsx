'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: string;
    category: string;
    spiceLevel: number;
}

const menuItems: MenuItem[] = [
    // Starters
    { id: 1, name: "Samosas", description: "Crispy pastry filled with spiced potatoes and peas", price: "KES 300", category: "Starters", spiceLevel: 2 },
    { id: 2, name: "Kachumbari", description: "Fresh tomato and onion salad with lime dressing", price: "KES 200", category: "Starters", spiceLevel: 1 },
    { id: 3, name: "Chips Mayai", description: "French fries omelette with tomato sauce", price: "KES 400", category: "Starters", spiceLevel: 1 },

    // Main Courses
    { id: 4, name: "Nyama Choma Steak", description: "Premium grilled beef steak with Kenyan spices", price: "KES 3,200", category: "Main Courses", spiceLevel: 3 },
    { id: 5, name: "Pilau Rice with Beef", description: "Aromatic rice with tender beef and spices", price: "KES 1,800", category: "Main Courses", spiceLevel: 2 },
    { id: 6, name: "Chapati with Beef", description: "Soft flatbread with tender beef", price: "KES 1,200", category: "Main Courses", spiceLevel: 2 },
    { id: 7, name: "Grilled Chicken", description: "Succulent grilled chicken with herbs", price: "KES 2,100", category: "Main Courses", spiceLevel: 2 },
    { id: 8, name: "Grilled Fish", description: "Fresh tilapia from Lake Victoria", price: "KES 2,800", category: "Main Courses", spiceLevel: 1 },
    { id: 9, name: "Mukimo with Greens", description: "Mashed potatoes with vegetables", price: "KES 1,500", category: "Main Courses", spiceLevel: 1 },

    // Traditional Dishes
    { id: 10, name: "Ugali with Sukuma Wiki", description: "Maize meal with collard greens", price: "KES 600", category: "Traditional", spiceLevel: 1 },
    { id: 11, name: "Githeri", description: "Boiled maize and beans with avocado", price: "KES 800", category: "Traditional", spiceLevel: 1 },
    { id: 12, name: "Matoke", description: "Steamed green bananas with beef stew", price: "KES 1,400", category: "Traditional", spiceLevel: 2 },

    // Beverages
    { id: 13, name: "Kenyan Chai", description: "Spiced black tea with milk", price: "KES 150", category: "Beverages", spiceLevel: 0 },
    { id: 14, name: "Fresh Juice", description: "Seasonal fruit juice", price: "KES 250", category: "Beverages", spiceLevel: 0 },
    { id: 15, name: "Coffee", description: "Freshly brewed Kenyan coffee", price: "KES 200", category: "Beverages", spiceLevel: 0 },

    // Desserts
    { id: 16, name: "Mandazi", description: "Sweet coconut bread triangles", price: "KES 300", category: "Desserts", spiceLevel: 0 },
    { id: 17, name: "Fruit Salad", description: "Fresh seasonal fruits", price: "KES 400", category: "Desserts", spiceLevel: 0 },
];

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isReservationOpen, setIsReservationOpen] = useState(false);
    const [isOrderOpen, setIsOrderOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const categories = ['All', 'Starters', 'Main Courses', 'Traditional', 'Beverages', 'Desserts'];

    const filteredItems = selectedCategory === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === selectedCategory);

    const renderSpiceLevel = (level: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <div
                key={i}
                className={`w-2 h-2 rounded-full ${i < level ? 'bg-red-500' : 'bg-gray-300'}`}
            />
        ));
    };

    return (
        <>
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/about/kitchen.jpg"
                        alt="Savor & Soul Kitchen"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10"></div>
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30 z-20"></div>
                </div>

                {/* Content */}
                <div className="relative z-30 text-center text-white px-4 max-w-6xl mx-auto">
                    <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        {/* Restaurant Name */}
                        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 tracking-wider">
                            <span className="text-amber-400">Savor</span>
                            <span className="text-white"> & </span>
                            <span className="text-red-500">Soul</span>
                        </h1>

                        {/* Tagline */}
                        <p className="text-xl md:text-2xl font-light mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            Where every dish tells a story, and every bite creates a memory.
                            Experience culinary excellence in the heart of Nairobi.
                        </p>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={() => setIsReservationOpen(true)}
                                className="group relative px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                            >
                                <span className="relative z-10">Reserve Table</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>

                            <button
                                onClick={() => setIsMenuOpen(true)}
                                className="group relative px-8 py-4 border-2 border-white text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-black"
                            >
                                <span className="relative z-10">View Menu</span>
                            </button>

                            <button
                                onClick={() => setIsOrderOpen(true)}
                                className="group relative px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                            >
                                <span className="relative z-10">Order Online</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Menu Modal */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6">
                            <div className="flex justify-between items-center">
                                <h2 className="text-3xl font-serif font-bold">Our Menu</h2>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-white hover:text-gray-200 transition-colors"
                                >
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${selectedCategory === category
                                            ? 'bg-amber-500 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Menu Items */}
                        <div className="p-6 overflow-y-auto max-h-[60vh]">
                            <div className="grid gap-6">
                                {filteredItems.map((item) => (
                                    <div key={item.id} className="flex justify-between items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                                                <span className="text-lg font-bold text-amber-600">{item.price}</span>
                                            </div>
                                            <p className="text-gray-600 mb-3">{item.description}</p>
                                            <div className="flex items-center space-x-2">
                                                <span className="text-sm text-gray-500">Spice Level:</span>
                                                <div className="flex space-x-1">
                                                    {renderSpiceLevel(item.spiceLevel)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 border-t border-gray-200 bg-gray-50">
                            <div className="flex justify-between items-center">
                                <p className="text-gray-600">
                                    <span className="font-semibold">Note:</span> All prices include VAT. Spice levels can be adjusted upon request.
                                </p>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                                >
                                    Close Menu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Reservation Coming Soon Modal */}
            {isReservationOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsReservationOpen(false)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6">
                            <div className="flex justify-between items-center">
                                <h2 className="text-3xl font-serif font-bold">Coming Soon!</h2>
                                <button
                                    onClick={() => setIsReservationOpen(false)}
                                    className="text-white hover:text-gray-200 transition-colors"
                                >
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-8 text-center">
                            <div className="mb-6">
                                <div className="text-6xl mb-4">🎉</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Online Reservations Launching Soon!
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    We&apos;re working hard to bring you the ultimate dining experience with our new online reservation system.
                                    Get ready to book your table with just a few clicks!
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 mb-6">
                                <h4 className="text-lg font-semibold text-amber-800 mb-3">What&apos;s Coming:</h4>
                                <ul className="text-left text-gray-700 space-y-2">
                                    <li className="flex items-center">
                                        <span className="text-amber-500 mr-2">✓</span>
                                        Instant table booking
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-amber-500 mr-2">✓</span>
                                        Special occasion requests
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-amber-500 mr-2">✓</span>
                                        Real-time availability
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-amber-500 mr-2">✓</span>
                                        Email confirmations
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <p className="text-gray-600">
                                    <span className="font-semibold">For now, please call us:</span>
                                </p>
                                <div className="flex justify-center space-x-4">
                                    <a
                                        href="tel:+254700123456"
                                        className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        +254 700 123 456
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 border-t border-gray-200 bg-gray-50">
                            <div className="flex justify-between items-center">
                                <p className="text-gray-600">
                                    <span className="font-semibold">Stay tuned!</span> Follow us for updates.
                                </p>
                                <button
                                    onClick={() => setIsReservationOpen(false)}
                                    className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                                >
                                    Got it!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Order Online Modal */}
            {isOrderOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsOrderOpen(false)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6">
                            <div className="flex justify-between items-center">
                                <h2 className="text-3xl font-serif font-bold">Order Online</h2>
                                <button
                                    onClick={() => setIsOrderOpen(false)}
                                    className="text-white hover:text-gray-200 transition-colors"
                                >
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-8 text-center">
                            <div className="mb-6">
                                <div className="text-6xl mb-4">📞</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Ready to Order?
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Call us directly or message us on WhatsApp for quick and easy ordering.
                                    We&apos;ll have your delicious meal ready in no time!
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Phone Numbers */}
                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Call Us:</h4>
                                    <div className="space-y-3">
                                        <a
                                            href="tel:+254700123456"
                                            className="block w-full px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                                        >
                                            <div className="flex items-center justify-center">
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                +254 700 123 456
                                            </div>
                                        </a>
                                        <a
                                            href="tel:+254733987654"
                                            className="block w-full px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                                        >
                                            <div className="flex items-center justify-center">
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                +254 733 987 654
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                {/* WhatsApp Button */}
                                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Or WhatsApp Us:</h4>
                                    <a
                                        href="https://wa.me/254700123456?text=Hi! I'd like to place an order from Savor & Soul. Can you help me?"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
                                    >
                                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                        </svg>
                                        WhatsApp Order
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 border-t border-gray-200 bg-gray-50">
                            <div className="flex justify-between items-center">
                                <p className="text-gray-600">
                                    <span className="font-semibold">Delivery available!</span> Free delivery within 5km.
                                </p>
                                <button
                                    onClick={() => setIsOrderOpen(false)}
                                    className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}