import IfafredModel from "../models/ir_sensorModel.js";

export const turnOnIR = async (req, res) => {
  try {
    const infafred = await IfafredModel.turnOn();
    res.json(infafred);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch queues" });
  }
};

export const turnOffIR = async (req, res) => {
  try {
    const infafred = await IfafredModel.turnOff();
    res.json(infafred);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch queues" });
  }
};

export const getIRstate = async (req, res) => {
  try {
    const state = await IfafredModel.getIRState();
    res.json(state);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch queues" });
  }
};
