import React, { Component } from 'react'
import unauthorized from '../../assets/images/401.svg'

export class Page_404 extends Component {
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 100}}>
                <img src={unauthorized} alt="" style={{width: 500, height: 500}} />
            </div>
        )
    }
}

export default Page_404
