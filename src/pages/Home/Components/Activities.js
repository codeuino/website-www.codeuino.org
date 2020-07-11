import React from 'react';
import ActivityCard from '../../../components/Activities/ActivityCard';
import { CURRENT_ACTIVITIES } from './currentActivities';
import './common.css';

class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      page: 'activities'
    };
  }

  render() {
    return (
      <div id='activity' className="pt-10">
        <span class="badge badge-pill badge-primary-soft mb-3 text-center">
          <span class="h6 text-uppercase font-weight-bold">Programs</span>
        </span>
        <h1 className='component-heading'>Codeuino's Participations</h1>
        <div className='container d-flex justify-content-center'>
          <div className='row'>
            {CURRENT_ACTIVITIES.map((currentActivity, index) => {
              return (
                <div className='col-md-4 p-0 mt-5 activity-cards'>
                  <ActivityCard
                    key={index}
                    activity={currentActivity}
                    page={this.state.page}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Activities;
