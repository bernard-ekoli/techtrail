import { works } from "./completedWoks"
import { useState, useRef } from "react"
const Index = () => {
    let [itemIndex, setItemIndex] = useState(null)
    let [imageIndex, setImageIndex] = useState(0)
    let [changeHeader, setChangeHeader] = useState(false)
    const element = useRef(null)
    const close = () => {
        element.current.className = "fly-out"
    }
    const scrollable = (e) => {
        const top = e.target.scrollTop
        if (top === 0) {
            setChangeHeader(false)
        } else {
            setChangeHeader(true)
        }
    }
    return (
        <div id="parent" onScroll={(e) => scrollable(e)}>
            <div id="index">
                <header>
                    <div className={changeHeader ? "changeHeader" : ""}>
                        <div id="trailLogo">
                            <img src="/techTrailLogo.png" alt="" />
                        </div>
                        <div id="hamBurger">
                            <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="black"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                        </div>
                        <section id="navLinks">
                            <a href="/home">Home</a>
                            <a href="/about">About</a>
                            <a href="/services">Services</a>
                        </section>
                        <section id="contactNav">
                            <button>Contact Us</button>
                        </section>
                    </div>
                </header>
                <main>
                    <div id="hero">
                        <span>
                            From visibility to profitability – we craft your success!
                        </span>
                        <div>
                            <button>Contact Us</button>
                        </div>
                    </div>
                    {/*                     <div id="shorts">
                        <div id="videoSection">
                            <img src="/image.jpg" alt="" />
                            <span className="videoText1">
                                UI/UX Design
                            </span>
                            <span className="videoText2">
                                Web Development
                            </span>
                            <span className="videoText3">
                                Brand Development
                            </span>
                            <span className="videoText4">
                                App Development
                            </span>
                            <span className="videoText5">
                                Tech Skills Training
                            </span>'
                            <span className="videoText6">
                                Network Administration
                            </span>
                        </div>
                    </div> */}
                    <div id="convince">
                        <section>
                            <div id="sectionImage">
                                <img src="/uiux.jpg" alt="" />
                            </div>
                            <div id="sectionText">
                                <h1>UI/UX Design</h1>
                                <span>
                                    We design user interfaces and user experiences that are intuitive, engaging, and visually appealing.
                                </span>
                            </div>
                        </section>
                        <section>
                            <div id="sectionImage">
                                <img src="/webdev.jpg" alt="" />
                            </div>
                            <div id="sectionText">
                                <h1>Web Dev</h1>
                                <span>
                                    We build websites that are fast, responsive, and visually appealing.
                                </span>
                            </div>
                        </section>
                        <section>
                            <div id="sectionImage">
                                <img src="/bd.jpg" alt="" />
                            </div>
                            <div id="sectionText">
                                <h1>Brand Dev</h1>
                                <span>
                                    We create brand identities that are unique, memorable, and visually appealing.
                                </span>
                            </div>
                        </section>
                        <section>
                            <div id="sectionImage">
                                <img src="/appdev.jpg" alt="" />
                            </div>
                            <div id="sectionText">
                                <h1>App Dev</h1>
                                <span>
                                    We build mobile applications that are fast, responsive, and visually appealing.
                                </span>
                            </div>
                        </section>
                        <section>
                            <div id="sectionImage">
                                <img src="/tt.jpg" alt="" />
                            </div>
                            <div id="sectionText">
                                <h1>Tech Skills Training</h1>
                                <span>
                                    We offer training in various tech skills that are in high demand.
                                </span>
                            </div>
                        </section>
                        <section>
                            <div id="sectionImage">
                                <img src="/netAdmin.jpg" alt="" />
                            </div>
                            <div id="sectionText">
                                <h1>Network Admin</h1>
                                <span>
                                    We offer network administration services that are reliable, secure, and scalable.
                                </span>
                            </div>
                        </section>
                    </div>
                    <div id="aboutus">
                        <section>
                            <div id="aboutusText">
                                <h1>ABOUT US</h1>
                                <h2>Who We Are</h2>
                                <span>
                                    We are a leading digital solutions company dedicated to helping brands grow, engage their audience, and achieve sustainable profitability. Through cutting-edge technology, data-driven strategies, and creative expertise, we empower businesses to thrive in the ever-evolving digital landscape.
                                </span>x
                                <h2>Our Vision</h2>
                                <span>
                                    "To revolutionize the digital space by helping brands maximize visibility, engage their audience, and achieve sustainable profitability through innovative digital solutions."
                                </span>
                                <h2>Our Mission</h2>
                                <span>
                                    We leverage technology, strategy, and creativity to provide world-class digital solutions that drive real impact. By prioritizing integrity, excellence, and innovation, we ensure our clients achieve business growth and maximum profitability.
                                </span>
                                <h2>What We Do</h2>
                                <span>
                                    <p>
                                        We offer comprehensive digital services designed to enhance brand presence, optimize user experience, and drive results:
                                    </p>
                                    <ul>
                                        <li><strong>Web & App Development</strong> – Building high-performing websites and applications that drive engagement and conversions.</li>
                                        <li><strong>UI/UX Design</strong> – Creating seamless, intuitive, and visually stunning user experiences.</li>
                                        <li><strong>Social Media Management</strong> – Growing and managing your brand’s online presence.</li>
                                        <li><strong>Brand Development</strong> – Helping businesses establish a strong, recognizable brand identity.</li>
                                        <li><strong>Tech Skills Training</strong> – Equipping individuals and businesses with essential digital skills.</li>
                                        <li><strong>Network Administration</strong> – Solving complex network-related challenges and ensuring seamless connectivity.</li>
                                    </ul>
                                </span>
                                <h2>Our Core Values</h2>
                                <span>
                                    <p>At the heart of everything we do, our core values guide our approach and relationships with clients:</p>
                                    <ul>
                                        <li><strong>Integrity</strong> – We operate with honesty, transparency, and commitment to doing what’s right.</li>
                                        <li><strong>Excellence</strong> – We deliver high-quality, results-driven solutions with precision and passion.</li>
                                        <li><strong>Profitability</strong> – Our strategies are focused on helping clients scale and increase revenue.</li>
                                        <li><strong>Innovation</strong> – We stay ahead of trends and technology to create future-proof solutions.</li>
                                        <li><strong>Collaboration</strong> – We work closely with our clients to bring their vision to life.</li>
                                    </ul>
                                </span>
                                <h2>Why Choose Us</h2>
                                <span>
                                    <ul>
                                        <li><strong>Proven Expertise</strong> – A team of experienced professionals dedicated to excellence.</li>
                                        <li><strong>Client-Centric Approach</strong> – We tailor our solutions to meet your unique business needs.</li>
                                        <li><strong>Results-Driven Strategies</strong> – Our focus is on measurable growth and success.</li>
                                        <li><strong>Cutting-Edge Technology</strong> – We stay ahead of the curve to keep you competitive.</li>
                                    </ul>
                                </span>
                                <h1>Let's Build Something Great Together</h1>
                                <span>
                                    Ready to take your business to the next level? Partner with us and let’s create innovative digital solutions that drive growth and success.
                                </span><br />
                                <button>Contact Us Today</button>
                            </div>
                        </section>
                    </div>
                    <div id="listOfWorks">
                        <h1>OUR WORKS</h1>
                        <section>
                            {works.map((work, index) => {
                                return (
                                    <div id="works" key={index}>
                                        <section id="imgSection">
                                            <img src={work.image[0]} alt="" />
                                        </section>
                                        <section id="otherSec">
                                            <h3>PUNTER</h3>
                                            <div id="texts">
                                                {work.discription}
                                            </div>
                                            <div id="buttonSection">
                                                <button onClick={() => {
                                                    setItemIndex(index)
                                                    element.current.className = "fly-in"
                                                }}>View all</button>
                                            </div>
                                        </section>
                                    </div>
                                )
                            })}
                        </section>
                    </div>
                    <div id="closeParent" ref={element} style={{ display: itemIndex === null ? "none" : "block" }}>
                        <div id="showAdditionalInfo" >
                            <div id="close" onClick={close}>X</div>
                            <div id="bigImage">
                                {
                                    itemIndex === null ? "" : <img src={works[itemIndex].image[imageIndex]} alt="" />
                                }
                            </div>
                            <div id="smallerImage">
                                {
                                    itemIndex === null ? "" : works[itemIndex].image.map((img, index) => {
                                        return (
                                            <img onClick={() => {
                                                setImageIndex(index)
                                            }} src={img} alt="" key={index} />
                                        )
                                    }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div id="contacts">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Index