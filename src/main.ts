import Algorithm from "./components/algorithm";
import CTA from "./components/cta";
import Developer from "./components/developer";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Listing_Hero from "./components/listing-hero";
import ListingSearch from "./components/listing-search";
import Matching from "./components/matching";
import PersonalityMatch from "./components/personality";
import Process from "./components/process";
import PropertyCard from "./components/propertycard";
import storyCard from "./components/storyCard";
import Testimonials from "./components/testimonials";
import Traction from "./components/traction";
import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

document.addEventListener('DOMContentLoaded', () => {
    const init = () => {
        const appElement = document.getElementById('app');
        if (!appElement) return;
        
        // Define routes
        const routes = {
            home: () => `
            ${Header()}
            ${Hero()}
            ${Testimonials()}
            ${Process()}
            ${Matching()}
            ${Traction()}
            ${Footer()}
            `,
            about: () => `
            ${Header()}
            <div class="container mx-auto px-4 py-12 gradient-bg min-h-screen sm:px-6 lg:px-8">
            <div class="text-center mb-16">
            <h1 class="text-4xl font-bold text-red-600 sm:text-5xl mb-4">Our Development Team</h1>
            <p class="text-xl text-yellow-800 max-w-3xl mx-auto">
            Meet the talented individuals who bring your digital dreams to life with passion and expertise.
            </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                <div class="col-span-1">
                ${Developer('/dhom.png', 'Dhominick John Billena', 'Fullstack Developer', "I believe and sincerely believe that being in the backend is one of the happiest thing I can do!", "", "https://github.com/DhominickJ", "")}
                </div>
                <div class="col-span-1">
                ${Developer('/berg.png', 'Mauricio Manuel Bergancia', 'Frontend Developer', "Passionate about creating beautiful and intuitive user interfaces.", "", "https://github.com/berglhynee", "")}
                </div>
                <div class="col-span-1">
                ${Developer('/cha.png', 'Mherlie Joy Chavez', 'Project Manager', "Creating user-centered designs that make a difference.", "", "https://github.com/charlottefaith", "")}
                </div>
                <div class="col-span-1">
                ${Developer('/cal.png', 'Gillie Calanuga', 'Project Documentation', "Bringing designs to life with clean and efficient code.", "", "https://github.com/calvindave", "")}
                </div>
                <div class="col-span-2 md:col-span-4 justify-self-center">
                ${Developer('/tua.jpg', 'Michael Rey Tuando', 'UI/UX Designer', "Bridging the gap between frontend and backend with comprehensive solutions.", "", "https://github.com/markjoseph", "")}
                </div>
            </div>
            <div class="mt-20 text-center">
             <div class="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-red-600 mb-4">Want to Join Our Team?</h2>
            <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented developers who share our passion for creating exceptional digital experiences.
            </p>
            <button class="bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity">
            View Open Positions
            </button>
            </div>
        </div>
            </div>
            ${Footer()}
            `,

            listing: () => `
            ${Header()}
            ${Listing_Hero()}
            ${ListingSearch()}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            ${PropertyCard("Villa Tranquila", "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9", "Jaro, Iloilo City", "Modern villa with garden views and traditional Filipino architecture", 15000, 200)}
            ${PropertyCard("Casa Marina", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750", "Mandurriao, Iloilo City", "Luxurious beachfront property with infinity pool", 25000, 300)}
            ${PropertyCard("Heritage House", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "La Paz, Iloilo City", "Colonial-style mansion with modern amenities", 18000, 250)}
            ${PropertyCard("Green Haven", "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83", "Arevalo, Iloilo City", "Eco-friendly home surrounded by nature", 12000, 180)}
            ${PropertyCard("Metro Heights", "https://images.unsplash.com/photo-1570129477492-45c003edd2be", "Molo, Iloilo City", "Contemporary urban apartment with city views", 20000, 150)}
            ${PropertyCard("Riverside Retreat", "https://images.unsplash.com/photo-1523217582562-09d0def993a6", "Villa Arevalo, Iloilo City", "Peaceful property near Iloilo River", 16000, 220)}
            ${PropertyCard("Riverside Retreat", "https://images.unsplash.com/photo-1523217582562-09d0def993a6", "Villa Arevalo, Iloilo City", "Peaceful property near Iloilo River", 16000, 220)}
            ${PropertyCard("Riverside Retreat", "https://images.unsplash.com/photo-1523217582562-09d0def993a6", "Villa Arevalo, Iloilo City", "Peaceful property near Iloilo River", 16000, 220)}
            ${PropertyCard("Sun Valley Estate", "https://images.unsplash.com/photo-1564013799919-ab600027ffc6", "Lapaz, Iloilo City", "Spacious family home with modern design", 22000, 280)}
            ${PropertyCard("Plaza Residence", "https://images.unsplash.com/photo-1576941089067-2de3c901e126", "City Proper, Iloilo City", "Downtown luxury apartment with amenities", 17000, 160)}
            ${PropertyCard("Garden Terrace", "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f", "Lapuz, Iloilo City", "Elegant townhouse with private garden", 19000, 190)}
            ${PropertyCard("Coastal Haven", "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6", "Villa, Iloilo City", "Beachside property with stunning sunset views", 23000, 270)}
            </div>
            ${CTA()}
            ${Footer()}
            `,

            process: () => `
            ${Header()}
            <div class="container mx-auto px-4 py-12 gradient-bg min-h-screen sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-b from-white to-yellow-50">
                <div class="text-center mb-20">
                    <span class="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        Our Process
                    </span>
                    <h2 class="text-4xl font-bold text-yellow-900 mb-6">How Espas.YOU Works</h2>
                    <div class="w-20 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mb-6"></div>
                    <p class="text-xl text-yellow-600 max-w-3xl mx-auto">
                        Our intelligent property matching system combines AI technology with human expertise to find your perfect home.
                    </p>
                </div>
            </div> 
            ${Algorithm()}
            ${PersonalityMatch()}
            <h3 class="text-3xl font-bold text-center text-yellow-900 mb-12 mt-12">
                <span class="relative">
                    Success Stories
                    <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-yellow-500 -mb-2"></span>
                </span>
            </h3>
            <div class="grid md:grid-cols-3 gap-8">
                ${storyCard("https://images.unsplash.com/photo-1572897938832-fcce7f53ccaa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "Johnson & Johnson", "Found our dream home in just 2 weeks! The personality matching system really understood what we were looking for.")}
                ${storyCard("https://plus.unsplash.com/premium_photo-1681489922527-c1ab8c5b29ec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "David & Emily Chen", "The AI recommendations were spot-on. We saved so much time in our house hunting process.")}
                ${storyCard("https://images.unsplash.com/photo-1573496130141-209d200cebd8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "Maria & Carla Rodriguez", "Perfect match on our first viewing! The system really understands what makes a house feel like home.")}
            </div>
            ${CTA()}
            </div>
            ${Footer()}`
        };

        // Router function
        const router = (page: keyof typeof routes = 'home') => {
            appElement.innerHTML = routes[page]();
        };

        // Initial route
        router();

        // Add click event listeners for navigation
        document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            if (target.matches('[data-route]')) {
            e.preventDefault();
            const page = target.getAttribute('data-route');
            if (page && (page === 'home' || page === 'about' || page === 'listing' || page === 'process')) {
                // Call router with the page
                router(page);
                // Close mobile menu if it's open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) mobileMenu.classList.add('hidden');
            }
            }
        });
    };

    init();

    // Mobile menu toggle
    document.getElementById('mobile-menu-button')?.addEventListener('click', function() {
        const menu = document.getElementById('mobile-menu');
        menu?.classList.toggle('hidden');
    });

    // Simple animation for cards when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, {threshold: 0.1});

    document.querySelectorAll('.card-hover').forEach(card => {
        observer.observe(card);
    });

    // Add some custom styles for the animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
            animation: fadeIn 0.6s ease-out forwards;
        }
    `;
    document.head.appendChild(style);

            // Toggle favorite heart button
        document.querySelectorAll('.heart-btn').forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('liked');
                const icon = button.querySelector('i');
                icon?.classList.toggle('far');
                icon?.classList.toggle('fas');
                icon?.classList.toggle('text-red-500');
                icon?.classList.toggle('text-gray-400');
            });
        });
        
        // Filter buttons active state
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active', 'bg-red-600', 'text-white');
                    btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-red-100', 'hover:text-red-600');
                });
                button.classList.add('active', 'bg-red-600', 'text-white');
                button.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-red-100', 'hover:text-red-600');
            });
        });
        const personalityCards = document.querySelectorAll('.personality-card');
        personalityCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const overlay = card.querySelector('.card-overlay') as HTMLElement;
                overlay.style.height = '100%';
                overlay.style.opacity = '0.9';
            });
            
            card.addEventListener('mouseleave', () => {
                const overlay = card.querySelector('.card-overlay') as HTMLElement;
                overlay.style.height = '0';
                overlay.style.opacity = '0';
            });
        });
});