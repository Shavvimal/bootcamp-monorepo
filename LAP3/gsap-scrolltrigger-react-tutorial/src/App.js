import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import logo from './images/img_react-gsap.png';
import './App.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const App = () => {

  const [background, setBackground] = useState('#262626');
  const headerRef = useRef(null);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  const toggleBackground = () => {
    const color = background !== '#262626' ? '#262626' : '#1b4943';
    setBackground(color);
  }

  useEffect(() => {

    gsap.to(headerRef.current, { backgroundColor: background, duration: 1,  ease: 'none' });

  }, [background]);

  useEffect(() => {
    
    gsap.from(headerRef.current, {
      autoAlpha: 0, 
      ease: 'none',
      delay: 1
    });

    revealRefs.current.forEach((el, index) => {
        
      gsap.fromTo(el, {
        autoAlpha: 0
      }, {
        duration: 1, 
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

    });

  }, []);

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
    }
    console.log(revealRefs.current = []);
  };



  let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", {transformOrigin: "top center", force3D: true});




  return (
    <body className="App">
     <img width="600" height="600" src="https://picsum.photos/600/600?random=1" alt="" class="skewElem"/>
<img width="600" height="600" src="https://picsum.photos/600/600?random=2" alt="" class="skewElem"/>
<img width="600" height="600" src="https://picsum.photos/600/600?random=3" alt="" class="skewElem"/>
<img width="600" height="600" src="https://picsum.photos/600/600?random=4" alt="" class="skewElem"/>
<img width="600" height="600" src="https://picsum.photos/600/600?random=5" alt="" class="skewElem"/>
<img width="600" height="600" src="https://picsum.photos/600/600?random=6" alt="" class="skewElem"/>
<img width="600" height="600" src="https://picsum.photos/600/600?random=7" alt="" class="skewElem"/>
<img width="600" height="600" src="https://picsum.photos/600/600?random=8" alt="" class="skewElem"/>
<img width="600" height="600" src="https://picsum.photos/600/600?random=9" alt="" class="skewElem"/>
<img width="600" height="600" src="https://picsum.photos/600/600?random=10" alt="" class="skewElem"/>


    </body>
  );
}

export default App;
