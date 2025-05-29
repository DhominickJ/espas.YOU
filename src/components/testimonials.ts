
export default function Testimonials(){
    return(`
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-yellow-900 mb-4">What our community says</h2>
                <p class="text-xl text-yellow-600 max-w-3xl mx-auto">
                    Real stories from people who found their perfect match through Espas.you
                </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Testimonial 1 -->
                <div class="bg-yellow-50 p-8 rounded-xl card-hover">
                    <div class="flex items-center mb-6">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" 
                             alt="Sarah J." 
                             class="w-16 h-16 rounded-full object-cover mr-4">
                        <div>
                            <h4 class="font-bold text-yellow-900">Sarah J.</h4>
                            <p class="text-red-600">Graphic Designer</p>
                        </div>
                    </div>
                    <p class="text-yellow-600 mb-6">
                        "I was skeptical at first, but Espas.you matched me with the perfect apartment and roommates. We all work creative jobs and have similar lifestyles - it's been amazing!"
                    </p>
                    <div class="flex text-yellow-400">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                
                <!-- Testimonial 2 -->
                <div class="bg-yellow-50 p-8 rounded-xl card-hover">
                    <div class="flex items-center mb-6">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" 
                             alt="Michael T." 
                             class="w-16 h-16 rounded-full object-cover mr-4">
                        <div>
                            <h4 class="font-bold text-yellow-900">Michael T.</h4>
                            <p class="text-red-600">Software Engineer</p>
                        </div>
                    </div>
                    <p class="text-yellow-600 mb-6">
                        "As an introvert who works from home, finding the right space was crucial. Espas.you found me a quiet apartment with other remote workers who respect personal space."
                    </p>
                    <div class="flex text-yellow-400">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                
                <!-- Testimonial 3 -->
                <div class="bg-yellow-50 p-8 rounded-xl card-hover">
                    <div class="flex items-center mb-6">
                        <img src="https://randomuser.me/api/portraits/women/68.jpg" 
                             alt="Aisha K." 
                             class="w-16 h-16 rounded-full object-cover mr-4">
                        <div>
                            <h4 class="font-bold text-yellow-900">Aisha K.</h4>
                            <p class="text-red-600">Medical Student</p>
                        </div>
                    </div>
                    <p class="text-yellow-600 mb-6">
                        "Moving to a new city for med school was stressful, but Espas.you matched me with other students on similar schedules. We even study together sometimes!"
                    </p>
                    <div class="flex text-yellow-400">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>`)
}