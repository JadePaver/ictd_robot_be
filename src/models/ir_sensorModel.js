import pool from "../configs/conn.js";

class IfafredModel {

  static async turnOn() {
    await pool.query("UPDATE ir_sensors SET state=1 WHERE id= 0")
    console.log("State: ON" )
    return 
  }

  static async turnOff() {
    await pool.query("UPDATE ir_sensors SET state=0 WHERE id= 0")
    console.log("State: OFF" )
    return 
  }

  static async getIRState() {
    const state = (await pool.query("SELECT * FROM ir_sensors where id =0"))[0]
    return state;
  }
}

export default IfafredModel;