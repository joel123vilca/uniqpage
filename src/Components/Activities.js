import React, { Component} from 'react';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

class Activities extends Component {
    constructor(props) {
        super(props);

        this.state = {
            myEvents: []
        };
        
        mobiscroll.util.getJson('https://trial.mobiscroll.com/events/', (events) => {
            this.setState({ myEvents: events});
        }, 'jsonp');
    }
    render() {
        return (
            <div>
                <h2 className="bulletin-title">Eventos</h2>
                <mobiscroll.Eventcalendar
                lang="es"
                theme="ios"
                display="inline"
                data={this.state.myEvents}
                view={{
                    calendar: { type: 'week' },
                    eventList: { type: 'day' }
                }}
            />
            </div>
        );
    }    
}

export default Activities;