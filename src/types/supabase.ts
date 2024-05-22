export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      companies: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      customers: {
        Row: {
          address: string
          email: string
          id: number
          name: string
          number: string
          project_id: string
        }
        Insert: {
          address: string
          email: string
          id?: number
          name: string
          number: string
          project_id: string
        }
        Update: {
          address?: string
          email?: string
          id?: number
          name?: string
          number?: string
          project_id?: string
        }
        Relationships: []
      }
      items: {
        Row: {
          description: string
          id: number
          quantity: number
          sku_number: string
          total_price: number
          unit_price: number
        }
        Insert: {
          description: string
          id?: number
          quantity: number
          sku_number: string
          total_price: number
          unit_price: number
        }
        Update: {
          description?: string
          id?: number
          quantity?: number
          sku_number?: string
          total_price?: number
          unit_price?: number
        }
        Relationships: []
      }
      receipt_items: {
        Row: {
          item_id: number
          receipt_id: number
        }
        Insert: {
          item_id: number
          receipt_id: number
        }
        Update: {
          item_id?: number
          receipt_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "receipt_items_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "receipt_items_receipt_id_fkey"
            columns: ["receipt_id"]
            isOneToOne: false
            referencedRelation: "receipts"
            referencedColumns: ["id"]
          },
        ]
      }
      receipts: {
        Row: {
          bank_trans_ref: number
          company_id: number | null
          customer_id: number | null
          date: string
          id: number
          transaction_id: number | null
          vendor_id: number | null
        }
        Insert: {
          bank_trans_ref: number
          company_id?: number | null
          customer_id?: number | null
          date: string
          id?: number
          transaction_id?: number | null
          vendor_id?: number | null
        }
        Update: {
          bank_trans_ref?: number
          company_id?: number | null
          customer_id?: number | null
          date?: string
          id?: number
          transaction_id?: number | null
          vendor_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "receipts_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "receipts_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "receipts_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "receipts_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions: {
        Row: {
          card_info: string
          id: number
          invoice_number: string
          method: string
          status: string
          title: string
          total_price: number
          transaction_id: string
          type: string
        }
        Insert: {
          card_info: string
          id?: number
          invoice_number: string
          method: string
          status: string
          title: string
          total_price: number
          transaction_id: string
          type: string
        }
        Update: {
          card_info?: string
          id?: number
          invoice_number?: string
          method?: string
          status?: string
          title?: string
          total_price?: number
          transaction_id?: string
          type?: string
        }
        Relationships: []
      }
      vendors: {
        Row: {
          address: string
          contact_name: string
          email: string
          id: number
          name: string
          phone_number: string
        }
        Insert: {
          address: string
          contact_name: string
          email: string
          id?: number
          name: string
          phone_number: string
        }
        Update: {
          address?: string
          contact_name?: string
          email?: string
          id?: number
          name?: string
          phone_number?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
