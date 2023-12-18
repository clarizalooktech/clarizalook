import Link from './Link';
import Heading from './Heading';
import image from '../assets/images/about-img.jpg';
import './About.css';

const About = () => {
    return (
        <section className='about section-padding' id="about">
            <div className='container'>
                <Heading heading='About Me' subheading='Get To Know' />
                <div className='about__content'>
                    <div className='about__col about__col--image'>
                        <img src={image} alt='About Cleariza Look' />
                    </div>
                    <div className='about__col about__col--desc'>
                        <p>As a developer, my passion continues to grow every day as I embark on my lifelong journey of learning. I am eager to take part in and contribute to building something that adds value to the end users.</p>
                        <p></p>
                        <p>In my previous experience as a senior marketing consultant, I relished the opportunity to identify root problems, build great relationships with people, and develop technical aspects of my current role. I possess an attention to detail, the ability to work with different teams and people, and a mindset geared towards developing scalable processes. I hope to bring my experiences, problem-solving skills, and positive energy to the start of my new career as a devops engineer and developer.</p>
                        <p></p>
                        <p>Besides work, I am a beach bum who loves prestine beaches, sunsets, reggae music, food and cocktails as well as a travel & culture enthusiast (a person who is curious, appreciates diversity, and loves learning new things).😸</p>
                        <div className='about__col-button'>
                            <Link label="Let's Connect" theme="primary" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
