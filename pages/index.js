import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-[#181818] font-sans">
      <Head>
        {/* Title */}
        <title>Italo Marsili - Site Oficial </title>
        <meta property="og:title" content="Italo Marsili - Site Oficial"></meta>
        <meta name="instagram:title" content="Italo Marsili"></meta>
        <meta name="youtube:title" content="Italo Marsili"></meta>
        <meta name="facebook:title" content="Italo Marsili"></meta>
        <meta name="twitter:title" content="Italo Marsili"></meta>
        <meta name="linkedin:title" content="Italo Marsili"></meta>
        <link rel="icon" href="/favicon.ico" /> {/* Icon - Website */}
        {/*  Description  */}
        <meta
          name="description"
          content="Criador do Guerrilha Way® , o maior programa de desenvolvimento e amadurecimento pessoal da América Latina, e autor do livro best-seller “Os 4 Temperamentos na Educação dos Filhos”."
        ></meta>
        <meta
          itemprop="description"
          content="Criador do Guerrilha Way® , o maior programa de desenvolvimento e amadurecimento pessoal da América Latina, e autor do livro best-seller “Os 4 Temperamentos na Educação dos Filhos”."
        ></meta>
        <meta
          property="og:description"
          content="Criador do Guerrilha Way® , o maior programa de desenvolvimento e amadurecimento pessoal da América Latina, e autor do livro best-seller “Os 4 Temperamentos na Educação dos Filhos”."
        ></meta>
        <meta
          name="instagram:description"
          content="Criador do Guerrilha Way® , o maior programa de desenvolvimento e amadurecimento pessoal da América Latina, e autor do livro best-seller “Os 4 Temperamentos na Educação dos Filhos”."
        ></meta>
        <meta
          name="youtube:description"
          content="Criador do Guerrilha Way® , o maior programa de desenvolvimento e amadurecimento pessoal da América Latina, e autor do livro best-seller “Os 4 Temperamentos na Educação dos Filhos”."
        ></meta>
        <meta
          name="facebook:description"
          content="Criador do Guerrilha Way® , o maior programa de desenvolvimento e amadurecimento pessoal da América Latina, e autor do livro best-seller “Os 4 Temperamentos na Educação dos Filhos”."
        ></meta>
        <meta
          name="twitter:description"
          content="Criador do Guerrilha Way® , o maior programa de desenvolvimento e amadurecimento pessoal da América Latina, e autor do livro best-seller “Os 4 Temperamentos na Educação dos Filhos”."
        ></meta>
        <meta
          name="linkedin:description"
          content="Criador do Guerrilha Way® , o maior programa de desenvolvimento e amadurecimento pessoal da América Latina, e autor do livro best-seller “Os 4 Temperamentos na Educação dos Filhos”."
        ></meta>
        {/*  Site URL  */}
        <link rel="canonical" href="https://italomarsili.com.br/"></link>
        <meta property="og:url" content="https://italomarsili.com.br/"></meta>
        <meta
          name="instagram:site"
          content="https://italomarsili.com.br/"
        ></meta>
        <meta name="youtube:site" content="https://italomarsili.com.br/"></meta>
        <meta
          name="facebook:site"
          content="https://italomarsili.com.br/"
        ></meta>
        <meta name="twitter:site" content="https://italomarsili.com.br/"></meta>
        <meta
          name="linkedin:site"
          content="https://italomarsili.com.br/"
        ></meta>
        <meta
          property="instagram:url"
          content="https://italomarsili.com.br/"
        ></meta>
        <meta
          property="youtube:url"
          content="https://italomarsili.com.br/"
        ></meta>
        <meta
          property="facebook:url"
          content="https://italomarsili.com.br/"
        ></meta>
        <meta
          property="twitter:url"
          content="https://italomarsili.com.br/"
        ></meta>
        <meta
          property="linkedin:url"
          content="https://italomarsili.com.br/"
        ></meta>
        {/*  Theme Color Global */}
        <meta name="theme-color" content="#EE2860"></meta>
        <meta name="msapplication-TileColor" content="#EE2860"></meta>
        <meta name="msapplication-navbutton-color" content="#EE2860"></meta>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="#EE2860"
        ></meta>
        {/*  Share Image Size  */}
        <meta property="og:locale" content="pt_BR"></meta>
        <meta property="og:image:type" content="image/png"></meta>
        <meta property="og:image:width" content="1920"></meta>
        <meta property="og:image:height" content="1080"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:card" content="summary_large_image"></meta>
        <meta property="instagram:card" content="summary_large_image"></meta>
        <meta property="youtube:card" content="summary_large_image"></meta>
        <meta property="facebook:card" content="summary_large_image"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="linkedin:card" content="summary_large_image"></meta>
        {/*  Share Image URL  */}
        <meta name="image" content="./share.png"></meta>
        <meta itemprop="image" content="./share.png"></meta>
        <meta property="og:image" content="./share.png"></meta>
        <meta name="youtube:image" content="./share.png"></meta>
        <meta name="instagram:image" content="./share.png"></meta>
        <meta name="facebook:image" content="./share.png"></meta>
        <meta name="twitter:image" content="./share.png"></meta>
        <meta name="linkedin:image" content="./share.png"></meta>
        {/*  Site Name  */}
        <meta name="author" content="Italo Marsili"></meta>
        <meta itemprop="name" content="Italo Marsili"></meta>
        <meta name="instagram:site" content="Italo Marsili"></meta>
        <meta name="youtube:site" content="Italo Marsili"></meta>
        <meta name="facebook:site" content="Italo Marsili"></meta>
        <meta name="twitter:site" content="Italo Marsili"></meta>
        <meta name="linkedin:site" content="Italo Marsili"></meta>
        <meta name="article:author" content="Italo Marsili"></meta>
        <meta name="application-name" content="Italo Marsili"></meta>
        <meta property="og:site_name" content="Italo Marsili"></meta>
        <meta name="apple-mobile-web-app-title" content="Italo Marsili"></meta>
        {/*  Favicons  */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="./assets/images/favicons/apple-touch-icon-57x57.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="./assets/images/favicons/apple-touch-icon-60x60.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="./assets/images/favicons/apple-touch-icon-72x72.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="./assets/images/favicons/apple-touch-icon-76x76.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="./assets/images/favicons/apple-touch-icon-114x114.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="./assets/images/favicons/apple-touch-icon-120x120.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="./assets/images/favicons/apple-touch-icon-144x144.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="./assets/images/favicons/apple-touch-icon-152x152.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./assets/images/favicons/apple-touch-icon-180x180.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./assets/images/favicons/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="194x194"
          href="./assets/images/favicons/favicon-194x194.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="./assets/images/favicons/android-chrome-192x192.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./assets/images/favicons/favicon-16x16.png"
        ></link>
        <link
          rel="mask-icon"
          href="./assets/images/favicons/safari-pinned-tab.svg"
          color="#EE2860"
        ></link>
        <meta
          name="msapplication-TileImage"
          content="./assets/images/favicons/mstile-144x144.png"
        ></meta>
        <meta
          name="msapplication-config"
          content="./assets/images/favicons/browserconfig.xml"
        ></meta>
        {/*  Manifest  */}
        <link rel="manifest" href="./docs/site.webmanifest"></link>
        {/* CSS imports  */}
        <link href="/" rel="stylesheet"></link>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/solid.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/thinline.css"
        ></link>
        <script src="https://unicons.iconscout.com/release/v4.0.0/script/monochrome/bundle.js" />
      </Head>

      {/* Initial Section */}
      <div class="bg-no-repeat bg-cover bg-center relative bg-hero-pattern">
        <div class="absolute bg-gradient-to-b from-[#181818] to-[#222222] opacity-75 inset-0 z-0"></div>

        <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          <div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
            <div class="self-start hidden lg:flex flex-col  text-white">
              <img src="" class="mb-3" />
              <h1 class="mb-3 font-bold text-5xl">Hi 👋 Welcome Back Aji </h1>
              <p class="pr-3">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups
              </p>
            </div>
          </div>
          {/* <div class="flex justify-center self-center  z-10">
            <div class="p-12 bg-white mx-auto rounded-2xl w-100 ">
              <div class="mb-4">
                <h3 class="font-semibold text-2xl text-gray-800">Sign In </h3>
                <p class="text-gray-500">Please sign in to your account.</p>
              </div>
              <div class="space-y-5">
                <div class="space-y-2">
                  <label class="text-sm font-medium text-gray-700 tracking-wide">
                    Email
                  </label>
                  <input
                    class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type=""
                    placeholder="mail@gmail.com"
                  ></input>
                </div>
                <div class="space-y-2">
                  <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type=""
                    placeholder="Enter your password"
                  ></input>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                    ></input>
                    <label
                      for="remember_me"
                      class="ml-2 block text-sm text-gray-800"
                    >
                      Remember me
                    </label>
                  </div>
                  <div class="text-sm">
                    <a href="#" class="text-green-400 hover:text-green-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    class="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Sign in
                  </button>
                </div>
              </div>
              <div class="pt-5 text-center text-gray-400 text-xs">
                <span>
                  Copyright © 2021-2022
                  <a
                    href="https://codepen.io/uidesignhub"
                    rel=""
                    target="_blank"
                    title="Ajimon"
                    class="text-green hover:text-green-500 "
                  >
                    AJI
                  </a>
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* <div className="">
        <header
          class=" bg-cover"
          styleJsx="background-image: url('');"
        >
          <div class="content px-8 py-2">
            <div class="body mt-20 mx-8">
              <div class="md:flex items-center justify-between">
                <div
                  class="w-full"
                >
                  <h1 class="text-4xl font-bold text-white tracking-wide">
                    Lorem
                  </h1>
                  <h2 class="text-2xl font-bold text-white tracking-wide">
                    Lorem <span class="text-gray-800"> Lorem</span>
                  </h2>
                  <p class="text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div class="w-full md:max-w-md mt-6"></div>
              </div>
            </div>
          </div>
        </header>
      </div> */}

      {/* CTA Button - Whatsapp */}
      <div
        className="
        w-full
        flex
        flex-col
        text-center 
        items-center
        justify-center 
        justify-items-center
        px-8
        py-4
        lg:pb-[6rem]
        md:pb-[5rem]
        sm:pb-[4rem]
        pb-[1.75rem]
        "
      >
        <h4
          className="
          w-full
          flex 
          justify-center 

          lg:text-md
          md:text-base
          sm:text-sm
          text-sm
          lg:font-light
          md:font-light
          sm:font-light
          font-light

          text-white 
          lg:pb-5
          md:pb-4
          sm:pb-4
          py-4
          "
        >
          Alguma dúvida?
        </h4>
        <a
          href=""
          target="_blank"
          className="
            flex
            bg-[#25D366]
            hover:bg-[#18e664]
            hover:shadow-green
            transition duration-[385ms] ease-in-out
            rounded-[0.65rem]

            lg:px-[0.90rem]
            md:px-[0.85rem]
            sm:px-[0.80rem]
            px-[0.75rem]

            lg:py-[0.85rem]
            md:py-[0.80rem]
            sm:py-[0.78rem]
            py-[0.75rem]

            lg:mb-2
            md:mb-5
            sm:mb-2
            mb-20

            lg:text-lg
            md:text-md
            sm:text-base
            text-sm
            font-bold
            text-white 
            "
        >
          FALE COM UM DE NOSSOS CONSULTORES
          {/* <p
            className="
            lg:text-lg
            md:text-md
            sm:text-base
            text-sm
            font-bold
            text-white 
            px-2"
          >
            FALE COM UM DE NOSSOS CONSULTORES
          </p> */}
        </a>
      </div>

      <footer class="footer-1 py-8 bottom-0 justify-center w-full">
        <div class="flex-wrap container mx-auto px-4">
          {/* img logo */}
          <div
            className="
          justify-center
          text-center
          justify-items-center
          items-center
          flex
          mx-auto

          lg:pb-10
          md:pb-10
          sm:pb-10
          pb-6
          lg:w-[14rem]
          md:w-[14rem]
          sm:w-[12.5rem]
          w-[10rem]"
          >
            <img src="logo-wrl.png" alt="Italo Marsili - Logo"></img>
          </div>

          <div
            className="
            flex
            lg:space-x-10
            md:space-x-8
            sm:space-x-6
            space-x-5

            w-full

            text-center 
            justify-center  
            items-center 
            justify-items-center"
          >
            <a
              href="#"
              className="
              lg:w-[1.815rem]
              md:text-[1.75rem]
              sm:text-2xl
              text-2xl
              text-white
              hover:text-[#EE2860]
              transition duration-475 ease-in-out
              "
            >
              <i class="uil uil-instagram"></i>
              {/* <img
                src="instagram.svg"
                alt="instagram"
                className="
              "
              ></img> */}
            </a>
            <a
              href="#"
              className="
              lg:w-[1.815rem]
              md:text-[1.75rem]
              sm:text-2xl
              text-2xl
              text-white
              hover:text-[#EE2860]
              transition duration-475 ease-in-out
              "
            >
              <i class="uil uil-facebook-f"></i>
              {/* <img
                src="facebook.svg"
                alt="facebook"
                className="
              "
              ></img> */}
            </a>
            <a
              href="#"
              className="
              lg:w-[1.815rem]
              md:text-[1.75rem]
              sm:text-2xl
              text-2xl
              text-white
              hover:text-[#EE2860]
              transition duration-475 ease-in-out
              "
            >
              <i class="uil uil-twitter-alt"></i>
              {/* <img
                src="twitter.svg"
                alt="twitter"
                className="
              "
              ></img> */}
            </a>
            <a
              href="#"
              className="
              lg:w-[1.815rem]
              md:text-[1.75rem]
              sm:text-2xl
              text-2xl
              text-white
              hover:text-[#EE2860]
              transition duration-475 ease-in-out
              "
            >
              <i class="uil uil-youtube"></i>
              {/* <img
                src="youtube.svg"
                alt="youtube"
                className="
              "
              ></img> */}
            </a>
            <a
              href="#"
              className="lg
              :w-[1.815rem]
                md:text-[1.75rem]
                sm:text-2xl
                text-2xl
                text-white
                hover:text-[#EE2860]
                transition duration-475 ease-in-out
                "
            >
              <i class="uil uil-linkedin-alt"></i>
              {/* <img
                src="linkedin.svg"
                alt="linkedin"
                className="
                "
              ></img> */}
            </a>
          </div>
          <div
            class="
            sm:flex 
            sm:flex-wrap 
            sm:mt-12 
            sm:pt-12
            mt-6 
            pt-6 
            border-t
            border-[#3E3E3E] 
            justify-center 
            justify-items-center 
            items-center 
            text-white"
          >
            <p
              className="
              sm:pb-10

              lg:text-lg
              md:text-md
              sm:text-base
              text-base

              text-center
              items-center 
              justify-center 
              justify-items-center
              font-semibold 
              pb-12"
            >
              WRL CURSOS E EVENTOS LTDA
            </p>

            <div
              class="
              sm:flex 
              sm:flex-wrap 
              font-light 
              w-full
              mx-auto
              text-center
              items-center 
              justify-center 
              justify-items-center"
            >
              <div
                class="
                w-full
                sm:pt-3
                lg:w-3/6
                lg:pr-11

                lg:text-[0.9rem]
                md:text-base
                sm:text-base
                text-[0.81rem]

                text-center
                items-center 
                justify-center 
                justify-items-center
                "
              >
                <p>Copyright 2018 - Italo Marsili - All Rights Reserved</p>
              </div>
              <div
                class="
                md:w-2/2
                md:pt-3
                md:space-x-10
                sm:w-2/2
                sm:pt-3
                sm:space-x-8
                lg:space-x-12
                lg:w-3/6 
                lg:px-6

                lg:text-[0.9rem]
                md:text-[0.84rem]
                sm:text-[0.89rem]
                text-[0.68rem]

                space-x-8
                pt-3
                flex 
                flex-wrap 
                text-center
                items-center 
                justify-center 
                justify-items-center
                
                min-w-min
                "
              >
                <a href="" target="_blank" class="">
                  <h6 className="hover:text-[#EE2860] transition duration-450 ease-in-out">
                    Política de privacidade
                  </h6>
                </a>
                <a href="" target="_blank" class="">
                  <h6 className="hover:text-[#EE2860] transition duration-450 ease-in-out">
                    TERMOS LEGAIS
                  </h6>
                </a>
                <a href="" target="_blank" class="">
                  <h6 className="hover:text-[#EE2860] transition duration-450 ease-in-out">
                    Contato
                  </h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
