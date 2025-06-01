
export default function CTA(){
    return (`
    <section class="py-20 bg-gradient-to-r from-red-500 to-yellow-500 text-white mt-10">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
            <p class="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of happy homeowners who found their perfect place with espas.YOU Properties.
            </p>
            <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                <button class="bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition">
                    Browse Properties
                </button>
                <button class="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-red-600 transition">
                    Contact Agent
                </button>
            </div>
        </div>
    </section>`)
}