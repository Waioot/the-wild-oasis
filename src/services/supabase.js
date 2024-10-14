import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://scqwgnimglkbotkakzpv.supabase.co';
export const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjcXdnbmltZ2xrYm90a2FrenB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczNTEwNzcsImV4cCI6MjA0MjkyNzA3N30.Eo1WTVRMY3Y3t3_g3G6y9q94hV_mioMvuf5XyJ27vxg';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
