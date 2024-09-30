import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../NavBar';
import { useNavigate } from 'react-router-dom';


function Users() {
     const [userlist,setUserList]= useState([])
     const navigate = useNavigate();
     const [deleteid,setDeleteId]=useState('');
    

    useEffect(()=>{
        axios.get('http://localhost:8081/getalluser')
        .then(res=>{
          setUserList(res.data);
             
        })
        .catch(err=> console.log(err))
    },[])

    function handleDelete() {
        axios.post('http://localhost:8081/userdelete/'+deleteid)
        .then(res=>{
           window.location.reload();
        }).catch(err => console.log(err));
    }

    function handleDelete_STEP1(id)
    {
        setDeleteId(id);
    }


    return (
        <div>
            
                <div className="main-wrapper">

                    <NavBar />

                        <div className="page-wrapper">
                            <div className="content">
                                <div className="row">
                                    <div className="col-md-12">

                                        <div className="page-header">
                                            <div className="row align-items-center">
                                                <div className="col-8">
                                                    <h4 className="page-title">Users List<span className="count-title"></span></h4>
                                                </div>
                                                <div className="col-4 text-end">
                                                    <div className="head-icons">
                                                        <Link to="/Users" ><i className="ti ti-refresh-dot"></i></Link>
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header"><i className="ti ti-chevrons-up"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="card">
                                            <div className="card-header">

                                                <div className="row align-items-center">
                                                    <div className="col-sm-4">
                                                        <div className="icon-form mb-3 mb-sm-0">
                                                            <span className="form-icon"><i className="ti ti-search"></i></span>
                                                            <input type="text" className="form-control" placeholder="Search Contacts" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <div className="d-flex align-items-center flex-wrap row-gap-2 justify-content-sm-end">
                                                            <div className="dropdown me-2">
                                                                <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown"><i className="ti ti-package-export me-2"></i>Export</a>
                                                                <div className="dropdown-menu  dropdown-menu-end">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="javascript:void(0);" className="dropdown-item"><i className="ti ti-file-type-pdf text-danger me-1"></i>Export
                                                                                as PDF</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0);" className="dropdown-item"><i className="ti ti-file-type-xls text-green me-1"></i>Export
                                                                                as Excel </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <Link to="/AddUser" className="btn btn-primary"  ><i className="ti ti-square-rounded-plus me-2"></i>Add User</Link>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-4">
                                                    <div className="d-flex align-items-center flex-wrap row-gap-2">
                                                        <div className="dropdown me-2">
                                                            <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown"><i className="ti ti-sort-ascending-2 me-1"></i>Sort </a>
                                                            <div className="dropdown-menu  dropdown-menu-start">
                                                                <ul>
                                                                    <li>
                                                                        <a href="javascript:void(0);" className="dropdown-item">
                                                                            <i className="ti ti-circle-chevron-right me-1"></i>Ascending
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:void(0);" className="dropdown-item">
                                                                            <i className="ti ti-circle-chevron-right me-1"></i>Descending
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:void(0);" className="dropdown-item">
                                                                            <i className="ti ti-circle-chevron-right me-1"></i>Recently
                                                                            Viewed
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:void(0);" className="dropdown-item">
                                                                            <i className="ti ti-circle-chevron-right me-1"></i>Recently
                                                                            Added
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="icon-form">
                                                            <span className="form-icon"><i className="ti ti-calendar"></i></span>
                                                            <input type="text" className="form-control bookingrange" placeholder />
                                                        </div>
                                                    </div>
                                                  
                                                </div>

                                                
                                                   
                                                <div className="row">
                                                {
                                                   userlist.map((data,i)=>(

                                                    <div className="col-xxl-3 col-xl-4 col-md-6">
                                                        <div className="card border">
                                                            <div className="card-body">

                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="contact-details.html" className="avatar avatar-md flex-shrink-0 me-2">
                                                                            <img src="assets/img/profiles/avatar-19.jpg" alt="img" />
                                                                        </a>
                                                                        <div>
                                                                            <h6><a href="contact-details.html" className="fw-medium">{data.fname} {data.mname} {data.lname}</a></h6>
                                                                            <p className="text-default">{data.token_id}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="dropdown table-action">
                                                                        <a href="#" className="action-icon " data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="fa fa-ellipsis-v"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <Link className="dropdown-item" to={`/UserUpdate/${data.id}`} ><i className="ti ti-edit text-blue"></i> Edit</Link>
                                                                            <Link className="dropdown-item"data-bs-toggle="modal"
                                                                data-bs-target="#delete_contact"  onClick={ e => handleDelete_STEP1(data.id)}><i className="ti ti-trash text-danger"></i> Delete</Link>
                                                                            <a className="dropdown-item" href="#"><i className="ti ti-eye text-blue-light"></i> Preview</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-block">
                                                                    <div className="d-flex flex-column mb-3">
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-mail text-dark me-1"></i><a href="https://crms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9ceef3fef9eee8eff3f2dcf9e4fdf1ecf0f9b2fff3f1">{data.email}</a>
                                                                        </p>
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-phone text-dark me-1"></i>{data.mobile_no}</p>
                                                                        <p className="text-default d-inline-flex align-items-center"><i className="ti ti-map-pin-pin text-dark me-1"></i>{data.dob}</p>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="badge badge-tag badge-success-light me-2">Collab</span>
                                                                        <span className="badge badge-tag badge-warning-light">Rated</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                                                                    <div className="d-flex align-items-center grid-social-links">
                                                                        
                                                                        <a href='mailto:yourmail@domain.com' className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-mail fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-phone-check fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-message-circle-share fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-brand-skype fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle"><i className="ti ti-brand-facebook fs-14"></i></a>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="set-star text-default me-2">
                                                                            <i className="fa fa-star filled me-1"></i>4.2
                                                                        </div>
                                                                        <a href="javascript:void(0);" className="avatar avatar-md" data-bs-toggle="tooltip" data-bs-original-title="Mervin" data-bs-placement="top">
                                                                            <img src="assets/img/profiles/avatar-14.jpg" alt="img" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                   ))
                                                }
                                                  
                                                </div>

                                               
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                     






                        <div className="modal fade" id="delete_contact" role="dialog">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <div className="text-center">
                                            <div className="avatar avatar-xl bg-danger-light rounded-circle mb-3">
                                                <i className="ti ti-trash-x fs-36 text-danger"></i>
                                            </div>
                                            <h4 className="mb-2">Remove Contacts?</h4>
                                            <p className="mb-0">Are you sure you want to remove <br /> user you selected.</p>
                                            <div className="d-flex align-items-center justify-content-center mt-4">
                                                <a href="#" className="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
                                                <a  onClick={ e => handleDelete()} className="btn btn-danger">Yes, Delete it</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                       


                    </div>

         
        </div>
    )
}

export default Users