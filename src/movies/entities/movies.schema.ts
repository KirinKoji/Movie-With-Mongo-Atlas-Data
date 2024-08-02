import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MovieDocument = HydratedDocument<Movie>;

@Schema({ timestamps: true })

export class Movie {
    
    @Prop({ type: String })
    plot: string;

    @Prop({ type: [String] })
    genres: string[];

    @Prop({ type: Number })
    runtime: number;

    @Prop({ type: [String] })
    cast: string[];

    @Prop({ type: String})
    poster: string;

    @Prop({ type: String })
    title: string;
    
    @Prop({ type: String })
    fullplot: string;

    @Prop({ type: [String] })
    languages: string[];

    @Prop({ type: Date })
    released: Date;

    @Prop({ type: [String] })
    directors: string[];

    @Prop({ type: [String] })
    writers: string[];

    @Prop(raw({
        wins: { type: Number },
        nominations: { type: Number },
        text: { type: String },
    }))
    
    awards: {
        wins: number;
        nominations: number;
        text: string;
    }

    @Prop({ type: String })
    lastupdated: string;

    @Prop({ type: Number })
    year: number;

    @Prop(raw({
        rating: { type: Number },
        votes: { type: Number },
        id: { type: Number }
    }))

    imdb: {
        rating: number;
        votes: number;
        id: number;
    }

    @Prop({ type: [String] })
    countries: string[];

    @Prop({ type: String })
    type: string;

    tomatoes: {
        viewer: {
            rating: number;
            numReviews: number;
            meter: number;
        },
        dvd: Date;
        critic: {
            rating: number;
            numReviews: number;
            meter: number;
        }
        lastUpdated: Date;
        rotten: number;
        production: string;
        fresh: number;
    }

    @Prop({ type: Number })
    num_mflix_comments: number;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);