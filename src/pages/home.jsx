import React from 'react'
import FrequentlyQuestions from '../components/homePage/frequentlyQuestions';
import SectionContact from '../components/homePage/sectionContact';
import SectionDocument from '../components/homePage/sectionDocument';
import BannerDocument from '../components/homePage/bannerDocuments';
import SectionVideo from '../components/homePage/sectionVideo';
import SliderHeader from '../components/homePage/sliderHeader';
const Home = () => {
    return (
        <div >
            <SliderHeader></SliderHeader>
            <SectionVideo></SectionVideo>
            <BannerDocument></BannerDocument>
            <SectionDocument></SectionDocument>
            <FrequentlyQuestions></FrequentlyQuestions>
            <SectionContact></SectionContact>
        </div>
    )
}

export default Home;