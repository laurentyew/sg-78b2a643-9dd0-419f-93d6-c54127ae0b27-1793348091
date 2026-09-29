/* eslint-disable @typescript-eslint/no-empty-object-type */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      waitlist: {
        Row: {
          id: string
          name: string
          email: string
          social_handle: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          social_handle: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          social_handle?: string
          created_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      join_waitlist: {
        Args: {
          p_name: string
          p_email: string
          p_handle: string
        }
        Returns: Json
      }
      waitlist_count: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// Project reference: 1743329e-33d7-4f5c-b5db-7bd710c8b0dc