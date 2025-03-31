import { supabase } from "@/supabaseConfig";
import { snakeKeys } from "change-object-case";

export const saveFiles = async (files = []) => {
  if (!Array.isArray(files) || files.length === 0) {
    return { error: "Invalid input: files should be a non-empty array." };
  }

  const formattedFiles = files.map(file => snakeKeys(file));

  const { data, error } = await supabase
    .from("memory_files")
    .insert(formattedFiles)
    .select();

  if (error) {
    return { error: error.message };
  }

  return data ? snakeKeys(data) : [];
};
