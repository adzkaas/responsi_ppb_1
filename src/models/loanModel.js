import { supabase } from "../config/supabaseClient.js";

export const LoanModel = {
  async getAll(status) {
    let query = supabase.from("responsi_ppb_1").select("*");
    
    // Fitur filter query parameter status
    if (status) {
      query = query.eq("status", status);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from("responsi_ppb_1")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(payload) {
    const { data, error } = await supabase
      .from("responsi_ppb_1")
      .insert([payload])
      .select();
    if (error) throw error;
    return data[0];
  },

  async update(id, payload) {
    const { data, error } = await supabase
      .from("responsi_ppb_1")
      .update(payload)
      .eq("id", id)
      .select();
    if (error) throw error;
    return data[0];
  },

  async remove(id) {
    const { error } = await supabase
      .from("responsi_ppb_1")
      .delete()
      .eq("id", id);
    if (error) throw error;
    return { message: "Data peminjaman berhasil dihapus" };
  }
};