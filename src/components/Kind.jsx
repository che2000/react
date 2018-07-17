import React,{Component} from 'react'
import kindapi from '@/api/kind.js'
import {Link} from 'react-router-dom'
import tool from '@/tool/index.js'

class Kind extends Component {
	constructor (props){
		super (props)
		this.getData = this.getData.bind(this)
		this.state = {
			menu: [],
			acticveIndex:sessionStorage.classID ? sessionStorage.classID - 1 :0,
			kindlist: []
		}
		
	}
	
	componentDidMount () {
		kindapi.getMenuList((data) => {
			console.log(data)
			this.setState({
				menu: data
			})
		})
		var classID = sessionStorage.classID ? sessionStorage.classID : 1
		this.getData(classID)
		tool.backTop()
	}
	
	getData(classID){
		kindapi.getListData(classID,(data) => {
			this.setState({
				kindlist: data
			})
		})
	}
	
	changeList (index, classID) {
		sessionStorage.classID = classID
		this.setState({
			acticveIndex: index
		})
		this.getData(classID)
		
	}
	
	render () {
		var arr=[];
		if(this.state.kindlist == 0){
			arr='暂无数据'
		}else{
			this.state.kindlist.map((item,index) => {
				arr.push(
				<Link key={item.goodsID} to={'/detail/' + item.goodsID}>
					<li >
						<img src={item.goodsListImg} />
						
						<div className='proinfo'>
							{item.goodsName}
						</div>
					</li>
				</Link>	
				)
			})
		}
		
		
		return (
				<div className='main'>
					<header>Kind头部</header>
					<div className='content kindContent'>
							<ul className='kindMenu'>
								{
									this.state.menu.map((item, index) => (
										<li className={this.state.acticveIndex==index ? 'active' : ''} onClick ={this.changeList.bind(this, index, item.classID)} key={item.classID}>{item.className}</li>
									))
								}
							</ul>
							<div className='kindList'>
								<ul className='prolist'>
									{
										arr
									}
								</ul>	
								 <button id='backTop'>回到顶部</button>
							</div>
					</div>
				</div>
		)
	}
}

export default Kind