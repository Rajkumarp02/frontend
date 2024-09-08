import './Learn.css';
import axios from "axios"
//import Razorpay from "razorpay-checkout"
import { useState } from 'react';

const Form = () => {
    const [course, setCourse] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData()

        data.append("name", document.getElementById("name").value)
        data.append("email", document.getElementById("email").value)
        data.append("phone", document.getElementById("phone").value)
        data.append("coursename", course)
        try {
            const res = await axios.post("https://hurryep-backends.onrender.com/api/v1/order", data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const rzp = new window.Razorpay({
                key: 'rzp_test_DqcYOTDOsAyoiv',
                amount: res.data.orderDetails.amount,
                currency: 'INR',
                name: 'Your Company Name',
                description: 'Course Payment',
                order_id: res.data.orderDetails.id,
                handler: function (response) {
                    alert(response.razorpay_payment_id);
                    alert(response.razorpay_order_id);
                    alert(response.razorpay_signature);
                    window.location.href = `/learnwithus`;
                },
                // callback_url: "http://localhost:8000/api/v1/paymentVerification",
                prefill: {
                    name: document.getElementById("name").value,
                    email: document.getElementById("email").value,
                    contact: document.getElementById("phone").value
                },
                notes: {
                    address: 'Your Address'
                },
                theme: {
                    color: '#3399cc'
                }
            });


            rzp.open();

        }
        catch (error) {

            rzp1.on('payment.failed', function (response) {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
            })
        };
    }



    const handleCourseChange = (e) => {
        setCourse(e.target.value)
    }

        return (
            <div className="container-fluid mt-5 p-md-5">
            <div className="row justify-content-start">
                <div className="col-12 col-md-12  col-lg-8 p-md-3 bg mt-2 rounded-4 mx-auto py-5">
                    <h2 className="text-center learn-head mb-4">Hurryep Technologies <br/> <span className='clasic'>"Learn With Us" </span>Program</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex bg-secondary justify-content-between align-items-center">
                            Website and App Development
                            <span className="badge bg-primary rounded-pill">New</span>
                        </li>
                        <li className="list-group-item d-flex bg-secondary justify-content-between align-items-center">
                            Digital Marketing
                            <span className="badge bg-primary rounded-pill">Popular</span>
                        </li>
                        <li className="list-group-item d-flex bg-secondary justify-content-between align-items-center">
                            UI/UX Graphic Design
                            <span className="badge bg-primary rounded-pill">Trending</span>
                        </li>
                    </ul>
                    <p className="text-center mt-4 fw-bold fs-5">We also offer internship and placement opportunities.</p>
                    <p className="text-center mt-3 fw-semibold" style={{color:"#70BF29"}}>#LearnWithUs #Hurryep #HurryepTech</p>
                    <div className='text-center d-flex justify-content-center align-items-center'>
                        <button className='button-64 px-2 py-3 fw-semibold fs-5'><a href='https://pages.razorpay.com/LearnWithUs' style={{textDecoration:"none",color:"whitesmoke"}}>Book Your Slot</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
