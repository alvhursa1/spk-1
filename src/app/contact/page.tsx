import React from "react";
import ContactForm from "../../components/Mail/ContactForm"; 
import FterEnquire from "@/components/HeadFooter/FterEnquire"; 
import HderEnquire from "@/components/HeadFooter/HderEnquire";

const Contact = () => {
    return (
        <div>
            <HderEnquire />
            <ContactForm />
            <FterEnquire />
        </div>
    )
}

export default Contact