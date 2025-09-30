import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonNavigate = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact');
  };

  return <button onClick={goToContact}>Перейти до контактів</button>;
};

export default ButtonNavigate;
