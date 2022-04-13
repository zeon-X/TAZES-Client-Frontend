import React, { useState } from 'react';
import Axios from 'axios';
import swal from 'sweetalert';
import img1 from './lib2.jpg';
import '../../App.css'

export const AddBook = () => {

    const [bookName, setBookName] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [quantity, setQuantity] = useState("");



    const uploadData = async () => {
        console.log("start..")
        for (let i = 0; i < quantity; ++i) {
            await Axios.post('http://localhost:3000/api/admin/addNewBook', {
                BookName: bookName,
                AuthorName: authorName,
            }).then((res) => {
                if (res.status === 201) {
                    console.log("success...");
                }
            }).catch((err) => {
                if (err.status === 400) {
                    console.log(err);
                }
            })
        }

        console.log("end..")

        swal("Success!", "Books Added!", "success").then(() => {
            window.location.reload();
        });
    }



    return (

        <div>
            <main className="w-100 dvf mt-3 ">
                <section className="dhf" style={{ width: "95%" }}>
                    <div className="row  g-0 w-100 text-secondary" style={{ height: "99vh" }}>

                        <div className="col-sm-0 col-lg-5 dvf px-5 m-0 mb-3">
                            <img className='img-fluid' src={img1} alt="" />
                        </div>

                        <div className="col-12 col-lg-7">
                            <div className="w-100 p-lg-4 d-flex flex-column align-items-center">
                                <div className="row w-75 mt-3 ">

                                    <h2 className="p-0">Add Book to <span>TAZES-RUET</span></h2>
                                    <p className="mb-5 p-0">Enter Book details below with Quantity</p>

                                    {/* ||||||||| FORM STARTS HERE |||||||||| */}

                                    {/* Book Name */}
                                    <div className="form-floating mb-3 p-0">
                                        <input type="text" className="form-control"
                                            onChange={(event) => {
                                                setBookName(event.target.value)
                                            }}
                                            placeholder="name" />
                                        <label for="floatingInput"> Book Name</label>
                                    </div>

                                    {/* Author Name */}
                                    <div className="form-floating mb-3 p-0">
                                        <input type="text" className="form-control"
                                            onChange={(event) => {
                                                setAuthorName(event.target.value)
                                            }}
                                            placeholder="name" />
                                        <label for="floatingInput"> Author Name</label>
                                    </div>

                                    {/* Quantity */}
                                    <div className="form-floating mb-3 p-0">
                                        <input type="text" className="form-control"
                                            onChange={(event) => {
                                                setQuantity(event.target.value)
                                            }}
                                            placeholder="name" />
                                        <label for="floatingInput"> Book Quantity</label>
                                    </div>

                                    {/* Submit Button  */}
                                    <button type="button" onClick={uploadData} className="btn mt-3" >Add Books</button>

                                    {/* ||||||||| FORM ENDS HERE |||||||||| */}

                                </div>

                            </div>
                            <p className="text-black text-center" style={{ fontSize: "13px", marginTop: "30px" }}>Copyright © 2022 Aleeha-Tech. All Rights Reserved.</p>
                        </div>

                    </div>

                </section>


            </main>
        </div>
    );
};
