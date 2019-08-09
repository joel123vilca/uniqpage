import React, {Component} from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

class Chat extends Component {
    render() {
      return(
        <div class="fb-customerchat" page_id="105953224092727">
          <MessengerCustomerChat
            pageId="105953224092727"
        />
        </div>
      );
    }
  }
  export default Chat;