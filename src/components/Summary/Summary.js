import React from 'react'

export default function summary() {
    return (
        <div className="container">
            <div className="resume">
                <h1>Solicitudes</h1>
                <h3>Resumen del mes</h3>
                <div className="resume__content-card">
                    <div className="card-resume" id="slopes">
                        <h2>6</h2>
                        <p>solicitudes Pendientes</p>
                    </div>
                    <div className="card-resume" id="active">
                        <h2>0</h2>
                        <p>solicitudes Activas</p>
                    </div>
                    <div className="card-resume" id="closed">
                        <h2>0</h2>
                        <p>solicitudes Cerradas</p>
                    </div>
                    <div className="card-resume" id="service">
                        <h2>$0</h2>
                        <p>Valor Servicios</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
