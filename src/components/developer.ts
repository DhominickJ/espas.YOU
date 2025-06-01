

export default function Developer(img: string, name: string, role: string, description: string, twitter?: string, github?: string, linkedin?: string){
    return(`
        <div class="dev-card bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300">
            <div class="relative">
                <div class="h-64 bg-red-500 flex items-center justify-center">
                    <div class="avatar w-40 h-40 rounded-full border-4 border-yellow-400 overflow-hidden bg-white pNote">
                        <img src="${img}" alt="${name}" class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="social-icons absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                    <a href="${twitter}" class="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-yellow-500 transition-colors">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="${github}" class="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-yellow-500 transition-colors">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="${linkedin}" class="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-yellow-500 transition-colors">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
            <div class="p-6 text-center h-60">
                <h3 class="text-2xl font-bold text-gray-800 mb-1 ">${name}</h3>
                <p class="text-red-600 font-semibold mb-4">${role}</p>
                <p class="text-gray-600">
                    ${description}
                </p>
            </div>
        </div>`)
}