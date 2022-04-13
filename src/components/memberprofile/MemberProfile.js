import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import QRCode from 'qrcode';

import '../membersignup/MemberSignup.css';
import './MemberProfile.css'
import '../../App.css';


export const MemberProfile = () => {

    const [save, setSave] = useState({});
    const [src, setSrc] = useState("");

    const param = useParams(); //getting the rollId
    const searchByRoll = param.rollId;

    //Fetch Data
    useEffect(() => {
        Axios.post('http://localhost:3001/api/member/showProfile', {
            rollId: searchByRoll,
        })
            .then((res) => {
                //Fetch QR code data and set data to "src"
                QRCode.toDataURL(res.data.members._id).then((data) => {
                    setSrc(data);
                });
                setSave(res.data.members);
            })
            .catch((err) => {
                console.log(err.response);
                if (err.response.status === 400) {
                    swal("Opps..!", "Invalid User!", "error");
                }
                else if (err.response.status === 401) {
                    swal("Opps..!", "User not Found!", "error");
                }
            });
    }, []);



    return (

        <div>

            <main className="w-100 dvf mx-0 my-5">

                <h2 className="p-0">Student Profile <span>TAZES-RUET</span></h2>
                <p className="mb-5 p-0">Membership Details are below (QRCode)</p>

                <div className="w-100 dhf g-5 row" style={{  }}>
                    <div className="col-lg-5 col-sm-12 dhf" >
                        <div>

                            <img className="img-fluid" src={src} alt="pic"
                                style={{ width: "300px", height: "300px" }} />
                            
                            <p>{save._id}</p>
                        </div>
                    </div>



                    <div className="col-lg-7 col-sm-12 " >
                        <div>
                            <table class="table table-bordered ">
                                <tbody>
                                    <tr>
                                        <th>Roll</th>
                                        <td>{save.rollId}</td>
                                    </tr>
                                    <tr>
                                        <th>Department</th>
                                        <td>{save.Dept}</td>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <td>{save.Name}</td>
                                    </tr>
                                    <tr>
                                        <th>Phone Number</th>
                                        <td>{save.phone}</td>
                                    </tr>
                                    <tr>
                                        <th>School</th>
                                        <td>{save.school}</td>
                                    </tr>
                                    <tr>
                                        <th>College</th>
                                        <td>{save.college}</td>
                                    </tr>
                                    <tr>
                                        <th>Parmament Address</th>
                                        <td>{save.parmanentAddress}</td>
                                    </tr>
                                    <tr>
                                        <th>Upazila</th>
                                        <td>{save.upazilla}</td>
                                    </tr>
                                    <tr>
                                        <th>Present Address</th>
                                        <td>{save.presentAddress}</td>
                                    </tr>
                                    <tr>
                                        <th>Equiped BookList</th>
                                        <td>{save.presentBookList}</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}

