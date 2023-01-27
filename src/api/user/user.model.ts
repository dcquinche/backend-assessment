import {Schema, model, Document} from 'mongoose';
import bcrypt from 'bcryptjs';
import { userProfileType } from './user.types';

export interface UserDocument extends Document {
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  profile: userProfileType;
  favsList?: Array<Object>;
  comparePassword: (password: string) => Promise<boolean>;
}

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    favsList: [{
      type: Schema.Types.ObjectId,
      ref: 'Fav',
    }]
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', async function save(next: Function){
  const user = this as unknown as UserDocument;
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  } catch (error) {
    next(error);
  }
})

UserSchema.virtual('profile').get(function profile() {
  const {email} = this;

  return {
    email
  };

});

async function comparePassword(this: UserDocument, candidatePassword: string, next: Function): Promise<boolean> {
  const user = this;
  try {
    const match = await bcrypt.compare(candidatePassword, user.password);
    return match;
  } catch (error) {
    next(error);
    return false;
  }
}

UserSchema.methods.comparePassword = comparePassword;

const User = model<UserDocument>('User', UserSchema);

export default User;
