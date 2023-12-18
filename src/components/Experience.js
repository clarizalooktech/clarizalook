import { BsFillPatchCheckFill } from "react-icons/bs";
import Heading from './Heading';
import './Experience.css';

const Experience = () => {
    const list = [
        {
            heading: 'Web & App Development',
            details: [
                {
                    name: 'Node JS',
                    detail: 'Experienced'
                },
                {
                    name: 'Python',
                    detail: 'Highly Experienced'
                },
                {
                    name: 'Typescript',
                    detail: 'Highly Experienced'
                },
                {
                    name: 'PHP',
                    detail: 'Knowlegeable'
                },
                {
                    name: 'HTML',
                    detail: 'Experienced'
                },
                {
                    name: 'JavaScript',
                    detail: 'Experienced'
                },
                {
                    name: 'CSS',
                    detail: 'Experienced'
                },
                {
                    name: 'Bootstrap',
                    detail: 'Experienced'
                },
                {
                    name: 'React',
                    detail: 'Experienced'
                }, 
                {
                    name: 'WordPress',
                    detail: 'Experienced'
                }
            ]
        },
        {
            heading: 'DevOps',
            details: [
                {
                    name: 'Linux System Administration',
                    detail: 'Highly Experienced'
                },
                {
                    name: 'Bash Programming',
                    detail: 'Highly Experienced'
                },
                {
                    name: 'Docker Images, Containers',
                    detail: 'Highly Experienced'
                },
                {
                    name: 'Kubernetes',
                    detail: 'Experienced'
                },
                {
                    name: 'Helm',
                    detail: 'Experienced'
                },
                {
                    name: 'Continuous Integration, Continuous Deployment',
                    detail: 'Highly Experienced'
                },
                {
                    name: 'Serverless: Lambda, Fargate ECS',
                    detail: 'Highly Experienced'
                },

            ]
        },
        {
            heading: 'Database',
            details: [
                {
                    name: 'PostGreSql',
                    detail: 'Highly Experienced'
                },
                {
                    name: 'MySql Servers',
                    detail: 'Experienced'
                },
                {
                    name: 'NoSQL: DynamoDB, ElasticCashe, MongoDB',
                    detail: 'Experienced'
                },
            ]
        }
    ];

    return (
        <section className='experience section-padding' id="experience">
            <div className='container'>
                <Heading heading='My Experience' subheading='Get To Know'/>
                <div className='experience__content'>
                    {list.map((item, key) => (
                    <div key={key} className='experience__col'>
                        <Heading h='3' heading={item.heading} size='medium'/>
                        <ul className="experience__list">
                            {item.details.map((value, subkey) => (
                            <li key={subkey} className="experience__item">
                                <span className="experience__item-icon">
                                    <BsFillPatchCheckFill/>
                                </span>
                                <p>
                                    {value.name}
                                    <span>{value.detail}</span>
                                </p>
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

export default Experience;
