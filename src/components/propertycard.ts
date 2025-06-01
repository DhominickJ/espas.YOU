
export default function PropertyCard(name: string, img: string, location: string, description: string, price: number, size: number) {
    return(`
        <div class="property-card bg-white rounded-xl overflow-hidden shadow-lg transition duration-300">
            <div class="relative">
                <img src="${img}" 
                        alt="${name}" 
                        class="property-image w-full h-64 object-cover transition duration-300">
                <div class="absolute top-0 left-0 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-br-lg">
                    For Rent!
                </div>
                <button class="heart-btn absolute top-2 right-2 bg-white p-2 rounded-full shadow-md text-gray-400 transition">
                    <i class="far fa-heart"></i>
                </button>
                <div class="absolute bottom-4 left-4">
                    <div class="flex space-x-2">
                        <span class="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                            <i class="fas fa-bed mr-1"></i> 4
                        </span>
                        <span class="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                            <i class="fas fa-bath mr-1"></i> 3
                        </span>
                        <span class="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                            <i class="fas fa-ruler-combined mr-1"></i> ${size} sqft
                        </span>
                    </div>
                </div>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold text-gray-800">${name}</h3>
                    <p class="text-red-600 font-bold">PHP ${price}</p>
                </div>
                <p class="text-gray-600 mb-4 flex items-center">
                    <i class="fas fa-map-marker-alt text-red-500 mr-2"></i> ${location}
                </p>
                <p class="text-gray-500 mb-4">
                    ${description}
                </p>
                <button class="w-full bg-gradient-to-r from-red-500 to-yellow-500 hover:opacity-90 text-white font-bold py-2 px-4 rounded-lg transition">
                    View Property
                </button>
            </div>
        </div>`)
}