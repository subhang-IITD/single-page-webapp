import "./App.css";



function App() {
  return (
    <div>
      <div>
        <div className="page-overlay">
          <div className="overlay-transition"></div>
          <div className="logo-loader-wrapper">
            <img src={"./logo.png"}alt="hanshills logo" />
          </div>
        </div>
        <div
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="navigation w-nav"
        >
          <div className="container nav">
            <div className="menu-nav">
              <a
                href="/"
                aria-current="page"
                className="nav-brand w-nav-brand w--current"
              >
                <img
                  src="url(file:///C:/Users/Subhang%20Ladha/OneDrive/Desktop/learnproject/hanshills/hanshills/src/components/logo.png)"
                  loading="lazy"
                  alt="hanshills-white"
                  className="brand-img"
                />
              </a>
              <nav role="navigation" className="nav-menu w-nav-menu">
                <a href="#what-we-do" className="nav-link w-nav-link">
                  What we do
                </a>
                <a href="#our-services" className="nav-link w-nav-link">
                  Our Services
                </a>
                <a href="#features" className="nav-link w-nav-link">
                  Features
                </a>
                <a href="#solutions" className="nav-link w-nav-link">
                  Solutions
                </a>
                <a href="#faq" className="nav-link w-nav-link">
                  FAQ
                </a>
                <div className="mobile-nav-button"></div>
              </nav>
            </div>
            <div className="menu-button w-nav-button">
              <div
                data-is-ix2-target="1"
                className="hamburger-icon"
                data-w-id="6bff00c8-e530-755f-826a-24de5374840f"
                data-animation-type="lottie"
                data-src="https://assets.website-files.com/616ef168b3392d785c16ee78/61963d3233dc66ff31f3af3b_hamburger.json"
                data-loop="0"
                data-direction="1"
                data-autoplay="0"
                data-renderer="svg"
                data-default-duration="0.5"
                data-duration="0"
                data-ix2-initial-state="0"
              ></div>
            </div>
          </div>
        </div>
        <div className="page-wrapper">
          <div className="section wf-section">
            <div className="hero-wrapper">
              <div className="hero-bg"></div>
              <div className="container hero w-container">
                <div className="grid">
                  <div className="grid-item">
                    <div className="center-content">
                      <h1>
                        We help leaders grow their businesses for
                        <span className="font-italic"> a brighter future</span>
                      </h1>
                      <div className="paragraph-wrapper">
                        <p className="paragraph small">
                          Quis eu at condimentum amet sed facilisi viverra. Sit
                          fames sed vulputate auctor tincidunt. Et sit blandit
                          eu nam scelerisque lorem lectus nibh dis.
                        </p>
                      </div>
                      <div className="spacer _32"></div>
                      <div className="hero-buttons">
                        <a
                          href="#our-services"
                          className="button secondary w-inline-block"
                        >
                          <div className="button-text">Explore our service</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="https://assets.website-files.com/616ef168b3392d785c16ee78/61901735a46a31c48e04ce9c_decor-2.svg"
                loading="lazy"
                alt=""
                className="right-bg-element"
              />
              <img
                src="https://assets.website-files.com/616ef168b3392d785c16ee78/6190173594f49c9262779458_decor-1.svg"
                loading="lazy"
                alt=""
                className="left-bg-element"
              />
            </div>
          </div>
          <div className="section wf-section">
            <div className="container numbers w-container">
              <div className="grid">
                <div className="grid-item">
                  <div className="numbers-wrapper">
                    <div className="number-item">
                      <div className="numbers">1,900+</div>
                      <div className="numbers-description">Meetings So Far</div>
                    </div>
                    <div className="number-item">
                      <div className="numbers">5,942</div>
                      <div className="numbers-description">
                        Courses Sold Online
                      </div>
                    </div>
                    <div className="number-item">
                      <div className="numbers">$2,87M</div>
                      <div className="numbers-description">
                        Our clients earned with us
                      </div>
                    </div>
                    <div className="number-item">
                      <div className="numbers">30+</div>
                      <div className="numbers-description">
                        Experts of the area
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="what-we-do" className="section wf-section">
            <div className="container w-container">
              <div className="grid landscape-reverse">
                <div className="grid-item _50 landscape-100">
                  <div className="width-constraint">
                    <p className="paragraph extra-small grey-60">WHAT WE DO</p>
                    <h2>
                      We provide our expert services
                      <span className="font-italic">around the world</span>
                    </h2>
                    <div className="paragraph-grey">
                      <p className="paragraph">
                        Semper eget morbi elit molestie sapien faucibus lacus,
                        aliquet enim. Lobortis elementum sed quis morbi cursus
                        vitae non sodales. Faucibus sapien lectus elit mi turpis
                        vivamus nulla viverra pellentesque.
                      </p>
                    </div>
                    <div className="spacer _32"></div>
                    <div className="features-wrapper">
                      <div className="do-item">Firts service</div>
                      <div className="do-item">Second service</div>
                      <div className="do-item">Third service</div>
                      <div className="do-item">Fourth service</div>
                      <div className="do-item">Fifth service</div>
                    </div>
                  </div>
                </div>
                <div className="grid-item _50 landscape-100">
                  <div className="image-wrapper right">
                    <img
                      src="https://assets.website-files.com/616ef168b3392d785c16ee78/6190192a1f12a021b11220a2_man-globe.svg"
                      loading="lazy"
                      alt="Illustration"
                      className="img-40"
                    />
                  </div>
                </div>
              </div>
              <div className="grid">
                <div className="grid-item">
                  <div className="spacer _64"></div>
                </div>
                <div className="grid-item _50 landscape-100">
                  <div className="image-wrapper left">
                    <img
                      src="https://assets.website-files.com/616ef168b3392d785c16ee78/6190192adc1f69127dab2c48_searching-man.svg"
                      loading="lazy"
                      alt="Illustration"
                      className="img-40"
                    />
                  </div>
                </div>
                <div className="grid-item _50 landscape-100">
                  <div className="width-constraint">
                    <h2>
                      We help you to build
                      <span className="font-italic">powerful product</span> and
                      users will love it
                    </h2>
                    <div className="paragraph-grey">
                      <p className="paragraph">
                        Eget tincidunt eu vehicula nulla gravida augue augue
                        vulputate. Malesuada tellus varius rutrum orci praesent.
                        Nam volutpat a, consectetur arcu ornare.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="our-services" className="section dark wf-section">
            <div className="container w-container">
              <div className="grid">
                <div className="grid-item">
                  <div className="center-content">
                    <p className="paragraph extra-small grey-60">
                      OUR SERVICES
                    </p>
                    <h2>
                      Our agency experts will provide you with a
                      <span className="font-italic">
                        full stack of services
                      </span>
                    </h2>
                    <div className="paragraph-wrapper">
                      <p className="paragraph small">
                        Quis eu at condimentum amet sed facilisi viverra. Sit
                        fames sed vulputate auctor tincidunt. Et sit blandit eu
                        nam scelerisque lorem lectus nibh dis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="spacer _32 tablet-8"></div>
                </div>
                <div className="grid-item _25 landscape-50">
                  <div className="service-item">
                    <img
                      src="https://assets.website-files.com/616ef168b3392d785c16ee78/6190dff238f8db3c2b56fcc5_Graph.svg"
                      loading="lazy"
                      alt="Icon"
                      className="service-icon"
                    />
                    <h5>Marketing Strategy</h5>
                    <div className="spacer _12"></div>
                    <div className="paragraph-white-50">
                      <p className="paragraph small">
                        Posuere nisl, ultricies dignissim quis dignissim integer
                        risus enim dui.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid-item _25 landscape-50">
                  <div className="service-item">
                    <img
                      src="https://assets.website-files.com/616ef168b3392d785c16ee78/6190dff2fb77ec00277eda84_Graph-1.svg"
                      loading="lazy"
                      alt="Icon"
                      className="service-icon"
                    />
                    <h5>SEO-optimization</h5>
                    <div className="spacer _12"></div>
                    <div className="paragraph-white-50">
                      <p className="paragraph small">
                        Posuere nisl, ultricies dignissim quis dignissim integer
                        risus enim dui.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid-item _25 landscape-50">
                  <div className="service-item">
                    <img
                      src="https://assets.website-files.com/616ef168b3392d785c16ee78/6190dff242545a455ec6b105_Graph-2.svg"
                      loading="lazy"
                      alt="Icon"
                      className="service-icon"
                    />
                    <h5>Design</h5>
                    <div className="spacer _12"></div>
                    <div className="paragraph-white-50">
                      <p className="paragraph small">
                        Posuere nisl, ultricies dignissim quis dignissim integer
                        risus enim dui.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid-item _25 landscape-50">
                  <div className="service-item">
                    <img
                      src="https://assets.website-files.com/616ef168b3392d785c16ee78/6190dff268034feef999558a_Graph-5.svg"
                      loading="lazy"
                      alt="Icon"
                      className="service-icon"
                    />
                    <h5>Development</h5>
                    <div className="spacer _12"></div>
                    <div className="paragraph-white-50">
                      <p className="paragraph small">
                        Posuere nisl, ultricies dignissim quis dignissim integer
                        risus enim dui.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid-item tablet-hide">
                  <div className="spacer _16"></div>
                </div>
                <div className="grid-item _25 landscape-50">
                  <div className="service-item">
                    <img
                      src="https://assets.website-files.com/616ef168b3392d785c16ee78/6190dff2418b84783ae47c44_Graph-3.svg"
                      loading="lazy"
                      alt="Icon"
                      className="service-icon"
                    />
                    <h5>Research</h5>
                    <div className="spacer _12"></div>
                    <div className="paragraph-white-50">
                      <p className="paragraph small">
                        Posuere nisl, ultricies dignissim quis dignissim integer
                        risus enim dui.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid-item _25 landscape-50">
                  <div className="service-item">
                    <img
                      src="https://assets.website-files.com/616ef168b3392d785c16ee78/6190dff233c64a558584d06c_Graph-4.svg"
                      loading="lazy"
                      alt="Icon"
                      className="service-icon"
                    />
                    <h5>Social Media Promotion</h5>
                    <div className="spacer _12"></div>
                    <div className="paragraph-white-50">
                      <p className="paragraph small">
                        Posuere nisl, ultricies dignissim quis dignissim integer
                        risus enim dui.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid-item _50 tablet-100">
                  <div className="service-banner-wrapper">
                    <h4>
                      Hey! Can we help your product with some of our expert
                      services?
                    </h4>
                    <div className="banner-button-wrapper">
                      <a
                        href="#contact-us"
                        className="button secondary w-inline-block"
                      >
                        <div className="button-text">Let’s discuss</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section dark wf-section">
            <div className="bg-pattern"></div>
          </div>
          <div id="features" className="section wf-section">
            <div className="container offset w-container">
              <div className="white-bg">
                <div className="grid">
                  <div className="grid-item">
                    <div className="center-content">
                      <p className="paragraph extra-small grey-60">FEATURES</p>
                      <h2>
                        <span className="font-italic">We care </span>about
                        profits of your business
                      </h2>
                      <p className="paragraph small grey-80">
                        Quis eu at condimentum amet sed facilisi viverra. Sit
                        fames sed vulputate auctor tincidunt. Et sit blandit eu
                        nam scelerisque lorem lectus nibh dis.
                      </p>
                    </div>
                  </div>
                  <div className="grid-item">
                    <div className="spacer _32 tablet-8"></div>
                  </div>
                  <div className="grid-item _33 mobile-100">
                    <div className="feature-item">
                      <img
                        src="https://assets.website-files.com/616ef168b3392d785c16ee78/6190e6251328980729a00fbc_img-1.svg"
                        loading="lazy"
                        alt="Illustration"
                        className="features-img"
                      />
                      <h4>Operations</h4>
                      <p className="paragraph small grey-80">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vel ut congue varius congue aliquet leo. Netus neque
                        nibh
                      </p>
                    </div>
                  </div>
                  <div className="grid-item _33 mobile-100">
                    <div className="feature-item">
                      <img
                        src="https://assets.website-files.com/616ef168b3392d785c16ee78/6190e625ea41efceb24f3529_img-2.svg"
                        loading="lazy"
                        alt="Illustration"
                        className="features-img"
                      />
                      <h4>Quality Assurance</h4>
                      <p className="paragraph small grey-80">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vel ut congue varius congue aliquet leo. Netus neque
                        nibh
                      </p>
                    </div>
                  </div>
                  <div className="grid-item _33 mobile-100">
                    <div className="feature-item">
                      <img
                        src="https://assets.website-files.com/616ef168b3392d785c16ee78/6190e625ebd9a2e914f2e959_img-3.svg"
                        loading="lazy"
                        alt="Illustration"
                        className="features-img"
                      />
                      <h4>Human Resources</h4>
                      <p className="paragraph small grey-80">
                        Posuere nisl, ultricies dignissim quis dignissim integer
                        risus enim dui.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section wf-section">
            <div className="container banner w-container">
              <div className="grid">
                <div className="grid-item">
                  <div className="banner">
                    <h4 className="for-banner">
                      Ready to discuss your rock star product? Let’s discuss it
                    </h4>
                    <div className="banner-button-wrapper">
                      <a
                        href="#contact-us"
                        className="button secondary green w-inline-block"
                      >
                        <div className="button-text">Contact us</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section wf-section">
            <div className="container w-container">
              <div
                data-delay="4000"
                data-animation="slide"
                className="slider w-slider"
                data-autoplay="false"
                data-easing="ease"
                data-hide-arrows="false"
                data-disable-swipe="false"
                data-autoplay-limit="0"
                data-nav-spacing="3"
                data-duration="500"
                data-infinite="true"
              >
                <div className="w-slider-mask">
                  <div className="slide-container w-slide">
                    <div className="grid landscape-reverse">
                      <div className="grid-item _50 landscape-100">
                        <div className="width-constraint">
                          <p className="paragraph extra-small grey-60">
                            OUR SUCCESS IN NUMBERS
                          </p>
                          <h2>
                            We will build product that your
                            <span className="font-italic">users love</span>
                          </h2>
                          <div className="paragraph-grey">
                            <p className="paragraph">
                              Velit integer nisl quis eget sed ultrices. Nam
                              egestas felis, at lacus consequat, diam integer.
                              Fusce sed vulputate ac accumsan, odio amet. Sit
                              varius pharetra donec.
                            </p>
                          </div>
                          <div className="spacer _20"></div>
                          <a
                            href="#contact-us"
                            className="button secondary green w-inline-block"
                          >
                            <div className="button-text">Work with us</div>
                          </a>
                        </div>
                      </div>
                      <div className="grid-item _50 landscape-100">
                        <div className="slider-img-container">
                          <img
                            src="https://assets.website-files.com/616ef168b3392d785c16ee78/61910124a46a31094808c7c8_Slider%20Image.svg"
                            loading="lazy"
                            alt="Placeholder Img"
                            className="slider-img"
                          />
                          <div className="slider-decorate"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide-container w-slide">
                    <div className="grid landscape-reverse">
                      <div className="grid-item _50 landscape-100">
                        <div className="width-constraint tablet">
                          <p className="paragraph extra-small grey-60">
                            OUR SUCCESS IN NUMBERS
                          </p>
                          <h2>
                            Our work didn’t go unnoticed
                            <span className="font-italic">in the world</span>
                          </h2>
                          <div className="paragraph-grey">
                            <p className="paragraph">
                              Velit integer nisl quis eget sed ultrices. Nam
                              egestas felis, at lacus consequat, diam integer.
                              Fusce sed vulputate ac accumsan, odio amet. Sit
                              varius pharetra donec.
                            </p>
                          </div>
                          <div className="spacer _20"></div>
                        </div>
                      </div>
                      <div className="grid-item _50 landscape-100">
                        <div className="slider-img-container">
                          <img
                            src="https://assets.website-files.com/616ef168b3392d785c16ee78/6192baf17b309d3ee240840b_slider-2.svg"
                            loading="lazy"
                            alt="Placeholder Img"
                            className="slider-img"
                          />
                          <div className="slider-decorate"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide-container w-slide">
                    <div className="grid landscape-reverse">
                      <div className="grid-item _50 landscape-100">
                        <div className="width-constraint tablet">
                          <p className="paragraph extra-small grey-60">
                            OUR SUCCESS IN NUMBERS
                          </p>
                          <h2>
                            We know how to solve any situation
                            <span className="font-italic">differently</span>
                          </h2>
                          <div className="paragraph-grey">
                            <p className="paragraph">
                              Velit integer nisl quis eget sed ultrices. Nam
                              egestas felis, at lacus consequat, diam integer.
                              Fusce sed vulputate ac accumsan, odio amet. Sit
                              varius pharetra donec.
                            </p>
                          </div>
                          <div className="spacer _20"></div>
                        </div>
                      </div>
                      <div className="grid-item _50 landscape-100">
                        <div className="slider-img-container">
                          <img
                            src="https://assets.website-files.com/616ef168b3392d785c16ee78/6192bc0b51d69d65ea955f83_slider-3.jpg"
                            loading="lazy"
                            alt="pic"
                            className="slider-img cover"
                          />
                          <div className="slider-decorate"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="arrow left w-slider-arrow-left">
                  <img
                    src="https://assets.website-files.com/616ef168b3392d785c16ee78/61911015e6b9613f7eb41f79_arrow-left.svg"
                    loading="lazy"
                    alt="Arrow left"
                    className="slider-arrow-img"
                  />
                </div>
                <div className="arrow right w-slider-arrow-right">
                  <img
                    src="https://assets.website-files.com/616ef168b3392d785c16ee78/61911015b0b3fd7f6ce63bf8_arrow-right.svg"
                    loading="lazy"
                    alt="Arrow right"
                    className="slider-arrow-img"
                  />
                </div>
                <div className="slider-nav w-slider-nav w-round"></div>
              </div>
            </div>
          </div>
          <div id="solutions" className="section dark wf-section">
            <div className="container w-container">
              <div className="grid">
                <div className="grid-item">
                  <div
                    data-current="Tab 1"
                    data-easing="ease"
                    data-duration-in="300"
                    data-duration-out="100"
                    className="tabs-horizontal w-tabs"
                  >
                    <div className="tabs-menu w-tab-menu">
                      <botton
                        data-w-tab="Tab 1"
                        className="tab-link w-inline-block w-tab-link w--current"
                      >
                        <div>Feature 1</div>
                      </botton>
                      <botton
                        data-w-tab="Tab 2"
                        className="tab-link w-inline-block w-tab-link"
                      >
                        <div>Feature 2</div>
                      </botton>
                      <botton
                        data-w-tab="Tab 3"
                        className="tab-link w-inline-block w-tab-link"
                      >
                        <div>Feature 3</div>
                      </botton>
                    </div>
                    <div className="tabs-content w-tab-content">
                      <div
                        data-w-tab="Tab 1"
                        className="w-tab-pane w--tab-active"
                      >
                        <div className="tab-grid">
                          <div className="grid-item _50 landscape-100">
                            <div className="image-wrapper bottom-margin">
                              <div className="tabs-img">
                                <img
                                  sizes="(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 991px) 35vw, 32vw"
                                  srcSet="
                                https://assets.website-files.com/616ef168b3392d785c16ee78/61920f47e44b947d84e51325_img-feature-1-p-500.jpeg 500w,
                                https://assets.website-files.com/616ef168b3392d785c16ee78/61920f47e44b947d84e51325_img-feature-1.jpeg       940w
                              "
                                  src="https://assets.website-files.com/616ef168b3392d785c16ee78/61920f47e44b947d84e51325_img-feature-1.jpeg"
                                  loading="lazy"
                                  alt="people"
                                  className="img-40 landscape-100"
                                />
                                <img
                                  loading="lazy"
                                  src="https://assets.website-files.com/616ef168b3392d785c16ee78/6192b7d86c87eeec21f2c31f_decor-5.svg"
                                  alt=""
                                  className="tabs-decor-img"
                                />
                                <img
                                  loading="lazy"
                                  src="https://assets.website-files.com/616ef168b3392d785c16ee78/61920fbf767c35f1e69b0e91_img-feature-2.jpeg"
                                  alt="people"
                                  className="image-overlapping"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="grid-item _50 landscape-100">
                            <div className="width-constraint">
                              <h2>
                                We provide our expert services
                                <span className="font-italic">
                                  around the world
                                </span>
                              </h2>
                              <div className="paragraph-wrapper">
                                <p className="paragraph">
                                  Semper eget morbi elit molestie sapien
                                  faucibus lacus, aliquet enim. Lobortis
                                  elementum sed quis morbi cursus vitae non
                                  sodales. Faucibus sapien lectus elit mi turpis
                                  vivamus nulla viverra pellentesque.
                                </p>
                              </div>
                              <div className="spacer _24"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-w-tab="Tab 2" className="w-tab-pane">
                        <div className="tab-grid">
                          <div className="grid-item _50 landscape-100">
                            <div className="image-wrapper bottom-margin">
                              <div className="tabs-img">
                                <img
                                  sizes="(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 991px) 35vw, 32vw"
                                  srcSet="
                                https://assets.website-files.com/616ef168b3392d785c16ee78/6192be072e7becd11b48d252_tab-2-p-500.jpeg 500w,
                                https://assets.website-files.com/616ef168b3392d785c16ee78/6192be072e7becd11b48d252_tab-2-p-800.jpeg 800w,
                                https://assets.website-files.com/616ef168b3392d785c16ee78/6192be072e7becd11b48d252_tab-2.jpg        940w
                              "
                                  src="https://assets.website-files.com/616ef168b3392d785c16ee78/6192be072e7becd11b48d252_tab-2.jpg"
                                  loading="lazy"
                                  alt="pic"
                                  className="img-40 landscape-100"
                                />
                                <img
                                  loading="lazy"
                                  src="https://assets.website-files.com/616ef168b3392d785c16ee78/6192b7d86c87eeec21f2c31f_decor-5.svg"
                                  alt=""
                                  className="tabs-decor-img"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="grid-item _50 landscape-100">
                            <div className="width-constraint">
                              <h2>
                                We provide our expert services
                                <span className="font-italic">
                                  around the world
                                </span>
                              </h2>
                              <div className="paragraph-wrapper">
                                <p className="paragraph">
                                  Semper eget morbi elit molestie sapien
                                  faucibus lacus, aliquet enim. Lobortis
                                  elementum sed quis morbi cursus vitae non
                                  sodales. Faucibus sapien lectus elit mi turpis
                                  vivamus nulla viverra pellentesque.
                                </p>
                              </div>
                              <div className="spacer _24"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-w-tab="Tab 3" className="w-tab-pane">
                        <div className="tab-grid">
                          <div className="grid-item _50 landscape-100">
                            <div className="image-wrapper bottom-margin">
                              <div className="tabs-img">
                                <img
                                  sizes="(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 991px) 35vw, 32vw"
                                  srcSet="
                                https://assets.website-files.com/616ef168b3392d785c16ee78/6192be078a67b44dc39bee06_tab-3-p-500.jpeg 500w,
                                https://assets.website-files.com/616ef168b3392d785c16ee78/6192be078a67b44dc39bee06_tab-3.jpg        688w
                              "
                                  src="https://assets.website-files.com/616ef168b3392d785c16ee78/6192be078a67b44dc39bee06_tab-3.jpg"
                                  loading="lazy"
                                  alt="pic"
                                  className="img-40 landscape-100"
                                />
                                <img
                                  loading="lazy"
                                  src="https://assets.website-files.com/616ef168b3392d785c16ee78/6192b7d86c87eeec21f2c31f_decor-5.svg"
                                  alt=""
                                  className="tabs-decor-img"
                                />
                                <img
                                  loading="lazy"
                                  src="https://assets.website-files.com/616ef168b3392d785c16ee78/6192be0767d353833b68a6de_tab-3.5.jpg"
                                  alt="Pic"
                                  className="image-overlapping"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="grid-item _50 landscape-100">
                            <div className="width-constraint">
                              <h2>
                                We provide our expert services
                                <span className="font-italic">
                                  around the world
                                </span>
                              </h2>
                              <div className="paragraph-wrapper">
                                <p className="paragraph">
                                  Semper eget morbi elit molestie sapien
                                  faucibus lacus, aliquet enim. Lobortis
                                  elementum sed quis morbi cursus vitae non
                                  sodales. Faucibus sapien lectus elit mi turpis
                                  vivamus nulla viverra pellentesque.
                                </p>
                              </div>
                              <div className="spacer _24"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section wf-section">
            <div className="container team w-container">
              <div className="grid">
                <div className="grid-item">
                  <div className="center-content">
                    <p className="paragraph extra-small grey-60">OUR TEAM</p>
                    <h2>
                      Our agency it’s
                      <span className="font-italic">about the people</span> and
                      for the people
                    </h2>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="spacer _8"></div>
                </div>
                <div className="grid-item _33 mobile-100">
                  <div className="team-wrapper">
                    <div className="team-img-wrapper">
                      <img
                        src="https://assets.website-files.com/616ef168b3392d785c16ee78/619213e1cc609462c3ebadab_team-member.jpeg"
                        loading="lazy"
                        alt="man"
                        className="team-img"
                      />
                    </div>
                    <h4>Brooklyn Simmons</h4>
                    <h6 className="grey">CEO, Marketing Director</h6>
                  </div>
                </div>
                <div className="grid-item _33 mobile-100">
                  <div className="team-wrapper">
                    <div className="team-img-wrapper">
                      <img
                        src="https://assets.website-files.com/616ef168b3392d785c16ee78/619213e142545af60ecc6aea_team-member-1.jpeg"
                        loading="lazy"
                        alt=" woman"
                        className="team-img"
                      />
                    </div>
                    <h4>Jenny Wilson</h4>
                    <h6 className="grey">Lead Designer</h6>
                  </div>
                </div>
                <div className="grid-item _33 mobile-100">
                  <div className="team-wrapper">
                    <div className="team-img-wrapper">
                      <img
                        src="https://assets.website-files.com/616ef168b3392d785c16ee78/619213e2dc1f693741b49897_team-member-2.jpeg"
                        loading="lazy"
                        alt="man"
                        className="team-img"
                      />
                    </div>
                    <h4>Jimm Pena</h4>
                    <h6 className="grey">Director of the PR department</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section wf-section">
            <div className="container w-container">
              <div className="grid">
                <div className="grid-item _50 landscape-100">
                  <div className="width-constraint">
                    <p className="paragraph extra-small grey-60">
                      CLIENT STORIES
                    </p>
                    <h2>
                      Check the{" "}
                      <span className="font-italic">success story </span>of our
                      clients
                    </h2>
                    <div className="paragraph-grey">
                      <p className="paragraph">
                        Velit integer nisl quis eget sedusce sed vulputate ac
                        accumsan, odio amet. Sit varius pharetra donec.
                      </p>
                    </div>
                  </div>
                  <div className="spacer _104"></div>
                  <div className="review-item">
                    <p className="paragraph">
                      Aliquam libero nunc dictumst risus, tellus nisl venenatis
                      leo magna. Nibh suspendisse feugiat felis volutpat ac nibh
                      nunc laoreet. Facilisis sed egestas sed at dictumst.
                      Aliquet vitae ut non est euismod faucibus dolor.
                    </p>
                    <div className="review-author-wrapper">
                      <img
                        src="https://assets.website-files.com/616ef168b3392d785c16ee78/6192c2556c87ee8360f31778_Ellipse%20139.png"
                        loading="lazy"
                        alt="Avatar"
                        className="review-author-img"
                      />
                      <div>
                        <h5>Leslie Alexander</h5>
                        <div className="paragraph small grey-80">
                          Founder and CEO
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-item _50 landscape-100">
                  <div className="review-item">
                    <p className="paragraph">
                      Et amet est cras orci, dignissim. Adipiscing laoreet
                      hendrerit feugiat id sodales ullamcorper. Fames dictum
                      sapien neque, proin malesuada lorem eget urna. Non nec mi
                      tristique malesuada libero tristique. Aliquam libero nunc
                      dictumst risus, tellus nisl venenatis leo magna. Nibh
                      suspendisse feugiat felis volutpat ac nibh nunc laoreet.
                      Facilisis sed egestas sed at dictumst.
                    </p>
                    <div className="review-author-wrapper">
                      <img
                        src="https://assets.website-files.com/616ef168b3392d785c16ee78/6192c255cb70a3db7991a0d1_Ellipse%20139-1.png"
                        loading="lazy"
                        alt="Avatar"
                        className="review-author-img"
                      />
                      <div>
                        <h5>Marvin McKinney</h5>
                        <div className="paragraph small grey-80">
                          Founder and CEO
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="spacer _32 for-review"></div>
                  <div className="review-item">
                    <p className="paragraph">
                      Nibh suspendisse feugiat felis volutpat ac nibh nunc
                      laoreet. Facilisis sed egestas sed at dictumst. Aliquet
                      vitae ut non est euismod faucibus dolor.
                    </p>
                    <div className="review-author-wrapper">
                      <img
                        src="https://assets.website-files.com/616ef168b3392d785c16ee78/6192c2559496c01efeb5ee68_Ellipse%20139-2.png"
                        loading="lazy"
                        alt="Avatar"
                        className="review-author-img"
                      />
                      <div>
                        <h5>Courtney Henry</h5>
                        <div className="paragraph small grey-80">
                          Founder and CEO
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="faq" className="section dark wf-section">
            <div className="container w-container">
              <div className="grid">
                <div className="grid-item">
                  <div className="center-content">
                    <h1>Frequently Asked Questions</h1>
                    <div className="spacer _32"></div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="center-content">
                    <div className="accordion-wrapper">
                      <div className="accordion-heading">
                        <div className="heading-wrapper">
                          <h4 className="accordion-title">
                            Do you help small business?
                          </h4>
                        </div>
                        <div
                          data-is-ix2-target="1"
                          className="accordion-icon"
                          data-w-id="2b560e27-0db4-7dfd-bfac-2121dd0735bf"
                          data-animation-type="lottie"
                          data-src="https://assets.website-files.com/616ef168b3392d785c16ee78/61940e731c4675fc808bb627_plus-icon.json"
                          data-loop="0"
                          data-direction="1"
                          data-autoplay="0"
                          data-renderer="svg"
                          data-default-duration="0.64"
                          data-duration="0"
                          data-ix2-initial-state="0"
                        ></div>
                      </div>
                      <div className="accordion-content">
                        <p className="paragraph accordion">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla, ut commodo diam libero vitae
                          erat. Aenean faucibus nibh et justo cursus id rutrum
                          lorem imperdiet. Nunc ut sem vitae risus tristique
                          posuere.
                        </p>
                      </div>
                    </div>
                    <div className="accordion-wrapper">
                      <div className="accordion-heading">
                        <div className="heading-wrapper">
                          <h4 className="accordion-title">
                            Can you help my business grow?
                          </h4>
                        </div>
                        <div
                          data-is-ix2-target="1"
                          className="accordion-icon"
                          data-w-id="c8140515-36e6-cbc7-cd44-bcce7ea7254a"
                          data-animation-type="lottie"
                          data-src="https://assets.website-files.com/616ef168b3392d785c16ee78/61940e731c4675fc808bb627_plus-icon.json"
                          data-loop="0"
                          data-direction="1"
                          data-autoplay="0"
                          data-renderer="svg"
                          data-default-duration="0.64"
                          data-duration="0"
                          data-ix2-initial-state="0"
                        ></div>
                      </div>
                      <div className="accordion-content">
                        <p className="paragraph accordion">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla, ut commodo diam libero vitae
                          erat. Aenean faucibus nibh et justo cursus id rutrum
                          lorem imperdiet. Nunc ut sem vitae risus tristique
                          posuere.
                        </p>
                      </div>
                    </div>
                    <div className="accordion-wrapper">
                      <div className="accordion-heading">
                        <div className="heading-wrapper">
                          <h4 className="accordion-title">
                            How do you calculate cost of services?
                          </h4>
                        </div>
                        <div
                          data-is-ix2-target="1"
                          className="accordion-icon"
                          data-w-id="1c1b439f-cfff-3e0b-7fdb-9bfff185e02e"
                          data-animation-type="lottie"
                          data-src="https://assets.website-files.com/616ef168b3392d785c16ee78/61940e731c4675fc808bb627_plus-icon.json"
                          data-loop="0"
                          data-direction="1"
                          data-autoplay="0"
                          data-renderer="svg"
                          data-default-duration="0.64"
                          data-duration="0"
                          data-ix2-initial-state="0"
                        ></div>
                      </div>
                      <div className="accordion-content">
                        <p className="paragraph accordion">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla, ut commodo diam libero vitae
                          erat. Aenean faucibus nibh et justo cursus id rutrum
                          lorem imperdiet. Nunc ut sem vitae risus tristique
                          posuere.
                        </p>
                      </div>
                    </div>
                    <div className="accordion-wrapper">
                      <div className="accordion-heading">
                        <div className="heading-wrapper">
                          <h4 className="accordion-title">
                            What are your best interest rates?
                          </h4>
                          <div className="tooltip-wrapper"></div>
                        </div>
                        <div
                          data-is-ix2-target="1"
                          className="accordion-icon"
                          data-w-id="f2382701-0e29-849e-89b3-37dd53eb7eb2"
                          data-animation-type="lottie"
                          data-src="https://assets.website-files.com/616ef168b3392d785c16ee78/61940e731c4675fc808bb627_plus-icon.json"
                          data-loop="0"
                          data-direction="1"
                          data-autoplay="0"
                          data-renderer="svg"
                          data-default-duration="0.64"
                          data-duration="0"
                          data-ix2-initial-state="0"
                        ></div>
                      </div>
                      <div className="accordion-content">
                        <p className="paragraph accordion">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla, ut commodo diam libero vitae
                          erat. Aenean faucibus nibh et justo cursus id rutrum
                          lorem imperdiet. Nunc ut sem vitae risus tristique
                          posuere.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="contact-us" className="section wf-section">
            <div className="container w-container">
              <div className="grid">
                <div className="grid-item _50 landscape-100">
                  <div className="image-wrapper left">
                    <img
                      src="https://assets.website-files.com/616ef168b3392d785c16ee78/6196283cec00d55bc067c272_chat.svg"
                      loading="lazy"
                      alt="Contact us Illustration"
                      className="img-contact"
                    />
                  </div>
                </div>
                <div className="grid-item _50 landscape-100">
                  <p className="paragraph extra-small grey-60">
                    CONTACT OUR EXPERT
                  </p>
                  <h2>
                    Ready to discuss project?
                    <br />‍<span className="font-italic">Drop us a line</span>
                  </h2>
                  <div className="spacer _24"></div>
                  <div>
                    <div className="w-form">
                      <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        method="get"
                      >
                        <input
                          type="text"
                          className="text-field w-input"
                          maxLength="256"
                          name="name"
                          data-name="name"
                          placeholder="Your Name *"
                          id="name"
                          required=""
                        />
                        <input
                          type="email"
                          className="text-field w-input"
                          maxLength="256"
                          name="email"
                          data-name="email"
                          placeholder="Type Your Email *"
                          id="email"
                          required=""
                        />
                        <textarea
                          data-name="question"
                          maxLength="5000"
                          id="question"
                          name="question"
                          placeholder="Ask your question"
                          className="text-field area w-input"
                        ></textarea>
                        <div className="spacer _20"></div>
                        <input
                          type="submit"
                          value="Send a Message"
                          data-wait="Please wait..."
                          className="button secondary green w-button"
                        />
                      </form>
                      <div className="success-message w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="error-message w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section wf-section">
          <div className="container footer w-container">
            <div className="grid">
              <div className="grid-item">
                <div className="footer-items-wrapper">
                  <a
                    href="/"
                    aria-current="page"
                    className="footer-logo w-inline-block w--current"
                  >
                    <img
                      src="./components/logo.png"
                      loading="lazy"
                      alt="HansHills Logo"
                    />
                  </a>
                  <div className="footer-links-wrapper">
                    <div className="links-container">
                      <a href="#what-we-do" className="nav-link footer">
                        What we do
                      </a>
                      <a href="#our-services" className="nav-link footer">
                        Our Services
                      </a>
                      <a href="#features" className="nav-link footer">
                        Features
                      </a>
                      <a href="#solutions" className="nav-link footer">
                        Solutions
                      </a>
                      <a href="#faq" className="nav-link footer">
                        FAQ
                      </a>
                    </div>
                    <div className="links-container socials">
                      <a
                        href="https://twitter.com/?lang=ru"
                        className="social-link w-inline-block"
                      >
                        <img
                          src="https://assets.website-files.com/616ef168b3392d785c16ee78/61977213fb1d80ae36a95755_twitter.svg"
                          loading="lazy"
                          width="24"
                          alt="Twitter Logo"
                          className="social-icon"
                        />
                      </a>
                      <a
                        href="https://www.facebook.com"
                        className="social-link w-inline-block"
                      >
                        <img
                          src="https://assets.website-files.com/616ef168b3392d785c16ee78/6197721371d2038c29410748_facebook.svg"
                          loading="lazy"
                          width="24"
                          alt="Facebook Logo"
                          className="social-icon"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com"
                        className="social-link w-inline-block"
                      >
                        <img
                          src="https://assets.website-files.com/616ef168b3392d785c16ee78/619772137eaae72bff2e94a7_linkedin.svg"
                          loading="lazy"
                          alt="Linkedin Logo"
                          className="social-icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="paragraph extra-small">
                  © All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="get-template-wrapper">
          <div className="get-template-link-wrapper"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
