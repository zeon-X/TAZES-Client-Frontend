import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../App.css';
import '../MemberRequestAdmin/MemberRequestAdmin.css';
import swal from 'sweetalert';
import MemberShow from './MemberShow';
// import { useNavigate } from 'react-router-dom';


export const MemberShowAllAdmin = () => {

    const [memberData, setMemberData] = useState([]);


    useEffect(async () => {
        await Axios.get('http://localhost:3001/api/admin/member/valid')
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
                            <MemberShow key={data._id} data={data}></MemberShow>
                        )
                    })
                }
            </main>
        </div>
    );
}

