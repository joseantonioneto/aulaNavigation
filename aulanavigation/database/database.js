import {createClient} from '@supabase/supabase-js'
const supabaseUrl = 'https://fawkrjplhmvscrxlziut.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhd2tyanBsaG12c2NyeGx6aXV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1NjkzNTksImV4cCI6MjA0MTE0NTM1OX0.6dNlKghJm7G4ccZjY6S2zCPyL-aKLH4VWFo7I7C0N_o'
const supabase = createClient (supabaseUrl, supabaseKey)

export default supabase;