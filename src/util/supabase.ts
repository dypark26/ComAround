import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://kzukqoitfufrkkoqmesl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6dWtxb2l0ZnVmcmtrb3FtZXNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQzOTA0NzEsImV4cCI6MTk4OTk2NjQ3MX0.4nBZio_fn3xvWdX0cRyI3-hhtByTqP4qB1oYsiB8ly0"
);
