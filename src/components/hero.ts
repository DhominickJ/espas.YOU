
export default function Hero(){
    return(`
        <section class="bg-gradient-to-br from-red-600 to-yellow-500  text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-10 md:mb-0">
                <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
                    Find your perfect space, <span class="underline decoration-white">personalized</span> for you
                </h1>
                <p class="text-xl mb-8 opacity-90">
                    Espas.you matches you with apartments, shared houses, and co-living spaces based on your personality and preferences.
                </p>
                <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button class="bg-white text-red-600 hover:bg-yellow-100 px-6 py-3 rounded-md text-lg font-semibold transition duration-300 shadow-lg pulse">
                    Start Matching <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                    <button class="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 px-6 py-3 rounded-md text-lg font-semibold transition duration-300">
                    How it works
                    </button>
                </div>
                </div>
                <div class="md:w-1/2 flex justify-center items-center flex-col">
                <img src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                     alt="Home interior" 
                     class="rounded-2xl w-full h-[40vh] object-cover opacity-90 mix-blend-overlay"/>
                <div class="relative w-full max-w-md bg-white rounded-full p-5">
                    <div class="flex justify-center relative">
                    <div class="flex items-center">
                        <div class="bg-red-100 p-3 rounded-full mr-3">
                        <i class="fas fa-heart text-red-600"></i>
                        </div>
                        <div>
                        <p class="text-sm text-yellow-500">Personalized matches</p>
                        <p class="font-bold text-yellow-800">98% Match Rate</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>`)
}