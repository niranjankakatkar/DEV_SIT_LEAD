import React from 'react'

function Users() {
    return (
        <div>
            <body>

                <div className="main-wrapper">

                    <div className="header">

                        <div className="header-left active">
                            <a href="index-2.html" className="logo logo-normal">
                                <img src="assets/img/logo.svg" alt="Logo" />
                                    <img src="assets/img/white-logo.svg" className="white-logo" alt="Logo" />
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
                                                                        <p className="noti-details">Ray Arnold left 6 comments on Isla Nublar
                                                                            SOC2 compliance report</p>
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
                                                                        <p className="noti-sub-details">“Oh, I finished de-bugging the phones,
                                                                            but the system's compiling for eighteen minutes, or twenty. So,
                                                                            some minor systems may go on and off for a while.”</p>
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
                                                                        <p className="noti-details">John Hammond attached a file to Isla Nublar
                                                                            SOC2 compliance report</p>
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
                                                    <a href="javascript:void(0);">
                                                        <i className="ti ti-layout-2"></i><span>Dashboard</span><span className="menu-arrow"></span>
                                                    </a>
                                                    <ul>
                                                        <li><a href="index-2.html">Deals Dashboard</a></li>
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
                                                    <a href="contacts.html" className="active"><i className="ti ti-user-up"></i><span>Contacts</span></a>
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
                                                <li><a href="lost-reason.html"><i className="ti ti-message-exclamation"></i><span>Lost
                                                    Reason</span></a></li>
                                                <li><a href="contact-stage.html"><i className="ti ti-steam"></i><span>Contact
                                                    Stage</span></a></li>
                                                <li><a href="industry.html"><i className="ti ti-building-factory"></i><span>Industry</span></a></li>
                                                <li><a href="calls.html"><i className="ti ti-phone-check"></i><span>Calls</span></a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h6 className="submenu-hdr">User Management</h6>
                                            <ul>
                                                <li><a href="manage-users.html"><i className="ti ti-users"></i><span>Manage Users</span></a>
                                                </li>
                                                <li><a href="roles-permissions.html"><i className="ti ti-navigation-cog"></i><span>Roles &
                                                    Permissions</span></a></li>
                                                <li><a href="delete-request.html"><i className="ti ti-flag-question"></i><span>Delete
                                                    Request</span></a></li>
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
                                                <li><a href="testimonials.html"><i className="ti ti-quote"></i><span>Testimonials</span></a>
                                                </li>
                                                <li><a href="faq.html"><i className="ti ti-question-mark"></i><span>FAQ</span></a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h6 className="submenu-hdr">Support</h6>
                                            <ul>
                                                <li><a href="contact-messages.html"><i className="ti ti-page-break"></i><span>Contact
                                                    Messages</span></a></li>
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
                                                <li><a href="coming-soon.html"><i className="ti ti-device-laptop"></i><span>Coming
                                                    Soon</span></a></li>
                                                <li><a href="under-maintenance.html"><i className="ti ti-moneybag"></i><span>Under
                                                    Maintenance</span></a></li>
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
                                                <li><a href="javascript:void(0);"><i className="ti ti-arrow-capsule"></i><span>Changelog
                                                    v2.2</span></a></li>
                                                <li className="submenu">
                                                    <a href="javascript:void(0);"><i className="ti ti-brand-databricks"></i><span>Multi
                                                        Level</span><span className="menu-arrow"></span></a>
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
                                            <div className="row align-items-center">
                                                <div className="col-8">
                                                    <h4 className="page-title">Contacts<span className="count-title">123</span></h4>
                                                </div>
                                                <div className="col-4 text-end">
                                                    <div className="head-icons">
                                                        <a href="contact-grid.html" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i className="ti ti-refresh-dot"></i></a>
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
                                                            <a href="javascript:void(0);" className="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_add"><i className="ti ti-square-rounded-plus me-2"></i>Add Contacts</a>
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
                                                    <div className="d-flex align-items-center flex-wrap row-gap-2">
                                                        <div className="form-sorts dropdown me-2">
                                                            <a href="javascript:void(0);" data-bs-toggle="dropdown" data-bs-auto-close="outside"><i className="ti ti-filter-share"></i>Filter</a>
                                                            <div className="filter-dropdown-menu dropdown-menu  dropdown-menu-md-end p-3">
                                                                <div className="filter-set-view">
                                                                    <div className="filter-set-head">
                                                                        <h4><i className="ti ti-filter-share"></i>Filter</h4>
                                                                    </div>
                                                                    <div className="accordion" id="accordionExample">
                                                                        <div className="filter-set-content">
                                                                            <div className="filter-set-content-head">
                                                                                <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">Country</a>
                                                                            </div>
                                                                            <div className="filter-set-contents accordion-collapse collapse show" id="collapseTwo" data-bs-parent="#accordionExample">
                                                                                <div className="filter-content-list">
                                                                                    <div className="mb-2 icon-form">
                                                                                        <span className="form-icon"><i className="ti ti-search"></i></span>
                                                                                        <input type="text" className="form-control" placeholder="Search Country" />
                                                                                    </div>
                                                                                    <ul>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        India
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        USA
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        France
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        United Kingdom
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        UAE
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        Italy
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        Japan
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        Germany
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="filter-set-content">
                                                                            <div className="filter-set-content-head">
                                                                                <a href="#" className="collapsed" data-bs-toggle="collapse" data-bs-target="#owner" aria-expanded="false" aria-controls="owner">Owner</a>
                                                                            </div>
                                                                            <div className="filter-set-contents accordion-collapse collapse" id="owner" data-bs-parent="#accordionExample">
                                                                                <div className="filter-content-list">
                                                                                    <div className="mb-2 icon-form">
                                                                                        <span className="form-icon"><i className="ti ti-search"></i></span>
                                                                                        <input type="text" className="form-control" placeholder="Search Owner" />
                                                                                    </div>
                                                                                    <ul>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" checked />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        Hendry
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        Guillory
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        Jami
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        Theresa
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        Espinosa
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="filter-set-content">
                                                                            <div className="filter-set-content-head">
                                                                                <a href="#" className="collapsed" data-bs-toggle="collapse" data-bs-target="#Status" aria-expanded="false" aria-controls="Status">Status</a>
                                                                            </div>
                                                                            <div className="filter-set-contents accordion-collapse collapse" id="Status" data-bs-parent="#accordionExample">
                                                                                <div className="filter-content-list">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" checked />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        Active
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        Inactive
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="filter-set-content">
                                                                            <div className="filter-set-content-head">
                                                                                <a href="#" className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Rating</a>
                                                                            </div>
                                                                            <div className="filter-set-contents accordion-collapse collapse" id="collapseOne" data-bs-parent="#accordionExample">
                                                                                <div className="filter-content-list">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" checked />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        <span className="rating">
                                                                                                            <i className="fa fa-star filled"></i>
                                                                                                            <i className="fa fa-star filled"></i>
                                                                                                            <i className="fa fa-star filled"></i>
                                                                                                            <i className="fa fa-star filled"></i>
                                                                                                            <i className="fa fa-star filled"></i>
                                                                                                            <span>5.0</span>
                                                                                                        </span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        <span className="rating">
                                                                                                            <i className="fa fa-star filled"></i>
                                                                                                            <i className="fa fa-star filled"></i>
                                                                                                            <i className="fa fa-star filled"></i>
                                                                                                            <i className="fa fa-star filled"></i>
                                                                                                            <i className="fa fa-star"></i>
                                                                                                            <span>4.0</span>
                                                                                                        </span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        <span className="rating">
                                                                                                            <i className="fa fa-star filled"></i>
                                                                                                            <i className="fa fa-star filled"></i>
                                                                                                            <i className="fa fa-star filled"></i>
                                                                                                            <i className="fa fa-star"></i>
                                                                                                            <i className="fa fa-star"></i>
                                                                                                            <span>3.0</span>
                                                                                                        </span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        <span className="rating">
                                                                                                            <i className="fa fa-star filled"></i>
                                                                                                            <i className="fa fa-star filled"></i>
                                                                                                            <i className="fa fa-star"></i>
                                                                                                            <i className="fa fa-star"></i>
                                                                                                            <i className="fa fa-star"></i>
                                                                                                            <span>2.0</span>
                                                                                                        </span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        <span className="rating">
                                                                                                            <i className="fa fa-star filled"></i>
                                                                                                            <i className="fa fa-star"></i>
                                                                                                            <i className="fa fa-star"></i>
                                                                                                            <i className="fa fa-star"></i>
                                                                                                            <i className="fa fa-star"></i>
                                                                                                            <span>1.0</span>
                                                                                                        </span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="filter-set-content">
                                                                            <div className="filter-set-content-head">
                                                                                <a href="#" className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Tags</a>
                                                                            </div>
                                                                            <div className="filter-set-contents accordion-collapse collapse" id="collapseThree" data-bs-parent="#accordionExample">
                                                                                <div className="filter-content-list">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" checked />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        Promotion
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        Rated
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        Rejected
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        Collab
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="filter-checks">
                                                                                                <label className="checkboxs">
                                                                                                    <input type="checkbox" />
                                                                                                        <span className="checkmarks"></span>
                                                                                                        Calls
                                                                                                </label>
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="filter-reset-btns">
                                                                        <div className="row">
                                                                            <div className="col-6">
                                                                                <a href="#" className="btn btn-light">Reset</a>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <a href="contact-grid.html" className="btn btn-primary">Filter</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="view-icons">
                                                            <a href="contacts.html"><i className="ti ti-list-tree"></i></a>
                                                            <a href="contact-grid.html" className="active"><i className="ti ti-grid-dots"></i></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-xxl-3 col-xl-4 col-md-6">
                                                        <div className="card border">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="contact-details.html" className="avatar avatar-md flex-shrink-0 me-2">
                                                                            <img src="assets/img/profiles/avatar-19.jpg" alt="img" />
                                                                        </a>
                                                                        <div>
                                                                            <h6><a href="contact-details.html" className="fw-medium">Darlee
                                                                                Robertson</a></h6>
                                                                            <p className="text-default">Facility Manager</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="dropdown table-action">
                                                                        <a href="#" className="action-icon " data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="fa fa-ellipsis-v"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i className="ti ti-edit text-blue"></i> Edit</a>
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash text-danger"></i> Delete</a>
                                                                            <a className="dropdown-item" href="contact-details.html"><i className="ti ti-eye text-blue-light"></i> Preview</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-block">
                                                                    <div className="d-flex flex-column mb-3">
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-mail text-dark me-1"></i><a href="https://crms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9ceef3fef9eee8eff3f2dcf9e4fdf1ecf0f9b2fff3f1">[email&#160;protected]</a>
                                                                        </p>
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-phone text-dark me-1"></i>1234567890</p>
                                                                        <p className="text-default d-inline-flex align-items-center"><i className="ti ti-map-pin-pin text-dark me-1"></i>Germany</p>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="badge badge-tag badge-success-light me-2">Collab</span>
                                                                        <span className="badge badge-tag badge-warning-light">Rated</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                                                                    <div className="d-flex align-items-center grid-social-links">
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-mail fs-14"></i></a>
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
                                                    <div className="col-xxl-3 col-xl-4 col-md-6">
                                                        <div className="card border">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="contact-details.html" className="avatar avatar-md flex-shrink-0 me-2">
                                                                            <img src="assets/img/profiles/avatar-20.jpg" alt="img" />
                                                                        </a>
                                                                        <div>
                                                                            <h6><a href="contact-details.html" className="fw-medium">Sharon
                                                                                Roy</a></h6>
                                                                            <p className="text-default">Installer</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="dropdown table-action">
                                                                        <a href="#" className="action-icon " data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="fa fa-ellipsis-v"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i className="ti ti-edit text-blue"></i> Edit</a>
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash text-danger"></i> Delete</a>
                                                                            <a className="dropdown-item" href="contact-details.html"><i className="ti ti-eye text-blue-light"></i> Preview</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-block">
                                                                    <div className="d-flex flex-column mb-3">
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-mail text-dark me-1"></i><a href="https://crms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="cebda6afbca1a08eabb6afa3bea2abe0ada1a3">[email&#160;protected]</a>
                                                                        </p>
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-phone text-dark me-1"></i>+1 989757485</p>
                                                                        <p className="text-default d-inline-flex align-items-center"><i className="ti ti-map-pin-pin text-dark me-1"></i>+1
                                                                            989757485</p>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="badge badge-tag badge-success-light me-2">Collab</span>
                                                                        <span className="badge badge-tag badge-warning-light">Rated</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                                                                    <div className="d-flex align-items-center grid-social-links">
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-mail fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-phone-check fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-message-circle-share fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-brand-skype fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle"><i className="ti ti-brand-facebook fs-14"></i></a>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="set-star text-default me-2">
                                                                            <i className="fa fa-star filled me-1"></i>5.0
                                                                        </div>
                                                                        <a href="javascript:void(0);" className="avatar avatar-md" data-bs-toggle="tooltip" data-bs-original-title="Mervin" data-bs-placement="top">
                                                                            <img src="assets/img/profiles/avatar-14.jpg" alt="img" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-3 col-xl-4 col-md-6">
                                                        <div className="card border">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="contact-details.html" className="avatar avatar-md flex-shrink-0 me-2">
                                                                            <img src="assets/img/profiles/avatar-21.jpg" alt="img" />
                                                                        </a>
                                                                        <div>
                                                                            <h6><a href="contact-details.html" className="fw-medium">Vaughan</a></h6>
                                                                            <p className="text-default">Senior Manager</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="dropdown table-action">
                                                                        <a href="#" className="action-icon " data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="fa fa-ellipsis-v"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i className="ti ti-edit text-blue"></i> Edit</a>
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash text-danger"></i> Delete</a>
                                                                            <a className="dropdown-item" href="contact-details.html"><i className="ti ti-eye text-blue-light"></i> Preview</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-block">
                                                                    <div className="d-flex flex-column mb-3">
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-mail text-dark me-1"></i><a href="https://crms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="8ff9eefae8e7eee1bebdcfeaf7eee2ffe3eaa1ece0e2">[email&#160;protected]</a>
                                                                        </p>
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-phone text-dark me-1"></i>+1 546555455</p>
                                                                        <p className="text-default d-inline-flex align-items-center"><i className="ti ti-map-pin-pin text-dark me-1"></i>India</p>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="badge badge-tag badge-success-light me-2">Collab</span>
                                                                        <span className="badge badge-tag badge-warning-light">Rated</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                                                                    <div className="d-flex align-items-center grid-social-links">
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-mail fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-phone-check fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-message-circle-share fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-brand-skype fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle"><i className="ti ti-brand-facebook fs-14"></i></a>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="set-star text-default me-2">
                                                                            <i className="fa fa-star filled me-1"></i>3.5
                                                                        </div>
                                                                        <a href="javascript:void(0);" className="avatar avatar-md" data-bs-toggle="tooltip" data-bs-original-title="Mervin" data-bs-placement="top">
                                                                            <img src="assets/img/profiles/avatar-14.jpg" alt="img" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-3 col-xl-4 col-md-6">
                                                        <div className="card border">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="contact-details.html" className="avatar avatar-md flex-shrink-0 me-2">
                                                                            <img src="assets/img/profiles/avatar-23.jpg" alt="img" />
                                                                        </a>
                                                                        <div>
                                                                            <h6><a href="contact-details.html" className="fw-medium">Jessica</a></h6>
                                                                            <p className="text-default">Test Engineer</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="dropdown table-action">
                                                                        <a href="#" className="action-icon " data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="fa fa-ellipsis-v"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i className="ti ti-edit text-blue"></i> Edit</a>
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash text-danger"></i> Delete</a>
                                                                            <a className="dropdown-item" href="contact-details.html"><i className="ti ti-eye text-blue-light"></i> Preview</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-block">
                                                                    <div className="d-flex flex-column mb-3">
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-mail text-dark me-1"></i><a href="https://crms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="076d6274746e6466363447627f666a776b622964686a">[email&#160;protected]</a>
                                                                        </p>
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-phone text-dark me-1"></i>+1 454478787</p>
                                                                        <p className="text-default d-inline-flex align-items-center"><i className="ti ti-map-pin-pin text-dark me-1"></i>India</p>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="badge badge-tag badge-success-light me-2">Collab</span>
                                                                        <span className="badge badge-tag badge-warning-light">Rated</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                                                                    <div className="d-flex align-items-center grid-social-links">
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-mail fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-phone-check fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-message-circle-share fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-brand-skype fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle"><i className="ti ti-brand-facebook fs-14"></i></a>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="set-star text-default me-2">
                                                                            <i className="fa fa-star filled me-1"></i>3.5
                                                                        </div>
                                                                        <a href="javascript:void(0);" className="avatar avatar-md" data-bs-toggle="tooltip" data-bs-original-title="Mervin" data-bs-placement="top">
                                                                            <img src="assets/img/profiles/avatar-14.jpg" alt="img" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-3 col-xl-4 col-md-6">
                                                        <div className="card border">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="contact-details.html" className="avatar avatar-md flex-shrink-0 me-2">
                                                                            <img src="assets/img/profiles/avatar-16.jpg" alt="img" />
                                                                        </a>
                                                                        <div>
                                                                            <h6><a href="contact-details.html" className="fw-medium">Carol
                                                                                Thomas</a></h6>
                                                                            <p className="text-default">UI /UX Designer</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="dropdown table-action">
                                                                        <a href="#" className="action-icon " data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="fa fa-ellipsis-v"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i className="ti ti-edit text-blue"></i> Edit</a>
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash text-danger"></i> Delete</a>
                                                                            <a className="dropdown-item" href="contact-details.html"><i className="ti ti-eye text-blue-light"></i> Preview</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-block">
                                                                    <div className="d-flex flex-column mb-3">
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-mail text-dark me-1"></i><a href="https://crms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="e48785968b88908c8bd7a4819c8589948881ca878b89">[email&#160;protected]</a>
                                                                        </p>
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-phone text-dark me-1"></i>+1 124547845</p>
                                                                        <p className="text-default d-inline-flex align-items-center"><i className="ti ti-map-pin-pin text-dark me-1"></i>China</p>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="badge badge-tag badge-success-light me-2">Collab</span>
                                                                        <span className="badge badge-tag badge-warning-light">Rated</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                                                                    <div className="d-flex align-items-center grid-social-links">
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-mail fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-phone-check fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-message-circle-share fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-brand-skype fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle"><i className="ti ti-brand-facebook fs-14"></i></a>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="set-star text-default me-2">
                                                                            <i className="fa fa-star filled me-1"></i>3.5
                                                                        </div>
                                                                        <a href="javascript:void(0);" className="avatar avatar-md" data-bs-toggle="tooltip" data-bs-original-title="Mervin" data-bs-placement="top">
                                                                            <img src="assets/img/profiles/avatar-14.jpg" alt="img" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-3 col-xl-4 col-md-6">
                                                        <div className="card border">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="contact-details.html" className="avatar avatar-md flex-shrink-0 me-2">
                                                                            <img src="assets/img/profiles/avatar-22.jpg" alt="img" />
                                                                        </a>
                                                                        <div>
                                                                            <h6><a href="contact-details.html" className="fw-medium">Dawn
                                                                                Mercha</a></h6>
                                                                            <p className="text-default">Technician</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="dropdown table-action">
                                                                        <a href="#" className="action-icon " data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="fa fa-ellipsis-v"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i className="ti ti-edit text-blue"></i> Edit</a>
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash text-danger"></i> Delete</a>
                                                                            <a className="dropdown-item" href="contact-details.html"><i className="ti ti-eye text-blue-light"></i> Preview</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-block">
                                                                    <div className="d-flex flex-column mb-3">
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-mail text-dark me-1"></i><a href="https://crms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="85e1e4f2ebe8e0f7e6ede4c5e0fde4e8f5e9e0abe6eae8">[email&#160;protected]</a>
                                                                        </p>
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-phone text-dark me-1"></i>+1 478845447</p>
                                                                        <p className="text-default d-inline-flex align-items-center"><i className="ti ti-map-pin-pin text-dark me-1"></i>Japan</p>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="badge badge-tag badge-success-light me-2">Collab</span>
                                                                        <span className="badge badge-tag badge-warning-light">Rated</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                                                                    <div className="d-flex align-items-center grid-social-links">
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-mail fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-phone-check fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-message-circle-share fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-brand-skype fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle"><i className="ti ti-brand-facebook fs-14"></i></a>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="set-star text-default me-2">
                                                                            <i className="fa fa-star filled me-1"></i>3.5
                                                                        </div>
                                                                        <a href="javascript:void(0);" className="avatar avatar-md" data-bs-toggle="tooltip" data-bs-original-title="Mervin" data-bs-placement="top">
                                                                            <img src="assets/img/profiles/avatar-14.jpg" alt="img" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-3 col-xl-4 col-md-6">
                                                        <div className="card border">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="contact-details.html" className="avatar avatar-md flex-shrink-0 me-2">
                                                                            <img src="assets/img/profiles/avatar-24.jpg" alt="img" />
                                                                        </a>
                                                                        <div>
                                                                            <h6><a href="contact-details.html" className="fw-medium">Rachel
                                                                                Hampton</a></h6>
                                                                            <p className="text-default">Software Developer</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="dropdown table-action">
                                                                        <a href="#" className="action-icon " data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="fa fa-ellipsis-v"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i className="ti ti-edit text-blue"></i> Edit</a>
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash text-danger"></i> Delete</a>
                                                                            <a className="dropdown-item" href="contact-details.html"><i className="ti ti-eye text-blue-light"></i> Preview</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-block">
                                                                    <div className="d-flex flex-column mb-3">
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-mail text-dark me-1"></i><a href="https://crms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="1062717378757c507568717d607c753e737f7d">[email&#160;protected]</a>
                                                                        </p>
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-phone text-dark me-1"></i>+1 215544845</p>
                                                                        <p className="text-default d-inline-flex align-items-center"><i className="ti ti-map-pin-pin text-dark me-1"></i>Indonesia
                                                                        </p>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="badge badge-tag badge-success-light me-2">Collab</span>
                                                                        <span className="badge badge-tag badge-warning-light">Rated</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                                                                    <div className="d-flex align-items-center grid-social-links">
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-mail fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-phone-check fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-message-circle-share fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-brand-skype fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle"><i className="ti ti-brand-facebook fs-14"></i></a>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="set-star text-default me-2">
                                                                            <i className="fa fa-star filled me-1"></i>3.5
                                                                        </div>
                                                                        <a href="javascript:void(0);" className="avatar avatar-md" data-bs-toggle="tooltip" data-bs-original-title="Mervin" data-bs-placement="top">
                                                                            <img src="assets/img/profiles/avatar-14.jpg" alt="img" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-3 col-xl-4 col-md-6">
                                                        <div className="card border">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="contact-details.html" className="avatar avatar-md flex-shrink-0 me-2">
                                                                            <img src="assets/img/profiles/avatar-25.jpg" alt="img" />
                                                                        </a>
                                                                        <div>
                                                                            <h6><a href="contact-details.html" className="fw-medium">Jonelle
                                                                                Curtiss</a></h6>
                                                                            <p className="text-default">Supervisor</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="dropdown table-action">
                                                                        <a href="#" className="action-icon " data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="fa fa-ellipsis-v"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i className="ti ti-edit text-blue"></i> Edit</a>
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash text-danger"></i> Delete</a>
                                                                            <a className="dropdown-item" href="contact-details.html"><i className="ti ti-eye text-blue-light"></i> Preview</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-block">
                                                                    <div className="d-flex flex-column mb-3">
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-mail text-dark me-1"></i><a href="https://crms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f69c9998939a9a93b6938e979b869a93d895999b">[email&#160;protected]</a>
                                                                        </p>
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-phone text-dark me-1"></i>+1 121145471</p>
                                                                        <p className="text-default d-inline-flex align-items-center"><i className="ti ti-map-pin-pin text-dark me-1"></i>Cuba</p>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="badge badge-tag badge-success-light me-2">Collab</span>
                                                                        <span className="badge badge-tag badge-warning-light">Rated</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                                                                    <div className="d-flex align-items-center grid-social-links">
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-mail fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-phone-check fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-message-circle-share fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-brand-skype fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle"><i className="ti ti-brand-facebook fs-14"></i></a>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="set-star text-default me-2">
                                                                            <i className="fa fa-star filled me-1"></i>3.5
                                                                        </div>
                                                                        <a href="javascript:void(0);" className="avatar avatar-md" data-bs-toggle="tooltip" data-bs-original-title="Mervin" data-bs-placement="top">
                                                                            <img src="assets/img/profiles/avatar-14.jpg" alt="img" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-3 col-xl-4 col-md-6">
                                                        <div className="card border">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="contact-details.html" className="avatar avatar-md flex-shrink-0 me-2">
                                                                            <img src="assets/img/profiles/avatar-26.jpg" alt="img" />
                                                                        </a>
                                                                        <div>
                                                                            <h6><a href="contact-details.html" className="fw-medium">Jonathan</a></h6>
                                                                            <p className="text-default">Team Lead Dev</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="dropdown table-action">
                                                                        <a href="#" className="action-icon " data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="fa fa-ellipsis-v"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i className="ti ti-edit text-blue"></i> Edit</a>
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash text-danger"></i> Delete</a>
                                                                            <a className="dropdown-item" href="contact-details.html"><i className="ti ti-eye text-blue-light"></i> Preview</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-block">
                                                                    <div className="d-flex flex-column mb-3">
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-mail text-dark me-1"></i><a href="https://crms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="254f4a4b44514d444b65405d44485549400b464a48">[email&#160;protected]</a>
                                                                        </p>
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-phone text-dark me-1"></i>+1 321454789</p>
                                                                        <p className="text-default d-inline-flex align-items-center"><i className="ti ti-map-pin-pin text-dark me-1"></i>Isreal</p>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="badge badge-tag badge-success-light me-2">Collab</span>
                                                                        <span className="badge badge-tag badge-warning-light">Rated</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                                                                    <div className="d-flex align-items-center grid-social-links">
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-mail fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-phone-check fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-message-circle-share fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-brand-skype fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle"><i className="ti ti-brand-facebook fs-14"></i></a>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="set-star text-default me-2">
                                                                            <i className="fa fa-star filled me-1"></i>2.7
                                                                        </div>
                                                                        <a href="javascript:void(0);" className="avatar avatar-md" data-bs-toggle="tooltip" data-bs-original-title="Mervin" data-bs-placement="top">
                                                                            <img src="assets/img/profiles/avatar-14.jpg" alt="img" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-3 col-xl-4 col-md-6">
                                                        <div className="card border">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="contact-details.html" className="avatar avatar-md flex-shrink-0 me-2">
                                                                            <img src="assets/img/profiles/avatar-01.jpg" alt="img" />
                                                                        </a>
                                                                        <div>
                                                                            <h6><a href="contact-details.html" className="fw-medium">Brook</a></h6>
                                                                            <p className="text-default">Team Lead Dev</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="dropdown table-action">
                                                                        <a href="#" className="action-icon " data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="fa fa-ellipsis-v"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i className="ti ti-edit text-blue"></i> Edit</a>
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash text-danger"></i> Delete</a>
                                                                            <a className="dropdown-item" href="contact-details.html"><i className="ti ti-eye text-blue-light"></i> Preview</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-block">
                                                                    <div className="d-flex flex-column mb-3">
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-mail text-dark me-1"></i><a href="https://crms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6a08180505012a0f120b071a060f44090507">[email&#160;protected]</a>
                                                                        </p>
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-phone text-dark me-1"></i>+1 278907145</p>
                                                                        <p className="text-default d-inline-flex align-items-center"><i className="ti ti-map-pin-pin text-dark me-1"></i>Colombia
                                                                        </p>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="badge badge-tag badge-success-light me-2">Collab</span>
                                                                        <span className="badge badge-tag badge-warning-light">Rated</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                                                                    <div className="d-flex align-items-center grid-social-links">
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-mail fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-phone-check fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-message-circle-share fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-brand-skype fs-14"></i></a>
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle"><i className="ti ti-brand-facebook fs-14"></i></a>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="set-star text-default me-2">
                                                                            <i className="fa fa-star filled me-1"></i>3.0
                                                                        </div>
                                                                        <a href="javascript:void(0);" className="avatar avatar-md" data-bs-toggle="tooltip" data-bs-original-title="Mervin" data-bs-placement="top">
                                                                            <img src="assets/img/profiles/avatar-14.jpg" alt="img" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-3 col-xl-4 col-md-6">
                                                        <div className="card border">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="contact-details.html" className="avatar avatar-md flex-shrink-0 me-2">
                                                                            <img src="assets/img/profiles/avatar-06.jpg" alt="img" />
                                                                        </a>
                                                                        <div>
                                                                            <h6><a href="contact-details.html" className="fw-medium">Eric
                                                                                Adams</a></h6>
                                                                            <p className="text-default">HR Manager</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="dropdown table-action">
                                                                        <a href="#" className="action-icon " data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="fa fa-ellipsis-v"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i className="ti ti-edit text-blue"></i> Edit</a>
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash text-danger"></i> Delete</a>
                                                                            <a className="dropdown-item" href="contact-details.html"><i className="ti ti-eye text-blue-light"></i> Preview</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-block">
                                                                    <div className="d-flex flex-column mb-3">
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-mail text-dark me-1"></i><a href="https://crms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="debbacb7bdbfbabfb3ad9ebba6bfb3aeb2bbf0bdb1b3">[email&#160;protected]</a>
                                                                        </p>
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-phone text-dark me-1"></i>+1 19023-78104
                                                                        </p>
                                                                        <p className="text-default d-inline-flex align-items-center"><i className="ti ti-map-pin-pin text-dark me-1"></i>France</p>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="badge badge-tag badge-success-light me-2">Collab</span>
                                                                        <span className="badge badge-tag badge-warning-light">Rated</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                                                                    <div className="d-flex align-items-center grid-social-links">
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-mail fs-14"></i></a>
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
                                                    <div className="col-xxl-3 col-xl-4 col-md-6">
                                                        <div className="card border">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <div className="d-flex align-items-center">
                                                                        <a href="contact-details.html" className="avatar avatar-md flex-shrink-0 me-2">
                                                                            <img src="assets/img/profiles/avatar-05.jpg" alt="img" />
                                                                        </a>
                                                                        <div>
                                                                            <h6><a href="contact-details.html" className="fw-medium">Richard
                                                                                Cooper</a></h6>
                                                                            <p className="text-default">Devops Engineer</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="dropdown table-action">
                                                                        <a href="#" className="action-icon " data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="fa fa-ellipsis-v"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i className="ti ti-edit text-blue"></i> Edit</a>
                                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_contact"><i className="ti ti-trash text-danger"></i> Delete</a>
                                                                            <a className="dropdown-item" href="contact-details.html"><i className="ti ti-eye text-blue-light"></i> Preview</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-block">
                                                                    <div className="d-flex flex-column mb-3">
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-mail text-dark me-1"></i><a href="https://crms.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="1b697278737a697f5b7e637a766b777e35787476">[email&#160;protected]</a>
                                                                        </p>
                                                                        <p className="text-default d-inline-flex align-items-center mb-2"><i className="ti ti-phone text-dark me-1"></i>+1 18902-63904
                                                                        </p>
                                                                        <p className="text-default d-inline-flex align-items-center"><i className="ti ti-map-pin-pin text-dark me-1"></i>Belgium</p>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="badge badge-tag badge-success-light me-2">Collab</span>
                                                                        <span className="badge badge-tag badge-warning-light">Rated</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                                                                    <div className="d-flex align-items-center grid-social-links">
                                                                        <a href="#" className="avatar avatar-xs text-dark rounded-circle me-1"><i className="ti ti-mail fs-14"></i></a>
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
                                                </div>

                                                <div className="load-btn text-center">
                                                    <a href="javascript:void(0);" className="btn btn-primary">Load More Contacts<i className="ti ti-loader"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="offcanvas offcanvas-end offcanvas-large" tabindex="-1" id="offcanvas_add">
                            <div className="offcanvas-header border-bottom">
                                <h5 className="fw-semibold">Add New Contact</h5>
                                <button type="button" className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle" data-bs-dismiss="offcanvas" aria-label="Close">
                                    <i className="ti ti-x"></i>
                                </button>
                            </div>
                            <div className="offcanvas-body">
                                <form action="https://crms.dreamstechnologies.com/html/template/contact-grid.html">
                                    <div className="accordion" id="main_accordion">

                                        <div className="accordion-item rounded mb-3">
                                            <div className="accordion-header">
                                                <a href="#" className="accordion-button accordion-custom-button bg-white rounded fw-medium text-dark" data-bs-toggle="collapse" data-bs-target="#basic">
                                                    <span className="avatar avatar-md rounded text-dark border me-2"><i className="ti ti-user-plus fs-20"></i></span>
                                                    Basic Info
                                                </a>
                                            </div>
                                            <div className="accordion-collapse collapse show" id="basic" data-bs-parent="#main_accordion">
                                                <div className="accordion-body border-top">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <div className="profile-upload">
                                                                    <div className="profile-upload-img">
                                                                        <span><i className="ti ti-photo"></i></span>
                                                                        <img src="assets/img/profiles/avatar-20.jpg" alt="img" className="preview1" />
                                                                            <button type="button" className="profile-remove">
                                                                                <i className="ti ti-x"></i>
                                                                            </button>
                                                                    </div>
                                                                    <div className="profile-upload-content">
                                                                        <label className="profile-upload-btn">
                                                                            <i className="ti ti-file-broken"></i> Upload File
                                                                            <input type="file" className="input-img" />
                                                                        </label>
                                                                        <p>JPG, GIF or PNG. Max size of 800K</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">First Name <span className="text-danger">*</span></label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Last Name <span className="text-danger">*</span></label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Job Title <span className="text-danger">*</span></label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Company Name</label>
                                                                <select className="select2">
                                                                    <option>Choose</option>
                                                                    <option>NovaWave LLC</option>
                                                                    <option>BlueSky Industries</option>
                                                                    <option>Silver Hawk</option>
                                                                    <option>Summit Peak</option>
                                                                    <option>RiverStone Ventur</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <label className="col-form-label">Email <span className="text-danger">*</span></label>
                                                                    <div className="status-toggle small-toggle-btn d-flex align-items-center">
                                                                        <span className="me-2 label-text">Email Opt Out</span>
                                                                        <input type="checkbox" id="user" className="check" checked />
                                                                            <label for="user" className="checktoggle"></label>
                                                                    </div>
                                                                </div>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Phone 1 <span className="text-danger">*</span></label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Phone 2</label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Fax <span className="text-danger">*</span></label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <label className="col-form-label">Deals</label>
                                                                    <a href="#" className="label-add" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_add_2"><i className="ti ti-square-rounded-plus"></i>Add New</a>
                                                                </div>
                                                                <select className="select2">
                                                                    <option>Choose</option>
                                                                    <option>Collins</option>
                                                                    <option>Konopelski</option>
                                                                    <option>Adams</option>
                                                                    <option>Schumm</option>
                                                                    <option>Wisozk</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Date of Birth</label>
                                                                <div className="icon-form-end">
                                                                    <span className="form-icon"><i className="ti ti-calendar-event"></i></span>
                                                                    <input type="text" className="form-control " />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Reviews </label>
                                                                <div className="icon-form-end">
                                                                    <span className="form-icon"><i className="ti ti-star"></i></span>
                                                                    <input type="text" className="form-control" placeholder="4.2" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="fmb-3">
                                                                <label className="col-form-label">Owner</label>
                                                                <select className="select-img">
                                                                    <option data-image="assets/img/profiles/avatar-14.jpg" selected>
                                                                        Jerald</option>
                                                                    <option data-image="assets/img/profiles/avatar-15.jpg">Guillory
                                                                    </option>
                                                                    <option data-image="assets/img/profiles/avatar-16.jpg">Jami</option>
                                                                    <option data-image="assets/img/profiles/avatar-13.jpg">Theresa
                                                                    </option>
                                                                    <option data-image="assets/img/profiles/avatar-24.jpg">Espinosa
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Tags </label>
                                                                <input className="input-tags form-control" type="text" data-role="tagsinput" name="Label" value="Collab" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Source <span className="text-danger">*</span></label>
                                                                <select className="select2">
                                                                    <option>Choose</option>
                                                                    <option>Phone Calls</option>
                                                                    <option>Social Media</option>
                                                                    <option>Referral Sites</option>
                                                                    <option>Web Analytics</option>
                                                                    <option>Previous Purchases</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Industry <span className="text-danger">*</span></label>
                                                                <select className="select">
                                                                    <option>Choose</option>
                                                                    <option>Retail Industry</option>
                                                                    <option>Banking</option>
                                                                    <option>Hotels</option>
                                                                    <option>Financial Services</option>
                                                                    <option>Insurance</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Currency <span className="text-danger">*</span></label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Language <span className="text-danger">*</span></label>
                                                                <select className="select">
                                                                    <option>Choose</option>
                                                                    <option>English</option>
                                                                    <option>Arabic</option>
                                                                    <option>Chinese</option>
                                                                    <option>Hindi</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-0">
                                                                <label className="col-form-label">Description <span className="text-danger">*</span></label>
                                                                <textarea className="form-control" rows="5"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="accordion-item border-top rounded mb-3">
                                            <div className="accordion-header">
                                                <a href="#" className="accordion-button accordion-custom-button rounded bg-white fw-medium text-dark" data-bs-toggle="collapse" data-bs-target="#address">
                                                    <span className="avatar avatar-md rounded text-dark border me-2"><i className="ti ti-map-pin-cog fs-20"></i></span>
                                                    Address Info
                                                </a>
                                            </div>
                                            <div className="accordion-collapse collapse" id="address" data-bs-parent="#main_accordion">
                                                <div className="accordion-body border-top">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Street Address </label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">City </label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">State / Province </label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3 mb-md-0">
                                                                <label className="col-form-label">Country</label>
                                                                <select className="select">
                                                                    <option>Choose</option>
                                                                    <option>India</option>
                                                                    <option>USA</option>
                                                                    <option>France</option>
                                                                    <option>UK</option>
                                                                    <option>UAE</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-0">
                                                                <label className="col-form-label">Zipcode </label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="accordion-item border-top rounded mb-3">
                                            <div className="accordion-header">
                                                <a href="#" className="accordion-button accordion-custom-button rounded bg-white fw-medium text-dark" data-bs-toggle="collapse" data-bs-target="#social">
                                                    <span className="avatar avatar-md rounded text-dark border me-2"><i className="ti ti-social fs-20"></i></span>
                                                    Social Profile
                                                </a>
                                            </div>
                                            <div className="accordion-collapse collapse" id="social" data-bs-parent="#main_accordion">
                                                <div className="accordion-body border-top">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Facebook</label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Skype </label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Linkedin </label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Twitter</label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3 mb-md-0">
                                                                <label className="col-form-label">Whatsapp</label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-0">
                                                                <label className="col-form-label">Instagram</label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="accordion-item border-top rounded mb-3">
                                            <div className="accordion-header">
                                                <a href="#" className="accordion-button accordion-custom-button rounded bg-white fw-medium text-dark" data-bs-toggle="collapse" data-bs-target="#access-info">
                                                    <span className="avatar avatar-md rounded text-dark border me-2"><i className="ti ti-accessible fs-20"></i></span>
                                                    Access
                                                </a>
                                            </div>
                                            <div className="accordion-collapse collapse" id="access-info" data-bs-parent="#main_accordion">
                                                <div className="accordion-body border-top">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Visibility</label>
                                                                <div className="d-flex flex-wrap">
                                                                    <div className="me-2">
                                                                        <input type="radio" className="status-radio" id="public" name="visible" />
                                                                            <label for="public">Public</label>
                                                                    </div>
                                                                    <div className="me-2">
                                                                        <input type="radio" className="status-radio" id="private" name="visible" />
                                                                            <label for="private">Private</label>
                                                                    </div>
                                                                    <div data-bs-toggle="modal" data-bs-target="#access_view">
                                                                        <input type="radio" className="status-radio" id="people" name="visible" />
                                                                            <label for="people">Select People</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mb-0">
                                                                <label className="col-form-label">Status</label>
                                                                <div className="d-flex flex-wrap">
                                                                    <div className="me-2">
                                                                        <input type="radio" className="status-radio" id="active" name="status" checked />
                                                                            <label for="active">Active</label>
                                                                    </div>
                                                                    <div>
                                                                        <input type="radio" className="status-radio" id="inactive" name="status" />
                                                                            <label for="inactive">Inactive</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="d-flex align-items-center justify-content-end">
                                        <button type="button" data-bs-dismiss="offcanvas" className="btn btn-light me-2">Cancel</button>
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#create_success">Create</button>
                                    </div>
                                </form>
                            </div>
                        </div>


                        <div className="offcanvas offcanvas-end offcanvas-large" tabindex="-1" id="offcanvas_edit">
                            <div className="offcanvas-header border-bottom">
                                <h5 className="fw-semibold">Edit Contact</h5>
                                <button type="button" className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle" data-bs-dismiss="offcanvas" aria-label="Close">
                                    <i className="ti ti-x"></i>
                                </button>
                            </div>
                            <div className="offcanvas-body">
                                <form action="https://crms.dreamstechnologies.com/html/template/contact-grid.html">
                                    <div className="accordion" id="main_accordion_2">

                                        <div className="accordion-item rounded mb-3">
                                            <div className="accordion-header">
                                                <a href="#" className="accordion-button accordion-custom-button bg-white rounded fw-medium text-dark" data-bs-toggle="collapse" data-bs-target="#basic-2">
                                                    <span className="avatar avatar-md rounded text-dark border me-2"><i className="ti ti-user-plus fs-20"></i></span>
                                                    Basic Info
                                                </a>
                                            </div>
                                            <div className="accordion-collapse collapse show" id="basic-2" data-bs-parent="#main_accordion_2">
                                                <div className="accordion-body border-top">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <div className="profile-upload">
                                                                    <div className="profile-upload-img">
                                                                        <span><i className="ti ti-photo"></i></span>
                                                                        <img src="assets/img/profiles/avatar-20.jpg" alt="img" className="preview1" />
                                                                            <button type="button" className="profile-remove">
                                                                                <i className="ti ti-x"></i>
                                                                            </button>
                                                                    </div>
                                                                    <div className="profile-upload-content">
                                                                        <label className="profile-upload-btn">
                                                                            <i className="ti ti-file-broken"></i> Upload File
                                                                            <input type="file" className="input-img" />
                                                                        </label>
                                                                        <p>JPG, GIF or PNG. Max size of 800K</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">First Name <span className="text-danger">*</span></label>
                                                                <input type="text" className="form-control" value="Darlee" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Last Name <span className="text-danger">*</span></label>
                                                                <input type="text" className="form-control" value="Robertson" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Job Title <span className="text-danger">*</span></label>
                                                                <input type="text" className="form-control" value="Facility Manager" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Company Name</label>
                                                                <select className="select2">
                                                                    <option>Choose</option>
                                                                    <option selected>NovaWave LLC</option>
                                                                    <option>BlueSky Industries</option>
                                                                    <option>Silver Hawk</option>
                                                                    <option>Summit Peak</option>
                                                                    <option>RiverStone Ventur</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <label className="col-form-label">Email <span className="text-danger">*</span></label>
                                                                    <div className="status-toggle small-toggle-btn d-flex align-items-center">
                                                                        <span className="me-2 label-text">Email Opt Out</span>
                                                                        <input type="checkbox" id="user2" className="check" checked value="robertson@example.com" />
                                                                            <label for="user2" className="checktoggle"></label>
                                                                    </div>
                                                                </div>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Phone 1 <span className="text-danger">*</span></label>
                                                                <input type="text" className="form-control" value="6234567890" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Phone 2</label>
                                                                <input type="text" className="form-control" value="7234567899" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Fax <span className="text-danger">*</span></label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <label className="col-form-label">Deals</label>
                                                                    <a href="#" className="label-add" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_add_2"><i className="ti ti-square-rounded-plus"></i>Add New</a>
                                                                </div>
                                                                <select className="select2">
                                                                    <option>Choose</option>
                                                                    <option selected>Collins</option>
                                                                    <option>Konopelski</option>
                                                                    <option>Adams</option>
                                                                    <option>Schumm</option>
                                                                    <option>Wisozk</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Date of Birth</label>
                                                                <div className="icon-form-end">
                                                                    <span className="form-icon"><i className="ti ti-calendar-event"></i></span>
                                                                    <input type="text" className="form-control " value="29-02-2020" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Reviews </label>
                                                                <div className="icon-form-end">
                                                                    <span className="form-icon"><i className="ti ti-star"></i></span>
                                                                    <input type="text" className="form-control" placeholder="4.2" value="4.2" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="fmb-3">
                                                                <label className="col-form-label">Owner</label>
                                                                <select className="select-img">
                                                                    <option data-image="assets/img/profiles/avatar-14.jpg" selected>
                                                                        Jerald</option>
                                                                    <option data-image="assets/img/profiles/avatar-15.jpg">Guillory
                                                                    </option>
                                                                    <option data-image="assets/img/profiles/avatar-16.jpg">Jami</option>
                                                                    <option data-image="assets/img/profiles/avatar-13.jpg">Theresa
                                                                    </option>
                                                                    <option data-image="assets/img/profiles/avatar-24.jpg">Espinosa
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Tags </label>
                                                                <input className="input-tags form-control" type="text" data-role="tagsinput" name="Label" value="Collab" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Source <span className="text-danger">*</span></label>
                                                                <select className="select2">
                                                                    <option>Choose</option>
                                                                    <option selected>Phone Calls</option>
                                                                    <option>Social Media</option>
                                                                    <option>Referral Sites</option>
                                                                    <option>Web Analytics</option>
                                                                    <option>Previous Purchases</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Industry <span className="text-danger">*</span></label>
                                                                <select className="select">
                                                                    <option>Choose</option>
                                                                    <option>Retail Industry</option>
                                                                    <option selected>Banking</option>
                                                                    <option>Hotels</option>
                                                                    <option>Financial Services</option>
                                                                    <option>Insurance</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Currency <span className="text-danger">*</span></label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Language <span className="text-danger">*</span></label>
                                                                <select className="select">
                                                                    <option>Choose</option>
                                                                    <option selected>English</option>
                                                                    <option>Arabic</option>
                                                                    <option>Chinese</option>
                                                                    <option>Hindi</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-0">
                                                                <label className="col-form-label">Description <span className="text-danger">*</span></label>
                                                                <textarea className="form-control" rows="5"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="accordion-item border-top rounded mb-3">
                                            <div className="accordion-header">
                                                <a href="#" className="accordion-button accordion-custom-button rounded bg-white fw-medium text-dark" data-bs-toggle="collapse" data-bs-target="#address-2">
                                                    <span className="avatar avatar-md rounded text-dark border me-2"><i className="ti ti-map-pin-cog fs-20"></i></span>
                                                    Address Info
                                                </a>
                                            </div>
                                            <div className="accordion-collapse collapse" id="address-2" data-bs-parent="#main_accordion_2">
                                                <div className="accordion-body border-top">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Street Address </label>
                                                                <input type="text" className="form-control" value="22, Ave Street" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">City </label>
                                                                <input type="text" className="form-control" value="Denver" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">State / Province </label>
                                                                <input type="text" className="form-control" value="Colorado" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3 mb-md-0">
                                                                <label className="col-form-label">Country</label>
                                                                <select className="select">
                                                                    <option>Choose</option>
                                                                    <option>India</option>
                                                                    <option selected>USA</option>
                                                                    <option>France</option>
                                                                    <option>UK</option>
                                                                    <option>UAE</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-0">
                                                                <label className="col-form-label">Zipcode </label>
                                                                <input type="text" className="form-control" value="546" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="accordion-item border-top rounded mb-3">
                                            <div className="accordion-header">
                                                <a href="#" className="accordion-button accordion-custom-button rounded bg-white fw-medium text-dark" data-bs-toggle="collapse" data-bs-target="#social-2">
                                                    <span className="avatar avatar-md rounded text-dark border me-2"><i className="ti ti-social fs-20"></i></span>
                                                    Social Profile
                                                </a>
                                            </div>
                                            <div className="accordion-collapse collapse" id="social-2" data-bs-parent="#main_accordion_2">
                                                <div className="accordion-body border-top">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Facebook</label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Skype </label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Linkedin </label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Twitter</label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3 mb-md-0">
                                                                <label className="col-form-label">Whatsapp</label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-0">
                                                                <label className="col-form-label">Instagram</label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="accordion-item border-top rounded mb-3">
                                            <div className="accordion-header">
                                                <a href="#" className="accordion-button accordion-custom-button rounded bg-white fw-medium text-dark" data-bs-toggle="collapse" data-bs-target="#access-info-2">
                                                    <span className="avatar avatar-md rounded text-dark border me-2"><i className="ti ti-accessible fs-20"></i></span>
                                                    Access
                                                </a>
                                            </div>
                                            <div className="accordion-collapse collapse" id="access-info-2" data-bs-parent="#main_accordion_2">
                                                <div className="accordion-body border-top">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label className="col-form-label">Visibility</label>
                                                                <div className="d-flex flex-wrap">
                                                                    <div className="me-2">
                                                                        <input type="radio" className="status-radio" id="public2" name="visible" />
                                                                            <label for="public2">Public</label>
                                                                    </div>
                                                                    <div className="me-2">
                                                                        <input type="radio" className="status-radio" id="private2" name="visible" />
                                                                            <label for="private2">Private</label>
                                                                    </div>
                                                                    <div data-bs-toggle="modal" data-bs-target="#access_view">
                                                                        <input type="radio" className="status-radio" id="people2" name="visible" />
                                                                            <label for="people2">Select People</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mb-0">
                                                                <label className="col-form-label">Status</label>
                                                                <div className="d-flex flex-wrap">
                                                                    <div className="me-2">
                                                                        <input type="radio" className="status-radio" id="active2" name="status" checked />
                                                                            <label for="active2">Active</label>
                                                                    </div>
                                                                    <div>
                                                                        <input type="radio" className="status-radio" id="inactive2" name="status" />
                                                                            <label for="inactive2">Inactive</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="d-flex align-items-center justify-content-end">
                                        <button type="button" data-bs-dismiss="offcanvas" className="btn btn-light me-2">Cancel</button>
                                        <button type="button" className="btn btn-primary">Save Changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>


                        <div className="offcanvas offcanvas-end offcanvas-large" tabindex="-1" id="offcanvas_add_2">
                            <div className="offcanvas-header border-bottom">
                                <h5 className="fw-semibold">Add New Deals</h5>
                                <button type="button" className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle" data-bs-dismiss="offcanvas" aria-label="Close">
                                    <i className="ti ti-x"></i>
                                </button>
                            </div>
                            <div className="offcanvas-body">
                                <form action="https://crms.dreamstechnologies.com/html/template/contact-grid.html">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="col-form-label">Deal Name <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <label className="col-form-label">Pipeine <span className="text-danger">*</span></label>
                                                </div>
                                                <select className="select2">
                                                    <option>Choose</option>
                                                    <option>Sales</option>
                                                    <option>Marketing</option>
                                                    <option>Calls</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="col-form-label">Status <span className="text-danger">*</span></label>
                                                <select className="select2">
                                                    <option>Choose</option>
                                                    <option>Open</option>
                                                    <option>Lost</option>
                                                    <option>Won</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="mb-3">
                                                <label className="col-form-label">Deal Value<span className="text-danger"> *</span></label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="mb-3">
                                                <label className="col-form-label">Currency <span className="text-danger">*</span></label>
                                                <select className="select">
                                                    <option>Select</option>
                                                    <option>$</option>
                                                    <option>€</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="mb-3">
                                                <label className="col-form-label">Period <span className="text-danger">*</span></label>
                                                <select className="select">
                                                    <option>Choose</option>
                                                    <option>Days</option>
                                                    <option>Month</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="mb-3">
                                                <label className="col-form-label">Period Value <span className="text-danger">*</span></label>
                                                <input className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="col-form-label">Contact <span className="text-danger">*</span></label>
                                                <select className="multiple-img" multiple="multiple">
                                                    <option data-image="assets/img/profiles/avatar-19.jpg" selected>Darlee Robertson
                                                    </option>
                                                    <option data-image="assets/img/profiles/avatar-20.jpg">Sharon Roy</option>
                                                    <option data-image="assets/img/profiles/avatar-21.jpg">Vaughan</option>
                                                    <option data-image="assets/img/profiles/avatar-23.jpg">Jessica</option>
                                                    <option data-image="assets/img/profiles/avatar-16.jpg">Carol Thomas</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label className="col-form-label">Project <span className="text-danger">*</span></label>
                                                <select className="select" multiple="multiple">
                                                    <option selected>Devops Design</option>
                                                    <option selected>MargrateDesign</option>
                                                    <option selected>UI for Chat</option>
                                                    <option>Web Chat</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="col-form-label">Due Date <span className="text-danger">*</span></label>
                                                <div className="icon-form">
                                                    <span className="form-icon"><i className="ti ti-calendar-check"></i></span>
                                                    <input type="text" className="form-control " placeholder />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="col-form-label">Expected Closing Date <span className="text-danger">*</span></label>
                                                <div className="icon-form">
                                                    <span className="form-icon"><i className="ti ti-calendar-check"></i></span>
                                                    <input type="text" className="form-control " placeholder />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="col-form-label">Assignee <span className="text-danger">*</span></label>
                                                <select className="multiple-img" multiple="multiple">
                                                    <option data-image="assets/img/profiles/avatar-19.jpg">Darlee Robertson</option>
                                                    <option data-image="assets/img/profiles/avatar-20.jpg" selected>Sharon Roy</option>
                                                    <option data-image="assets/img/profiles/avatar-21.jpg">Vaughan</option>
                                                    <option data-image="assets/img/profiles/avatar-23.jpg">Jessica</option>
                                                    <option data-image="assets/img/profiles/avatar-16.jpg">Carol Thomas</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="col-form-label">Follow Up Date <span className="text-danger">*</span></label>
                                                <div className="icon-form">
                                                    <span className="form-icon"><i className="ti ti-calendar-check"></i></span>
                                                    <input type="text" className="form-control " placeholder />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="col-form-label">Source <span className="text-danger">*</span></label>
                                                <select className="select">
                                                    <option>Select</option>
                                                    <option>Google</option>
                                                    <option>Social Media</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="col-form-label">Tags <span className="text-danger">*</span></label>
                                                <input className="input-tags form-control" type="text" data-role="tagsinput" name="Label" value="Collab, Rated" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="col-form-label">Priority <span className="text-danger">*</span></label>
                                                <select className="select">
                                                    <option>Select</option>
                                                    <option>Highy</option>
                                                    <option>Low</option>
                                                    <option>Medium</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="col-form-label">Description <span className="text-danger">*</span></label>
                                                <div className="summernote"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-end">
                                        <button type="button" data-bs-dismiss="offcanvas" className="btn btn-light me-2">Cancel</button>
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#create_success_2">Create</button>
                                    </div>
                                </form>
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
                                            <p className="mb-0">Are you sure you want to remove <br /> contact you selected.</p>
                                            <div className="d-flex align-items-center justify-content-center mt-4">
                                                <a href="#" className="btn btn-light me-2" data-bs-dismiss="modal">Cancel</a>
                                                <a href="contact-grid.html" className="btn btn-danger">Yes, Delete it</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="modal custom-modal fade" id="create_success_2" role="dialog">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header border-0 m-0 justify-content-end">
                                        <button className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                            <i className="ti ti-x"></i>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="success-message text-center">
                                            <div className="success-popup-icon bg-light-blue">
                                                <i className="ti ti-medal"></i>
                                            </div>
                                            <h3>Deal Created Successfully!!!</h3>
                                            <p>View the details of deal, created</p>
                                            <div className="col-lg-12 text-center modal-btn">
                                                <a href="#" className="btn btn-light" data-bs-dismiss="modal">Cancel</a>
                                                <a href="deals-details.html" className="btn btn-primary">View Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="modal custom-modal fade" id="create_success" role="dialog">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header border-0 m-0 justify-content-end">
                                        <button className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                            <i className="ti ti-x"></i>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="success-message text-center">
                                            <div className="success-popup-icon bg-light-blue">
                                                <i className="ti ti-user-plus"></i>
                                            </div>
                                            <h3>Contact Created Successfully!!!</h3>
                                            <p>View the details of contact, created</p>
                                            <div className="col-lg-12 text-center modal-btn">
                                                <a href="#" className="btn btn-light" data-bs-dismiss="modal">Cancel</a>
                                                <a href="contact-details.html" className="btn btn-primary">View Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="modal fade" id="access_view" role="dialog">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Access For</h5>
                                        <button className="btn-close custom-btn-close border p-1 me-0 text-dark" data-bs-dismiss="modal" aria-label="Close">
                                            <i className="ti ti-x"></i>
                                        </button>
                                    </div>
                                    <form action="https://crms.dreamstechnologies.com/html/template/contact-grid.html">
                                        <div className="modal-body">
                                            <div className="icon-form mb-3">
                                                <span className="form-icon"><i className="ti ti-search"></i></span>
                                                <input type="text" className="form-control" placeholder="Search"  />
                                            </div>
                                            <div className="access-wrap mb-0">
                                                <ul>
                                                    <li className="select-people-checkbox">
                                                        <label className="checkboxs">
                                                            <input type="checkbox"  />
                                                                <span className="checkmarks"></span>
                                                                <span className="people-profile">
                                                                    <img src="assets/img/profiles/avatar-19.jpg" alt  />
                                                                        <a href="#">Darlee Robertson</a>
                                                                </span>
                                                        </label>
                                                    </li>
                                                    <li className="select-people-checkbox">
                                                        <label className="checkboxs">
                                                            <input type="checkbox"  />
                                                                <span className="checkmarks"></span>
                                                                <span className="people-profile">
                                                                    <img src="assets/img/profiles/avatar-20.jpg" alt  />
                                                                        <a href="#">Sharon Roy</a>
                                                                </span>
                                                        </label>
                                                    </li>
                                                    <li className="select-people-checkbox">
                                                        <label className="checkboxs">
                                                            <input type="checkbox"  />
                                                                <span className="checkmarks"></span>
                                                                <span className="people-profile">
                                                                    <img src="assets/img/profiles/avatar-21.jpg" alt  />
                                                                        <a href="#">Vaughan</a>
                                                                </span>
                                                        </label>
                                                    </li>
                                                    <li className="select-people-checkbox">
                                                        <label className="checkboxs">
                                                            <input type="checkbox" />
                                                                <span className="checkmarks"></span>
                                                                <span className="people-profile">
                                                                    <img src="assets/img/profiles/avatar-01.jpg" alt />
                                                                        <a href="#">Jessica</a>
                                                                </span>
                                                        </label>
                                                    </li>
                                                    <li className="select-people-checkbox">
                                                        <label className="checkboxs">
                                                            <input type="checkbox" />
                                                                <span className="checkmarks"></span>
                                                                <span className="people-profile">
                                                                    <img src="assets/img/profiles/avatar-16.jpg" alt />
                                                                        <a href="#">Carol Thomas</a>
                                                                </span>
                                                        </label>
                                                    </li>
                                                    <li className="select-people-checkbox">
                                                        <label className="checkboxs">
                                                            <input type="checkbox" />
                                                                <span className="checkmarks"></span>
                                                                <span className="people-profile">
                                                                    <img src="assets/img/profiles/avatar-22.jpg" alt />
                                                                        <a href="#">Dawn Mercha</a>
                                                                </span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <div className="d-flex align-items-center justify-content-end m-0">
                                                <button type="button" className="btn btn-light me-2" data-bs-dismiss="modal">Cancel</button>
                                                <button type="submit" className="btn btn-primary">Confirm</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

            </body>
        </div>
    )
}

export default Users