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
      insurance: {
        Row: {
          created_at: string | null;
          description: string | null;
          detail: string | null;
          id: string;
          title: string | null;
        };
        Insert: {
          created_at?: string | null;
          description?: string | null;
          detail?: string | null;
          id?: string;
          title?: string | null;
        };
        Update: {
          created_at?: string | null;
          description?: string | null;
          detail?: string | null;
          id?: string;
          title?: string | null;
        };
      };
      product_specifications: {
        Row: {
          cabins: number | null;
          product_id: string;
          range: number | null;
        };
        Insert: {
          cabins?: number | null;
          product_id: string;
          range?: number | null;
        };
        Update: {
          cabins?: number | null;
          product_id?: string;
          range?: number | null;
        };
      };
      products: {
        Row: {
          created_at: string | null;
          description: string | null;
          id: string;
          image: string | null;
          name: string | null;
          price: number | null;
        };
        Insert: {
          created_at?: string | null;
          description?: string | null;
          id?: string;
          image?: string | null;
          name?: string | null;
          price?: number | null;
        };
        Update: {
          created_at?: string | null;
          description?: string | null;
          id?: string;
          image?: string | null;
          name?: string | null;
          price?: number | null;
        };
      };
      profiles: {
        Row: {
          current_license: string | null;
          id: string;
          profile_name: string | null;
        };
        Insert: {
          current_license?: string | null;
          id: string;
          profile_name?: string | null;
        };
        Update: {
          current_license?: string | null;
          id?: string;
          profile_name?: string | null;
        };
      };
      reservations: {
        Row: {
          created_at: string | null;
          date: string | null;
          duration: number | null;
          id: number;
          insurance: string | null;
          prod_id: string | null;
          status: string | null;
          title: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          date?: string | null;
          duration?: number | null;
          id?: number;
          insurance?: string | null;
          prod_id?: string | null;
          status?: string | null;
          title?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          date?: string | null;
          duration?: number | null;
          id?: number;
          insurance?: string | null;
          prod_id?: string | null;
          status?: string | null;
          title?: string | null;
          user_id?: string | null;
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
