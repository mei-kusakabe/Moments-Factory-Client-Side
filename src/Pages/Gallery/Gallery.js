import React from 'react';
import './Gallery.css'
import useTitle from '../hooks/useTitle';
const Gallery = () => {
    useTitle('Gallery')
    return (
        <div className='gallery py-5'>
            <h2 className='fw-bold'> Photo Gallery</h2>
            <h2 className='mb-5'>Here is a glimpse of my work...</h2>

            <div className="row mx-5">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src="https://imageio.forbes.com/specials-images/imageserve/5dd6e3cfe0af7b0006b1f039/nature/960x0.jpg?format=jpg&width=960"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />

                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Wintry Mountain Landscape"
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5890a28b17bffc1540fca716/1650046412338-JGUO9I79D74Z9BXCV409/kentweddingphotographer-1104960.jpg"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Mountains in the Clouds"
                    />

                    <img
                        src="https://scontent.fcgp2-1.fna.fbcdn.net/v/t1.6435-9/120407489_2556784501280252_2079643370138001257_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG8N5035Q6fVt-W34A2_BQLKTgXoVYhFcApOBehViEVwIAWFandiNI4IWZ-iWOg1ZUHW9SwqNe3h03hOWqJ1jje&_nc_ohc=NzkPsdej5awAX93bWsI&_nc_ht=scontent.fcgp2-1.fna&oh=00_AfAFwUgbfnKX5C3OcXDfxbpd-N8Xe6-6kBwDlbNJat6iqg&oe=639471BE"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5781d27e893fc04f8171760f/1468127649757-1KDY0SSUWI0AR3RN4Z3S/Nicole_Diliana-Florentin03.jpg?format=1500w"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Waves at Sea"
                    />

                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Yosemite National Park"
                    />
                </div>
            </div>

        </div>
    );
};

export default Gallery;