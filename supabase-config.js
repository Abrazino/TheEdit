// Set these values from Supabase Project Settings > API.
// Use the anon/public key only. NEVER put a service_role key in browser code.
window.SUPABASE_URL = "https://fyngxxjwrkiueotcsgzn.supabase.co";
window.SUPABASE_ANON_KEY = "sb_publishable_t6D8zrRF2gtr4OAl7P3zFg_vV4UOwQ_";
window.SUPABASE_BUCKET = "article-images";
window.getSupabaseClient = function(){if(!window.supabase||window.SUPABASE_URL.includes("YOUR-PROJECT")||window.SUPABASE_ANON_KEY.includes("YOUR_SUPABASE"))return null;if(!window.__editSupabase)window.__editSupabase=window.supabase.createClient(window.SUPABASE_URL,window.SUPABASE_ANON_KEY);return window.__editSupabase;};