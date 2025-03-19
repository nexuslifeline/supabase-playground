import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ucpgawcdxrumbzapzffo.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjcGdhd2NkeHJ1bWJ6YXB6ZmZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxOTQ5NDEsImV4cCI6MjA1Nzc3MDk0MX0.MRUm8Kzp6BsIx45xHazli_2lCLi5JTvqXpcMwEyFxBI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
