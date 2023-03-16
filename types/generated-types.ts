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
