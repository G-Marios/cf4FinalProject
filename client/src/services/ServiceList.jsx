import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const serviceData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate weather',
        desc: 'Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et'
    },
    {
        imgUrl: guideImg,
        title: 'Best tour guide',
        desc: 'Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et'
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et'
    }
];

const ServiceList = () => {
    return (
        <>
            {serviceData.map((item, index) => (
                <Col
                    lg="3"
                    key={index}
                >
                    <ServiceCard item={item} />
                </Col>
            ))}
        </>
    );
};

export default ServiceList;
