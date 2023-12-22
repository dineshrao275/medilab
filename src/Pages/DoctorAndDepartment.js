import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const DoctorAndDepartment = () => {
    return (
        <>
            <section id="departments" className="departments">
                <div className="container">

                    <div className="section-title">
                        <h2>Departments</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row gy-4">
                        <div className="col-lg-3">
                            <ul className="nav nav-tabs flex-column" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <Link className="nav-link show active" data-bs-toggle="tab" to="/" aria-selected="true" role="tab">Cardiology</Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link className="nav-link" data-bs-toggle="tab" to="/" aria-selected="false" role="tab" tabindex="-1">Neurology</Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link className="nav-link" data-bs-toggle="tab" to="/" aria-selected="false" role="tab" tabindex="-1">Hepatology</Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link className="nav-link" data-bs-toggle="tab" to="/" aria-selected="false" role="tab" tabindex="-1">Pediatrics</Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link className="nav-link" data-bs-toggle="tab" to="/" aria-selected="false" role="tab" tabindex="-1">Eye Care</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-9">
                            <div className="tab-content">
                                <div className="tab-pane active show" id="tab-1" role="tabpanel">
                                    <div className="row gy-4">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Cardiology</h3>
                                            <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                            <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="assets/img/departments-1.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-2" role="tabpanel">
                                    <div className="row gy-4">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Et blanditiis nemo veritatis excepturi</h3>
                                            <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                            <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="assets/img/departments-2.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-3" role="tabpanel">
                                    <div className="row gy-4">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                                            <p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                                            <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="assets/img/departments-3.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-4" role="tabpanel">
                                    <div className="row gy-4">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                                            <p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                                            <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="assets/img/departments-4.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-5" role="tabpanel">
                                    <div className="row gy-4">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                                            <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                                            <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="assets/img/departments-5.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section id="doctors" className="doctors">
                <div className="container">

                    <div className="section-title">
                        <h2>Doctors</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-6">
                            <div className="member d-flex align-items-start">
                                <div className="pic"><img src="assets/img/doctors/doctors-1.jpg" className="img-fluid" alt=""/></div>
                                <div className="member-info">
                                    <h4>Walter White</h4>
                                    <span>Chief Medical Officer</span>
                                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                    <div className="social">
                                        <Link to="/"><i className="ri-twitter-fill"></i></Link>
                                        <Link to="/"><i className="ri-facebook-fill"></i></Link>
                                        <Link to="/"><i className="ri-instagram-fill"></i></Link>
                                        <Link to="/"> <i className="ri-linkedin-box-fill"></i> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="member d-flex align-items-start">
                                <div className="pic"><img src="assets/img/doctors/doctors-2.jpg" className="img-fluid" alt=""/></div>
                                <div className="member-info">
                                    <h4>Sarah Jhonson</h4>
                                    <span>Anesthesiologist</span>
                                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                    <div className="social">
                                        <Link to="/"><i className="ri-twitter-fill"></i></Link>
                                        <Link to="/"><i className="ri-facebook-fill"></i></Link>
                                        <Link to="/"><i className="ri-instagram-fill"></i></Link>
                                        <Link to="/"> <i className="ri-linkedin-box-fill"></i> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start">
                                <div className="pic"><img src="assets/img/doctors/doctors-3.jpg" className="img-fluid" alt=""/></div>
                                <div className="member-info">
                                    <h4>William Anderson</h4>
                                    <span>Cardiology</span>
                                    <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                    <div className="social">
                                        <Link to="/"><i className="ri-twitter-fill"></i></Link>
                                        <Link to="/"><i className="ri-facebook-fill"></i></Link>
                                        <Link to="/"><i className="ri-instagram-fill"></i></Link>
                                        <Link to="/"> <i className="ri-linkedin-box-fill"></i> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start">
                                <div className="pic"><img src="assets/img/doctors/doctors-4.jpg" className="img-fluid" alt=""/></div>
                                <div className="member-info">
                                    <h4>Amanda Jepson</h4>
                                    <span>Neurosurgeon</span>
                                    <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                    <div className="social">
                                        <Link to="/"><i className="ri-twitter-fill"></i></Link>
                                        <Link to="/"><i className="ri-facebook-fill"></i></Link>
                                        <Link to="/"><i className="ri-instagram-fill"></i></Link>
                                        <Link to="/"> <i className="ri-linkedin-box-fill"></i> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}

export default DoctorAndDepartment;