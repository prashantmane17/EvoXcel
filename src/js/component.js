class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` <section>
        <nav id="navbar"
            class="flex items-center h-[10vh] w-full bg-transparent fixed z-30 top-0 justify-between px-[4vw] transition-all duration-300">
            <h1
                class="font-bold relative z-20 lg:text-[2vw] text-white font-hello hover:text-gray-300 transition-colors duration-300 textColor">
                <a href="../../index.html">EvoXcel</a>
            </h1>
            <ul
                class="hidden lg:flex w-[45%] relative z-50 items-center justify-between text-[1.4vw] font-[400] text-white textColor">
                <li class="relative group">
                    <a href="#" class="flex items-center py-4 hover:text-gray-300 transition-colors duration-300">
                        Services <i class="fas fa-caret-down ml-2"></i>
                    </a>
                    <ul
                        class="absolute top-[8vh] hidden group-hover:block bg-white w-[20vw] shadow-lg text-gray-600 p-3 rounded-lg transition-all duration-300">
                        <li class="my-3 hover:bg-gray-100 rounded-md transition-colors duration-200 flex items-center">
                            <i class="fas fa-laptop-code mr-2"></i><a href="#">Web Development</a>
                        </li>
                        <li class="mb-4 hover:bg-gray-100 rounded-md transition-colors duration-200 flex items-center">
                            <i class="fas fa-code mr-2"></i><a href="#">Software Development</a>
                        </li>
                        <li class="mb-4 hover:bg-gray-100 rounded-md transition-colors duration-200 flex items-center">
                            <i class="fas fa-mobile-alt mr-2"></i><a href="#">Application Development</a>
                        </li>
                    </ul>
                </li>
                <li class="relative group">
                    <a href="#" class="flex items-center py-4 hover:text-gray-300 transition-colors duration-300">
                        Products <i class="fas fa-caret-down ml-2"></i>
                    </a>
                    <ul
                        class="absolute top-[8vh] hidden group-hover:block bg-white w-[20vw] shadow-lg text-gray-600 p-3 rounded-lg transition-all duration-300">
                        <li class="my-3 hover:bg-gray-100 rounded-md transition-colors duration-200 flex items-center">
                            <i class="fas fa-envelope-open-text mr-2"></i><a href="#">Email Automation</a>
                        </li>
                        <li class="mb-4 hover:bg-gray-100 rounded-md transition-colors duration-200 flex items-center">
                            <i class="fa-brands fa-linkedin mr-2"></i><a href="#">LinkedIn Automation</a>
                        </li>
                        <li class="mb-4 hover:bg-gray-100 rounded-md transition-colors duration-200 flex items-center">
                            <i class="fas fa-filter-circle-dollar mr-2"></i><a href="./lead-generation.html">Lead Generation</a>
                        </li>
                    </ul>
                </li>
                <li><a href="./pricing.html"
                        class="hover:text-gray-300 py-4 transition-colors duration-300">Pricing</a></li>
                <li><a href="./about-us.html"
                        class="hover:text-gray-300 py-4 transition-colors duration-300">About
                        us</a></li>
                <li><a href="./contact.html"
                        class="hover:text-gray-300 transition-colors py-4 duration-300">Contact us</a></li>
            </ul>
        </nav>
    </section>

`
    }
}
customElements.define('app-navbar', Navbar);

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer class="new_footer_area bg_color">
        <div class="new_footer_top">
            <div class=" mx-auto px-[6vw]">
                <div class="flex flex-wrap justify-between">
                    <div class="w-full md:w-1/2 lg:w-[25%] pl-4 mb-8">
                        <div class="company_widget wow fadeInLeft" data-wow-delay="0.2s">
                            <h3 class="f-title font-semibold text-lg text-gray-800 mb-4">Get in Touch</h3>
                            <p class="text-gray-600 mb-4">Don’t miss any updates of our new templates and extensions.!
                            </p>
                            <form action="#" class="f_subscribe_two mailchimp" method="post" novalidate="true">
                                <input type="text" name="EMAIL"
                                    class="form-control ring-1 ring-gray-300 memail w-full p-2 mb-4"
                                    placeholder="Email">
                                <button class="btn btn_get btn_get_two bg-blue-500 text-white py-2 px-4 rounded"
                                    type="submit">Subscribe</button>
                                <p class="mchimp-errmessage hidden"></p>
                                <p class="mchimp-sucmessage hidden"></p>
                            </form>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-[20%] px-4 mb-8">
                        <div class="about-widget pl-0 md:pl-8 wow fadeInLeft" data-wow-delay="0.4s">
                            <h3 class="f-title font-semibold text-lg text-gray-800 mb-4">Services</h3>
                            <ul class="list-none space-y-2">
                                <li><a href="#" class="text-gray-600 hover:text-gray-800">Lead Generation</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-gray-800">Linked Automation</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-gray-800">Email Automation</a></li>
                                <!-- <li><a href="#" class="text-gray-600 hover:text-gray-800">Naruto Automation</a></li> -->
                                <!-- <li><a href="#" class="text-gray-600 hover:text-gray-800">Projects</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-gray-800">My tasks</a></li> -->
                            </ul>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-[20%] px-2 mb-8">
                        <div class="about-widget pl-0 md:pl-8 wow fadeInLeft" data-wow-delay="0.6s">
                            <h3 class="f-title font-semibold text-lg text-gray-800 mb-4">Help</h3>
                            <ul class="list-none space-y-2">
                                <li><a href="#" class="text-gray-600 hover:text-gray-800">FAQ</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-gray-800">Term &amp; conditions</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-gray-800">Reporting</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-gray-800">Documentation</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-gray-800">Support Policy</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-gray-800">Privacy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                        <div class="social-widget pl-0 md:pl-8 wow fadeInLeft" data-wow-delay="0.8s">
                            <h3 class="f-title font-semibold text-lg text-gray-800 mb-4">Team Solutions</h3>
                            <div class="f_social_icon flex space-x-4">
                                <a href="#" class="fab fa-facebook text-gray-600 hover:text-gray-800"></a>
                                <a href="#" class="fab fa-twitter text-gray-600 hover:text-gray-800"></a>
                                <a href="#" class="fab fa-linkedin text-gray-600 hover:text-gray-800"></a>
                                <a href="#" class="fab fa-pinterest text-gray-600 hover:text-gray-800"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer_bg">
                <div class="footer_bg_one"></div>
                <div class="footer_bg_two"></div>
            </div>
        </div>
        <div class="footer_bottom">
            <div class="w-[100%] text-center mt-8">
                <p class="">© EvoXcel Inc.. 2024 All rights reserved.</p>
            </div>
        </div>
    </footer>
`
    }
}
customElements.define('app-footer', Footer);



window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust this value as needed
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});