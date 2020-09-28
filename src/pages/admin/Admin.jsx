import React from 'react'
import {Divider}from "antd"
import one from "../../images/one.jpg"
// import "./admin.scss"
export default class  extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div className="admin-wrap">
                 <p>123jdkldjflasjdlsdjfjiwNCKACNSADJSDJ</p>
                 <Divider className="admin-divider" orientation="center">Text</Divider>
                 <p>456jdkldjflasjdlsdjfjiwNCKACNSADJSDJ</p>
                 <a href="#">1</a><Divider type="vertical"/>
                 <a href="#">2</a><Divider type="vertical"/>
                 <a href="#">3</a><Divider type="vertical"/>
            </div>
           
        )
    }

}