import React from 'react'

export default class Card extends React.Component {
  url = React.onBtnClick()

  state = {
    value: this.props.blog
  }

 onBtnClick = event => {
    event.preventDefault()

    this.setState(
      state => ({
        value: this.props.blog
      }),
      () => (this.url = '')
    )
  }

  render(props) {

  return (
    <a href={props.blog}>
    <div style={{ margin: '1em' }}>
      <img alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
      <div>
        <div style={{ fontWeight: 'bold' }}>{props.name}</div>
        <div>{props.blog}</div>
      </div>
      </div>
      </a>
   )
  }
}