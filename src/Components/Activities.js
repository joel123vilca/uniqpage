import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showActivities } from '../actions';
import "./activities.css";
import { CardTitle, Card, CardActions,Icon} from 'react-mdl'; 

class Activities extends Component {
    componentWillMount() {
        this.props.showActivities()
    }
    renderActivitiesList() {
        return this.props.activities.map((activity) => {
          return (
          <div className="activities--content" key={activity.id}>
              <Card shadow={0} style={{width: '256px', height: '130px'}}>
                <CardTitle expand style={{textAlign: 'justify', color: 'black'}}>
                    <h5 style={{marginTop: '1px'}}>
                        {activity.title}
                    </h5>
                </CardTitle>
                <CardActions border style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff', background:'#376970', height:'55px'}}>
                    May 24, 2016
                    <div className="mdl-layout-spacer"></div>
                <Icon name="event" />
                </CardActions>
                </Card>
          </div>
          )
        })
      }
    render(){
        return (
            <div className="activities--div">
                <h2 className="activities-title">Eventos en agenda UNIQ</h2>
            <section className="activities">
                { this.renderActivitiesList() } 
            </section>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
      activities: state.activities.activities
    }
}

export default connect(mapStateToProps, { showActivities })(Activities);