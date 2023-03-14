export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      product_specifications: {
        Row: {
          description: string | null;
          id: number;
          range: number | null;
        };
        Insert: {
          description?: string | null;
          id?: number;
          range?: number | null;
        };
        Update: {
          description?: string | null;
          id?: number;
          range?: number | null;
        };
      };
      products: {
        Row: {
          cabins: number | null;
          created_at: string | null;
          image: string | null;
          name: string | null;
          price: number | null;
          id: string;
        };
        Insert: {
          cabins?: number | null;
          created_at?: string | null;
          image?: string | null;
          name?: string | null;
          price?: number | null;
          id: string;
        };
        Update: {
          cabins?: number | null;
          created_at?: string | null;
          image?: string | null;
          name?: string | null;
          price?: number | null;
          id: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          profile_name: string;
        };
        Insert: {
          id: string;
          profile_name: string;
        };
        Update: {
          id?: string;
          profile_name?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
