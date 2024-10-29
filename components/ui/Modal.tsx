
import { useState } from "react";

export function Modal () {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const openModal: () => void = () => setIsOpen(true)
    const closeModal: () => void = () => setIsOpen(false)


    return (
        <>
                {/* Bouton pour ouvrir le modal */}
                <button onClick={openModal} className="modal-button bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2 mt-2 ">
                    Explications ❔
                </button>

                {/* Le Modal */}
                {isOpen && (
                    <div
                        className="modal"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) closeModal();
                        }}
                        style={{
                            display: "block",
                            position: "fixed",
                            zIndex: 1,
                            paddingTop: "100px",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%",
                            overflow: "auto",
                            backgroundColor: "rgba(0,0,0,0.4)",
                        }}
                    >
                        <div
                            className="modal-content"
                            style={{
                                backgroundColor: "#fefefe",
                                margin: "auto",
                                padding: "20px",
                                border: "1px solid #888",
                                width: "80%",
                            }}
                        >
                            <span
                                className="close"
                                onClick={closeModal}
                                style={{
                                    color: "#aaaaaa",
                                    float: "right",
                                    fontSize: "28px",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                }}
                            >
                                &times;
                            </span>
                            <p>Some text in the Modal...</p>
                        </div>
                    </div>
                )}
        </>
    )
}