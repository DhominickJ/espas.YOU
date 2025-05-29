import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Matching from "./components/matching";
import Process from "./components/process";
import Testimonials from "./components/testimonials";
import Traction from "./components/traction";
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    const init = () => {
        const appElement = document.getElementById('app');
        if (!appElement) return;
        
        appElement.innerHTML = `
            ${Header()}
            ${Hero()}
            ${Testimonials()}
            ${Process()}
            ${Matching()}
            ${Traction()}
            ${Footer()}
        `;
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
});