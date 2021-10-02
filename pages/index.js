import Head from 'next/head'

// eslint-disable-next-line
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css/bundle'
import 'swiper/css'

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
        <meta name="theme-color" content="#181818"></meta>
        <meta name="msapplication-TileColor" content="#181818"></meta>
        <meta name="msapplication-navbutton-color" content="#181818"></meta>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="#181818"
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
          href="favicon-64x64.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="apple-touch-icon-60x60.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="apple-touch-icon-72x72.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="apple-touch-icon-76x76.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="apple-touch-icon-114x114.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="apple-touch-icon-120x120.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="apple-touch-icon-144x144.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="apple-touch-icon-152x152.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon-180x180.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="194x194"
          href="favicon-194x194.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="android-chrome-192x192.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        ></link>
        <link
          rel="mask-icon"
          href="safari-pinned-tab.svg"
          color="#EE2860"
        ></link>
        <meta
          name="msapplication-TileImage"
          content="mstile-144x144.png"
        ></meta>
        <meta
          name="msapplication-config"
          content="browserconfig.xml"
        ></meta>
        {/*  Manifest  */}
        <link rel="manifest" href="site.webmanifest"></link>
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
        bg-center
        
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

        min-h-screen
        "
      >
        <div
          class="
          absolute
          bottom-1
          bg-gradient-to-b 
          from-[#181818] 
          to-[#222222] 
          opacity-[12%] 
          inset-0 
          z-0
          select-none

          min-h-screen
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
            self-center
            text-left
            
            mobilexs:mt-0
            mobilexs:pt-[13rem]
            mobilexs:pr-[-32rem]
            mobilexs:justify-end
            mobilexs:items-end
            
            mt-0
            pt-[11rem]
            pr-0
            pl-36

            flex-nowrap
            justify-end
            items-end

            sm:mt-0
            sm:pt-[10rem]
            sm:pr-0
            sm:justify-end
            sm:items-end

            md:mt-0
            md:pt-28
            md:pr-0
            md:justify-end
            md:items-end	

            lg:mt-0
            lg:pt-24
            lg:pr-0
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

                mobilexs:text-4xl
                text-[2.8rem]
                sm:text-[3rem] 
                md:text-[3.6rem]
                lg:text-[3.8rem]

                text-[#EE2860]
                "
              >
                Italo Marsili{' '}
              </h1>
              <p
                class="
                w-full
                font-normal

                mobilexs:text-[0.6rem]
                text-[0.8rem]
                sm:text-[0.9rem]
                md:text-[1rem]
                lg:text-[1rem]
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
                mt-6
                mb-6
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
              {/* init carousel */}
              <>
                <Swiper
                  slidesPerView={3.3}
                  spaceBetween={20}
                  pagination={{
                    clickable: true
                  }}
                  className="
                  mySwiper

                  flex
                  flex-col

                  mobilexs:flex-col

                  mobilexs:w-[22rem]
                  mobilexs:h-[16rem]
                  
                  w-[34rem]
                  h-[16rem]

                  sm:flex-col
                  sm:w-[36rem]
                  sm:h-[16rem]

                  md:flex-col
                  md:w-[37rem]
                  md:h-[16rem]

                  lg:flex-col
                  lg:w-[38rem]
                  lg:h-[16rem]
                  
                  text-white
                  "
                >
                  {/* swiper 01 (slider) */}
                  <div className="flex">
                    <SwiperSlide
                      className="
                      "
                    >
                      <div
                        className="
                        border-2
                        border-[#EE2860]
                        rounded-lg
                        select-none
                        outline-none
                        "
                      >
                        <div
                          className="
                          bg-[#060102] 
                          rounded-t-lg
                          "
                        >
                          <a href="" className="outline-none">
                            <img
                              src="logo-guerrilhaway.png"
                              className="
                              rounded-t-[0.4rem] 
                              w-full
                              h-full
                              "
                            ></img>
                          </a>
                        </div>
                        <div
                          className="
                          flex-col
                          bg-[#060606]
                          w-full

                          mobilexs:text-left
                          text-left
                          sm:text-left
                          md:text-left
                          lg:text-left

                          mobilexs:px-[0.4rem]
                          px-4
                          sm:px-4
                          md:px-4
                          lg:px-3
                          
                          mobilexs:pb-[0.7rem]
                          pb-4
                          sm:pb-4
                          md:pb-4
                          lg:pb-4

                          rounded-b-[0.4rem]
                          "
                        >
                          <h3
                            className="
                            flex
                            text-white
                            font-bold
                            pb-[0.1rem]
                            pt-2

                            

                            mobilexs:text-[0.59rem]
                            text-[0.7rem]
                            sm:text-[0.76rem]
                            md:text-[0.8rem]
                            lg:text-[0.9rem]
                            "
                          >
                            Guerrilha Way
                          </h3>
                          <a
                            href=""
                            className="
                            flex
                            font-light 
                            text-[#EE2860] 
                            outline-none
                            "
                          >
                            <p
                              className="
                              flex 
                              border-b-[1px]
                              border-[#EE2860]

                              mobilexs:text-[0.595rem]
                              text-[0.7rem]
                              sm:text-[0.7rem]
                              md:text-[0.75rem]
                              lg:text-[0.8rem]
                              "
                            >
                              Visitar página
                            </p>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                  {/* swiper 01 (slider) */}
                  {/* swiper 02 (slider) */}
                  <div className="flex">
                    <SwiperSlide
                      className="
                      "
                    >
                      <div
                        className="
                        border-2
                        border-[#EE2860]
                        rounded-lg
                        select-none
                        outline-none
                        "
                      >
                        <div
                          className="
                          bg-[#060102] 
                          rounded-t-lg
                          "
                        >
                          <a href="" className="outline-none">
                            <img
                              src="logo-menos50T.png"
                              className="
                              rounded-t-[0.4rem] 
                              w-full
                              h-full
                              "
                            ></img>
                          </a>
                        </div>
                        <div
                          className="
                          flex-col
                          bg-[#060606]
                          w-full

                          mobilexs:text-left
                          text-left
                          sm:text-left
                          md:text-left
                          lg:text-left

                          mobilexs:px-[0.4rem]
                          px-4
                          sm:px-4
                          md:px-4
                          lg:px-3
                          
                          mobilexs:pb-[0.7rem]
                          pb-4
                          sm:pb-4
                          md:pb-4
                          lg:pb-4

                          rounded-b-[0.4rem]
                          "
                        >
                          <h3
                            className="
                            flex
                            text-white
                            font-bold
                            pb-[0.1rem]
                            pt-2

                            

                            mobilexs:text-[0.68rem]
                            text-[0.7rem]
                            sm:text-[0.76rem]
                            md:text-[0.8rem]
                            lg:text-[0.9rem]
                            "
                          >
                            Menos 50T
                          </h3>
                          <a
                            href=""
                            className="
                            flex
                            font-light 
                            text-[#EE2860] 
                            outline-none
                            "
                          >
                            <p
                              className="
                              flex 
                              border-b-[1px]
                              border-[#EE2860]

                              mobilexs:text-[0.595rem]
                              text-[0.7rem]
                              sm:text-[0.7rem]
                              md:text-[0.75rem]
                              lg:text-[0.8rem]
                              "
                            >
                              Visitar página
                            </p>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                  {/* swiper 02 (slider) */}
                  {/* swiper 03 (slider) */}
                  <div className="flex">
                    <SwiperSlide
                      className="
                      "
                    >
                      <div
                        className="
                        border-2
                        border-[#EE2860]
                        rounded-lg
                        select-none
                        outline-none
                        "
                      >
                        <div
                          className="
                          bg-[#060102] 
                          rounded-t-lg
                          "
                        >
                          <a href="" className="outline-none">
                            <img
                              src="logo-guerrilhaway.png"
                              className="
                              rounded-t-[0.4rem] 
                              w-full
                              h-full
                              "
                            ></img>
                          </a>
                        </div>
                        <div
                          className="
                          flex-col
                          bg-[#060606]
                          w-full

                          mobilexs:text-left
                          text-left
                          sm:text-left
                          md:text-left
                          lg:text-left

                          mobilexs:px-[0.4rem]
                          px-4
                          sm:px-4
                          md:px-4
                          lg:px-3
                          
                          mobilexs:pb-[0.7rem]
                          pb-4
                          sm:pb-4
                          md:pb-4
                          lg:pb-4

                          rounded-b-[0.4rem]
                          "
                        >
                          <h3
                            className="
                            flex
                            text-white
                            font-bold
                            pb-[0.1rem]
                            pt-2

                            

                            mobilexs:text-[0.68rem]
                            text-[0.7rem]
                            sm:text-[0.76rem]
                            md:text-[0.8rem]
                            lg:text-[0.9rem]
                            "
                          >
                            Eixo
                            <br className=""></br>
                          </h3>
                          <a
                            href=""
                            className="
                            flex
                            font-light 
                            text-[#EE2860] 
                            outline-none
                            "
                          >
                            <p
                              className="
                              flex 
                              border-b-[1px]
                              border-[#EE2860]

                              mobilexs:text-[0.595rem]
                              text-[0.7rem]
                              sm:text-[0.7rem]
                              md:text-[0.75rem]
                              lg:text-[0.8rem]
                              "
                            >
                              Visitar página
                            </p>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                  {/* swiper 03 (slider) */}
                  {/* swiper 04 (slider) */}
                  <div className="flex">
                    <SwiperSlide
                      className="
                      "
                    >
                      <div
                        className="
                        border-2
                        border-[#EE2860]
                        rounded-lg
                        select-none
                        outline-none
                        "
                      >
                        <div
                          className="
                          bg-[#060102] 
                          rounded-t-lg
                          "
                        >
                          <a href="" className="outline-none">
                            <img
                              src="logo-guerrilhaway.png"
                              className="
                              rounded-t-[0.4rem] 
                              w-full
                              h-full
                              "
                            ></img>
                          </a>
                        </div>
                        <div
                          className="
                          flex-col
                          bg-[#060606]
                          w-full

                          mobilexs:text-left
                          text-left
                          sm:text-left
                          md:text-left
                          lg:text-left

                          mobilexs:px-[0.4rem]
                          px-4
                          sm:px-4
                          md:px-4
                          lg:px-3
                          
                          mobilexs:pb-[0.7rem]
                          pb-4
                          sm:pb-4
                          md:pb-4
                          lg:pb-4

                          rounded-b-[0.4rem]
                          "
                        >
                          <h3
                            className="
                            text-white
                            font-bold
                            pb-[0.1rem]
                            pt-2

                            
                            mobilexs:text-[0.68rem]
                            tabletxs:flex
                            tabletxs:text-[0.7rem]
                            hidden
                            sm:hidden
                            md:hidden
                            lg:hidden
                            "
                          >
                            Os 4 Tem...
                          </h3>
                          <h3
                            className="
                            flex
                            text-white
                            font-bold
                            pb-[0.1rem]
                            pt-2

                            
                            mobilexs:hidden
                            tabletxs:hidden
                            text-[0.7rem]
                            sm:text-[0.76rem]
                            md:text-[0.8rem]
                            lg:text-[0.9rem]
                            "
                          >
                            Os 4 Tempera...
                          </h3>
                          <a
                            href=""
                            className="
                            flex
                            font-light 
                            text-[#EE2860] 
                            outline-none
                            "
                          >
                            <p
                              className="
                              flex 
                              border-b-[1px]
                              border-[#EE2860]

                              mobilexs:text-[0.595rem]
                              text-[0.7rem]
                              sm:text-[0.7rem]
                              md:text-[0.75rem]
                              lg:text-[0.8rem]
                              "
                            >
                              Visitar página
                            </p>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                  {/* swiper 04 (slider) */}
                  {/* swiper 05 (slider) */}
                  <div className="flex">
                    <SwiperSlide
                      className="
                      "
                    >
                      <div
                        className="
                        border-2
                        border-[#EE2860]
                        rounded-lg
                        select-none
                        outline-none
                        "
                      >
                        <div
                          className="
                          bg-[#060102] 
                          rounded-t-lg
                          "
                        >
                          <a href="" className="outline-none">
                            <img
                              src="logo-guerrilhaway.png"
                              className="
                              rounded-t-[0.4rem] 
                              w-full
                              h-full
                              "
                            ></img>
                          </a>
                        </div>
                        <div
                          className="
                          flex-col
                          bg-[#060606]
                          w-full

                          mobilexs:text-left
                          text-left
                          sm:text-left
                          md:text-left
                          lg:text-left

                          mobilexs:px-[0.4rem]
                          px-4
                          sm:px-4
                          md:px-4
                          lg:px-3
                          
                          mobilexs:pb-[0.7rem]
                          pb-4
                          sm:pb-4
                          md:pb-4
                          lg:pb-4

                          rounded-b-[0.4rem]
                          "
                        >
                          <h3
                            className="
                            text-white
                            font-bold
                            pb-[0.1rem]
                            pt-2

                            
                            mobilexs:text-[0.68rem]
                            tabletxs:flex
                            tabletxs:text-[0.7rem]
                            hidden
                            sm:hidden
                            md:hidden
                            lg:hidden
                            "
                          >
                            Território...
                          </h3>
                          <h3
                            className="
                            flex
                            text-white
                            font-bold
                            pb-[0.1rem]
                            pt-2

                            
                            mobilexs:hidden
                            tabletxs:hidden
                            text-[0.7rem]
                            sm:text-[0.76rem]
                            md:text-[0.8rem]
                            lg:text-[0.9rem]
                            "
                          >
                            Território Humano
                          </h3>
                          <a
                            href=""
                            className="
                            flex
                            font-light 
                            text-[#EE2860] 
                            outline-none
                            "
                          >
                            <p
                              className="
                              flex 
                              border-b-[1px]
                              border-[#EE2860]

                              mobilexs:text-[0.595rem]
                              text-[0.7rem]
                              sm:text-[0.7rem]
                              md:text-[0.75rem]
                              lg:text-[0.8rem]
                              "
                            >
                              Visitar página
                            </p>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                  {/* swiper 05 (slider) */}
                </Swiper>
              </>
              {/* end carousel */}
            </div>
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

      {/* init footer */}
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
      {/* end footer */}
    </div>
  )
}
