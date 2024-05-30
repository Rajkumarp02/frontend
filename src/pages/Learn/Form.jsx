import { useState } from 'react';
import './Learn.css';
import axios from "axios"
import Razorpay from "razorpay-checkout"


const Form = () => {


    const [course,setCourse] = useState("")
    const handleSubmit =async (e)=>{
        e.preventDefault()

        const data= new FormData()

        data.append("name",document.getElementById("name").value)
        data.append("email",document.getElementById("email").value)
        data.append("phone",document.getElementById("phone").value)
        data.append("coursename",course)
try{
        const res = await axios.post("http://localhost:8000/api/v1/order",data,{
            headers: {
                'Content-Type': 'application/json'
              }
        })

  const rzp =new window.Razorpay({
    key: 'rzp_test_DqcYOTDOsAyoiv',
    amount: res.data.orderDetails.amount,
    currency: 'INR',
    name: 'Your Company Name',
    description: 'Course Payment',
    order_id: res.data.orderDetails.id,
    handler: function(response) {
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
    catch(error)
    {

        rzp1.on('payment.failed', function (response){
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



    const handleCourseChange =(e)=>{
        setCourse(e.target.value)
       }
       
    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-start p-md-5">
                <div className="col-12 col-md-12 col-lg-8 p-md-4 bg rounded-4 w-50 h-25">
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        
                        <h5 className="text-start text-dark">Full Name</h5>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter Your Name"
                            className="form-control"
                            id='name'
                        />
                    </div>
                    <div className="mb-3">
                        <h5 className="text-start text-dark">Email Address</h5>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter Your Email"
                            className="form-control"
                            id='email'
                        />
                    </div>
                    <div className="mb-3">
                        <h5 className="text-start text-dark">Phone Number</h5>
                        <input
                            name="phone"
                            type="tel"
                            placeholder="Enter Your Phone Number"
                            className="form-control"
                            id='phone'
                        />
                    </div>
                    <div className="mb-3">
                        <h5 className="text-start text-dark">Interested In :</h5>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="interest"
                                        id="fullStack"
                                        value='Full Stack Development'
                                        onChange={handleCourseChange}
                                    />
                                    <label
                                        className="form-check-label text-dark"
                                        htmlFor="fullStack"
                                    >
                                        Full Stack Development
                                    </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="interest"
                                        id="digitalMarketing"
                                        value='Digital Marketing'
                                        onChange={handleCourseChange}
                                    />
                                    <label
                                        className="form-check-label text-dark"
                                        htmlFor="digitalMarketing"
                                    >
                                        Digital Marketing
                                    </label>
                                </div>
                            </div>
                            <div className="col-6 mt-2">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="interest"
                                        id="uiUx"
                                        value='UI/UX Designing'
                                        onChange={handleCourseChange}
                                    />
                                    <label
                                        className="form-check-label text-dark"
                                        htmlFor="uiUx"
                                    >
                                        UI/UX Designing
                                    </label>
                                </div>
                            </div>
                            <div className="col-6 mt-2">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="interest"
                                        id="graphicDesign"
                                        value='Graphic Designning'
                                        onChange={handleCourseChange}
                                    />
                                    <label
                                        className="form-check-label text-dark"
                                        htmlFor="graphicDesign"
                                    >
                                        Graphic Designing
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex mt-5'>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <div className='mx-1'>
                        <label className="form-check-label text-2 fs-5 mx-2 mx-md-2" for="flexCheckDefault">
                        I agree to the Terms and Conditions 
                        </label>
                        </div>
                    </div>
                    <div className='text-center d-flex justify-content-center align-items-center mt-5'>
                         <button className='btn rounded-3 px-2 py-2 text-dark border border-1' color='#70BF29'style={{
                            background:"#70BF29"
                         }}>Submit Now</button>  
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
