import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free cocktails',
        info:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur sint exercitationem',
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur sint exercitationem',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free shuttle',
        info:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur sint exercitationem',
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur sint exercitationem',
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((service, index) => (
            <article key={index} className="service">
              <span>{service.icon}</span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}
