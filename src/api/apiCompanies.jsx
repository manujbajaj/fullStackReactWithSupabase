import supabaseClient from "@/utils/supabase";

export async function getCompanies(token) {
  const supabase = await supabaseClient(token);

  const { data, error } = await supabase
    .from("Companies")
    .select("*");

  if (error) {
    console.error("Error fetching companies:", error);
    return [];
  }

  return data;
}
