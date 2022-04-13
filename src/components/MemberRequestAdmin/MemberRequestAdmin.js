import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../App.css';
import './MemberRequestAdmin.css';
import swal from 'sweetalert';
import MemberRequest from './MemberRequest.js';
// import { useNavigate } from 'react-router-dom';


export const MemberRequestAdmin = () => {

    const [memberData, setMemberData] = useState([]);


    useEffect(async () => {
        await Axios.get('http://localhost:3001/api/admin/member/Request')
            .then(function (response) {
                setMemberData(response.data.members);

                // console.log(response.data.members);
            }).catch(function (error) {
                console.log(error);
            });


    }, []);



    return (
        <div>
            <main className="mt-3">
                {
                    memberData.map((data) => {
                        return(
                            <MemberRequest key={data._id} data={data}></MemberRequest>
                        )
                    })
                }
            </main>
        </div>
    );
}

