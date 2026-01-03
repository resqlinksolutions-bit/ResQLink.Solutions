import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eruacngbwwnortarzzxn.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVydWFjbmdid3dub3J0YXJ6enhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc0MjI2NjEsImV4cCI6MjA4Mjk5ODY2MX0.LqqIrcoZd_vdKRIJsq93oa3cLH3efv8tjtIARnkfW9w";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
