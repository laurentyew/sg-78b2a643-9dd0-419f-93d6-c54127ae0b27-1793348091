/* eslint-disable @typescript-eslint/no-empty-object-type */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      comments: {
        Row: {
          active: boolean
          alt_action: Database["public"]["Enums"]["mod_action"] | null
          author_handle: string
          best_action: Database["public"]["Enums"]["mod_action"]
          body: string
          created_at: string
          difficulty: number
          id: string
          is_trap: boolean
          kind: string
          platform: string
          reason: string
          type: Database["public"]["Enums"]["comment_type"]
        }
        Insert: {
          active?: boolean
          alt_action?: Database["public"]["Enums"]["mod_action"] | null
          author_handle: string
          best_action: Database["public"]["Enums"]["mod_action"]
          body: string
          created_at?: string
          difficulty?: number
          id?: string
          is_trap?: boolean
          kind: string
          platform: string
          reason: string
          type: Database["public"]["Enums"]["comment_type"]
        }
        Update: {
          active?: boolean
          alt_action?: Database["public"]["Enums"]["mod_action"] | null
          author_handle?: string
          best_action?: Database["public"]["Enums"]["mod_action"]
          body?: string
          created_at?: string
          difficulty?: number
          id?: string
          is_trap?: boolean
          kind?: string
          platform?: string
          reason?: string
          type?: Database["public"]["Enums"]["comment_type"]
        }
        Relationships: []
      }
      leads: {
        Row: {
          confirm_token: string
          confirmed_at: string | null
          consent_at: string
          created_at: string
          email: string
          first_name: string | null
          id: string
          play_id: string | null
          referral_code: string
          referred_by: string | null
          role: string | null
        }
        Insert: {
          confirm_token: string
          confirmed_at?: string | null
          consent_at: string
          created_at?: string
          email: string
          first_name?: string | null
          id?: string
          play_id?: string | null
          referral_code: string
          referred_by?: string | null
          role?: string | null
        }
        Update: {
          confirm_token?: string
          confirmed_at?: string | null
          consent_at?: string
          created_at?: string
          email?: string
          first_name?: string | null
          id?: string
          play_id?: string | null
          referral_code?: string
          referred_by?: string | null
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_play_id_fkey"
            columns: ["play_id"]
            isOneToOne: false
            referencedRelation: "plays"
            referencedColumns: ["id"]
          },
        ]
      }
      play_answers: {
        Row: {
          action: Database["public"]["Enums"]["mod_action"] | null
          answered_at: string
          comment_id: string
          correct: boolean
          ms: number
          play_id: string
        }
        Insert: {
          action?: Database["public"]["Enums"]["mod_action"] | null
          answered_at?: string
          comment_id: string
          correct: boolean
          ms: number
          play_id: string
        }
        Update: {
          action?: Database["public"]["Enums"]["mod_action"] | null
          answered_at?: string
          comment_id?: string
          correct?: boolean
          ms?: number
          play_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "play_answers_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "play_answers_play_id_fkey"
            columns: ["play_id"]
            isOneToOne: false
            referencedRelation: "plays"
            referencedColumns: ["id"]
          },
        ]
      }
      plays: {
        Row: {
          finished_at: string | null
          id: string
          ip_hash: string | null
          rank_key: string | null
          referrer: string | null
          round_ids: string[]
          score: number | null
          session_id: string
          started_at: string
          total_ms: number | null
          utm: Json | null
        }
        Insert: {
          finished_at?: string | null
          id?: string
          ip_hash?: string | null
          rank_key?: string | null
          referrer?: string | null
          round_ids: string[]
          score?: number | null
          session_id: string
          started_at?: string
          total_ms?: number | null
          utm?: Json | null
        }
        Update: {
          finished_at?: string | null
          id?: string
          ip_hash?: string | null
          rank_key?: string | null
          referrer?: string | null
          round_ids?: string[]
          score?: number | null
          session_id?: string
          started_at?: string
          total_ms?: number | null
          utm?: Json | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      waitlist: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
          social_handle: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
          social_handle: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
          social_handle?: string
        }
        Relationships: []
      }
    }
    Views: {
      stats_by_type: {
        Row: {
          answers: number | null
          pct_wrong: number | null
          type: Database["public"]["Enums"]["comment_type"] | null
        }
        Relationships: []
      }
    }
    Functions: {
      join_waitlist: {
        Args: { p_email: string; p_handle: string; p_name: string }
        Returns: Json
      }
      waitlist_count: { Args: never; Returns: number }
    }
    Enums: {
      comment_type:
        | "spam"
        | "scam_dm"
        | "troll"
        | "complaint"
        | "sarcasm"
        | "question"
      mod_action: "keep" | "hide" | "reply" | "ban"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      comment_type: [
        "spam",
        "scam_dm",
        "troll",
        "complaint",
        "sarcasm",
        "question",
      ],
      mod_action: ["keep", "hide", "reply", "ban"],
    },
  },
} as const
