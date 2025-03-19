import { supabase } from "@/supabaseConfig";

import { snakeKeys } from "change-object-case";

export const saveMemory = async memory => {
  const { data, error } = await supabase
    .from("memories")
    .insert([snakeKeys(memory)])
    .select();

  if (error) {
    return { error: error.message };
  }

  return snakeKeys(data);
};
