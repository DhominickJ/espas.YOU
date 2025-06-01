
export default function Listing_Hero(){
    return(`
        <section class="bg-gradient-to-r from-red-500 to-yellow-500 text-white py-20">
            <div class="container mx-auto px-6 text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-6">Find Your Dream Home</h1>
                <p class="text-xl mb-8 max-w-2xl mx-auto">Discover properties that match your lifestyle in the Philippines</p>
                
                <!-- Search Bar -->
                <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                    <div class="flex flex-col md:flex-row">
                        <div class="flex-1 p-2">
                            <select class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700">
                                <option>Select Location</option>
                                <option>Metro Manila</option>
                                <option>Iloilo</option>
                                <option>Davao</option>
                                <option>Pampanga</option>
                                <option>Cavite</option>
                            </select>
                        </div>
                        <div class="flex-1 p-2">
                            <select class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700">
                                <option>Property Type</option>
                                <option>House and Lot</option>
                                <option>Condominium</option>
                                <option>Townhouse</option>
                                <option>Apartment</option>
                            </select>
                        </div>
                        <div class="flex-1 p-2">
                            <select class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700">
                                <option>Price Range</option>
                                <option>₱2k - ₱3k</option>
                                <option>₱4k - ₱8k</option>
                                <option>₱8k - ₱20k</option>
                                <option>₱20k+</option>
                            </select>
                        </div>
                        <div class="p-2">
                            <button class="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition">
                                <i class="fas fa-search mr-2"></i> Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `)
}