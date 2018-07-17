import React,{Component} from 'react'


class User extends Component {
	constructor (props){
		super (props)
		
	}

	render () {
		return (
				<div className='main'>
					<header>User头部</header>
					<div className='content'>
							User
					</div>
				</div>
		)
	}
}

export default User