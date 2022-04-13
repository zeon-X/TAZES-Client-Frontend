import Axios from 'axios';
import React from 'react';
import './MemberRequestAdmin.css';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

const MemberRequest = (props) => {
    // console.log(props.data);


    const { _id,rollId, series, Dept, Name, parmanentAddress, upazilla, school, college, phone } = props.data;

    const acceptReq = () => {
        console.log("hit " + rollId);
        Axios.post('http://localhost:3001/api/admin/member/acceptRequest', {
            rollId: rollId,
        }).then((res) => {
            if (res.status === 200) {
                swal("Success!", "Member Request Accepted!", "success")
                    .then(() => {
                        window.location.reload();
                    });

            }

        }).catch((err) => {
            console.log(err);
            swal("Opps..!", "Something Went wrong!", "error");
        })
    }


    const deleteMember = () => {
        console.log("hit.. " + _id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.post('http://localhost:3001/api/admin/member/delete', {
                    _id: _id,
                })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                ).then(()=>{
                    window.location.reload();
                })
                console.log("deleted");
                
            }
        })
    }


    return (
        <div className='dhf my-2'>
            <div className="card" style={{ width: "95%" }}>
                <div className="card-body">
                    <h5 className="card-title">Roll: <b>{rollId}</b></h5>
                    <h6 className="card-subtitle mb-2 ">Department of {Dept} | {series} Series</h6>
                    <p className="card-text my-0">Name: <b>{Name}</b></p>
                    <p className="card-text my-0">Contact No:{phone}</p>
                    <p className="card-text my-0">School: {school}</p>
                    <p className="card-text my-0">College: {college}</p>
                    <p className="card-text mt-0">From {parmanentAddress}, Upazila: {upazilla}</p>
                    <hr />
                    <a onClick={acceptReq} className="card-link accept">Accept</a>
                    <a onClick={deleteMember} className="card-link delete">Delete</a>
                </div>
            </div>
        </div>
    );
};

export default MemberRequest;