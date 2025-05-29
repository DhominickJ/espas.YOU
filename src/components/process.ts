
export default function Process() {
    return (`
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-yellow-900 mb-4">How Espas.you works</h2>  
                <p class="text-xl text-yellow-600 max-w-3xl mx-auto">
                    We use advanced personality matching to connect you with spaces that fit your lifestyle perfectly.
                </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-10">
                <!-- Step 1 -->
                <div class="bg-yellow-50 p-8 rounded-xl card-hover flex-col justify-center text-center">
                    <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <span class="text-red-600 text-2xl font-bold text-center">1</span>
                    </div>
                    <h3 class="text-xl font-bold text-yellow-900 mb-3">Tell us about yourself</h3>
                    <p class="text-yellow-600 mb-4">
                        Complete our quick personality assessment and share your living preferences.
                    </p>
                    <div class="flex items-center text-red-600 font-medium">
                        <span>Learn more</span>
                        <i class="fas fa-arrow-right ml-2"></i>
                    </div>
                </div>
                
                <!-- Step 2 -->
                <div class="bg-yellow-50 p-8 rounded-xl card-hover">
                    <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <span class="text-red-600 text-2xl font-bold">2</span>
                    </div>
                    <h3 class="text-xl font-bold text-yellow-900 mb-3">Get matched</h3>
                    <p class="text-yellow-600 mb-4">
                        Our algorithm finds spaces and potential roommates that align with your personality.
                    </p>
                    <div class="flex items-center text-red-600 font-medium">
                        <span>Learn more</span>
                        <i class="fas fa-arrow-right ml-2"></i>
                    </div>
                </div>
                
                <!-- Step 3 -->
                <div class="bg-yellow-50 p-8 rounded-xl card-hover">
                    <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <span class="text-red-600 text-2xl font-bold">3</span>
                    </div>
                    <h3 class="text-xl font-bold text-yellow-900 mb-3">Move in & thrive</h3>
                    <p class="text-yellow-600 mb-4">
                        Enjoy your new home with people who share your values and lifestyle.
                    </p>
                    <div class="flex items-center text-red-600 font-medium">
                        <span>Learn more</span>
                        <i class="fas fa-arrow-right ml-2"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>`)
}