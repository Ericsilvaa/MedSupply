'use client';

import { useEffect, useRef } from 'react';

export function ContactMap() {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Esta é uma implementação simulada de um mapa
        // Em um ambiente real, você usaria uma biblioteca como Google Maps, Mapbox, etc.
        if (mapRef.current) {
            const mapElement = mapRef.current;

            // Simulando um mapa com uma imagem de placeholder
            mapElement.style.backgroundImage = "url('/placeholder.svg?height=300&width=600')";
            mapElement.style.backgroundSize = 'cover';
            mapElement.style.backgroundPosition = 'center';

            // Adicionando um marcador simulado
            const marker = document.createElement('div');
            marker.style.position = 'absolute';
            marker.style.top = '50%';
            marker.style.left = '50%';
            marker.style.transform = 'translate(-50%, -50%)';
            marker.style.width = '20px';
            marker.style.height = '20px';
            marker.style.borderRadius = '50%';
            marker.style.backgroundColor = 'var(--primary)';
            marker.style.border = '3px solid white';
            marker.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';

            mapElement.appendChild(marker);
        }
    }, []);

    return (
        <div
            ref={mapRef}
            className='relative h-[300px] w-full bg-gray-100'
            aria-label='Mapa mostrando a localização da WappCart'
        />
    );
}
