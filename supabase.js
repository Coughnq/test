import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://mtuoykwyjtxyusfdznta.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10dW95a3d5anR4eXVzZmR6bnRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyMzkzNTMsImV4cCI6MjA0MDgxNTM1M30.cPbXqCznx21mqWPAtRE1uyl5eFPKD5CvtvrhCJQ1B2g'; // Replace with your Supabase Key
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
