import { IoMdCloseCircle } from "react-icons/io";

export default function Modal({ open, onClose, children }) {
    return (
        // Backdrop
        <div
            onClick={onClose}
            className={`fixed inset-0 flex justify-center items-center transition-colors
                ${open ? "visible bg-black/50" : "invisible"}`}
            aria-hidden={!open} // Accessibility
        >
            {/* Modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300
                ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
                aria-live="assertive" // To alert screen readers when the modal appears
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 p-1 rounded-lg
                    text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
                    aria-label="Close Modal" // Accessibility label for the button
                >
                    <IoMdCloseCircle size={36} className="mx-auto text-red-500" />
                </button>
                {children}
            </div>
        </div>
    );
}
