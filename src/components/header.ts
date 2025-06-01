
export default function Header(){
    return(`
        <nav class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0 flex items-center">
                        <i class="fas fa-home text-2xl mr-2 text-red-600"></i>
                        <span class="text-xl font-bold text-yellow-900">Espas.<span class="text-red-600">you</span></span>
                    </div>
                </div>
                <div class="hidden md:flex items-center space-x-8">
                    <a href="/" class="text-yellow-900 hover:text-red-600 px-3 py-2 text-sm font-medium" data-route="home">Home</a>
                    <a href="/" class="text-yellow-900 hover:text-red-600 px-3 py-2 text-sm font-medium" data-route="process">How it works</a>
                    <a href="/" class="text-yellow-900 hover:text-red-600 px-3 py-2 text-sm font-medium" data-route="listing">Listings</a>
                    <a href="/" class="text-yellow-900 hover:text-red-600 px-3 py-2 text-sm font-medium" data-route="about">About</a>
                </div>
                <div class="hidden md:flex items-center">
                    <button class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300">
                        Get Started
                    </button>
                </div>
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-button" class="text-yellow-900 hover:text-red-600">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Mobile menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-yellow-200">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#" class="block px-3 py-2 text-base font-medium text-yellow-900 hover:text-red-600">Home</a>
                <a href="#" class="block px-3 py-2 text-base font-medium text-yellow-900 hover:text-red-600">How it works</a>
                <a href="#" class="block px-3 py-2 text-base font-medium text-yellow-900 hover:text-red-600">Listings</a>
                <a href="#" class="block px-3 py-2 text-base font-medium text-yellow-900 hover:text-red-600">About</a>
                <button class="w-full mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300">
                    Get Started
                </button>
            </div>
        </div>
    </nav>
    `)
}