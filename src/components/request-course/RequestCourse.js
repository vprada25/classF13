import React from 'react';

export default function RequestCourse() {

    return (
        <div className="container-course">
            <h3>Solicitudes en curso</h3>
            <div className="title">
                <h1>Activas</h1>
                <h2>Cerradas</h2>
            </div>
            <div className="header-request">
                <h2>ID solicitud</h2>
                <h2>Fecha</h2>
                <h2>Resumen</h2>
            </div>
            <div className="course-requests">
                <h1>No Hay Solicitudes en curso</h1>
                <h2>No te preocupes, te avisaremos el estado de las solicitudes que aceptes</h2>

            </div>

        </div>
    )

}