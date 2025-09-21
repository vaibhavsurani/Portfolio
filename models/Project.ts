    import mongoose, { Document, Schema, models } from 'mongoose';

    export interface IProject extends Document {
      title: string;
      description: string;
      imageUrl: string;
      slug: string;
      tags: string[];
      liveUrl?: string;
      githubUrl?: string;
    }

    const ProjectSchema: Schema = new Schema({
      title: { type: String, required: true },
      description: { type: String, required: true },
      imageUrl: { type: String, required: true },
      slug: { type: String, required: true, unique: true },
      tags: [{ type: String }],
      liveUrl: { type: String },
      githubUrl: { type: String },
    }, { timestamps: true });

    export default models.Project || mongoose.model<IProject>('Project', ProjectSchema);
    
