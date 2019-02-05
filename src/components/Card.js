import React from 'react'

const Card = props => {

class HyperLink extends Card {

  constructor(){
      super();
      this._goToURL = this._goToURL.bind(this.blog);
  }

  static propTypes = {
    url: props.blog.isRequired,
  }
}

    return(
      <div style={{ margin: '1em' }}>
        <img alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
          <div>
           <div style={{ fontWeight: 'bold' }}>{props.name}</div>
             <div>{props.blog.url}</div>
             <HyperLink />
          </div>
      </div>

    );
  }

  export default Card