import Modal from 'react-modal';
import { useState } from "react"
import { GrClose } from "react-icons/gr";


function Sidebar(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
 

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen)
    }

    return (
        <>

            <aside className="sidebar">
                <div className="logo">
                    <a href="https://brandcolors.net/"> Brand<b>Colors</b>  </a>
                </div>

                <div className="description">Clone of BrandColors.</div>

                <nav className="menu">
                    <ul>
                        <li>
                            <a onClick={toggleModal}>About Brand Colors</a>
                        </li>
                    </ul>
                </nav>
            </aside>


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                className="about-modal"
                overlayClassName="about-modal-overlay">

                <button className="modal-close-btn" onClick={toggleModal} > <GrClose></GrClose> </button>
                <h3>Brand Colors</h3>
                <p>Clone of BrandColors</p>
            </Modal>

        </>
    )
}

export default Sidebar
