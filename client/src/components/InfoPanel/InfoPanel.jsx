import React from 'react';
import './InfoPanel.scss';

const InfoPanel = ({ infoText }) => {
  return (
    <div className='info-panel'>{infoText}</div>
  )
}

export { InfoPanel };