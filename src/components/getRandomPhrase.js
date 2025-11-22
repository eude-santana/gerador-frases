import React, { useState } from 'react';

const StatusIndicator = () => {
    const [status, setStatus] = useState('Disponível');

    const statusColors = {
        'Disponível': 'green',
        'Ocupado': 'red',
        'Ausente': 'yellow'
    };

    const handleButtonClick = () => {
        const nextStatus = status === 'Disponível' ? 'Ocupado' : status === 'Ocupado' ? 'Ausente' : 'Disponível';
        setStatus(nextStatus);
    };

    return (
        <div>
            <div
            style={{
                width: '200px',
                height: '200px',
                backgroundColor: statusColors[status],
                margin: '20px auto',
                border: '1px solid #000',
            }}
            ></div>
            <p>Status atual: {status}</p>
            <button onClick={handleButtonClick}>Mudar Status</button>
        </div>
    );
}; export default StatusIndicator;