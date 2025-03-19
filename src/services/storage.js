import { supabase } from "@/supabaseConfig";

const BUCKET_NAME = "bucket-playground";

export const uploadFile = async file => {
  const filePath = `${Date.now()}-${file.name}`;
  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, file);

  if (error) {
  } else {
    return data;
  }
};
