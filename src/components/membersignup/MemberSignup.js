import Axios from 'axios';
import React, { useState } from 'react';
import './MemberSignup.css';
import '../../App.css';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

export const MemberSignup = () => {

    const [roll, setRoll] = useState("");
    const [dept, setDept] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [par, setPar] = useState("");
    const [school, setSchool] = useState("");
    const [college, setCollege] = useState("");
    const [pat, setPat] = useState("");
    const [upazilla, setUpazilla] = useState("");

    const navigate = useNavigate();

    function uploadData() {

        Axios.post('http://localhost:3001/api/member/signup', {
            rollId: roll,
            Dept: dept,
            Name: name,
            phone: phone,
            presentAddress: par,
            parmanentAddress: pat,
            school: school,
            college: college,
            upazilla: upazilla,
        }).then((res) => {
            // console.log(res);
            if (res.status === 201) {
                swal("Success!", "Member Request Sent!", "success").then(()=>{
                    
                    window.location.reload();
                    
                });
                
            }
        }).catch((err) => {
            if (err.response.status === 400) {
                swal("Opps..!", "Member Alradey Ragistered!", "error");
            }
        })

    }

    function redirectToSignIn() {
        navigate(`/api/member/signin`);
    }

    return (
        <div>
            <main className="w-100 dvf mt-3 ">



                <section id="Login-apper" className="dhf" style={{ width: "95%" }}>

                    <div className="row  g-0 w-100 text-secondary" style={{ height: "95vh" }}>

                        <div id="login-page-wc-img" className="col-sm-0 col-lg-5 dhf px-5 mb-3">
                            <div id="sign-in-pg-img" className="dvf shadow h-100" style={{ borderRadius: "30px" }}>
                                <h1 className="px-3 mx-5 py-5 text-black "
                                    style={{ fontWeight: "600", borderRadius: "30px", fontSize: "60px", backgroundColor: "rgba(255, 255, 255, 0.911)" }}>
                                    Welcom-To TAZES | RUET...</h1>
                            </div>
                        </div>




                        <div className="col-12 col-lg-7">
                            <div className="w-100 p-lg-4 d-flex flex-column align-items-center">

                                <div className="row w-75 mt-3 ">
                                    <h2 className="p-0">Sign up to <span>TAZES-RUET</span></h2>
                                    <p className="mb-5 p-0">Enter your details below (Student)</p>




                                    {/* ||||||||| FORM STARTS HERE |||||||||| */}

                                    <div className="row p-0 m-0 mb-sm">
                                        <div className="col-sm-12 col-lg-6 ps-0 pe-sm-0 pe-lg-2">
                                            <div className="form-floating mb-3 p-0">
                                                <input type="text" className="form-control"
                                                    placeholder="name"
                                                    onChange={(event) => {
                                                        setRoll(event.target.value)
                                                    }}

                                                />
                                                <label for="floatingInput"> Unique-ID (Roll No)</label>
                                            </div>


                                        </div>
                                        <div className="col-sm-12 col-lg-6 pe-0 ps-sm-0 ps-sm-1">
                                            <div className="form-floating">
                                                <select className="form-select" id="dept" aria-label="Floating label select example"
                                                    onChange={(event) => {
                                                        setDept(event.target.value)
                                                    }}
                                                >

                                                    <option selected>Choose...</option>
                                                    <option value="EEE">EEE</option>
                                                    <option value="CSE">CSE</option>
                                                    <option value="ECE">ECE</option>
                                                    <option value="ETE">ETE</option>
                                                    <option value="CE">CE</option>
                                                    <option value="Arch">Arch</option>
                                                    <option value="URP">URP</option>
                                                    <option value="BECM">BECM</option>
                                                    <option value="IPE">IPE</option>
                                                    <option value="GCE">GCE</option>
                                                    <option value="MTE">MTE</option>
                                                    <option value="MSE">MSE</option>
                                                    <option value="ME">ME</option>
                                                    <option value="CFPE">CFPE</option>
                                                </select>
                                                <label for="floatingSelect">Select Department</label>
                                            </div>



                                        </div>
                                    </div>


                                    <div className="form-floating mb-3 p-0">
                                        <input type="text" className="form-control"
                                            onChange={(event) => {
                                                setName(event.target.value)
                                            }}
                                            placeholder="name" />
                                        <label for="floatingInput"> Name</label>
                                    </div>

                                    <div className="form-floating mb-3 p-0">
                                        <input type="text" className="form-control"
                                            onChange={(event) => {
                                                setPhone(event.target.value)
                                            }}
                                            placeholder="name" />
                                        <label for="floatingInput"> Phone</label>
                                    </div>


                                    <div className="form-floating mb-3 p-0">
                                        <input type="text" className="form-control"
                                            onChange={(event) => {
                                                setPar(event.target.value)
                                            }}
                                            placeholder="name" />
                                        <label for="floatingInput"> Present Address (Rajshahi)</label>
                                    </div>


                                    <div className="form-floating mb-3 p-0">
                                        <input type="text" className="form-control"
                                            onChange={(event) => {
                                                setSchool(event.target.value)
                                            }}
                                            placeholder="name" />
                                        <label for="floatingInput"> School</label>
                                    </div>

                                    <div className="form-floating mb-3 p-0">
                                        <input type="text" className="form-control"
                                            onChange={(event) => {
                                                setCollege(event.target.value)
                                            }}
                                            placeholder="name" />
                                        <label for="floatingInput"> College</label>
                                    </div>

                                    <div className="form-floating mb-3 p-0">
                                        <input type="text" className="form-control"
                                            onChange={(event) => {
                                                setPat(event.target.value)
                                            }}
                                            placeholder="name" />
                                        <label for="floatingInput"> Parmanent Address (Tangail)</label>
                                    </div>

                                    <div className="form-floating p-0">
                                        <select className="form-select"
                                            onChange={(event) => {
                                                setUpazilla(event.target.value)
                                            }}
                                            aria-label="Floating label select example">
                                            <option selected>Choose...</option>
                                            <option value="Tangail Sadar">Tangail Sadar</option>
                                            <option value="Basail">Basail </option>
                                            <option value="Bhuapur">Bhuapur </option>
                                            <option value="Delduar">Delduar </option>
                                            <option value="Dhonbari">Dhonbari </option>
                                            <option value="Ghatail">Ghatail </option>
                                            <option value="Gopalpur">Gopalpur </option>
                                            <option value="Kalihati">Kalihati </option>
                                            <option value="Madhupur">Madhupur </option>
                                            <option value="Mirzapur">Mirzapur </option>
                                            <option value="Nagarpur">Nagarpur </option>
                                            <option value="Sakhipur">Sakhipur </option>
                                        </select>
                                        <label for="floatingSelect">Select Upazila</label>
                                    </div>



                                    <button type="button" className="btn mt-3" onClick={uploadData}>Send Membership Request</button>

                                    {/* ||||||||| FORM ENDS HERE |||||||||| */}

                                    <p className="text-center mt-3">Alradey have an account? <a onClick={redirectToSignIn} style={{ color: "green" }}>Sign In</a>
                                    </p>

                                </div>

                            </div>
                            <p className="text-black text-center" style={{ fontSize: "13px", marginTop: "30px" }}>Copyright © 2022 Aleeha-Tech. All Rights Reserved.</p>
                        </div>

                    </div>

                </section>


            </main>
        </div>
    );
}

