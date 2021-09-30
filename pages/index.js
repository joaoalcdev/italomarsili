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
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        ></link>
      </Head>

      {/* teste */}

      {/* Initial Section */}
      <div
        class="
        bg-no-repeat
        bg-cover
        bg-custom
        
        mobilexs:bg-no-repeat
        mobilexs:bg-cover
        mobilexs:bg-customxs
        
        sm:bg-no-repeat
        sm:bg-cover
        sm:bg-center

        md:bg-no-repeat
        md:bg-cover
        md:bg-center

        lg:bg-no-repeat
        lg:bg-cover
        lg:bg-center

        bg-italo
        relative
        "
      >
        <div
          class="
          absolute
          bottom-1
          bg-gradient-to-b 
          from-[#181818] 
          to-[#222222] 
          opacity-0 
          inset-0 
          z-0
          select-none
          "
        ></div>

        <div
          class="
          min-h-screen 

          mobilexs:flex
          mobilexs:flex-row
          sm:flex 
          sm:flex-row 
          md:flex 
          md:flex-row 
          lg:flex 
          lg:flex-row 
          flex 
          flex-row

          justify-end
          self-auto
          w-full

          mx-0
          "
        >
          <div
            class="
            w-full
            flex
            flex-col
            self-center
            text-left

            mobilexs:mt-24
            mobilexs:pt-0
            mobilexs:pr-20
            mobilexs:justify-end
            mobilexs:items-end

            mt-40
            pt-0
            px-4
            justify-end
            items-end

            sm:mt-0
            sm:pt-0
            sm:pr-20
            sm:justify-end
            sm:items-end

            md:mt-0
            md:pt-0
            md:pr-30
            md:justify-end
            md:items-end	

            lg:mt-0
            lg:pt-0
            lg:pr-30
            lg:justify-end
            lg:items-end

            z-10
            "
          >
            <div
              class="
              flex
              flex-col  
              self-auto
              text-white
              "
            >
              <h1
                class="
                mb-3 
                font-bold 

                text-4xl
                mobilexs:text-5xl
                sm:text-5xl 
                md:text-6xl 
                lg:text-7xl 

                text-[#EE2860]
                "
              >
                Italo Marsili{' '}
              </h1>
              <p
                class="
                mb-6
                font-normal

                text-[0.765rem]
                mobilexs:text-[0.774rem]
                sm:text-lg 
                md:text-lg 
                lg:text-xl
                "
              >
                Criador do <strong>Guerrilha Way®</strong>, o maior programa de{' '}
                <br></br>
                desenvolvimento e amadurecimento pessoal da América <br></br>
                Latina, e autor do livro best-seller “Os 4 Temperamentos na{' '}
                <br></br>
                Educação dos Filhos”.
              </p>
              <h3
                className="
                mb-3
                text-[#EE2860]
                font-bold
                
                text-lg
                mobilexs:text-lg
                sm:text-lg 
                md:text-lg 
                lg:text-xl
                "
              >
                Conheça nossos cursos:
              </h3>
            </div>

            {/* <div
              class="
              flex
              flex-col  
              self-auto
              text-white
              "
            >
              <h1
                class="
                mb-3 
                font-bold 

                text-4xl 
                sm:text-5xl 
                md:text-6xl 
                lg:text-7xl 

                text-[#EE2860]
                "
              >
                Italo Marsili{' '}
              </h1>
              <p
                class="
                mb-6
                font-normal

                text-[0.765rem]
                sm:text-lg 
                md:text-lg 
                lg:text-xl
                "
              >
                Criador do <strong>Guerrilha Way®</strong>, o maior programa de{' '}
                <br></br>
                desenvolvimento e amadurecimento pessoal da América <br></br>
                Latina, e autor do livro best-seller “Os 4 Temperamentos na{' '}
                <br></br>
                Educação dos Filhos”.
              </p>
              <h3
                className="
                mb-3
                text-[#EE2860]
                font-bold
                
                text-lg
                sm:text-lg 
                md:text-lg 
                lg:text-xl
                "
              >
                Conheça nossos cursos:
              </h3>

            </div> */}
          </div>
        </div>
      </div>

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
        pb-[1.75rem]
        mobilexs:pb-[1.4rem]
        sm:pb-[4rem]
        md:pb-[5rem]
        lg:pb-[6rem]
        "
      >
        <h4
          className="
          flex 
          w-full
          justify-center 

          lg:text-lg
          md:text-[1.125rem]
          sm:text-[1rem]
          mobilexs:text-[1.125rem]
          text-md
          lg:font-light
          md:font-light
          sm:font-light
          font-light

          text-white 
          lg:pb-5
          md:pb-4
          sm:pb-4
          mobilexs:pb-4
          pb-4

          lg:pt-15
          md:pt-12
          sm:pt-12
          mobilexs:pt-12
          pt-10
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
            select-none
            outline-none

            lg:px-[1.4rem]
            md:px-[1.2rem]
            sm:px-[1.2rem]
            mobilexs:px-[1.1rem]
            px-[1rem]

            lg:py-[0.85rem]
            md:py-[0.80rem]
            sm:py-[0.78rem]
            mobilexs:py-[0.76rem]
            py-[0.75rem]

            lg:mb-2
            md:mb-5
            sm:mb-2
            mobilexs:mb-10
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
        </a>
      </div>

      <footer class="footer-1 py-8 bottom-0 justify-center w-full select-none">
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
          mobilexs:pb-6
          pb-6
          lg:w-[14rem]
          md:w-[14rem]
          sm:w-[12.5rem]
          mobilexs:w-[10rem]
          w-[10rem]
          "
          >
            <img src="logo-wrl.png" alt="Italo Marsili - Logo"></img>
          </div>
          <div
            className="
            flex
            lg:space-x-10
            md:space-x-8
            sm:space-x-6
            mobilexs:space-x-5
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
              mobilexs:text-2xl
              text-2xl
              text-white
              hover:text-[#EE2860]
              transition duration-475 ease-in-out
              outline-none
              "
            >
              <i class="uil uil-instagram"></i>
            </a>
            <a
              href="#"
              className="
              lg:w-[1.815rem]
              md:text-[1.75rem]
              sm:text-2xl
              mobilexs:text-2xl
              text-2xl
              text-white
              hover:text-[#EE2860]
              transition duration-475 ease-in-out
              outline-none
              "
            >
              <i class="uil uil-facebook-f"></i>
            </a>
            <a
              href="#"
              className="
              lg:w-[1.815rem]
              md:text-[1.75rem]
              sm:text-2xl
              mobilexs:text-2xl
              text-2xl
              text-white
              hover:text-[#EE2860]
              transition duration-475 ease-in-out
              outline-none
              "
            >
              <i class="uil uil-twitter-alt"></i>
            </a>
            <a
              href="#"
              className="
              lg:w-[1.815rem]
              md:text-[1.75rem]
              sm:text-2xl
              mobilexs:text-2xl
              text-2xl
              text-white
              hover:text-[#EE2860]
              transition duration-475 ease-in-out
              outline-none
              "
            >
              <i class="uil uil-youtube"></i>
            </a>
            <a
              href="#"
              className="lg
              :w-[1.815rem]
                md:text-[1.75rem]
                sm:text-2xl
                mobilexs:text-2xl
                text-2xl
                text-white
                hover:text-[#EE2860]
                transition duration-475 ease-in-out
                outline-none
                "
            >
              <i class="uil uil-linkedin-alt"></i>
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
              mobilexs:text-base
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
                mobilexs-[0.70rem]
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
                <a href="" target="_blank" class="outline-none">
                  <h6 className="hover:text-[#EE2860] transition duration-450 ease-in-out">
                    Política de privacidade
                  </h6>
                </a>
                <a href="" target="_blank" class="outline-none">
                  <h6 className="hover:text-[#EE2860] transition duration-450 ease-in-out">
                    TERMOS LEGAIS
                  </h6>
                </a>
                <a href="" target="_blank" class="outline-none">
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
