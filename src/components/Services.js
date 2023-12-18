import Heading from './Heading';
import './Services.css';

const Services = () => {
    const list = [
        {
            heading: 'DevOps',
            details: [
                'Infrastructure as Code (IaC) implementation and management',
                'Continuous Integration/Continuous Deployment (CI/CD) setup and improvements',
                'Cloud services and migration assistance and support',
                'Database administration',
                'Containerization and orchestration implementation to improve scalability and resource utilization',
                'Monitoring and logging set up and management',
                'Infra security automation',
                'Consultation and training'
            ]
        },
        {
            heading: 'Web Development',
            details: [
                'Web app development using Node.js',
                'Full-Stack Development: Combine Node.js with front-end technologies (React)',
                'Serverless architecture development (lambda, fargate)',
                'Wordpress site development',
            ]
        },
        {
            heading: 'Google Ads Consulting & SEO Consulting',
            details: [
                'Keyword Research and Strategy',
                'Ad Campaign Setup',
                'Budget Management and forecasting',
                'Ad Extensions implemention',
                'Google Shopping, Mobile App pay per click, Youtube Ads management',
                'Ads Performance Analysis and reporting'
            ]
        }
    ];

    return (
        <section className='services section-padding' id="services">
            <div className='container'>
                <Heading heading='Services' subheading='What I Offer'/>
                <div className='services__content'>
                    {list.map((item, key) => (
                        <div key={key} className='services__col'>
                            <Heading h='3' heading={item.heading} size='small'/>
                            <ul className="services__list">
                                {item.details.map((detail, subkey) => (
                                <li key={subkey} className="services__item">
                                    {detail}
                                </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;
