'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    rating: number;
    review: string;
    date: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Amina Hassan",
        role: "Food Blogger",
        image: "/testimonial-1.jpg",
        rating: 5,
        review: "The Nyama Choma was absolutely divine! The meat was perfectly grilled and the kachumbari was so fresh. This is now my go-to spot for authentic Kenyan cuisine in Nairobi.",
        date: "2 weeks ago"
    },
    {
        id: 2,
        name: "James Mwangi",
        role: "Business Executive",
        image: "/testimonial-2.jpg",
        rating: 5,
        review: "Exceptional service and even better food. The Pilau rice was aromatic perfection, and the chapati was soft and flaky. Perfect for business lunches and family dinners.",
        date: "1 month ago"
    },
    {
        id: 3,
        name: "Grace Wanjiku",
        role: "Food Critic",
        image: "/testimonial-3.jpg",
        rating: 5,
        review: "As a food critic, I've dined at hundreds of restaurants across Kenya. Savor & Soul stands out for their attention to detail and authentic flavors. The Mukimo with grilled fish is a masterpiece.",
        date: "3 weeks ago"
    },
    {
        id: 4,
        name: "David Ochieng",
        role: "Chef",
        image: "/testimonial-4.jpg",
        rating: 5,
        review: "Coming from a culinary background, I appreciate the skill and passion that goes into every dish. The Mandazi with chai was perfectly executed - light, fluffy, and the perfect accompaniment to Kenyan tea.",
        date: "1 week ago"
    }
];

export default function Testimonials() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('testimonials');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-amber-400' : 'text-gray-300'
                    }`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    return (
        <section id="testimonials" className="py-20 relative overflow-hidden">
            {/* Background similar to Hero section */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10"></div>
                <div className="w-full h-full bg-gradient-to-br from-amber-900 via-orange-800 to-red-900">
                    <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>
                </div>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4">
                <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white">
                            What Our <span className="text-amber-400">Guests</span> Say
                        </h2>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                            Don't just take our word for it. Here's what our valued customers have to say
                            about their dining experience at Savor & Soul.
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-red-500 mx-auto mt-6"></div>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-amber-500/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:bg-white/20 ${index === currentIndex ? 'ring-2 ring-amber-400' : ''
                                    }`}
                            >
                                {/* Rating */}
                                <div className="flex items-center mb-4">
                                    <div className="flex mr-4">
                                        {renderStars(testimonial.rating)}
                                    </div>
                                    <span className="text-sm text-gray-300">{testimonial.date}</span>
                                </div>

                                {/* Review Text */}
                                <blockquote className="text-lg leading-relaxed text-gray-200 mb-6 italic">
                                    "{testimonial.review}"
                                </blockquote>

                                {/* Customer Info */}
                                <div className="flex items-center">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <div className="w-full h-full bg-gradient-to-br from-amber-400 to-red-500 flex items-center justify-center text-white font-bold text-sm">
                                            {getInitials(testimonial.name)}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-amber-400">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-300">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-amber-400' : 'bg-gray-600'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Overall Rating */}
                    <div className="text-center mt-12">
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-amber-500/30">
                            <h3 className="text-2xl font-serif font-bold text-amber-400 mb-4">
                                Overall Rating
                            </h3>
                            <div className="flex justify-center items-center mb-4">
                                <div className="flex mr-4">
                                    {renderStars(5)}
                                </div>
                                <span className="text-3xl font-bold text-white">4.9/5</span>
                            </div>
                            <p className="text-gray-200">
                                Based on <span className="text-amber-400 font-semibold">1,247+ reviews</span> from our valued customers
                            </p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-12">
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                            <span className="relative z-10">Join Our Happy Customers</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
} 