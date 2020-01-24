import React from 'react'
import PropTypes from 'prop-types'

export default function BlogList({title,content}) {
  return (
    <>
        <div class="mt-10">
        <main class="mt-5 pt-5">
        <div class="container">

            <section class="pt-5">
                <div class="wow fadeIn">
                    <h2 class="h1 text-center mb-5">What is MDB?</h2>
                    <p class="text-center">MDB is world's most popular Material Design framework for building responsive, mobile-first websites
                        and apps. </p>
                    <p class="text-center mb-5 pb-5">Trusted by over
                        <strong>400 000</strong> developers and designers. Easy to use & customize. 400+ material UI elements, templates
                        & tutorials.</p>
                </div>
                <div class="row wow fadeIn">
                    <div class="col-lg-5 col-xl-4 mb-4">
                        <div class="view overlay rounded z-depth-1-half">
                            <div class="view overlay">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/cXTThxoywNQ" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <hr class="mb-5"/>
                <div class="row mt-3 wow fadeIn">
                    <div class="col-lg-5 col-xl-4 mb-4">
                        <div class="view overlay rounded z-depth-1">
                            <img src="https://mdbootstrap.com/wp-content/uploads/2017/11/brandflow-tutorial-fb.jpg" class="img-fluid" alt=""/>
                            <a href="/#/blog" target="_blank">
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-7 col-xl-7 ml-xl-4 mb-4">
                        <h3 class="mb-3 font-weight-bold dark-grey-text">
                            <strong>Bootstrap Automation</strong>
                        </h3>
                        <p class="grey-text">Learn how to create a smart website which learns your user and reacts properly to his behavior.</p>
                        <a href="/#/blog" class="btn btn-primary btn-md">Start tutorial
                            <i class="fas fa-play ml-2"></i>
                        </a>
                    </div>

                </div>

                <hr class="mb-5"/>
                <div class="row wow fadeIn">
                    <div class="col-lg-5 col-xl-4 mb-4">
                        <div class="view overlay rounded z-depth-1">
                            <img src="https://mdbootstrap.com/wp-content/uploads/2018/01/push-fb.jpg" class="img-fluid" alt=""/>
                            <a href="/#/blog" target="_blank">
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-7 col-xl-7 ml-xl-4 mb-4">
                        <h3 class="mb-3 font-weight-bold dark-grey-text">
                            <strong>Web Push notifications</strong>
                        </h3>
                        <p class="grey-text">Push messaging provides a simple and effective way to re-engage with your users and in this tutorial
                            you'll learn how to add push notifications to your web app</p>
                        <a href="/#/blog" target="_blank" class="btn btn-primary btn-md">Start tutorial
                            <i class="fas fa-play ml-2"></i>
                        </a>
                    </div>

                </div>

                <hr class="mb-5"/>
                <nav class="d-flex justify-content-center wow fadeIn">
                    <ul class="pagination pg-blue">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>

                        <li class="page-item active">
                            <a class="page-link" href="#">1
                                <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">4</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">5</a>
                        </li>

                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>

            </section>

        </div>
    </main>
        </div>
    </>
  );
}

