const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

let supabase = null;

if (!supabaseUrl || !supabaseServiceKey) {
  console.warn('⚠️ Missing Supabase credentials. Running without database.');
} else {
  try {
    supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });
  } catch (err) {
    console.warn('⚠️ Failed to initialize Supabase:', err.message);
  }
}

module.exports = supabase;