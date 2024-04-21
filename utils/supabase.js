import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xdsstcqwucixgufosfqj.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhkc3N0Y3F3dWNpeGd1Zm9zZnFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1MzgyNTksImV4cCI6MjAyODExNDI1OX0.SO_XPWALngeNQaAxjiZSwSH4_M9xuXpju6WeGMtVKWM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
