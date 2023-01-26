import { createClient } from "@supabase/supabase-js";

// const supabaseUrl: any = process.env.REACT_APP_SUPABASE_URL;
// const supabaseAnonKey: any = process.env.REACT_APP_SUPABASE_ANON_KEY;
// export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export const supabase = createClient(
  "https://phjstmgfirncqkoxkjfv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoanN0bWdmaXJuY3Frb3hramZ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NDQ4MTM1NiwiZXhwIjoxOTkwMDU3MzU2fQ.gn7Frqf_wFTL4ZyxW2jnRLR4EV6-4WiBLUKSeWlArEg"
);

// anon
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoanN0bWdmaXJuY3Frb3hramZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0ODEzNTYsImV4cCI6MTk5MDA1NzM1Nn0.JmU0azf89fqalXrc1Bh4y-C3UO5cWuZpBIJSbSRGssk

// secret
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoanN0bWdmaXJuY3Frb3hramZ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NDQ4MTM1NiwiZXhwIjoxOTkwMDU3MzU2fQ.gn7Frqf_wFTL4ZyxW2jnRLR4EV6-4WiBLUKSeWlArEg
