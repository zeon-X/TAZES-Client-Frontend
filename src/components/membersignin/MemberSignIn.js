import Axios from 'axios';
import React, { useState } from 'react';
import '../membersignup/MemberSignup.css';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

export const MemberSignIn = () => {


    const [roll, setRoll] = useState("");
    const [phone, setPhone] = useState("");



    const navigate = useNavigate();
    function redirectToSignUp(){
        navigate(`/api/member/signup`);
    }


    function signInRequest() {

        Axios.post('http://localhost:3001/api/member/signin',
            {
                rollId: roll,
                phone: phone,
            }).then((res) => {
                // console.log(res.data.members.rollId);
                const rollId = res.data.members.rollId;
                navigate(`/api/member/showProfile/${rollId}`);



            }).catch((err) => {
                // console.log("error : ");
                // console.log(err.response);
                if (err.response.status === 400) {
                    swal("Membership on Review..!", "wait untill you are Reviewed by the Admin", "warning");
                }
                else if (err.response.status === 401) {
                    swal("Opps..!", "User not Found!", "error");
                }
            })




    }


    return (
        <div>
            <main className="w-100 dvf mt-3 ">



                <section id="Login-apper" className="dvf" style={{ width: "95%", height: "95vh" }}>

                    <div className="dhf">

                        <div className="row w-sm-75 w-lg-50 mt-3 ">
                            <h2 className="p-0">Sign in to <span>TAZES-RUET</span></h2>
                            <p className="mb-5 p-0">Enter your details below (Student)</p>




                            {/* ||||||||| FORM STARTS HERE |||||||||| */}



                            <div className="form-floating mb-3 p-0">
                                <input type="text" className="form-control"
                                    placeholder="name"
                                    onChange={(event) => {
                                        setRoll(event.target.value)
                                    }}

                                />
                                <label for="floatingInput"> Roll No</label>
                            </div>



                            <div className="form-floating mb-3 p-0">
                                <input type="text" className="form-control"
                                    onChange={(event) => {
                                        setPhone(event.target.value)
                                    }}
                                    placeholder="name" />
                                <label for="floatingInput"> Phone</label>
                            </div>



                            <button type="button" className="btn mt-3" onClick={signInRequest}>Sign in</button>

                            {/* ||||||||| FORM ENDS HERE |||||||||| */}


                            <p className="text-center mt-3">Don’t have an account? <a onClick={redirectToSignUp} style={{ color: "green" }}>Sign Up</a>
                            </p>


                            {/* <p className="text-black text-center"
                                style={{ fontSize: "13px", marginTop: "50px" }}>
                                Copyright © 2022 Aleeha-Tech. All Rights Reserved.
                            </p> */}

                        </div>

                    </div>



                </section>


            </main>
        </div>
    );
}

