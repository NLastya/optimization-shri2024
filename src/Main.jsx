import { useState, useEffect, useRef } from "react";
import React from "react";
import { Items, Events, Events2, ITEM_KEYS } from "./constant";
import MainDevices from './MainDevices.jsx'
 
const Event = (props) => {
    const ref = useRef();

    const { onSize } = props;

    useEffect(() => {
        if (onSize) {
            onSize(ref.current.offsetWidth);
        }
    }, [onSize]);

    return (
        <li ref={ref} className={"event" + (props.slim ? " event_slim" : "")}>
            <button className="event__button">
                <span
                    className={`event__icon event__icon_${props.icon}`}
                    role="img"
                    aria-label={props.iconLabel}
                ></span>
                <h4 className="event__title">{props.title}</h4>
                {props.subtitle && <span className="event__subtitle">{props.subtitle}</span>}
            </button>
        </li>
    );
};


const Main = () => {
    return (
        <main className="main">
            <section className="section main__general">
                <h2 className="section__title section__title-header section__main-title">Главное</h2>
                <div className="hero-dashboard">
                    <div className="hero-dashboard__primary">
                        <h3 className="hero-dashboard__title">Привет, Геннадий!</h3>
                        <p className="hero-dashboard__subtitle">Двери и окна закрыты, сигнализация включена.</p>
                        <ul className="hero-dashboard__info">
                            <li className="hero-dashboard__item">
                                <div className="hero-dashboard__item-title">Дома</div>
                                <div className="hero-dashboard__item-details">
                                    +23
                                    <span className="a11y-hidden">°</span>
                                </div>
                            </li>
                            <li className="hero-dashboard__item">
                                <div className="hero-dashboard__item-title">За окном</div>
                                <div className="hero-dashboard__item-details">
                                    +19
                                    <span className="a11y-hidden">°</span>
                                    <div
                                        className="hero-dashboard__icon hero-dashboard__icon_rain"
                                        role="img"
                                        aria-label="Дождь"
                                    ></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <ul className="hero-dashboard__schedule">
                    {Events.map((event, index) => (
                        <Event key={index} {...event} />))}
                    </ul>
                </div>
            </section>

            <section className="section main__scripts">
                <h2 className="section__title section__title-header">Избранные сценарии</h2>

                <ul className="event-grid">
                    {Events2.map((event, index) => (
                        <Event key={index} {...event}></Event>))}
                </ul>
            </section>

            <MainDevices />
        </main>
    );
};

export default Main;
