import "react-native-url-polyfill";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lvrmvulpcskchvisgtas.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2cm12dWxwY3NrY2h2aXNndGFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyMTUxMzIsImV4cCI6MjAzMTc5MTEzMn0.ad36C20-YPjTxDlC4AjeNCO1SWyiGvdGpdtFdoTdYYU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey)