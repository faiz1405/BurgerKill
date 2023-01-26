import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="py-12 bg-slate-900 text-white">
        <div class="container mx-auto px-4">
          <div class="footer-box flex justify-around  lg:flex-row flex-col lg:gap-0 gap-10">
            <div class="box lg:w-[500px]">
              <div class="logo flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                  Burger <span className="font-bold">Kill</span>
                </h1>
              </div>
              <div class="desc">
                <p class="opacity-50 text-base leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                  nisi enim similique labore accusantium dicta amet sunt
                  doloremque excepturi eos.
                </p>
              </div>
            </div>
            <div class="box flex flex-col lg:w[100px] gap-3 ">
              <h4 class="font-bold text-lg">Menu</h4>

              <a href="#" class="opacity-50 hover:opacity-100">
                Home
              </a>
              <a href="#" class="opacity-50 hover:opacity-100">
                About
              </a>
              <a href="#" class="opacity-50 hover:opacity-100">
                Services
              </a>
              <a href="#" class="opacity-50 hover:opacity-100">
                Projects
              </a>
              <a href="#" class="opacity-50 hover:opacity-100">
                Contact
              </a>
            </div>
            <div class="box box flex flex-col items-start lg:w[100px] gap-3 ">
              <h4 class="font-bold text-lg">Company</h4>

              <a href="#" class="opacity-50 hover:opacity-100">
                Term Of Service
              </a>
              <a href="#" class="opacity-50 hover:opacity-100">
                Privacy Policy
              </a>
              <a href="#" class="opacity-50 hover:opacity-100">
                Blog
              </a>
              <a href="#" class="opacity-50 hover:opacity-100">
                Cookies
              </a>
              <a href="#" class="opacity-50 hover:opacity-100">
                Setting
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
