import mongoose, { model, models, Schema } from "mongoose";

const AddressSchema = new Schema({
  userEmail: { type: String, unique: true, required: true },
  nama: String,
  email: String,
  alamat: String,
  kota: String,
  kodePos: String,
  provinsi: String,
  nomor: String,
});

export const Address = models?.Address || model("Address", AddressSchema);
