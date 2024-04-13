import React, {useState} from "react";
import "../css/ChatInterface.css";
import Navbar from "react-bootstrap/Navbar";


const ChatInterface = () => {
    const [department, setDepartment] = useState("Marketing");

    const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
    };

    return (<>
        <div className="main-container">
            <div className="nav-bar">
                <Navbar expand="lg" className="logo-main-page">
                    <Navbar.Brand href="#home">
                        <div className="logo-border">
                            <img className="logo-image" src={"/logo.jpg"} alt={"logo"}/>
                            <span className="logo-name">Aiworksquad</span>
                        </div>
                    </Navbar.Brand>
                    <div className="department-box">
                        <span className="department-name">Department: </span>
                        <select id="department-select" onChange={handleDepartmentChange}>
                            <option value="Marketing">Marketing</option>
                            <option value="Sales">Sales</option>
                            <option value="IT">IT</option>
                        </select>
                    </div>
                    <div className="profile"> <img alt="profile-icon" className="profile-icon" src={require('../icons/User_circle.png')}/>Nithin</div>
                </Navbar>
            </div>

            <div className="main-body">
                <aside className="side-box">
                    <div className="chat-history-box">
                        <button className="new-chat-button btn btn-primary" type="button">
                            + New Chat
                        </button>
                        <div className="history-button">
                            <span className="history-icon"> <img alt={"history icon"} src={require('../icons/History_20.png')} /> History </span>
                        </div>

                        <div className="previous-chat-one">
                            <div className="chat-1 chat-layout">
                                <img alt="messgae-icon" className="message-icon" src={require('../icons/message-square.png')}/>
                                New Chat
                                <img alt="edit-icon" className="edit-icon" src={require('../icons/edit_icon.png')}/>
                                <img alt="bin-icon" className="bin-icon" src={require('../icons/bin_icon.png')}/>
                            </div>
                            <div className="chat-2 chat-layout">
                                <img alt="messgae-icon" className="message-icon" src={require('../icons/message-square.png')}/>
                                What is marketing
                                <img alt="edit-icon" className="edit-icon" src={require('../icons/edit_icon.png')}/>
                                <img alt="bin-icon" className="bin-icon" src={require('../icons/bin_icon.png')}/>
                            </div>
                            <div className="chat-3 chat-layout">
                                <img alt="messgae-icon" className="message-icon" src={require('../icons/message-square.png')}/>
                                Give me a list of...
                                <img alt="edit-icon" className="edit-icon" src={require('../icons/edit_icon.png')}/>
                                <img alt="bin-icon" className="bin-icon" src={require('../icons/bin_icon.png')}/>
                            </div>
                        </div>
                    </div>

                    <div className="additional-options ">
                        <div className="upgrade-to-plus additional-options-layout">Upgrade to Plus</div>
                        <div className="updates-faqs additional-options-layout">Updates & FAQs</div>
                        <div className="terms-and-conditions additional-options-layout">Terms and Conditions</div>
                        <div className="privacy-policy additional-options-layout">Privacy Policy Page</div>
                    </div>
                </aside>

                <div className="chat-container">
                    <div className="chat-introduction">
                        <div className="introduce-heading">
                            Introduce yourself to AIWorkSquad
                        </div>
                        <div>Im Nithin. CEO of an IT startup company in India.
                            <span><img alt="edit-icon" className="chat-icon" src={require('../icons/Pen_60.png')}/> </span>
                        </div>
                    </div>

                    <div className="chat-interface">
                        <div className="chat-inputs">
                                <span className="chat-input-1">
                                    What is Marketing?
                                    <img alt="chat-icon" className="chat-icon"
                                         src={require('../icons/Seal_question_72.png')}/>
                                </span>
                        </div>
                        <div className="chat-outputs">
                            {/*<span className="material-symbols-outlined chat-icon">forum</span>*/}
                            <img alt="chat-icon" className="chat-icon" src={require('../icons/Chat_160.png')}/>
                            Marketing refers to the process of promoting and selling products or services to customers.
                            It involves researching customer needs and wants, developing products and services that
                            meet those needs, pricing products and services appropriately.creating marketing materials
                            to promote products and services, and distributing those materials through various channels
                            to reach potential customers.The ultimate goal of marketing is to generate interest and
                            increase sales for a business or organization.
                        </div>

                        <div className="chat-inputs">
                            <span className="chat-input-2">
                                Give me a list of top 5 digital marketing agencies near me who offers services like social
                                media marketing, content marketing and influencer marketing
                                <img alt="chat-icon" className="chat-icon"
                                     src={require('../icons/Seal_question_72.png')}/>
                            </span>
                        </div>


                        <div className="chat-outputs">
                            <img alt="chat-icon" className="chat-icon" src={require('../icons/Seal_question_71.png')}/>
                            <input className="user-input-box" type="text"
                                   placeholder={`Enter your ${department} query here`}/>
                            <img alt="send-icon" className="chat-icon send-icon"
                                 src={require('../icons/Paper_plane_right_10.png')}/>
                        </div>

                        <div className="chat-instruction">
                            Type your next question above or select one from the related questions section
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </>);
};

export default ChatInterface;