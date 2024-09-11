import {createClient} from '@supabase/supabase-js'
const supabaseUrl = 'suaURL';
const supabaseKey = 'SuaKey'
const supabase = createClient (supabaseUrl, supabaseKey)

export default supabase;
