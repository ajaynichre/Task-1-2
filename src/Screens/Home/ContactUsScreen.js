import React from 'react'

import Header from '../../Components/Header'

const ContactUsScreen = (props) => {
    return (
        <div className="Screen">
            <Header title="Contact Us" />
            <div className="row">
                
                <div className="col-md-8 col-sm-12 col-xs-12 Block">
                    <h5 className="text-center display-6">
                        Reach out to us here
                    </h5>
                    <hr />
                    <div className="col-md-12 col-sm-12 col-xs-12 display-8 ">

                        <div className="row" Style="padding: 5px;">
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">Shubham Malode</strong><br />
                                <label className="fs-7">Store Manager</label><br />
                                <label className="fs-7">Shubham.malode@spogym.com</label>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">Gandharva Plaza</strong><br />
                                <label className="fs-7">Chintamani nagar</label><br />
                                <label className="fs-7">Pune 411045</label><br />
                                <label className="fs-7">Maharashtra | India</label>

                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12" Style="padding: 15px;">
                                <strong className="fs-5"> Contact </strong><br />
                                <label className="fs-7"> 9685741230 </label><br />
                                <label className="fs-7"> 0233-2651311 </label><br />
                                <label className="fs-7"> 1800-9090-5544 </label>
                            </div>
                        </div>
                        <hr />

                        <div className="row" Style="padding: 5px;">
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">Aditi Garg</strong><br />
                                <label className="fs-7">Store Manager</label><br />
                                <label className="fs-7">aditigarg@spogym.com</label>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5"> DLF Tower</strong><br />
                                <label className="fs-7">East wing</label><br />
                                <label className="fs-7">Delhi - 000011</label><br />
                                <label className="fs-7">Delhi | India</label>

                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12" Style="padding: 15px;">
                                <strong className="fs-5"> Contact </strong><br />
                                <label className="fs-7"> 9632587410 </label><br />
                                <label className="fs-7"> 0231-22651311 </label><br />
                                <label className="fs-7"> 1800-9090-5544 </label>
                            </div>
                        </div>
                        <hr />

                        <div className="row" Style="padding: 5px;">
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">Ajay Nichre</strong><br />
                                <label className="fs-7">Store Manager</label><br />
                                <label className="fs-7">ajay.nichre@spogym.com</label>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5"> Noor Plaza</strong><br />
                                <label className="fs-7">Shivaji Nagar</label><br />
                                <label className="fs-7"> Pune -411003</label><br />
                                <label className="fs-7">Maharashtra | India</label>

                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12" Style="padding: 15px;">
                                <strong className="fs-5"> Contact </strong><br />
                                <label className="fs-7"> 885511471 </label><br />
                                <label className="fs-7"> 020-2234534 </label><br />
                                <label className="fs-7"> 1800-9090-5544 </label>
                            </div>
                        </div>
                        <hr />

                        <div className="row" Style="padding: 5px;">
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">Alpiya Shikalgar</strong><br />
                                <label className="fs-7">Store Manager</label><br />
                                <label className="fs-7">alpiya.shikalgar@spogym.com</label>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5"> Tata plaza</strong><br />
                                <label className="fs-7">South building</label><br />
                                <label className="fs-7">Karad - 000011</label><br />
                                <label className="fs-7">Maharashtra | India</label>

                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12" Style="padding: 15px;">
                                <strong className="fs-5"> Contact </strong><br />
                                <label className="fs-7"> 9632587410 </label><br />
                                <label className="fs-7"> 0231-22651311 </label><br />
                                <label className="fs-7"> 1800-9090-5544 </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 ">
                <div className='card card-container' >
                    <label className="text-center display-6">
                        Let us get back to you
                    </label>
                    <hr />
                    <div>
                        <br /><br />
                        <div className="form-group" Style="padding:5px">
                            <h6>Name</h6>
                            <input className="form-control" type="text" placeholder="Your name" />
                        </div>
                        <div className="form-group" Style="padding:5px">
                            <h6>Email</h6>
                            <input className="form-control" type="email" placeholder="you@gmail.com" />
                        </div>
                        <div className="form-group" Style="padding:5px">
                            <h6>Contact</h6>
                            <input className="form-control" type="number" placeholder="Your mobile" />
                        </div>
                        <div className="form-group" Style="padding:5px">
                            <h6>Any Queries</h6>
                            <textarea rows="3" className="form-control" type="text" placeholder="" />
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary btn-block">Submit</button>
                        </div>
                    </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ContactUsScreen
