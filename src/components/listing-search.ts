
export default function ListingSearch(){
    return (`
    <section class="py-10 bg-white">
        <div class="container mx-auto px-6">
            <div class="flex flex-wrap justify-center gap-4">
                <button class="filter-btn active px-6 py-2 rounded-full bg-red-100 text-red-600 font-medium transition">
                    All Properties
                </button>
                <button class="filter-btn px-6 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600 font-medium transition">
                    Houses
                </button>
                <button class="filter-btn px-6 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600 font-medium transition">
                    Apartments
                </button>
                <button class="filter-btn px-6 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600 font-medium transition">
                    Condos
                </button>
                <button class="filter-btn px-6 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600 font-medium transition">
                    Villas
                </button>
                <button class="filter-btn px-6 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600 font-medium transition">
                    Commercial
                </button>
            </div>
        </div>
    </section>`)
}