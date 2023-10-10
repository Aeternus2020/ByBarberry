import React from 'react';
import '../../styles/price.css';
import '../../styles/contacts.css';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import { defaultTheme } from './theme.js';


const Contacts = () => {
    const API_KEY = process.env.REACT_APP_API_KEY || "DEFAULT_API_KEY";

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: API_KEY,
    })

    const containerStyle = {
        width: "100%",
        height: '100%'
    };

    const center = {
        lat: 50.497137,
        lng: 30.768307,
    };

    const defaultOptions = {
        panControl: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: true,
        rotateControl: false,
        clickableIcons: false,
        keyboardShortCuts: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        fullscreenControl: false,
        styles: defaultTheme
    }

    const onLoad = (map: google.maps.Map | undefined) => {
    };    

    if (!isLoaded) {
        return <div>Error loading Google Maps</div>;
    }

    return (

        <section className='contacts' >
            <span className='section__title'>контакти</span>
            <div className="contacts_content">
                <div className="contacts-content-map">
                <GoogleMap zoom={15.6} center={center} mapContainerStyle={containerStyle}
                    onLoad={onLoad}
                    options={defaultOptions}
                >
                    <MarkerF position={center} />
                </GoogleMap>
                </div>
                <div className="contacts-content-address">
                    <div className='contacts_item1'><span className="contacts-content-address__span">М.Бровари</span><p>в.ВОЛОДИМИРА МОНОМАХА 5а</p></div>
                    <div className='contacts_item2'><span className="contacts-content-address__span">графік роботи</span><p>10:00 - 21:00</p><p>без вихідних</p></div>
                    <div className='contacts_item3'><span className="contacts-content-address__span">як до нас дійти?</span><p className="contacts-content-address_p">Quidem vitae vitae temporibus distinctio qui. Rem quidem quia quos et nihil ut. A qui magni sed earum quam aspernatur.</p></div>
                    <div className='contacts_item4'><span className="contacts-content-address__span">контакти</span><p>+380934567823</p><p>barbershopbarberry@gmail.com</p></div>
                    <div className="contacts_item5">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="30" fill="#9B8C8C" />
                            <g id="Main" clipPath="url(#clip0_0_1)">
                                <rect width="1920" height="7568" transform="translate(-1044 -7272)" fill="#272724" />
                                <rect id="Rectangle 32" x="-1044" y="-842" width="1920" height="1803" fill="#F0F0E6" />
                                <g id="Frame 23">
                                    <g id="Frame 22">
                                        <path id="Vector" d="M8.7 0H21.3C26.1 0 30 3.9 30 8.7V21.3C30 23.6074 29.0834 25.8203 27.4518 27.4518C25.8203 29.0834 23.6074 30 21.3 30H8.7C3.9 30 0 26.1 0 21.3V8.7C0 6.39262 0.916605 4.17974 2.54817 2.54817C4.17974 0.916605 6.39262 0 8.7 0ZM8.4 3C6.96783 3 5.59432 3.56893 4.58162 4.58162C3.56893 5.59432 3 6.96783 3 8.4V21.6C3 24.585 5.415 27 8.4 27H21.6C23.0322 27 24.4057 26.4311 25.4184 25.4184C26.4311 24.4057 27 23.0322 27 21.6V8.4C27 5.415 24.585 3 21.6 3H8.4ZM22.875 5.25C23.3723 5.25 23.8492 5.44754 24.2008 5.79917C24.5525 6.15081 24.75 6.62772 24.75 7.125C24.75 7.62228 24.5525 8.09919 24.2008 8.45082C23.8492 8.80246 23.3723 9 22.875 9C22.3777 9 21.9008 8.80246 21.5492 8.45082C21.1975 8.09919 21 7.62228 21 7.125C21 6.62772 21.1975 6.15081 21.5492 5.79917C21.9008 5.44754 22.3777 5.25 22.875 5.25ZM15 7.5C16.9891 7.5 18.8968 8.29018 20.3033 9.6967C21.7098 11.1032 22.5 13.0109 22.5 15C22.5 16.9891 21.7098 18.8968 20.3033 20.3033C18.8968 21.7098 16.9891 22.5 15 22.5C13.0109 22.5 11.1032 21.7098 9.6967 20.3033C8.29018 18.8968 7.5 16.9891 7.5 15C7.5 13.0109 8.29018 11.1032 9.6967 9.6967C11.1032 8.29018 13.0109 7.5 15 7.5ZM15 10.5C13.8065 10.5 12.6619 10.9741 11.818 11.818C10.9741 12.6619 10.5 13.8065 10.5 15C10.5 16.1935 10.9741 17.3381 11.818 18.182C12.6619 19.0259 13.8065 19.5 15 19.5C16.1935 19.5 17.3381 19.0259 18.182 18.182C19.0259 17.3381 19.5 16.1935 19.5 15C19.5 13.8065 19.0259 12.6619 18.182 11.818C17.3381 10.9741 16.1935 10.5 15 10.5Z" fill="#272724" />
                                    </g>
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_0_1">
                                    <rect width="1920" height="7568" fill="white" transform="translate(-1044 -7272)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <a target="_blank" href='https://instagram.com/by._barberry?igshid=MzRlODBiNWFlZA=='>by._barberry</a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contacts;