import { createClient } from '@supabase/supabase-js'

// Obtener las credenciales de Supabase desde las variables de entorno
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Validar que las credenciales estén configuradas
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Error: Las credenciales de Supabase no están configuradas.')
  console.error('Asegúrate de tener VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en tu archivo .env.local')
}

// Crear y exportar el cliente de Supabase
export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '')

// Tipo para los mensajes de contacto
export type ContactMessage = {
  id?: string
  name: string
  email: string
  subject: string
  message: string
  created_at?: string
}

