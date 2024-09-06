export interface MicType {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  sign_up?: string
  instagram?: string
  website?: string
  set_time?: number
  payment?: string
  venueId: string
  venue: Venue
  mic_times: MicTime[]
}

export interface Venue {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  entry_accessible?: boolean
  stage_accessible?: boolean
  alcohol_free?: boolean
  street_address: string
  street_address_additional?: string
  city: string
  state: string
  zip_code: string
  borough: "manhattan" | "bronx" | "brooklyn" | "staten_island" | "queens"
}

interface MicTime {
  id: string
  createdAt: Date
  updatedAt: Date
  weekday: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"
  frequency: "weekly" | "first" | "second" | "third" | "fourth"
  time: string
}
