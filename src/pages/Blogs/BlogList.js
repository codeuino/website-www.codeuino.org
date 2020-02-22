import React from 'react';
import './BlogList.css';
import Modal from 'react-awesome-modal';

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      visible: false,
      currentActivity: null
    };
  }

  componentDidMount() {
    let activities = [];
    fetch('https://medium-article-fetcher.herokuapp.com/posts', {
      crossDomain: true,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        for (let i = 0; i < resData.items.length; i++) {
          let obj = {};
          obj.title = resData.items[i].title;
          obj.link = resData.items[i].link;
          let m,
            urls = [],
            str = resData.items[i].content_encoded,
            rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;

          while ((m = rex.exec(str))) {
            urls.push(m[1]);
          }
          obj.img = urls[0];

          let reg = /<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/;
          let stream = resData.items[i].content_encoded.match(reg);

          let div = document.createElement('div');
          div.innerHTML = resData.items[i].content_encoded;

          obj.longDescription = div.textContent || div.innerText || '';

          obj.description =
            stream[1]
              .split(' ')
              .slice(0, 20)
              .join(' ') + '...';

          activities.push(obj);
        }
        this.setState({ activities: activities });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleClick = currentActivity => {
    this.setState(
      {
        currentActivity: currentActivity
      },
      () => {
        this.setState({
          visible: true
        });
      }
    );
  };

  closeModal = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div className='mt-10'>
        <main className='mt-5 pt-5'>
          <div className='container'>
            <section className='pt-5'>
              <div className='container-fluid d-flex space-between'>
                <div className='row'>
                  {this.state.activities.map((currentActivity, index) => {
                    return (
                      <div
                        className='col-lg-4 col-md-6 col-sm-12'
                        style={{ marginBottom: '20px' }}
                      >
                        <div className='card text-center activity overflow-hidden'>
                          <img
                            src={currentActivity.img}
                            alt=''
                            className='card-img-top activity'
                          />

                          <div className='card-body text-dark flex-column d-flex'>
                            <h4 className='card-title activity'>
                              {currentActivity.title}
                            </h4>
                            <p className='card-text text-secondary'>
                              {currentActivity.description}
                            </p>

                            <a
                              href='#'
                              className='activity btn btn-outline-primary mt-auto btn-block align-self-end'
                              style={{ marginTop: 'auto' }}
                              onClick={() => this.handleClick(currentActivity)}
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </main>
        <Modal
          visible={this.state.visible}
          width='90%'
          height='90%'
          effect='fadeInUp'
          onClickAway={() => this.closeModal()}
        >
          <div>
            <img
              src={
                this.state.currentActivity ? this.state.currentActivity.img : ''
              }
              style={{
                margin: '10px',
                height: '200px',
                objectFit: 'scale-down'
              }}
            ></img>
            <h2 style={{ padding: '10px' }}>
              {this.state.currentActivity
                ? this.state.currentActivity.title
                : ''}
            </h2>
            <div style={{ width: '100%', height: '100%' }}>
              <p
                style={{
                  fontSize: '10',
                  overflow: 'auto',
                  display: 'block',
                  height: '450px',
                  margin: '10px'
                }}
              >
                {this.state.currentActivity
                  ? this.state.currentActivity.longDescription
                  : ''}
              </p>
            </div>

            <button
              type='button'
              class='btn btn-danger btn-circle'
              onClick={this.closeModal}
            >
              <i class='fa fa-times'></i>
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default BlogList;
