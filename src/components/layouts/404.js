import React, { Component } from 'react'
import notfound from '../../assets/images/404.svg'

export class Page_404 extends Component {
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 50}}>
                <img src={notfound} alt="" style={{width: 500, height: 500}} />
            </div>
        )
    }
}

export default Page_404
