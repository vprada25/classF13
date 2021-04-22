import React from 'react'
import { Button } from 'antd';



export default function RequestContent() {
    const listRequest = [
        {
            id: 1,
            date: 'Mayo 30',
            dateAgo: 'hace 3 dias',
            Description: 'cambio de accesorios hidraulicos'
        },
        {
            id: 2,
            date: 'Mayo 29',
            dateAgo: 'hace 3 dias',
            Description: 'cambio de accesorios reparacion'
        },
        {
            id: 3,
            date: 'Mayo 30',
            dateAgo: 'hace 3 dias',
            Description: 'cambio de accesorios hidraulicos'
        },
        {
            id: 4,
            date: 'Mayo 30',
            dateAgo: 'hace 3 dias',
            Description: 'cambio de accesorios '
        }
    ]
    return (
        listRequest.map((data)=> 
            <div className="request-content" >

                <h2>{data.id}</h2>
                <h1 >
                    {data.date}
                </h1>
                <p>{data.Description}</p>
                <Button shape="round">
                    ACEPTAR
                </Button>

            </div>

        )
            
        



    )
}