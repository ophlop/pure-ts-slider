const createElem = require("./createElem.ts");
// this is where we'll put our slider
const renderDiv = document.getElementById("slider")!;
// variables for slider movement
let setPosition = 0;
//interface for our Class Slider
interface ISlider {
    delay: number,
    width: number,
    height: number,
    slides: {
        color: string,
        text: string
    }[],
};
// сreate a slider class
class Slider implements ISlider {
    delay: number;
    width: number;
    height: number;
    slides: {
        color: string,
        text: string
    }[]
    
    constructor(options: ISlider) {
        this.delay = options.delay || 2500,
        this.width = options.width || 750,
        this.height = options.height || 400,
        this.slides = options.slides
    };

    // function that draws our slider
    render () {
        // create parent div that will contain our slides
        const sliderDiv = createElem('div' ,'js-slider')
        sliderDiv.style.cssText = `width: ${this.width}px; height: ${this.height}px`;
    
        // slider track for moving our slides
        const sliderTrack = createElem('div' ,'js-slider__slideTrack')

        // creating our slides
        for (let i = 0; i < this.slides.length; i++) {
            // create the slide itself
            const slide = createElem('div' ,'js-slider__slide')
            slide.style.backgroundColor = `${this.slides[i].color}`
            
            // create slide text
            const slideText = createElem('h1')
            slideText.innerHTML = `${this.slides[i].text}`
            
            // render our slides into the parent div        
            slide.appendChild(slideText)
            sliderTrack.appendChild(slide)
        }

        sliderDiv.appendChild(sliderTrack)
        // render the end result
        renderDiv.appendChild(sliderDiv);
    };
    // the function responsible for scrolling of slides
    swipe (width: number) {
        let trackDiv = document.querySelector<HTMLElement>(".js-slider__slideTrack")!;
        setPosition += width;
        trackDiv.style.left = '-' + setPosition + 'px'; 
    };
};

module.exports = Slider;