import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BlogList from './BlogList'
import Markdown from 'react-markdown'
import marked from 'marked'
import { Card } from 'react-bootstrap'
class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogList: [
        {
          path: 'test.md',
          title: 'test',
          author: 'Ayush Nagar',
          intro:
            'aefafcavvacmj n mca nacac jc akj;dc; ja;jdc;jacn jao;nCOILNAL',
          tags: ['test1', 'test2', 'test3'],
        },
        {
          path: 'test.md',
          title: 'test',
          author: 'Ayush Nagar',
          intro:
            'aefafcavvacmj n mca nacac jc akj;dc; ja;jdc;jacn jao;nCOILNAL',
          tags: ['test1', 'test2', 'test3'],
        },
      ],
      thisBlog: {
        path: 'test2.md',
        title: 'test',
        author: 'Ayush Nagar',
        tags: ['test1', 'test2', 'test3'],
      },
    }
    this.ContentMarkdown = '# Hello'
  }
  componentDidMount() {
    const readmePath = require(`./Blogs/${this.state.thisBlog.path}`)

    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          markdown: marked(text),
        })
      })
  }
  render() {
    const { markdown } = this.state

    return (
      <div>
        <div>
          <div id="___gatsby">
            <div
              style={{ outline: 'none' }}
              tabindex="-1"
              role="group"
              id="gatsby-focus-wrapper"
            >
              <div class="mt-12"></div>
              <div className="container">
                <div className="row">
                  <div className="blog col-12">
                    <h1>{this.state.thisBlog.title}</h1>
                    {this.state.thisBlog.tags.map((each, index) => (
                      <span
                        class="badge badge-light"
                        style={{ border: '1px solid black', marginLeft: '1vh' }}
                      >
                        {each}
                      </span>
                    ))}
                    <br />

                    <hr />
                    <article
                      dangerouslySetInnerHTML={{ __html: markdown }}
                      style={{ textAlign: 'left' }}
                    ></article>
                  </div>
                </div>
                <main class="mt-5 pt-5">
                  <div class="container">
                    <section class="pt-5">
                      <h2 class="mb-5">More Blogs</h2>
                      <div class="row wow fadeIn">
                        <div class="col-lg-5 col-xl-4 mb-4">
                          <div class="view overlay rounded z-depth-1-half">
                            <div class="view overlay">
                              <div class="embed-responsive embed-responsive-16by9">
                                <iframe
                                  class="embed-responsive-item"
                                  src="https://www.youtube.com/embed/cXTThxoywNQ"
                                  allowfullscreen
                                ></iframe>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-7 col-xl-7 ml-xl-4 mb-4">
                          <h3 class="mb-3 font-weight-bold dark-grey-text">
                            <strong>MDB Quick Start</strong>
                          </h3>
                          <p class="grey-text">
                            Get started with MDBootstrap, the world's most
                            popular Material Design framework for building
                            responsive, mobile-first sites.
                          </p>
                          <p>
                            <strong>
                              5 minutes, a few clicks and... done. You will be
                              surprised at how easy it is.
                            </strong>
                          </p>
                          <a
                            href="https://www.youtube.com/watch?v=cXTThxoywNQ"
                            target="_blank"
                            class="btn btn-primary btn-md"
                          >
                            Start tutorial
                            <i class="fas fa-play ml-2"></i>
                          </a>
                        </div>
                      </div>

                      <hr class="mb-5" />
                      <div class="row mt-3 wow fadeIn">
                        <div class="col-lg-5 col-xl-4 mb-4">
                          <div class="view overlay rounded z-depth-1">
                            <img
                              src="https://mdbootstrap.com/wp-content/uploads/2017/11/brandflow-tutorial-fb.jpg"
                              class="img-fluid"
                              alt=""
                            />
                            <a
                              href="https://mdbootstrap.com/education/tech-marketing/automated-app-introduction/"
                              target="_blank"
                            >
                              <div class="mask rgba-white-slight"></div>
                            </a>
                          </div>
                        </div>
                        <div class="col-lg-7 col-xl-7 ml-xl-4 mb-4">
                          <h3 class="mb-3 font-weight-bold dark-grey-text">
                            <strong>Bootstrap Automation</strong>
                          </h3>
                          <p class="grey-text">
                            Learn how to create a smart website which learns
                            your user and reacts properly to his behavior.
                          </p>
                          <a
                            href="https://mdbootstrap.com/education/tech-marketing/automated-app-introduction/"
                            target="_blank"
                            class="btn btn-primary btn-md"
                          >
                            Start tutorial
                            <i class="fas fa-play ml-2"></i>
                          </a>
                        </div>
                      </div>

                      <hr class="mb-5" />
                      <div class="row wow fadeIn">
                        <div class="col-lg-5 col-xl-4 mb-4">
                          <div class="view overlay rounded z-depth-1">
                            <img
                              src="https://mdbootstrap.com/wp-content/uploads/2018/01/push-fb.jpg"
                              class="img-fluid"
                              alt=""
                            />
                            <a
                              href="https://mdbootstrap.com/education/tech-marketing/web-push-introduction/"
                              target="_blank"
                            >
                              <div class="mask rgba-white-slight"></div>
                            </a>
                          </div>
                        </div>
                        <div class="col-lg-7 col-xl-7 ml-xl-4 mb-4">
                          <h3 class="mb-3 font-weight-bold dark-grey-text">
                            <strong>Web Push notifications</strong>
                          </h3>
                          <p class="grey-text">
                            Push messaging provides a simple and effective way
                            to re-engage with your users and in this tutorial
                            you'll learn how to add push notifications to your
                            web app
                          </p>
                          <a
                            href="https://mdbootstrap.com/education/tech-marketing/web-push-introduction/"
                            target="_blank"
                            class="btn btn-primary btn-md"
                          >
                            Start tutorial
                            <i class="fas fa-play ml-2"></i>
                          </a>
                        </div>
                      </div>

                      <hr class="mb-5" />
                    </section>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Blog.propTypes = {}

export default Blog
