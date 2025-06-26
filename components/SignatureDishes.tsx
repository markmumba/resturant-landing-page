'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Dish {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    category: string;
    spiceLevel: number;
    preparationTime: string;
}

const dishes: Dish[] = [
    {
        id: 1,
        name: "Nyama Choma Steak",
        description: "Premium grilled beef steak marinated in traditional Kenyan spices, served with fresh tomato and onion salad, and accompanied by ugali and sukuma wiki.",
        price: "KES 3,200",
        image: "/signature-dishes/steak.jpg",
        category: "Grilled",
        spiceLevel: 3,
        preparationTime: "25 min"
    },
    {
        id: 2,
        name: "Pilau Rice with Beef",
        description: "Aromatic rice cooked with tender beef, cardamom, cinnamon, and cloves, creating a fragrant dish that's a staple in Kenyan celebrations.",
        price: "KES 1,800",
        image: "/signature-dishes/pilau.jpg",
        category: "Rice",
        spiceLevel: 2,
        preparationTime: "30 min"
    },
    {
        id: 3,
        name: "Chapati with Beef",
        description: "Soft, flaky flatbread served with tender beef, tomatoes, and onions - a comforting combination that's perfect any time of day.",
        price: "KES 1,200",
        image: "/signature-dishes/chapati-beef.jpg",
        category: "Bread",
        spiceLevel: 2,
        preparationTime: "20 min"
    },
    {
        id: 4,
        name: "Grilled Chicken",
        description: "Succulent grilled chicken marinated in Kenyan herbs and spices, served with fresh vegetables and your choice of side.",
        price: "KES 2,100",
        image: "/signature-dishes/chicken.jpg",
        category: "Grilled",
        spiceLevel: 2,
        preparationTime: "35 min"
    },
    {
        id: 5,
        name: "Grilled Fish",
        description: "Fresh tilapia from Lake Victoria, grilled to perfection with lemon, herbs, and served with steamed vegetables.",
        price: "KES 2,800",
        image: "/signature-dishes/fish.jpg",
        category: "Seafood",
        spiceLevel: 1,
        preparationTime: "25 min"
    },
    {
        id: 6,
        name: "Mukimo with Greens",
        description: "Mashed potatoes mixed with green peas, corn, and pumpkin leaves, served with a side of fresh vegetables.",
        price: "KES 1,500",
        image: "/signature-dishes/mukimo.jpeg",
        category: "Traditional",
        spiceLevel: 1,
        preparationTime: "40 min"
    }
];

export default function SignatureDishes() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('signature-dishes');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    const categories = ['All', 'Grilled', 'Rice', 'Bread', 'Traditional', 'Seafood'];

    const filteredDishes = selectedCategory === 'All'
        ? dishes
        : dishes.filter(dish => dish.category === selectedCategory);

    const renderSpiceLevel = (level: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <div
                key={i}
                className={`w-2 h-2 rounded-full ${i < level ? 'bg-red-500' : 'bg-gray-300'}`}
            />
        ));
    };

    return (
        <section id="signature-dishes" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gray-900">
                            Our <span className="text-amber-600">Signature</span> Dishes
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover the authentic flavors of Kenya through our carefully crafted signature dishes,
                            each telling a story of tradition, culture, and culinary excellence.
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-red-500 mx-auto mt-6"></div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${selectedCategory === category
                                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Dishes Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredDishes.map((dish) => (
                            <div
                                key={dish.id}
                                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                            >
                                {/* Dish Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={dish.image}
                                        alt={dish.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        {dish.price}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500"></div>
                                </div>

                                {/* Dish Content */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-serif font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                                            {dish.name}
                                        </h3>
                                        <span className="text-sm text-gray-500">{dish.preparationTime}</span>
                                    </div>

                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {dish.description}
                                    </p>

                                    {/* Spice Level */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-sm text-gray-500">Spice Level:</span>
                                            <div className="flex space-x-1">
                                                {renderSpiceLevel(dish.spiceLevel)}
                                            </div>
                                        </div>
                                        <span className="text-lg font-bold text-amber-600">{dish.price}</span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-3">
                                        <button className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                                            Order Now
                                        </button>
                                        <button className="px-4 py-3 border-2 border-amber-500 text-amber-600 rounded-lg hover:bg-amber-500 hover:text-white transition-all duration-300">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                            <span className="relative z-10">View Full Menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
} 