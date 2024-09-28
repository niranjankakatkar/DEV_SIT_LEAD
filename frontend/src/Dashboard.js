import React from 'react'
import { Link } from 'react-router-dom'


function Dashboard() {
    return (
        <div>

            <body>

                <div className="main-wrapper">
                    

                    <div className="header">

                        <div className="header-left active">
                            <a href="index-2.html" className="logo logo-normal">
                                <img src="assets/img/logo.svg" alt="Logo" />
                                    <img src="assets/img/white-logo.svg" className="white-logo" alt="Logo"/>
                                    </a>
                                    <a href="index-2.html" className="logo-small">
                                        <img src="assets/img/logo-small.svg" alt="Logo" />
                                    </a>
                                    <a id="toggle_btn" href="javascript:void(0);">
                                        <i className="ti ti-arrow-bar-to-left"></i>
                                    </a>
                                </div> 

                                <a id="mobile_btn" className="mobile_btn" href="#sidebar">
                                    <span className="bar-icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </a>
                                <div className="header-user">
                                    <ul className="nav user-menu">

                                        <li className="nav-item nav-search-inputs me-auto">
                                            <div className="top-nav-search">
                                                <a href="javascript:void(0);" className="responsive-search">
                                                    <i className="fa fa-search"></i>
                                                </a>
                                                <form action="#" className="dropdown">
                                                    <div className="searchinputs" id="dropdownMenuClickable">
                                                        <input type="text" placeholder="Search" />
                                                        <div className="search-addon">
                                                            <button type="submit"><i className="ti ti-command"></i></button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </li>


                                        <li className="nav-item nav-list">
                                            <ul className="nav">
                                                <li className="dark-mode-list">
                                                    <a href="javascript:void(0);" id="dark-mode-toggle" className="dark-mode-toggle">
                                                        <i className="ti ti-sun light-mode active"></i>
                                                        <i className="ti ti-moon dark-mode"></i>
                                                    </a>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a href="javascript:void(0);" className="btn btn-header-list" data-bs-toggle="dropdown">
                                                        <i className="ti ti-layout-grid-add"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end menus-info">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <ul className="menu-list">
                                                                    <li>
                                                                        <a href="contacts.html">
                                                                            <div className="menu-details">
                                                                                <span className="menu-list-icon bg-violet">
                                                                                    <i className="ti ti-user-up"></i>
                                                                                </span>
                                                                                <div className="menu-details-content">
                                                                                    <p>Contacts</p>
                                                                                    <span>Add New Contact</span>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="pipeline.html">
                                                                            <div className="menu-details">
                                                                                <span className="menu-list-icon bg-green">
                                                                                    <i className="ti ti-timeline-event-exclamation"></i>
                                                                                </span>
                                                                                <div className="menu-details-content">
                                                                                    <p>Pipline</p>
                                                                                    <span>Add New Pipline</span>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="activities.html">
                                                                            <div className="menu-details">
                                                                                <span className="menu-list-icon bg-pink">
                                                                                    <i className="ti ti-bounce-right"></i>
                                                                                </span>
                                                                                <div className="menu-details-content">
                                                                                    <p>Activities</p>
                                                                                    <span>Add New Activity</span>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="analytics.html">
                                                                            <div className="menu-details">
                                                                                <span className="menu-list-icon bg-info">
                                                                                    <i className="ti ti-analyze"></i>
                                                                                </span>
                                                                                <div className="menu-details-content">
                                                                                    <p>Analytics</p>
                                                                                    <span>Shows All Information</span>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="projects.html">
                                                                            <div className="menu-details">
                                                                                <span className="menu-list-icon bg-danger">
                                                                                    <i className="ti ti-atom-2"></i>
                                                                                </span>
                                                                                <div className="menu-details-content">
                                                                                    <p>Projects</p>
                                                                                    <span>Add New Project</span>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <ul className="menu-list">
                                                                    <li>
                                                                        <a href="deals.html">
                                                                            <div className="menu-details">
                                                                                <span className="menu-list-icon bg-info">
                                                                                    <i className="ti ti-medal"></i>
                                                                                </span>
                                                                                <div className="menu-details-content">
                                                                                    <p>Deals</p>
                                                                                    <span>Add New Deals</span>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="leads.html">
                                                                            <div className="menu-details">
                                                                                <span className="menu-list-icon bg-secondary">
                                                                                    <i className="ti ti-chart-arcs"></i>
                                                                                </span>
                                                                                <div className="menu-details-content">
                                                                                    <p>Leads</p>
                                                                                    <span>Add New Leads</span>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="companies.html">
                                                                            <div className="menu-details">
                                                                                <span className="menu-list-icon bg-tertiary">
                                                                                    <i className="ti ti-building-community"></i>
                                                                                </span>
                                                                                <div className="menu-details-content">
                                                                                    <p>Company</p>
                                                                                    <span>Add New Company</span>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="tasks.html">
                                                                            <div className="menu-details">
                                                                                <span className="menu-list-icon bg-success">
                                                                                    <i className="ti ti-list-check"></i>
                                                                                </span>
                                                                                <div className="menu-details-content">
                                                                                    <p>Tasks</p>
                                                                                    <span>Add New Task</span>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="campaign.html">
                                                                            <div className="menu-details">
                                                                                <span className="menu-list-icon bg-purple">
                                                                                    <i className="ti ti-brand-campaignmonitor"></i>
                                                                                </span>
                                                                                <div className="menu-details-content">
                                                                                    <p>Campaign</p>
                                                                                    <span>Add New Campaign</span>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="faq.html" className="btn btn-help">
                                                        <i className="ti ti-help-hexagon"></i>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="lead-reports.html" className="btn btn-chart-pie">
                                                        <i className="ti ti-chart-pie"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>


                                        <li className="nav-item nav-item-email nav-item-box">
                                            <a href="email.html">
                                                <i className="ti ti-message-circle-exclamation"></i>
                                                <span className="badge rounded-pill">14</span>
                                            </a>
                                        </li>


                                        <li className="nav-item dropdown nav-item-box">
                                            <a href="javascript:void(0);" className="nav-link" data-bs-toggle="dropdown">
                                                <i className="ti ti-bell"></i>
                                                <span className="badge rounded-pill">13</span>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end notification-dropdown">
                                                <div className="topnav-dropdown-header">
                                                    <h4 className="notification-title">Notifications</h4>
                                                </div>
                                                <div className="noti-content">
                                                    <ul className="notification-list">
                                                        <li className="notification-message">
                                                            <a href="activities.html">
                                                                <div className="media d-flex">
                                                                    <span className="avatar flex-shrink-0">
                                                                        <img src="assets/img/profiles/avatar-02.jpg" alt="Profile" />
                                                                        <span className="badge badge-info rounded-pill"></span>
                                                                    </span>
                                                                    <div className="media-body flex-grow-1">
                                                                        <p className="noti-details">Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report</p>
                                                                        <p className="noti-time">Last Wednesday at 9:42 am</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li className="notification-message">
                                                            <a href="activities.html">
                                                                <div className="media d-flex">
                                                                    <span className="avatar flex-shrink-0">
                                                                        <img src="assets/img/profiles/avatar-03.jpg" alt="Profile" />
                                                                    </span>
                                                                    <div className="media-body flex-grow-1">
                                                                        <p className="noti-details">Denise Nedry replied to Anna Srzand</p>
                                                                        <p className="noti-sub-details">“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”</p>
                                                                        <p className="noti-time">Last Wednesday at 9:42 am</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li className="notification-message">
                                                            <a href="activities.html">
                                                                <div className="media d-flex">
                                                                    <span className="avatar flex-shrink-0">
                                                                        <img alt src="assets/img/profiles/avatar-06.jpg" />
                                                                    </span>
                                                                    <div className="media-body flex-grow-1">
                                                                        <p className="noti-details">John Hammond attached a file to Isla Nublar SOC2 compliance report</p>
                                                                        <div className="noti-pdf">
                                                                            <div className="noti-pdf-icon">
                                                                                <span><i className="ti ti-chart-pie"></i></span>
                                                                            </div>
                                                                            <div className="noti-pdf-text">
                                                                                <p>EY_review.pdf</p>
                                                                                <span>2mb</span>
                                                                            </div>
                                                                        </div>
                                                                        <p className="noti-time">Last Wednesday at 9:42 am</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="topnav-dropdown-footer">
                                                    <a href="activities.html" className="view-link">View all</a>
                                                    <a href="javascript:void(0);" className="clear-link">Clear all</a>
                                                </div>
                                            </div>
                                        </li>


                                        <li className="nav-item dropdown has-arrow main-drop">
                                            <a href="javascript:void(0);" className="nav-link userset" data-bs-toggle="dropdown">
                                                <span className="user-info">
                                                    <span className="user-letter">
                                                        <img src="assets/img/profiles/avatar-20.jpg" alt="Profile" />
                                                    </span>
                                                    <span className="badge badge-success rounded-pill"></span>
                                                </span>
                                            </a>
                                            <div className="dropdown-menu menu-drop-user">
                                                <div className="profilename">
                                                    <a className="dropdown-item" href="index-2.html">
                                                        <i className="ti ti-layout-2"></i> Dashboard
                                                    </a>
                                                    <a className="dropdown-item" href="profile.html">
                                                        <i className="ti ti-user-pin"></i> My Profile
                                                    </a>
                                                    <a className="dropdown-item" href="login.html">
                                                        <i className="ti ti-lock"></i> Logout
                                                    </a>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                                <div className="dropdown mobile-user-menu">
                                    <a href="javascript:void(0);" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="index-2.html">
                                            <i className="ti ti-layout-2"></i> Dashboard
                                        </a>
                                        <a className="dropdown-item" href="profile.html">
                                            <i className="ti ti-user-pin"></i> My Profile
                                        </a>
                                        <a className="dropdown-item" href="login.html">
                                            <i className="ti ti-lock"></i> Logout
                                        </a>
                                    </div>
                                </div>

                        </div>


                        <div className="sidebar" id="sidebar">
                            <div className="sidebar-inner slimscroll">
                                <div id="sidebar-menu" className="sidebar-menu">
                                    <ul>
                                        <li className="clinicdropdown">
                                            <a href="profile.html">
                                                <img src="assets/img/profiles/avatar-14.jpg" className="img-fluid" alt="Profile" />
                                                <div className="user-names">
                                                    <h5>Adrian Davies</h5>
                                                    <h6>Tech Lead</h6>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <h6 className="submenu-hdr">Main Menu</h6>
                                            <ul>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);" className="subdrop active">
                                                        <i className="ti ti-layout-2"></i><span>Dashboard</span><span className="menu-arrow"></span>
                                                    </a>
                                                    <ul>
                                                        <li><Link to="/" className="active">Deals Dashboard</Link></li>
                                                        <li><a href="leads-dashboard.html">Leads Dashboard</a></li>
                                                        <li><a href="project-dashboard.html">Project Dashboard</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);"><i className="ti ti-brand-airtable"></i><span>Application</span><span className="menu-arrow"></span></a>
                                                    <ul>
                                                        <li><a href="chat.html">Chat</a></li>
                                                        <li className="submenu submenu-two">
                                                            <a href="javascript:void(0);">Call<span className="menu-arrow inside-submenu"></span></a>
                                                            <ul>
                                                                <li><a href="video-call.html">Video Call</a></li>
                                                                <li><a href="audio-call.html">Audio Call</a></li>
                                                                <li><a href="call-history.html">Call History</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="calendar.html">Calendar</a></li>
                                                        <li><a href="email.html">Email</a></li>
                                                        <li><a href="todo.html">To Do</a></li>
                                                        <li><a href="notes.html">Notes</a></li>
                                                        <li><a href="file-manager.html">File Manager</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h6 className="submenu-hdr">CRM</h6>
                                            <ul>
                                                <li>
                                                    <Link to="/Users"><i className="ti ti-user-up"></i><span>Users</span></Link>
                                                </li>
                                                <li>
                                                    <a href="companies.html"><i className="ti ti-building-community"></i><span>Companies</span></a>
                                                </li>
                                                <li>
                                                    <a href="deals.html"><i className="ti ti-medal"></i><span>Deals</span></a>
                                                </li>
                                                <li>
                                                    <a href="leads.html"><i className="ti ti-chart-arcs"></i><span>Leads</span></a>
                                                </li>
                                                <li>
                                                    <a href="pipeline.html"><i className="ti ti-timeline-event-exclamation"></i><span>Pipeline</span></a>
                                                </li>
                                                <li>
                                                    <a href="campaign.html"><i className="ti ti-brand-campaignmonitor"></i><span>Campaign</span></a>
                                                </li>
                                                <li>
                                                    <a href="projects.html"><i className="ti ti-atom-2"></i><span>Projects</span></a>
                                                </li>
                                                <li>
                                                    <a href="tasks.html"><i className="ti ti-list-check"></i><span>Tasks</span></a>
                                                </li>
                                                <li>
                                                    <a href="proposals.html"><i className="ti ti-file-star"></i><span>Proposals</span></a>
                                                </li>
                                                <li>
                                                    <a href="contracts.html"><i className="ti ti-file-check"></i><span>Contracts</span></a>
                                                </li>
                                                <li>
                                                    <a href="estimations.html"><i className="ti ti-file-report"></i><span>Estimations</span></a>
                                                </li>
                                                <li>
                                                    <a href="invoices.html"><i className="ti ti-file-invoice"></i><span>Invoices</span></a>
                                                </li>
                                                <li>
                                                    <a href="payments.html"><i className="ti ti-report-money"></i><span>Payments</span></a>
                                                </li>
                                                <li>
                                                    <a href="analytics.html"><i className="ti ti-chart-bar"></i><span>Analytics</span></a>
                                                </li>
                                                <li>
                                                    <a href="activities.html"><i className="ti ti-bounce-right"></i><span>Activities</span></a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h6 className="submenu-hdr">Reports</h6>
                                            <ul>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);">
                                                        <i className="ti ti-file-invoice"></i><span>Reports</span><span className="menu-arrow"></span>
                                                    </a>
                                                    <ul>
                                                        <li><a href="lead-reports.html">Lead Reports</a></li>
                                                        <li><a href="deal-reports.html">Deal Reports</a></li>
                                                        <li><a href="contact-reports.html">Contact Reports</a></li>
                                                        <li><a href="company-reports.html">Company Reports</a></li>
                                                        <li><a href="project-reports.html">Project Reports</a></li>
                                                        <li><a href="task-reports.html">Task Reports</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h6 className="submenu-hdr">CRM Settings</h6>
                                            <ul>
                                                <li><a href="sources.html"><i className="ti ti-artboard"></i><span>Sources</span></a></li>
                                                <li><a href="lost-reason.html"><i className="ti ti-message-exclamation"></i><span>Lost Reason</span></a></li>
                                                <li><a href="contact-stage.html"><i className="ti ti-steam"></i><span>Contact Stage</span></a></li>
                                                <li><a href="industry.html"><i className="ti ti-building-factory"></i><span>Industry</span></a></li>
                                                <li><a href="calls.html"><i className="ti ti-phone-check"></i><span>Calls</span></a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h6 className="submenu-hdr">User Management</h6>
                                            <ul>
                                                <li><a href="manage-users.html"><i className="ti ti-users"></i><span>Manage Users</span></a></li>
                                                <li><a href="roles-permissions.html"><i className="ti ti-navigation-cog"></i><span>Roles & Permissions</span></a></li>
                                                <li><a href="delete-request.html"><i className="ti ti-flag-question"></i><span>Delete Request</span></a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h6 className="submenu-hdr">Membership</h6>
                                            <ul>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);">
                                                        <i className="ti ti-file-invoice"></i><span>Membership</span><span className="menu-arrow"></span>
                                                    </a>
                                                    <ul>
                                                        <li><a href="membership-plans.html">Membership Plans</a></li>
                                                        <li><a href="membership-addons.html">Membership Addons</a></li>
                                                        <li><a href="membership-transactions.html">Transactions</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h6 className="submenu-hdr">Content</h6>
                                            <ul>
                                                <li><a href="pages.html"><i className="ti ti-page-break"></i><span>Pages</span></a></li>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);">
                                                        <i className="ti ti-map-pin-pin"></i><span>Location</span><span className="menu-arrow"></span>
                                                    </a>
                                                    <ul>
                                                        <li><a href="countries.html">Countries</a></li>
                                                        <li><a href="states.html">States</a></li>
                                                        <li><a href="cities.html">Cities</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="testimonials.html"><i className="ti ti-quote"></i><span>Testimonials</span></a></li>
                                                <li><a href="faq.html"><i className="ti ti-question-mark"></i><span>FAQ</span></a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h6 className="submenu-hdr">Support</h6>
                                            <ul>
                                                <li><a href="contact-messages.html"><i className="ti ti-page-break"></i><span>Contact Messages</span></a></li>
                                                <li><a href="tickets.html"><i className="ti ti-ticket"></i><span>Tickets</span></a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h6 className="submenu-hdr">Settings</h6>
                                            <ul>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);">
                                                        <i className="ti ti-settings-cog"></i><span>General Settings</span><span className="menu-arrow"></span>
                                                    </a>
                                                    <ul>
                                                        <li><a href="profile.html">Profile</a></li>
                                                        <li><a href="security.html">Security</a></li>
                                                        <li><a href="notifications.html">Notifications</a></li>
                                                        <li><a href="connected-apps.html">Connected Apps</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);">
                                                        <i className="ti ti-world-cog"></i><span>Website Settings</span><span className="menu-arrow"></span>
                                                    </a>
                                                    <ul>
                                                        <li><a href="company-settings.html">Company Settings</a></li>
                                                        <li><a href="localization.html">Localization</a></li>
                                                        <li><a href="prefixes.html">Prefixes</a></li>
                                                        <li><a href="preference.html">Preference</a></li>
                                                        <li><a href="appearance.html">Appearance</a></li>
                                                        <li><a href="language.html">Language</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);">
                                                        <i className="ti ti-apps"></i><span>App Settings</span><span className="menu-arrow"></span>
                                                    </a>
                                                    <ul>
                                                        <li><a href="invoice-settings.html">Invoice Settings</a></li>
                                                        <li><a href="printers.html">Printers</a></li>
                                                        <li><a href="custom-fields.html">Custom Fields</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);">
                                                        <i className="ti ti-device-laptop"></i><span>System Settings</span><span className="menu-arrow"></span>
                                                    </a>
                                                    <ul>
                                                        <li><a href="email-settings.html">Email Settings</a></li>
                                                        <li><a href="sms-gateways.html">SMS Gateways</a></li>
                                                        <li><a href="gdpr-cookies.html">GDPR Cookies</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);">
                                                        <i className="ti ti-moneybag"></i><span>Financial Settings</span><span className="menu-arrow"></span>
                                                    </a>
                                                    <ul>
                                                        <li><a href="payment-gateways.html">Payment Gateways</a></li>
                                                        <li><a href="bank-accounts.html">Bank Accounts</a></li>
                                                        <li><a href="tax-rates.html">Tax Rates</a></li>
                                                        <li><a href="currencies.html">Currencies</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);">
                                                        <i className="ti ti-flag-cog"></i><span>Other Settings</span><span className="menu-arrow"></span>
                                                    </a>
                                                    <ul>
                                                        <li><a href="storage.html">Storage</a></li>
                                                        <li><a href="ban-ip-address.html">Ban IP Address</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h6 className="submenu-hdr">Pages</h6>
                                            <ul>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);">
                                                        <i className="ti ti-lock-square-rounded"></i><span>Authentication</span><span className="menu-arrow"></span>
                                                    </a>
                                                    <ul>
                                                        <li><a href="login.html">Login</a></li>
                                                        <li><a href="register.html">Register</a></li>
                                                        <li><a href="forgot-password.html">Forgot Password</a></li>
                                                        <li><a href="reset-password.html">Reset Password</a></li>
                                                        <li><a href="email-verification.html">Email Verification</a></li>
                                                        <li><a href="two-step-verification.html">2 Step Verification</a></li>
                                                        <li><a href="lock-screen.html">Lock Screen</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);">
                                                        <i className="ti ti-error-404"></i><span>Error Pages</span><span className="menu-arrow"></span>
                                                    </a>
                                                    <ul>
                                                        <li><a href="error-404.html">404 Error</a></li>
                                                        <li><a href="error-500.html">500 Error</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="blank-page.html"><i className="ti ti-apps"></i><span>Blank Page</span></a></li>
                                                <li><a href="coming-soon.html"><i className="ti ti-device-laptop"></i><span>Coming Soon</span></a></li>
                                                <li><a href="under-maintenance.html"><i className="ti ti-moneybag"></i><span>Under Maintenance</span></a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h6 className="submenu-hdr">UI Interface</h6>
                                            <ul>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);">
                                                        <i className="ti ti-adjustments-check"></i><span>Base UI</span><span className="menu-arrow"></span>
                                                    </a>
                                                    <ul>
                                                        <li><a href="ui-alerts.html">Alerts</a></li>
                                                        <li><a href="ui-accordion.html">Accordion</a></li>
                                                        <li><a href="ui-avatar.html">Avatar</a></li>
                                                        <li><a href="ui-badges.html">Badges</a></li>
                                                        <li><a href="ui-borders.html">Border</a></li>
                                                        <li><a href="ui-buttons.html">Buttons</a></li>
                                                        <li><a href="ui-buttons-group.html">Button Group</a></li>
                                                        <li><a href="ui-breadcrumb.html">Breadcrumb</a></li>
                                                        <li><a href="ui-cards.html">Card</a></li>
                                                        <li><a href="ui-carousel.html">Carousel</a></li>
                                                        <li><a href="ui-colors.html">Colors</a></li>
                                                        <li><a href="ui-dropdowns.html">Dropdowns</a></li>
                                                        <li><a href="ui-grid.html">Grid</a></li>
                                                        <li><a href="ui-images.html">Images</a></li>
                                                        <li><a href="ui-lightbox.html">Lightbox</a></li>
                                                        <li><a href="ui-media.html">Media</a></li>
                                                        <li><a href="ui-modals.html">Modals</a></li>
                                                        <li><a href="ui-offcanvas.html">Offcanvas</a></li>
                                                        <li><a href="ui-pagination.html">Pagination</a></li>
                                                        <li><a href="ui-popovers.html">Popovers</a></li>
                                                        <li><a href="ui-progress.html">Progress</a></li>
                                                        <li><a href="ui-placeholders.html">Placeholders</a></li>
                                                        <li><a href="ui-rangeslider.html">Range Slider</a></li>
                                                        <li><a href="ui-spinner.html">Spinner</a></li>
                                                        <li><a href="ui-sweetalerts.html">Sweet Alerts</a></li>
                                                        <li><a href="ui-nav-tabs.html">Tabs</a></li>
                                                        <li><a href="ui-toasts.html">Toasts</a></li>
                                                        <li><a href="ui-tooltips.html">Tooltips</a></li>
                                                        <li><a href="ui-typography.html">Typography</a></li>
                                                        <li><a href="ui-video.html">Video</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);">
                                                        <i className="ti ti-box-align-bottom"></i><span>Advanced UI</span><span className="menu-arrow"></span>
                                                    </a>
                                                    <ul>
                                                        <li><a href="ui-ribbon.html">Ribbon</a></li>
                                                        <li><a href="ui-clipboard.html">Clipboard</a></li>
                                                        <li><a href="ui-drag-drop.html">Drag & Drop</a></li>
                                                        <li><a href="ui-rangeslider.html">Range Slider</a></li>
                                                        <li><a href="ui-rating.html">Rating</a></li>
                                                        <li><a href="ui-text-editor.html">Text Editor</a></li>
                                                        <li><a href="ui-counter.html">Counter</a></li>
                                                        <li><a href="ui-scrollbar.html">Scrollbar</a></li>
                                                        <li><a href="ui-stickynote.html">Sticky Note</a></li>
                                                        <li><a href="ui-timeline.html">Timeline</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);"><i className="ti ti-chart-donut-2"></i>
                                                        <span>Charts</span><span className="menu-arrow"></span>
                                                    </a>
                                                    <ul>
                                                        <li><a href="chart-apex.html">Apex Charts</a></li>
                                                        <li><a href="chart-c3.html">Chart C3</a></li>
                                                        <li><a href="chart-js.html">Chart Js</a></li>
                                                        <li><a href="chart-morris.html">Morris Charts</a></li>
                                                        <li><a href="chart-flot.html">Flot Charts</a></li>
                                                        <li><a href="chart-peity.html">Peity Charts</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);"><i className="ti ti-icons"></i>
                                                        <span>Icons</span><span className="menu-arrow"></span>
                                                    </a>
                                                    <ul>
                                                        <li><a href="icon-fontawesome.html">Fontawesome Icons</a></li>
                                                        <li><a href="icon-feather.html">Feather Icons</a></li>
                                                        <li><a href="icon-ionic.html">Ionic Icons</a></li>
                                                        <li><a href="icon-material.html">Material Icons</a></li>
                                                        <li><a href="icon-pe7.html">Pe7 Icons</a></li>
                                                        <li><a href="icon-simpleline.html">Simpleline Icons</a></li>
                                                        <li><a href="icon-themify.html">Themify Icons</a></li>
                                                        <li><a href="icon-weather.html">Weather Icons</a></li>
                                                        <li><a href="icon-typicon.html">Typicon Icons</a></li>
                                                        <li><a href="icon-flag.html">Flag Icons</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);">
                                                        <i className="ti ti-forms"></i><span>Forms</span><span className="menu-arrow"></span>
                                                    </a>
                                                    <ul>
                                                        <li className="submenu submenu-two">
                                                            <a href="javascript:void(0);">Form Elements<span className="menu-arrow inside-submenu"></span></a>
                                                            <ul>
                                                                <li><a href="form-basic-inputs.html">Basic Inputs</a></li>
                                                                <li><a href="form-checkbox-radios.html">Checkbox & Radios</a></li>
                                                                <li><a href="form-input-groups.html">Input Groups</a></li>
                                                                <li><a href="form-grid-gutters.html">Grid & Gutters</a></li>
                                                                <li><a href="form-select.html">Form Select</a></li>
                                                                <li><a href="form-mask.html">Input Masks</a></li>
                                                                <li><a href="form-fileupload.html">File Uploads</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="submenu submenu-two">
                                                            <a href="javascript:void(0);">Layouts<span className="menu-arrow inside-submenu"></span></a>
                                                            <ul>
                                                                <li><a href="form-horizontal.html">Horizontal Form</a></li>
                                                                <li><a href="form-vertical.html">Vertical Form</a></li>
                                                                <li><a href="form-floating-labels.html">Floating Labels</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="form-validation.html">Form Validation</a></li>
                                                        <li><a href="form-select2.html">Select2</a></li>
                                                        <li><a href="form-wizard.html">Form Wizard</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);"><i className="ti ti-table"></i><span>Tables</span><span className="menu-arrow"></span></a>
                                                    <ul>
                                                        <li><a href="tables-basic.html">Basic Tables </a></li>
                                                        <li><a href="data-tables.html">Data Table </a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h6 className="submenu-hdr">Help</h6>
                                            <ul>
                                                <li><a href="javascript:void(0);"><i className="ti ti-file-type-doc"></i><span>Documentation</span></a></li>
                                                <li><a href="javascript:void(0);"><i className="ti ti-arrow-capsule"></i><span>Changelog v2.2</span></a></li>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);"><i className="ti ti-brand-databricks"></i><span>Multi Level</span><span className="menu-arrow"></span></a>
                                                    <ul>
                                                        <li><a href="javascript:void(0);">Level 1.1</a></li>
                                                        <li className="submenu submenu-two"><a href="javascript:void(0);">Level 1.2<span className="menu-arrow inside-submenu"></span></a>
                                                            <ul>
                                                                <li><a href="javascript:void(0);">Level 2.1</a></li>
                                                                <li className="submenu submenu-two submenu-three"><a href="javascript:void(0);">Level 2.2<span className="menu-arrow inside-submenu inside-submenu-two"></span></a>
                                                                    <ul>
                                                                        <li><a href="javascript:void(0);">Level 3.1</a></li>
                                                                        <li><a href="javascript:void(0);">Level 3.2</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="page-wrapper">
                            <div className="content">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="page-header">
                                            <div className="row align-items-center ">
                                                <div className="col-md-4">
                                                    <h3 className="page-title">Deals Dashboard</h3>
                                                </div>
                                                <div className="col-md-8 float-end ms-auto">
                                                    <div className="d-flex title-head">
                                                        <div className="daterange-picker d-flex align-items-center justify-content-center">
                                                            <div className="form-sort me-2">
                                                                <i className="ti ti-calendar"></i>
                                                                <input type="text" className="form-control  date-range bookingrange" />
                                                            </div>
                                                            <div className="head-icons mb-0">
                                                                <a href="index-2.html" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i className="ti ti-refresh-dot"></i></a>
                                                                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header"><i className="ti ti-chevrons-up"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-header border-0 pb-0">
                                                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                                    <h4><i className="ti ti-grip-vertical me-1"></i>Recently Created Deals</h4>
                                                    <div className="dropdown">
                                                        <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
                                                            <i className="ti ti-calendar-check me-2"></i>Last 30 days
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                Last 15 days
                                                            </a>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                Last 30 days
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="table-responsive custom-table">
                                                    <table className="table dataTable" id="deals-project">
                                                        <thead className="thead-light">
                                                            <tr>
                                                                <th>Deal Name</th>
                                                                <th>Stage</th>
                                                                <th>Deal Value</th>
                                                                <th>Probability</th>
                                                                <th>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-header border-0 pb-0">
                                                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                                    <h4><i className="ti ti-grip-vertical me-1"></i>Deals By Stage</h4>
                                                    <div className="d-flex align-items-center flex-wrap row-gap-2">
                                                        <div className="dropdown me-2">
                                                            <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
                                                                Sales Pipeline
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Marketing Pipeline
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Sales Pipeline
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Email
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Chats
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Operational
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
                                                                Last 30 Days
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Last 30 Days
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Last 15 Days
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Last 7 Days
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div id="deals-chart"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-header border-0 pb-0">
                                                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                                    <h4><i className="ti ti-grip-vertical me-1"></i>Leads By Stage</h4>
                                                    <div className="d-flex align-items-center flex-wrap row-gap-2">
                                                        <div className="dropdown me-2">
                                                            <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
                                                                Marketing Pipeline
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Marketing Pipeline
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Sales Pipeline
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Email
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Chats
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Operational
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
                                                                Last 3 months
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Last 3 months
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Last 6 months
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Last 12 months
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div id="last-chart"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-header border-0 pb-0">
                                                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                                    <h4><i className="ti ti-grip-vertical me-1"></i>Won Deals Stage</h4>
                                                    <div className="d-flex align-items-center flex-wrap row-gap-2">
                                                        <div className="dropdown me-2">
                                                            <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
                                                                Marketing Pipeline
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Marketing Pipeline
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Sales Pipeline
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Email
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Chats
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Operational
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
                                                                Last 3 months
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Last 3 months
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Last 6 months
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Last 12 months
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div id="won-chart"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 d-flex">
                                        <div className="card w-100">
                                            <div className="card-header border-0 pb-0">
                                                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                                    <h4><i className="ti ti-grip-vertical me-1"></i>Deals by Year</h4>
                                                    <div className="d-flex align-items-center flex-wrap row-gap-2">
                                                        <div className="dropdown me-2">
                                                            <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
                                                                Sales Pipeline
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Marketing Pipeline
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Sales Pipeline
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
                                                                Last 3 months
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Last 3 months
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Last 6 months
                                                                </a>
                                                                <a href="javascript:void(0);" className="dropdown-item">
                                                                    Last 12 months
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div id="deals-year"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


            </body>
        </div>
    )
}

export default Dashboard