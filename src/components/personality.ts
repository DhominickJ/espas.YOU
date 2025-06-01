
export default function PersonalityMatch() {
    return(`
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden mb-20">
                <div class="grid md:grid-cols-2">
                    <!-- Left Column - Visual -->
                    <div class="bg-gradient-to-br from-red-600 to-yellow-500 p-10 relative">
                        <div class="absolute inset-0 opacity-10">
                            <div class="absolute top-20 left-20 w-40 h-40 rounded-full bg-white opacity-40"></div>
                            <div class="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-white opacity-20"></div>
                        </div>
                        <div class="relative z-10 text-white text-center">
                            <h3 class="text-3xl font-bold mb-6">Our Personality Matching Technology</h3>
                            <div class="w-20 h-1 bg-white bg-opacity-50 mx-auto mb-8"></div>
                            <p class="mb-10 text-white text-opacity-90">
                                Powered by machine learning trained on hundres of successful matches
                            </p>
                            <div class="w-40 h-40 mx-auto mb-8 relative">
                                <div class="absolute inset-0 rounded-full border-4 border-white border-opacity-30 animate-spin-slow" style="animation-duration: 8s;"></div>
                                <div class="absolute inset-8 rounded-full border-4 border-white border-opacity-50 animate-spin" style="animation-duration: 12s; animation-direction: reverse;"></div>
                                <div class="absolute inset-16 rounded-full border-4 border-white animate-pulse"></div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <i class="fas fa-brain text-5xl"></i>
                                </div>
                            </div>
                            <button class="inline-flex items-center px-6 py-3 border-2 border-white rounded-full font-medium hover:bg-white hover:text-red-600 transition">
                                How It Works <i class="fas fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Right Column - Info -->
                    <div class="p-10">
                        <div class="tabs flex space-x-4 mb-8">
                            <button class="tab-btn px-4 py-2 rounded-full font-medium text-yellow-800 hover:bg-red-50 active-tab">
                                Compatibility
                            </button>
                            <button class="tab-btn px-4 py-2 rounded-full font-medium text-yellow-800 hover:bg-red-50">
                                Lifestyle
                            </button>
                            <button class="tab-btn px-4 py-2 rounded-full font-medium text-yellow-800 hover:bg-red-50">
                                Preferences
                            </button>
                        </div>
                        
                        <div class="tab-content mb-8">
                            <h4 class="text-lg font-bold text-yellow-900 mb-4">We analyze these 7 key dimensions for compatibility:</h4>
                            <div class="grid sm:grid-cols-2 gap-4 mb-6">
                                <div class="flex items-center bg-yellow-50 p-3 rounded-lg">
                                    <div class="bg-red-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                                        <i class="fas fa-users text-red-600 text-xs"></i>
                                    </div>
                                    <span class="text-yellow-800">Social Tendencies</span>
                                </div>
                                <div class="flex items-center bg-yellow-50 p-3 rounded-lg">
                                    <div class="bg-red-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                                        <i class="fas fa-clock text-red-600 text-xs"></i>
                                    </div>
                                    <span class="text-yellow-800">Daily Rhythms</span>
                                </div>
                                <div class="flex items-center bg-yellow-50 p-3 rounded-lg">
                                    <div class="bg-red-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                                        <i class="fas fa-couch text-red-600 text-xs"></i>
                                    </div>
                                    <span class="text-yellow-800">Space Usage</span>
                                </div>
                                <div class="flex items-center bg-yellow-50 p-3 rounded-lg">
                                    <div class="bg-red-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                                        <i class="fas fa-paint-roller text-red-600 text-xs"></i>
                                    </div>
                                    <span class="text-yellow-800">Design Preferences</span>
                                </div>
                                <div class="flex items-center bg-yellow-50 p-3 rounded-lg">
                                    <div class="bg-red-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                                        <i class="fas fa-weight text-red-600 text-xs"></i>
                                    </div>
                                    <span class="text-yellow-800">Value Priorities</span>
                                </div>
                                <div class="flex items-center bg-yellow-50 p-3 rounded-lg">
                                    <div class="bg-red-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                                        <i class="fas fa-leaf text-red-600 text-xs"></i>
                                    </div>
                                    <span class="text-yellow-800">Sustainability</span>
                                </div>
                            </div>
                            <p class="text-yellow-600">
                                Our system weights each factor based on your expressed preferences and historical success data from thousands of successful matches.
                            </p>
                        </div>
                        
                        <div class="bg-red-50 rounded-lg p-6">
                            <div class="flex">
                                <div class="mr-4 text-red-600">
                                    <i class="fas fa-shield-alt text-2xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-yellow-900 mb-2">Privacy Protected</h4>
                                    <p class="text-yellow-700 text-sm">
                                        All personal data is encrypted and processed anonymously. We never share your information without consent.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`)
}