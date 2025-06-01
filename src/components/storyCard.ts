
export default function storyCard(img: string, names: string, description: string){
    return(`
        <div class="relative overflow-hidden rounded-xl bg-white shadow-lg personality-card">
            <img src="${img}" 
                    alt="${names} picture" class="w-full h-64 object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-red-600 to-yellow-500 card-overlay transition-all duration-500 opacity-0 h-0"></div>
            <div class="p-6">
                <h4 class="font-bold text-xl text-yellow-900 mb-2">${names}</h4>
                <p class="text-yellow-700 mb-4">
                    ${description}
                </p>
                <div class="flex text-yellow-500">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
        </div>`)
}