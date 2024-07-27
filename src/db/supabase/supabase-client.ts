import { createClient } from '@supabase/supabase-js'

const supabaseURL = import.meta.env.VITE_SUPABASE_PROJECT_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_SECRET_KEY
const supabase_client = createClient(supabaseURL, supabaseKey)

export {
    supabase_client
}