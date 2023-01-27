import {Schema, model, Document} from 'mongoose';

export interface FavDocument extends Document {
  name: string;
  list: Array<Object>;
  createdAt: Date;
  updatedAt: Date;
}

const FavSchema = new Schema(
  {
    name: {
      type: String,
    },
    list: [{
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      link: {
        type: String,
      }
    }],
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
  },
  {
    timestamps: true,
  }
);

const Fav = model<FavDocument>('Fav', FavSchema);

export default Fav;
