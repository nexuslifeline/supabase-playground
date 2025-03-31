import { supabase } from "@/supabaseConfig";

import { snakeKeys } from "change-object-case";

export const saveMemory = async memory => {
  const { data, error } = await supabase
    .from("memories")
    .insert([snakeKeys(memory)])
    .select()
    .single();

  if (error) {
    return { error: error.message };
  }

  return snakeKeys(data);
};

export const getMemoriesByUid = async userUid => {
  if (!userUid) {
    return { error: "User UID is required" };
  }

  const { data, error } = await supabase
    .from("memories")
    .select("*")
    .eq("user_uid", userUid); // Filter by user_uid

  if (error) {
    return { error: error.message };
  }

  return data.map(snakeKeys);
};
