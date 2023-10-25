import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://psdpaytkxamxkmncclfs.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzZHBheXRreGFteGttbmNjbGZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczNTkyMjMsImV4cCI6MjAxMjkzNTIyM30.jJYMICOmFkp7zgL6oTbUTVBwhsp3NBm4kJ8zvXC4vfM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
