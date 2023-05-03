import React, { useEffect, useRef } from 'react';
import './style.css'
import { } from "./assets/animate.js"
import mainBubble from './assets/Bubble_main.svg'
import myFace2 from './assets/face.svg'
import words from './assets/Portfolio-Words1.svg'
import CV from './assets/CV.pdf'
import download from './assets/download.svg'
import {
    bubble1Anim,
    bubble2Anim,
    bubble3Anim,
    bubble4Anim,
    bubble1AnimWords
} from "./assets/animate.js"


const AboutMe = () => {



    let bubble1Anim1 = useRef(null)

    useEffect(() => {
        bubble1Anim(bubble1Anim1)
    }, [])

    let bubble2Anim1 = useRef(null)

    useEffect(() => {
        bubble2Anim(bubble2Anim1)
    }, [])




    let bubble3Anim1 = useRef(null)

    useEffect(() => {
        bubble3Anim(bubble3Anim1)
    }, [])

    let bubble4Anim1 = useRef(null)

    useEffect(() => {
        bubble4Anim(bubble4Anim1)
    }, [])

    let bubble4Anim1Words = useRef(null)

    useEffect(() => {
        bubble1AnimWords(bubble4Anim1Words)
    }, [])


    return (

        <div id="AboutSect" class="raleway mt-12">

            <div class="w-full flex flex-col lg:flex-row flex-wrap">
                {/*  <!-- Section Left --> */}
                <div class="w-full pt-10 bg-red lg:w-2/3 flex flex-col">

                    <div id="left" class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-44">
                        <h1 class="bodyheadercol text-left text-4xl font-extrabold">About Me</h1>
                        <h2 class="text-left text-2xl py-3 italic" > I value Overcoming Challenges, Continuously Learning & Creating  </h2>
                        <p class="text-left text-xl"> I decided to pursue a career in software development (having graduated with a First Class Honours in Chemical Engineering) after I tried my hand at using Python while training my own StyleGAN to artificially generate artwork. As someone who loves to paint, I value creativity and attention-to-detail in everything I do, and Software engineering is the perfect creative outlet that values and leverages these skills, but also the analytical, interpersonal, technical and problem-solving skills I have honed during my time as an engineer. In the future I aspire to work with the latest tech, helping to innovate and create high-quality and revolutionary apps, projects, products and services. Aside from programming and painting, I love to dance, hit the gym, complete obstacle courses, and manage my investment portfolio.
                            <br></br><br></br>
                            Currently, I am training with futureproof to upskill as a Full Stack Developer in order to kick-start my career in Software Engineering. I’m excited to be transitioning from coding as a hobby to becoming a valuable part of a team that builds innovative software products to meet user needs.

                        </p>


                    </div>
                </div>
                {/* <!-- Section Right--> */}
                <div class="lg:w-1/3 w-full py-20 mt-14 lg:my-auto overflow-hidden">


                    <div class="relative mx-auto w-96 h-full">

                        <div className="bubble3Anim1" ref={(el) => (bubble3Anim1 = el)}>
                            <img id="bubble3mainFace" class="w-full h-full  absolute " src={mainBubble} alt="mainBubble1" />
                            <img id="placeholderBubble3" class="h-1 " src={download} alt="mainBubble1" />
                        </div>

                        <div className="bubble4Anim1" ref={(el) => (bubble4Anim1 = el)}>
                            <img id="bubble4mainFace" class="w-full h-full  absolute" src={mainBubble} alt="mainBubble1" />
                            <img id="placeholderBubble4" class="h-1" src={download} />
                        </div>

                        <div className="bubble1Anim1" ref={(el) => (bubble1Anim1 = el)}>
                            <img id="bubble2mainFace" class="absolute w-full h-full  " src={mainBubble} alt="mainBubble2" />
                            <img id="myFace" class="rounded-full border myFace" src={myFace2} alt="MyFace" />

                            <div className="bubble4Anim1Words" ref={(el) => (bubble4Anim1Words = el)} >

                                <img id="words" class="rounded-full border myFace absolute" src={words} alt="MyFace" />

                            </div>

                        </div>

                        <div className="bubble2Anim1" ref={(el) => (bubble2Anim1 = el)} id="downloadParent">
                            <img id="bubble1mainFace" class="w-full h-full  absolute " src={mainBubble} alt="mainBubble1" />
                            <a href={CV} download>

                                {/* <img id="downloadFace" class="  h-1" src={download} style={{ cursor: "pointer" }} alt="mainBubble1" />  */}

                                <svg id='downloadFace' fill="white" class="w-1 h-1" viewBox="0 0 512 512" >
                                    <path d="M339.093,246.464c-3.627-7.232-11.008-11.797-19.093-11.797h-42.667V21.333C277.333,9.557,267.797,0,256,0 s-21.333,9.557-21.333,21.333v213.333H192c-8.085,0-15.467,4.565-19.093,11.797c-3.584,7.232-2.816,15.872,2.027,22.336l64,85.333 c0.277,0.363,0.704,0.491,1.003,0.832c1.408,1.664,3.072,2.944,4.928,4.117c0.768,0.469,1.365,1.088,2.197,1.472 c2.731,1.28,5.717,2.112,8.939,2.112s6.208-0.832,8.96-2.112c0.811-0.384,1.429-1.003,2.176-1.472 c1.856-1.173,3.52-2.453,4.928-4.117c0.277-0.341,0.725-0.469,1.003-0.832l64-85.333 C341.931,262.336,342.699,253.696,339.093,246.464z" />
                                    <path d="M490.667,320c-11.797,0-21.333,9.557-21.333,21.333v64c0,35.285-28.715,64-64,64H106.667c-35.285,0-64-28.715-64-64v-64 c0-11.776-9.536-21.333-21.333-21.333C9.536,320,0,329.557,0,341.333v64C0,464.149,47.851,512,106.667,512h298.667 C464.149,512,512,464.149,512,405.333v-64C512,329.557,502.464,320,490.667,320z" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>




            </div></div>

    )


}

export default AboutMe;
