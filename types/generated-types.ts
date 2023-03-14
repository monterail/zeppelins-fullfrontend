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
          product_id: number;
          range: number | null;
        };
        Insert: {
          product_id?: number;
          range?: number | null;
        };
        Update: {
          product_id?: number;
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
          product_id: number;
        };
        Insert: {
          cabins?: number | null;
          created_at?: string | null;
          image?: string | null;
          name?: string | null;
          price?: number | null;
          product_id?: number;
        };
        Update: {
          cabins?: number | null;
          created_at?: string | null;
          image?: string | null;
          name?: string | null;
          price?: number | null;
          product_id?: number;
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
