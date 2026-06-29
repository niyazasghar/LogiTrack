"use client"

import React, { useState, useEffect, useRef } from 'react'
import { MapPin } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface Location {
  name: string
  lat: string
  lon: string
}

interface LocationSuggestion {
  place_id: number
  lat: string
  lon: string
  display_name: string
}

interface LocationInputProps {
  label: string
  placeholder: string
  value: string
  onChange: (location: Location | null) => void
  id: string
}

export function LocationInput({ label, placeholder, value, onChange, id }: LocationInputProps) {
  const [query, setQuery] = useState(value || '')
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([])
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Fetch address suggestions
  const fetchAddressSuggestions = async (searchQuery: string) => {
    if (!searchQuery) {
      return []
    }
    
    setIsLoading(true)
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}`
      )
      const data: LocationSuggestion[] = await response.json()
      setIsLoading(false)
      return data.map(item => ({
        place_id: item.place_id,
        display_name: item.display_name,
        lat: item.lat,
        lon: item.lon
      }))
    } catch (error) {
      console.error("Error fetching address suggestions:", error)
      setIsLoading(false)
      return []
    }
  }

  // Debounced search effect
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query) {
        const fetchedSuggestions = await fetchAddressSuggestions(query)
        setSuggestions(fetchedSuggestions)
      } else {
        setSuggestions([])
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  // Handle selection of a location
  const handleSelectLocation = (suggestion: LocationSuggestion) => {
    const location = {
      name: suggestion.display_name,
      lat: suggestion.lat,
      lon: suggestion.lon
    }
    
    setQuery(suggestion.display_name)
    setSelectedLocation(location)
    setSuggestions([])
    onChange(location)
  }

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <div className="flex">
          <MapPin className="mr-2 h-4 w-4 mt-3 text-muted-foreground" />
          <Input
            id={id}
            placeholder={placeholder}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              if (!e.target.value) {
                setSelectedLocation(null)
                onChange(null)
              }
            }}
            className="flex-1"
          />
        </div>
        
        {isLoading && (
          <div className="absolute z-10 w-full bg-white mt-1 border border-gray-300 rounded-md shadow-lg p-2 text-center text-sm text-gray-500">
            Loading suggestions...
          </div>
        )}
        
        {suggestions.length > 0 && !selectedLocation && (
          <div className="absolute z-10 w-full bg-white mt-1 border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.place_id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={() => handleSelectLocation(suggestion)}
              >
                {suggestion.display_name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 