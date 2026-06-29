"use client"

import React, { useEffect, useRef } from 'react'

// Add Leaflet type declaration
declare global {
  interface Window {
    L: any
  }
}

interface Location {
  name: string
  lat: string
  lon: string
}

interface LocationMapProps {
  location: Location | null
  height?: string
}

export function LocationMap({ location, height = "400px" }: LocationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markerRef = useRef<any>(null)

  useEffect(() => {
    // Load Leaflet script if it's not already loaded
    if (!window.L) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)

      const script = document.createElement('script')
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
      script.async = true
      script.onload = () => initializeMap()
      document.head.appendChild(script)
    } else {
      initializeMap()
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (window.L && mapInstanceRef.current && location) {
      updateMapWithLocation(location)
    }
  }, [location])

  const initializeMap = () => {
    if (!mapRef.current || mapInstanceRef.current) return

    // Default center (can be adjusted as needed)
    const defaultCenter = [20.5937, 78.9629] // Center of India
    const defaultZoom = 5

    const map = window.L.map(mapRef.current).setView(defaultCenter, defaultZoom)
    
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    mapInstanceRef.current = map

    if (location) {
      updateMapWithLocation(location)
    }
  }

  const updateMapWithLocation = (loc: Location) => {
    if (!mapInstanceRef.current || !window.L) return

    const map = mapInstanceRef.current
    const position = [parseFloat(loc.lat), parseFloat(loc.lon)]

    // Remove existing marker if any
    if (markerRef.current) {
      markerRef.current.remove()
    }

    // Add new marker
    markerRef.current = window.L.marker(position)
      .addTo(map)
      .bindPopup(loc.name)
      .openPopup()

    // Center map on the location
    map.setView(position, 15)
  }

  return (
    <div 
      ref={mapRef} 
      style={{ height, width: '100%', borderRadius: '0.5rem' }}
      className="border border-gray-300"
    >
      {!location && (
        <div className="flex items-center justify-center h-full bg-gray-100 text-gray-500 text-sm">
          Enter a location to see it on the map
        </div>
      )}
    </div>
  )
} 