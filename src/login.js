import React from 'react'

export default function login() {
    return (
        <div>

            <main id="content" role="main" className="main">
                <div className="auth-wrapper">
                    <div className="auth-wrapper-left">
                        <div className="auth-left-cont">
                            <img className="onerror-image" data-onerror-image="assets/admin/img/favicon.png" src="https://6ammart-admin.6amtech.com/storage/app/public/business/2022-03-22-6239a7c93f3c8.png" alt="public/img"/>
                                <h2 className="title">Your <span className="d-block">All Service</span> <strong className="text--039D55">In one field....</strong></h2>
                        </div>
                    </div>
                    <div className="auth-wrapper-right">
                        <label className="badge badge-soft-success __login-badge">
                            Software version : 1.0.0
                        </label>

                        <div className="auth-wrapper-form">

                            <form class action="https://6ammart-admin.6amtech.com/login_submit" method="post" id="form-id">
                                <input type="hidden" name="_token" value="Q1Z04oCrge7EZOZVWwgrbptgo1Fwd1ax4RETNGMC" autocomplete="off"/> <input type="hidden" name="role" value="admin"/>
                                    <div className="auth-header">
                                        <div className="mb-5">
                                            <h2 className="title">Admin Signin</h2>
                                            <div>Welcome back login to your panel.</div>
                                        </div>
                                    </div>

                                    <div className="js-form-message form-group">
                                        <label className="input-label text-capitalize" for="signinSrEmail">Your email</label>
                                        <input type="email" className="form-control form-control-lg" name="email" id="signinSrEmail" tabindex="1" placeholder="email@address.com" value aria-label="email@address.com" required data-msg="Please enter a valid email address."/>
                                    </div>


                                    <div className="js-form-message form-group mb-2">
                                        <label className="input-label" for="signupSrPassword" tabindex="0">
                                            <span className="d-flex justify-content-between align-items-center">
                                                Password
                                            </span>
                                        </label>
                                        <div className="input-group input-group-merge">
                                            <input type="password" className="js-toggle-password form-control form-control-lg" name="password" id="signupSrPassword" placeholder="6+ characters required" value aria-label="6+ characters required" required data-msg="Invalid password warning" data-hs-toggle-password-options="{
                                                &quot;target&quot;: &quot;#changePassTarget&quot;,
                                    &quot;defaultClass&quot;: &quot;tio-hidden-outlined&quot;,
                                    &quot;showClass&quot;: &quot;tio-visible-outlined&quot;,
                                    &quot;classChangeTarget&quot;: &quot;#changePassIcon&quot;
                                    }"/>
                                                <div id="changePassTarget" className="input-group-append">
                                                    <a className="input-group-text" href="javascript:">
                                                        <i id="changePassIcon" className="tio-visible-outlined"></i>
                                                    </a>
                                                </div>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between mt-5">

                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="termsCheckbox" name="remember"/>
                                                    <label className="custom-control-label text-muted" for="termsCheckbox">
                                                        Remember me
                                                    </label>
                                            </div>
                                        </div>


                                        <div className="form-group" id="forget-password" style={{display: ''}}>
                                            <div className="custom-control">
                                                <span type="button" data-toggle="modal" className="text-primary" data-target="#forgetPassModal">Forget Password?</span>
                                            </div>
                                        </div>

                                        <div className="form-group" id="forget-password1" style={{display: 'none'}}>
                                            <div className="custom-control">
                                                <span type="button" data-toggle="modal" className="text-primary" data-target="#forgetPassModal1">Forget Password?</span>
                                            </div>
                                        </div>

                                    </div>
                                    <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response"/>
                                        <input type="hidden" name="set_default_captcha" id="set_default_captcha_value" value="0"/>
                                            <div className="row p-2 d-none" id="reload-captcha">
                                                <div className="col-6 pr-0">
                                                    <input type="text" className="form-control form-control-lg border-0" name="custome_recaptcha" id="custome_recaptcha" required placeholder="Enter recaptcha value" autocomplete="off" value=""/>
                                                </div>
                                                <div className="col-6 bg-white rounded d-flex">
                                                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAKACWAwERAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/Tiu0+fCgAoApaxrVh4f0+W+1O8gsLOIbnnuJAiKPcmmk3sTKUYK8nZHl9n+1p8JtQ16PSIPGdk91I/lK7JIkRfsu9lC8+uce9FrnCsfhnLlUz0zSNes9aa7S3dhNaymKaKRdrqexx/dYcqehB+tNprRnbGale3Q0aksp6xq9loGlXepajcpaWFpE0088hwsaKMkn8Ke5MpKCcpPRGZ4F8d6J8SfDNr4g8PXov8ASrkusU4UrkqxVuCARyD1oasRSqwrQU4O6N+kanlXx2/aO8N/s/W+lSa9ZanfNqLOsSadCj7QuMli7qB1Hcmn5s4cVjKeEtzpu/Y8K1P/AIKQ6VMyxeH/AANqmqTu2xBNMsYJx2CqxJHp+tF0eXLOI7Qg2L8K/wBu3xJ8R/iDZeGF+H6ebcSFHMF0++EDqWUrxjvzSb00Rvgcx+s4mNGrHlTer3t8j640PXINesVuIco2dskTfejYdVNTGSmro+nxeFnhKvs5/J913NGqOMKACgAoAKACgAoAKAPzr8ceIV/an/aXufD3iHXZ/D3gfR3aMQSNtHyMEPTKh3Y/ebhVzyMVdru3Y86OT43Ocxq4TDR9oqSbfL2XVd2+iSv2O3+N/wCzh8F7X4T6rP4OurSy1/T4XuLd11BpmuCi7nVgzHOQDgjjIwPSm4+R6ON4Ox9DDTqrCzjyLmbs9v66bo6b9m74uRRfs+2vjbUbwNf+Hj/ZerIzjfeWkbL5bEEj541l+U9TtZed3AtVqeHg6klhPrMlpHRvv/wVc39C/wCCgvwt1fVDaXDarpcZYql1dWw8ogdztYkZ7cfXHSo06MuObYeTs7o0viZ8YvDnxh/Zc8f654ZupLizhtpLWQzRGNlcFOx7EMD+NO1tiq+Ip4jCVJ0yx+wpHs/Zl8Ln+/NeN/5NSj+lLoisr/3WPz/M9+pHqmfrPh7SvEUKQ6rptnqcSNuRLyBZQp9QGBwfenexEoRnpJXPnP8Aal+Klj8KdGg8FeBNLtV8deIwLaCHT7dFkgiY7d5wOpPC59z2q7tanj46uqEfZUV78jzzxL4Ub9i79nh9RsmSb4heIJVt7jUyNzQFgWYIT/d6e5OaL8q0OSdP+zsNzL45dTidD/Zo+MMHgiy8fab4+ubLVL9Fu2tkvJ43Ctyu91ODnPTGBmsJP2SudeDyvHZjrGv77V0m3r5X/pHtH7Jv7Tmt+M/EN58P/HahfE9mG8m6wAZ9v3lbtuxznvWiakroeDxVX2ssNiVacT6tpHtBQAUAFABQAUAFAHwz+z74e0t/2vvit4e1uwt70zRzvGtxGGIxKuSpPIOH6jmtOrseTk2OxWW5jUlhajhLydr2d9e68nofR3xQ8D/Dvwp4C17UNU03TNNtxYyRiaZtg3bDtCkn7xPpyenNCk2faYrijNvYSjVxUuVp7ve6tb/gbLofBXhLwQt1+x34y8SxxTLdQ63HAkqOQphCpvBHQj5lqV8J8Dh8xxVPJK2Bi/3UpJtW6q2t9z1rwb8O7OL4EaTp/iTwXZa1oviDT459J1rSoV+12l28IJR2ADE71ZsnOSWXOAoq0k1Y+0y/IsmzbC06FCt7OrKKfv6R5lFcyT7uV5Rd3dNxtHlXN5f8IviNY6B+y98VvDFws7Xl3LGYNijaudoJYk8fd7ZrNbHyGXZbicTleMxFJXhStzO/fRep7x+yf8WbzRPgf4Y0S1utC094XuQH1Z58vuuJXzlE2qPmxy3atIxTirn3WQcM4vFZRSxsKUpxkm/d5ekmtm7vboj6I0rx14lntftI0bTfEdmG2vdeHtRVwpAyRsfBJ5HGc80OMdrmeJy+OGn7KtzU5dpxa+fp5nK/Fj9qjQPhX4XnvtR0vVrPVJEYWVhf2hhM8gHTOSMDIyRU8vLqzw8e1gKXtJTi+1ne54v+zL4A8ca74p1D4seI/Df9o+I9Yy9hc6pOIYbSJhwyx4LnK8LgDC/WmrbyPPyzBU5/7Zi5+89kld2/JHoX7TXwD8YfF34Y3KPrsd/rFm4vrbSbe1VIS4B3RI5+Y8E4LdSBnrSbTVkdWa06WKw/s6ELNapt6v8AQ8f+EP7ZdzoXheLwl4zTT7W60uMWL22owTRSSBBtwWUFVYY53Ac0e7JWkc+W5rhKUIxruVOpHqtVp+J5Bb/FG1v/ANqrR/FHhu1IhF5EqwPPlZMDBG/aOD64rGKjS66HHisTSzLOY1MPtJq7ta76u3mforHaePvEMaPJquleHraQBl+wwNdTYPYl8L+IFdF4LbU+uk8JRbjyuTXd2X4HmH7Sya58I/g/q/i3T/F2uXmr2kluiRz3RS3bfMiNlI9p6McYajmXRHDjMzeFoupTow07q/6nZ/AaPxBr/gbwn4p1DxLdXSanp0d1c6fPGJELOmflc/MoBIPU9KTataw4YuGKw8ZukoyaTurr8D1mszEKACgAoA+M/wBpvwN4t+E3xq0v4y+CNMfVY9gj1KzhQvn5drblXnay9+xGe1Xruj53G0quHrrFUlfucX488W/En9tu20jw7pfgCTw3olvciabV7x5GhDYwTuKqOAT8o3H3pb6HNVqV8yShGFl3PWvhT+z/AKl8I/gz8QPCvxI8Q6fceCrlWa3ktdxNuhB3ynco2nOw7fm5HX1atsd9DCSw9CpTryXKeM6F4r+Lnwr+HaeD9H8NR/EHwm5a48O+JtIjllEGXLK6yR/dKuT8rgEEspJXiizW2p50amJoU/ZRjzR6NHB/A/w9f6j8M/jZ4bGkNeeJ1tYQlosIe5WRLjbIqgDOeuQPSlFXTRGDq144bEYaEmlK14pvWz6rrY7j4e6J+0Rp/wAPNK8P6P8ADjT4NLs4niWbVLOBbmVWlaXD+c4b7znAAFNcy0PWwGZZ5gKUKeEnKEY3a1tq+tr/AKHZ/Cyw+MsXxEtLDV/CM3hKaWJimp2AH2RXUEgyqpdSD0/Lg1abe5+gZbxnj61sDn9BV6T3k1769Gml+T8zzT4z/DL43y/Fk+KPFfhd/G8NhOotltw0ti8YOUVUUhgpJyRgZOc1nZtn5vjMHicRjZTow5o3fKm9ktr3fbzOxuv2gv2mdWUw2PgxdGhjcQ/JpDBlOOEO8nnjgAA07SfQ9mjlme4m3JTjFWvrKK076y280rHqvgL9pHxL4G+FurXfxM0y8vfE1gZpEit7YRLIBjbCzDo4+ck44C9zwacdLs+slwtm2EyuWPquFRxTk4wknLl76aNejejEs/iD8AP2lfDaa/4rg0iy1SCM/abfU7jybq32/wC0pUyLjoeR2x2qdz4BVcFjI89WyfnufPXwJ8AeHfit+1VLd+E9JNn4H0ZzOqncVZVG1CSehc5bFTyqV+x52As8equH0UdUfd9wmpeAp42t2l1DQ2b94jjc1uM9j+ftXM+alqtY/kfrMHh83i1UtCt06KRzv7SFvpHjP9nXxw8ipf2sWlT3cXzEbJYkLxtwQcqyg4PpzXTFqSutj43NMLOjRqU60bNIxv2JvEF94i/Zx8MS38wmktvOsoiEC4iikKRrwBnCgDPU96OiOHLZueGjf0PdKR6gUAFABQAdaYBSAz/EOg2XinQr/R9ShFxYX0D288Z/iRhg/Q89aadiJwVSLjLZnxrF8MP2g/2cXvtB+G0sPivwdPI8lp9pELSWZY/3HYEHnJ25UnJwMkU/Q+d9hjcHeFD3o/kd/wDs1/suan4B0O/1/wAS6g9v4/1S5N39st2Ehtc5JVs8PvJO8ehwCDzRex1YPAypRc6j99/h/XU+g/Ct/ql9o0X9t2IsNWhxFdLEwaCSQKN0kJySY2JJXdhscMAQRSZ69NycffVn/W3kbFI0CgAoAr3+m2mqQeRe2sN5DnPlzxh1z64I9zT2N6Nerh5c9Gbi+6bT/A+bPir+wT4D8c3c+paGJPDGpSymWSO1x9lfOSQI8fJyeNpwOm30NHuc6wmAxNbnxtN2t9hqLv3ejT89m3q33vfDHwd4m/Z30Z9I0jwJa6jpwfa95YzE3F2/QSOcs2OOmwAe1ae61Y/QsJkXClako4PGSpTerU1e3dXtFN9rSfzPoaylkubKCSeLyZZI1Z4jzsJHK/h0rN6PQ+ErRjTqyjCV0m7Pv5nI6x4WfTr6W6srKO+0y6UxXmlFQUkUjB+U8Hr0rn5HCXND7j3aeKpY7DfVcY7SW0nr8mdH4e0PS/D2lx2mjaZbaPY5Mi2lpbrAisxyx2KAASSSeOtdB857ONJuEUrLtsaVID//2Q==" className="rounded w-100" />
                                                    <div className="p-3 pr-0 capcha-spin reloadCaptcha">
                                                        <i className="tio-cached"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-lg btn-block btn--primary mt-xxl-3" id="signInBtn">Login</button>
                                        </form>

                                        <div className="auto-fill-data-copy">
                                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                <div>
                                                    <span className="d-block"><strong>Email</strong> : <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="92f3f6fffbfcd2f3f6fffbfcbcf1fdff">[email&#160;protected]</a></span>
                                                    <span className="d-block"><strong>Password</strong> : 12345678</span>
                                                </div>
                                                <div>
                                                    <button className="btn action-btn btn--primary m-0 copy_cred"><i className="tio-copy"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                </div>
                            </main>

                            <div className="modal fade" id="forgetPassModal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header justify-content-end">
                                            <span type="button" className="close-modal-icon" data-dismiss="modal">
                                                <i className="tio-clear"></i>
                                            </span>
                                        </div>
                                        <div className="modal-body">
                                            <div className="forget-pass-content">
                                                <img src="assets/admin/img/send-mail.svg" alt=""/>


                                                    <h4>
                                                        Send Mail to Your Email ?
                                                    </h4>
                                                    <p>
                                                        A mail will be send to your registered email with a link to change passowrd
                                                    </p>
                                                    <a className="btn btn-lg btn-block btn--primary mt-3" href="https://6ammart-admin.6amtech.com/reset-password">
                                                        Send Mail
                                                    </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="forgetPassModal1">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header justify-content-end">
                                            <span type="button" className="close-modal-icon" data-dismiss="modal">
                                                <i className="tio-clear"></i>
                                            </span>
                                        </div>
                                        <div className="modal-body">
                                            <div className="forget-pass-content">
                                                <img src="assets/admin/img/send-mail.svg" alt=""/>


                                                    <h4>
                                                        Send Mail to Your Email ?
                                                    </h4>
                                                    <form class action="https://6ammart-admin.6amtech.com/vendor-reset-password" method="post">
                                                        <input type="hidden" name="_token" value="Q1Z04oCrge7EZOZVWwgrbptgo1Fwd1ax4RETNGMC" autocomplete="off"/>
                                                            <input type="email" name="email" id className="form-control" placeholder="Plesae enter your registerd email" required/>
                                                                <button type="submit" className="btn btn-lg btn-block btn--primary mt-3">Send Mail</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal fade" id="successMailModal">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header justify-content-end">
                                                    <span type="button" className="close-modal-icon" data-dismiss="modal">
                                                        <i className="tio-clear"></i>
                                                    </span>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="forget-pass-content">

                                                        <img src="assets/admin/img/sent-mail.svg" alt=""/>
                                                            <h4>
                                                                A mail has been sent to your registered email!
                                                            </h4>
                                                            <p>
                                                                Click the link in the mail description to change password
                                                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
}
