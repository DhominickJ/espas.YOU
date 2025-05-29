
export default function Matching() {
    return (`
        <section class="py-20 bg-yellow-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-10 md:mb-0">
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                         alt="People enjoying co-living space" 
                         class="rounded-xl shadow-lg">
                </div>
                <div class="md:w-1/2 md:pl-16">
                    <h2 class="text-3xl font-bold text-yellow-900 mb-6">Personality-based matching</h2>
                    <p class="text-lg text-yellow-600 mb-8">
                        We go beyond just location and price. Our matching algorithm considers your:
                    </p>
                    
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="bg-red-100 p-2 rounded-full mr-4 mt-1">
                                <i class="fas fa-brain text-red-600"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-yellow-900 mb-1">Personality traits</h3>
                                <p class="text-yellow-600">Introvert/extrovert, neatness, sleep schedule, and more</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="bg-red-100 p-2 rounded-full mr-4 mt-1">
                                <i class="fas fa-heart text-red-600"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-yellow-900 mb-1">Lifestyle preferences</h3>
                                <p class="text-yellow-600">Social habits, hobbies, work-from-home needs, and pet preferences</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="bg-red-100 p-2 rounded-full mr-4 mt-1">
                                <i class="fas fa-home text-red-600"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-yellow-900 mb-1">Living space needs</h3>
                                <p class="text-yellow-600">Private vs. shared spaces, amenities, and neighborhood vibe</p>
                            </div>
                        </div>
                    </div>
                    
                    <button class="mt-10 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-lg font-semibold transition duration-300 shadow-lg">
                        Take the personality quiz
                    </button>
                </div>
            </div>
        </div>
    </section>`)
}