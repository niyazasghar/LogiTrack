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

interface ParcelTrackingMapProps {
  currentLocation: Location | null
  sourceLocation?: Location | null
  destinationLocation?: Location | null
  height?: string
  showRoute?: boolean
}

export function ParcelTrackingMap({ 
  currentLocation, 
  sourceLocation, 
  destinationLocation, 
  height = "400px",
  showRoute = true
}: ParcelTrackingMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markerRefs = useRef<any>({
    current: null,
    source: null,
    destination: null
  })
  const routeLayerRef = useRef<any>(null)

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
    if (window.L && mapInstanceRef.current) {
      updateMap()
    }
  }, [currentLocation, sourceLocation, destinationLocation])

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

    updateMap()
  }

  const updateMap = () => {
    if (!mapInstanceRef.current || !window.L) return

    const map = mapInstanceRef.current
    
    // Clear existing markers
    Object.values(markerRefs.current).forEach((marker: any) => {
      if (marker && typeof marker.remove === 'function') {
        marker.remove()
      }
    })
    
    // Clear existing route
    if (routeLayerRef.current) {
      routeLayerRef.current.remove()
      routeLayerRef.current = null
    }

    // Add markers and fit bounds
    const bounds = []

    // Add current location marker
    if (currentLocation) {
      const position = [parseFloat(currentLocation.lat), parseFloat(currentLocation.lon)]
      bounds.push(position)
      
      // Create a custom truck icon
      const truckIcon = window.L.divIcon({
        html: `<div class="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"/><circle cx="7" cy="18" r="2"/><path d="M15 18H9"/><circle cx="17" cy="18" r="2"/></svg>
              </div>`,
        className: '',
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      })

      markerRefs.current.current = window.L.marker(position, { icon: truckIcon })
        .addTo(map)
        .bindPopup(`<b>Current Location</b><br>${currentLocation.name}`)
    }

    // Add source location marker
    if (sourceLocation) {
      const position = [parseFloat(sourceLocation.lat), parseFloat(sourceLocation.lon)]
      bounds.push(position)
      
      const sourceIcon = window.L.divIcon({
        html: `<div class="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>`,
        className: '',
        iconSize: [32, 32],
        iconAnchor: [16, 32]
      })
      
      markerRefs.current.source = window.L.marker(position, { icon: sourceIcon })
        .addTo(map)
        .bindPopup(`<b>Pickup Location</b><br>${sourceLocation.name}`)
    }

    // Add destination location marker
    if (destinationLocation) {
      const position = [parseFloat(destinationLocation.lat), parseFloat(destinationLocation.lon)]
      bounds.push(position)
      
      const destIcon = window.L.divIcon({
        html: `<div class="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flag"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>
              </div>`,
        className: '',
        iconSize: [32, 32],
        iconAnchor: [16, 32]
      })
      
      markerRefs.current.destination = window.L.marker(position, { icon: destIcon })
        .addTo(map)
        .bindPopup(`<b>Delivery Location</b><br>${destinationLocation.name}`)
    }

    // Draw route if we have source and destination (or current location and destination)
    if (showRoute && destinationLocation && (sourceLocation || currentLocation)) {
      const startPoint = sourceLocation || currentLocation
      if (startPoint) {
        const routePoints = [
          [parseFloat(startPoint.lat), parseFloat(startPoint.lon)],
          [parseFloat(destinationLocation.lat), parseFloat(destinationLocation.lon)]
        ]
        
        // If we have all three points, create a route through the current location
        if (sourceLocation && currentLocation && destinationLocation) {
          routePoints.splice(1, 0, [parseFloat(currentLocation.lat), parseFloat(currentLocation.lon)])
        }
        
        // Create a simple line for the route
        routeLayerRef.current = window.L.polyline(routePoints, {
          color: '#3b82f6',
          weight: 4,
          opacity: 0.7,
          dashArray: '10, 10',
          lineJoin: 'round'
        }).addTo(map)
      }
    }

    // Fit map to bounds if we have any points
    if (bounds.length > 0) {
      map.fitBounds(bounds, { padding: [30, 30] })
    }
  }

  return (
    <div 
      ref={mapRef} 
      style={{ height, width: '100%', borderRadius: '0.5rem' }}
      className="border border-gray-300"
    >
      {!currentLocation && !sourceLocation && !destinationLocation && (
        <div className="flex items-center justify-center h-full bg-gray-100 text-gray-500 text-sm">
          No location data available
        </div>
      )}
    </div>
  )
} 