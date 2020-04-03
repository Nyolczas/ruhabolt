import React from 'react';
import './homepage.styles.scss';

const HomePage  = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">SAPKÁK</h1>
                    <span className="subtitle">VÁSÁROLJ MOST</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">KABÁTOK</h1>
                    <span className="subtitle">VÁSÁROLJ MOST</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">TORNACIPŐK</h1>
                    <span className="subtitle">VÁSÁROLJ MOST</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">HÖLGYEK</h1>
                    <span className="subtitle">VÁSÁROLJ MOST</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">FÉRFIAK</h1>
                    <span className="subtitle">VÁSÁROLJ MOST</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;