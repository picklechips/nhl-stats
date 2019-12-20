import React, { memo } from 'react'
import '../styles/header.css'

const Header = (props) => {

	return (
		<div className="header-root">
			<div className="header-content">
				<div>
					<h1>Hockey DB</h1>
				</div>
				<div className="header-items">
					<div className="header-item">Atlas</div>
					<div className="header-item">Teams</div>
					<div className="header-item">About us</div>
					<div className="header-item">Support us</div>
				</div>
			</div>
		</div>)
}

export default memo(Header)