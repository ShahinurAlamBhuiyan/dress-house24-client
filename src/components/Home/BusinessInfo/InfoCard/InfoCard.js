import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css'

const infoCard = ({ data: { title, icon, background } }) => {
    return (
        <div className='info-man'>
            <div className='info-card mb-3'>
                <div className={`d-flex justify-content-center align-items-center info-container info-${background}`}>
                    <div className='mr-3'>
                        <FontAwesomeIcon style={{ width: '40px' }} className='info-icon' icon={icon}></FontAwesomeIcon>
                    </div>
                    <div>
                        <strong>{title}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default infoCard;