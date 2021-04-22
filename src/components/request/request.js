import React from 'react'

import RequestContent from '../request-content/RequestContent'
import RequestCourse from '../request-course/RequestCourse'



export default function request() {
    return (
        <div className="container">
            <div className ="request">
                <div className="container__request">
                    <h3>Ultimas Solicitudes</h3>
                    <div className="header-request">
                        <h2>ID solicitud</h2>
                        <h2>Fecha</h2>
                        <h2>Resumen</h2>
                    </div> 
                    <RequestContent />
                          
                </div>
                <RequestCourse/>
                
            </div>
        </div>
    )
}