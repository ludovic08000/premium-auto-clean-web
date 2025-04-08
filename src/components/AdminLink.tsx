
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Composant qui crée un lien invisible vers la page admin
// qui s'affiche uniquement après un certain nombre de clics
const AdminLink: React.FC = () => {
  const [clicks, setClicks] = useState(0);
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const newClicks = clicks + 1;
    setClicks(newClicks);
    
    // Après 5 clics, rediriger vers la page admin
    if (newClicks >= 5) {
      navigate('/admin');
      setClicks(0);
      console.log("Navigation vers /admin");
    } else {
      console.log(`Clic ${newClicks}/5 sur AdminLink`);
    }
    
    // Réinitialiser après 3 secondes sans clic
    setTimeout(() => {
      setClicks(0);
    }, 3000);
  };

  return (
    <span 
      onClick={handleClick} 
      className="cursor-default select-none"
      title={clicks > 0 ? `${clicks}/5` : undefined}
    >
      &copy;
    </span>
  );
};

export default AdminLink;
