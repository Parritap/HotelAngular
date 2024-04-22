import { connect, model, Schema } from 'mongoose';


const userSchema = new Schema<IUser>({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    correo: { type: String, required: true },
    contrasenia: { type: String, required: true },
  });
  
  const User = model<IUser>('users', userSchema);

  
  run().catch(err => console.log(err));
  
  async function run() {
    // 4. Connect to MongoDB
    await connect('mongodb://localhost:4000/hotel');
  
    const user = new User({
     nombre : "Pepito",
     apellido: "Perez",
     correo: "Pepito@mail.com",
     contrasenia: "pepito"
  });
    await user.save();
  
    //Retrieve all users from mongo and print them
      const users = await User.find();
      console.log(users);
  }
  