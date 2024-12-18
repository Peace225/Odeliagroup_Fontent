import { useEffect } from 'react';
import { IoMdCloseCircle } from "react-icons/io";

// Composant de bouton de fermeture
const CloseButton = ({ onClose }) => (
    <button 
        onClick={onClose}
        className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        aria-label="Fermer"
    >
        <IoMdCloseCircle size={36} className="mx-auto text-red-500" />
    </button>
);

export default function Modal({ open, onClose, children }) {
    // Gestion de la fermeture avec la touche Escape
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        // Attache l'événement
        document.addEventListener('keydown', handleKeyDown);

        // Nettoie l'événement lors du démontage du composant
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div 
            onClick={onClose}
            className={`fixed inset-0 flex justify-center items-center transition-colors
                ${open ? "visible bg-black/20" : "invisible"}`}
            aria-hidden={!open} // Gère l'accessibilité du modal
        >
            <div
                onClick={(e) => e.stopPropagation()} // Empêche la fermeture en cliquant à l'intérieur du modal
                className={`bg-white rounded-xl shadow p-6 transition-all duration-300 ease-in-out
                ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
                role="dialog" // Déclare que c'est une boîte de dialogue
                aria-labelledby="modalTitle" // L'attribut aria pour le titre du modal
            >
                <CloseButton onClose={onClose} />
                {children}
            </div>
        </div>
    );
}
