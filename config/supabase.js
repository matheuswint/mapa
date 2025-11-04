import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hdzsoufnssmlfvsotnhj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkenNvdWZuc3NtbGZ2c290bmhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNjY2MTEsImV4cCI6MjA3Nzg0MjYxMX0.a3U8wH-Q52_aUZLywpu1iMq-6SatPG82Aj_Hl51OoIY'

export const supabase = createClient(supabaseUrl, supabaseKey)
