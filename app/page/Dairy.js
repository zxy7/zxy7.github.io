/**
 * description 这个是项目的默认首页
 */
import { Component } from 'react'
import { Link } from 'react-router'

class Dairy extends Component {
	constructor(props) {
		super(props);
		this.bold=this.bold.bind(this);
		this.state = {
		};
	}

	render() {

		return (
			<div>
				<header className="intro-header" style={{ backgroundImage: " url('/image/pic11.jpg')" }}>
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 ">
								<div className="site-heading">

									<h1>
										<div className="ui transparent input">
											<input type="text" style={{ textAlign: 'center', color: 'white' }} placeholder="请输入标题" />
										</div>
									</h1>
									<span className="subheading">
										<div className="ui transparent input">
											<input type="text" style={{ textAlign: 'center', color: 'white' }} placeholder="please enter the title " />
										</div>
									</span>
								</div>
							</div>
						</div>
					</div>
				</header>
				<div style={{ textAlign: 'center' ,paddingTop:'10px'}}>
					<i className="photo icon"></i>
					<i className="header icon"></i>
					<i className="bold icon" onClick={this.bold}></i>
					<i className="paragraph icon"></i>
					<i className="unlinkify icon"></i>
					<i className="save icon" ></i>
				</div>

				<div className="dairy-content "
					style={{
						height: " 500px", fontSize: "14px", 
						marginLeft: " auto", marginRight: " auto"
					}}>

					<textarea type="text" placeholder="请输入正文"
						style={{
							width: "100%", height: " 500px", outline: " 0px", border: "none", fontSize: "14px",
							backgroundColor: "transparent", color: "rgb(0, 0, 0)", wordBreak: "break-all",paddingTop:'10px'
						}}></textarea>


				</div>
			</div>
		);
	}
	bold(){
		
	}

	componentDidMount() {
		let that = this;


	}
}

export default Dairy;