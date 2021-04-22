import React from 'react'

export default function summary() {
    const data = [
        {
            number: 6,
            estate: 'Pendientes',
            id: 'slopes'
        },
        {
            number: 3,
            estate: 'Activas',
            id: 'active'
        },
        {
            number: 0,
            estate: 'Cerradas',
            id: 'closed'
        },
        {
            number: 50000,
            estate: 'valor servicios',
            id: 'service'
        }
    ]
    return (
        <div className="container">
            <div className="resume">
                <h1>Solicitudes</h1>
                <h3>Resumen del mes</h3>
            </div>

            {data.map((data) =>
                <div className="content-card">

                    <div className="card-resume" id={data.id}>
                        <h2>6</h2>
                        <p>solicitudes Pendientes</p>
                    </div>

                </div>
            )}
        </div>
    )
}
