
export default function Algorithm() {
    return (`
            <div class="grid md:grid-cols-3 gap-8 mb-20 pt-20">
                <!-- Step 1 - Expanded -->
                <div class="bg-white p-8 rounded-xl card-hover border border-yellow-100 shadow-lg transition-all duration-300">
                    <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto animate-pulse-slow">
                        <span class="text-red-600 text-2xl font-bold">1</span>
                    </div>
                    <h3 class="text-2xl font-bold text-yellow-900 mb-4 text-center">Tell Us About You</h3>
                    <p class="text-yellow-700 mb-6">
                        Our short 5-minute assessment analyzes your lifestyle, preferences, and priorities in a living space.
                    </p>
                    <!-- Expanded Details -->
                    <div class="bg-yellow-100 border-l-4 border-red-500 p-4 rounded-r mb-6">
                        <h4 class="font-bold text-yellow-800 mb-2">We assess:</h4>
                        <ul class="text-yellow-700 space-y-2">
                            <li class="flex items-start">
                                <i class="fas fa-check text-red-500 mt-1 mr-2 text-sm"></i>
                                Your daily routines & habits
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-red-500 mt-1 mr-2 text-sm"></i>
                                Design & spatial preferences
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-red-500 mt-1 mr-2 text-sm"></i>
                                Neighborhood priorities
                            </li>
                        </ul>
                    </div>
                    <button class="w-full bg-gradient-to-r from-red-100 to-yellow-100 hover:from-red-200 hover:to-yellow-200 text-red-600 font-medium py-3 px-6 rounded-lg transition flex items-center justify-center">
                        <span>Take Assessment</span>
                        <i class="fas fa-chevron-right ml-2"></i>
                    </button>
                </div>

                <!-- Step 2 - Expanded -->
                <div class="bg-white p-8 rounded-xl card-hover border border-yellow-100 shadow-lg transition-all duration-300">
                    <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto animate-pulse-slow" style="animation-delay: 0.2s;">
                        <span class="text-red-600 text-2xl font-bold">2</span>
                    </div>
                    <h3 class="text-2xl font-bold text-yellow-900 mb-4 text-center">Smart Matching</h3>
                    <p class="text-yellow-700 mb-6">
                        Our proprietary algorithm evaluates thousands of data points to find ideal matches.
                    </p>
                    <!-- Expanded Details -->
                    <div class="bg-yellow-100 border-l-4 border-red-500 p-4 rounded-r mb-6">
                        <h4 class="font-bold text-yellow-800 mb-2">Our technology:</h4>
                        <ul class="text-yellow-700 space-y-2">
                            <li class="flex items-start">
                                <i class="fas fa-brain text-red-500 mt-1 mr-2 text-sm"></i>
                                Analyzes 127 key compatibility factors
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-chart-line text-red-500 mt-1 mr-2 text-sm"></i>
                                Learns & improves with each match
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-user-shield text-red-500 mt-1 mr-2 text-sm"></i>
                                Verified by local experts
                            </li>
                        </ul>
                    </div>
                    <div class="flex space-x-3">
                        <div class="flex-1">
                            <button class="w-full bg-gradient-to-r from-red-100 to-yellow-100 hover:from-red-200 hover:to-yellow-200 text-red-600 font-medium py-3 px-4 rounded-lg transition text-sm">
                                View Demo Matches
                            </button>
                        </div>
                        <div class="flex-1">
                            <button class="w-full bg-gradient-to-r from-red-500 to-yellow-500 hover:opacity-90 text-white font-medium py-3 px-4 rounded-lg transition text-sm">
                                See Algorithm
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Step 3 - Expanded -->
                <div class="bg-white p-8 rounded-xl card-hover border border-yellow-100 shadow-lg transition-all duration-300">
                    <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto animate-pulse-slow" style="animation-delay: 0.4s;">
                        <span class="text-red-600 text-2xl font-bold">3</span>
                    </div>
                    <h3 class="text-2xl font-bold text-yellow-900 mb-4 text-center">Move In Confidently</h3>
                    <p class="text-yellow-700 mb-6">
                        We guide you through every step of the process to ensure a seamless experience.
                    </p>
                    <!-- Expanded Details -->
                    <div class="bg-yellow-100 border-l-4 border-red-500 p-4 rounded-r mb-6">
                        <h4 class="font-bold text-yellow-800 mb-2">We provide:</h4>
                        <ul class="text-yellow-700 space-y-2">
                            <li class="flex items-start">
                                <i class="fas fa-handshake text-red-500 mt-1 mr-2 text-sm"></i>
                                Negotiation & paperwork assistance
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-truck-moving text-red-500 mt-1 mr-2 text-sm"></i>
                                Moving service partnerships
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-life-ring text-red-500 mt-1 mr-2 text-sm"></i>
                                Post-move support service
                            </li>
                        </ul>
                    </div>
                    <div class="flex space-x-3">
                        <div class="flex-1">
                            <button class="w-full bg-gradient-to-r from-red-500 to-yellow-500 hover:opacity-90 text-white font-medium py-3 px-4 rounded-lg transition">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>`)
}