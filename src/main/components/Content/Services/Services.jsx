import React from 'react';

import { faWifi, faCoffee, faPaw, faCar, faUtensils, faSwimmingPool } from '@fortawesome/free-solid-svg-icons';
import './Services.scss';

const Services = () => {
  const services = [
    {
      icon: faWifi,
      title: 'Бесплатный Wi-Fi',
      description: 'Доступ к бесплатному Wi-Fi на всей территории отеля',
    },
    {
      icon: faCoffee,
      title: 'Кофе и чай',
      description: 'Бесплатно предоставляем кофе и чай в номерах и в холле',
    },
    {
      icon: 'fa-paw',
      title: 'Домашние животные',
      description: 'Домашние животные допускаются на территорию отеля',
    },
    {
      icon: 'fa-car',
      title: 'Парковка',
      description: 'Возможность бронирования парковки для гостей отеля',
    },
    {
      icon: 'fa-utensils',
      title: 'Ресторан',
      description: 'Уютный ресторан с разнообразным меню',
    },
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Услуги</h2>
        <div className="services-list">
          {services.map(service => (
            <div className="service" key={service.title}>
              <i className={`service__icon fas ${service.icon}`}></i>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
