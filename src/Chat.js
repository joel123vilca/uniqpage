import React, {Component} from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

class Chat extends Component {
    render() {
      return(
        <div className="fb-customerchat" page_id="105953224092727">
          <MessengerCustomerChat
            page_id="105953224092727"
            theme_color="#67b868"
            logged_in_greeting="hola en que te podemos ayudar?"
            logged_out_greeting="hola en que te podemos ayudar?"
        />
        </div>
      );
    }
  }
  export default Chat;