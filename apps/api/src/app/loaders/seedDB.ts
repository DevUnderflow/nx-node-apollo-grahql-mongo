import { User, UserModel } from "../entity/user";

/**
 * ? Use this file to insert Dummy data into database
 * ! You will be prompted at cmd to seed the database.
 */
export async function seedDatabase() {
  const User = new UserModel({
    name : "Test",
    username: "test09",
    email: "test@github.com",
    password: "test09",
    bio: `Full Stack Developer 🚀 and Designer 📟 with a penchant for minimalistic design and Web Technologies 🕸️. I am passionate about enhancing user experience and maximizing user interface. I have hands-on experience in building Web Applications and API's, JavaScript frameworks, including performance, scalable, efficient and maintainable products 👨‍💻.`,
  } as User);
  await User.save();

  return true
}
