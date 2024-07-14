import { useState, useEffect, useRef } from "react";
import React from "react";
import { Items, ITEM_KEYS } from "./constant";

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

const MainDevices = () => {
    const panelWrapperRef = useRef(); 
    const isTabInitializedRef = useRef(false); 
    const [isScrollEnabled, setIsScrollEnabled] = useState(false); 
    const [isLargeScreen, setIsLargeScreen] = useState(getWindowSize()); 
    const [selectedTab, setSelectedTab] = useState(""); 
    const [totalEventWidths, setTotalEventWidths] = useState(0); 

    function getWindowSize() {
        const { innerWidth } = window;
        return innerWidth > 768;
    }

    useEffect(() => {
        function handleWindowResize() {
            setIsLargeScreen(getWindowSize());
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    useEffect(() => {
        if (!selectedTab && !isTabInitializedRef.current) {
            isTabInitializedRef.current = true;
            setSelectedTab(new URLSearchParams(location.search).get("tab") || "all");
        }
    }, []);

    const handleTabSelect = (event) => {
        setSelectedTab(event.target.value);
    };

    const handleEventSizeChange = (size) => {
        setTotalEventWidths(totalEventWidths + size);
    };

    useEffect(() => {
        const newHasScroll = totalEventWidths > panelWrapperRef.current.offsetWidth;
        if (newHasScroll !== isScrollEnabled) {
            setIsScrollEnabled(newHasScroll);
        }
    }, [totalEventWidths, selectedTab]);

    const handleScrollClick = () => {
        const scroller = panelWrapperRef.current.querySelector(
            ".section__panel:not(.section__panel_hidden)"
        );
        if (scroller) {
            scroller.scrollBy({
                left: 400,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="section main__devices">
            <div className="section__title">
                <h2 className="section__title-header">Избранные устройства</h2>
                {!isLargeScreen && (
                    <select className="section__select" defaultValue="all" onInput={handleTabSelect}>
                        {ITEM_KEYS.map((key) => (
                            <option key={key} value={key}>
                                {Items[key].title}
                            </option>
                        ))}
                    </select>
                )}
                {isLargeScreen && (
                    <ul role="tablist" className="section__tabs">
                        {ITEM_KEYS.map((key) => (
                            <li
                                key={key}
                                role="tab"
                                aria-selected={key === selectedTab ? "true" : "false"}
                                tabIndex={key === selectedTab ? "0" : undefined}
                                className={"section__tab" + (key === selectedTab ? " section__tab_active" : "")}
                                id={`tab_${key}`}
                                aria-controls={`panel_${key}`}
                                onClick={() => setSelectedTab(key)}
                            >
                                {Items[key].title}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="section__panel-wrapper" ref={panelWrapperRef}>
                <div
                    key={selectedTab}
                    role="tabpanel"
                    className={"section__panel"}
                    aria-hidden={"false"}
                    id={`panel_${selectedTab}`}
                    aria-labelledby={`tab_${selectedTab}`}
                >
                    <ul className="section__panel-list">
                        {Items[selectedTab] &&
                            Items[selectedTab].items.map((item, index) => (
                                <Event key={index} {...item} onSize={handleEventSizeChange} />
                            ))}
                    </ul>
                </div>

                {isScrollEnabled && (
                    <div className="section__arrow" onClick={handleScrollClick}></div>
                )}
            </div>
        </section>
    );
};

export default MainDevices;
