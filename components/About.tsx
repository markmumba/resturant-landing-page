'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('about-section');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about-section" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gray-900">
                            <span className="text-amber-600">Our</span> Story
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-red-500 mx-auto"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h3 className="text-3xl font-serif font-semibold text-amber-600">
                                    A Culinary Journey of Passion
                                </h3>
                                <p className="text-lg leading-relaxed text-gray-700">
                                    Founded in 2010, Savor & Soul began as a dream in the heart of our head chef,
                                    Chef Wanjiku Kamau. With over 20 years of culinary experience spanning from
                                    traditional Kenyan recipes to modern fusion cuisine, Chef Wanjiku brings a unique
                                    blend of flavors that celebrates the rich diversity of Kenya's culinary heritage.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-700">
                                    Every dish we serve is crafted with love, using locally sourced ingredients
                                    from Kenya's fertile highlands and time-honored techniques passed down through generations.
                                    Our kitchen is more than a place to cook—it's a sanctuary where tradition meets innovation.
                                </p>
                            </div>

                            {/* Chef Profile */}
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-amber-200">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-red-500 rounded-full flex items-center justify-center">
                                        <span className="text-2xl font-bold text-white">W</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-amber-600">Chef Wanjiku Kamau</h4>
                                        <p className="text-gray-600">Head Chef & Founder</p>
                                        <p className="text-sm text-gray-500">Kenya Institute of Culinary Arts Graduate</p>
                                    </div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-6">
                                <div className="text-center bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                                    <div className="text-3xl font-bold text-amber-600">13+</div>
                                    <div className="text-sm text-gray-600">Years of Excellence</div>
                                </div>
                                <div className="text-center bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                                    <div className="text-3xl font-bold text-red-500">50+</div>
                                    <div className="text-sm text-gray-600">Signature Dishes</div>
                                </div>
                                <div className="text-center bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                                    <div className="text-3xl font-bold text-orange-500">1000+</div>
                                    <div className="text-sm text-gray-600">Happy Customers</div>
                                </div>
                            </div>
                        </div>

                        {/* Image Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="relative h-64 rounded-2xl overflow-hidden group shadow-xl">
                                    <Image
                                        src="/about/chef1.jpg"
                                        alt="Chef Wanjiku Kamau"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <div className="text-sm font-semibold">Chef John Maina</div>
                                    </div>
                                </div>
                                <div className="relative h-48 rounded-2xl overflow-hidden group shadow-xl">
                                    <Image
                                        src="/about/kitchen.jpg"
                                        alt="Our Kitchen"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <div className="text-sm font-semibold">Our Kitchen</div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="relative h-48 rounded-2xl overflow-hidden group shadow-xl">
                                    <Image
                                        src="/about/ingredients.jpg"
                                        alt="Fresh Ingredients"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <div className="text-sm font-semibold">Fresh Ingredients</div>
                                    </div>
                                </div>
                                <div className="relative h-64 rounded-2xl overflow-hidden group shadow-xl">
                                    <Image
                                        src="/about/restaurant.jpg"
                                        alt="Restaurant Ambiance"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <div className="text-sm font-semibold">Restaurant Ambiance</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 