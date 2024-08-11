import mongoose from "mongoose";

const MinhaEntidadeSchema = new mongoose.Schema({
  campo1: {
    type: String,
    required: true,
  },
  campo2: {
    type: Number,
    required: true,
  },
});

const MinhaEntidade = mongoose.model("MinhaEntidade", MinhaEntidadeSchema);

export default MinhaEntidade;
