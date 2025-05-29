
export default function Footer(){
    return(`
    <footer class="bg-yellow-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-lg font-semibold mb-4">Espas.you</h3>
                    <p class="text-yellow-400">
                        Personalized living space matching based on your unique personality and preferences.
                    </p>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-4">Company</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-yellow-400 hover:text-white">About</a></li>
                        <li><a href="#" class="text-yellow-400 hover:text-white">Careers</a></li>
                        <li><a href="#" class="text-yellow-400 hover:text-white">Blog</a></li>
                        <li><a href="#" class="text-yellow-400 hover:text-white">Press</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-4">Support</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-yellow-400 hover:text-white">Help Center</a></li>
                        <li><a href="#" class="text-yellow-400 hover:text-white">Safety</a></li>
                        <li><a href="#" class="text-yellow-400 hover:text-white">Community Guidelines</a></li>
                        <li><a href="#" class="text-yellow-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-4">Connect</h3>
                    <div class="flex space-x-4 mb-4">
                        <a href="#" class="text-yellow-400 hover:text-white">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="text-yellow-400 hover:text-white">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="text-yellow-400 hover:text-white">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="text-yellow-400 hover:text-white">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <p class="text-yellow-400">
                        Download our app:
                    </p>
                    <div class="flex space-x-2 mt-2">
                        <button class="bg-yellow-800 hover:bg-yellow-700 px-3 py-2 rounded flex items-center">
                            <i class="fab fa-apple mr-2"></i>
                            <span class="text-xs">App Store</span>
                        </button>
                        <button class="bg-yellow-800 hover:bg-yellow-700 px-3 py-2 rounded flex items-center">
                            <i class="fab fa-google-play mr-2"></i>
                            <span class="text-xs">Play Store</span>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-yellow-800 mt-12 pt-8 flex flex-col md:flex-row lg:flex justify-between items-center">
                <p class="text-yellow-400 mb-4 md:mb-0">
                    © 2025 Espas.you. All rights reserved.
                </p>
                <div class="flex space-x-6">
                    <a href="#" class="text-yellow-400 hover:text-white">Privacy</a>
                    <a href="#" class="text-yellow-400 hover:text-white">Terms</a>
                    <a href="#" class="text-yellow-400 hover:text-white">Sitemap</a>
                </div>
            </div>
        </div>
    </footer>`)
}