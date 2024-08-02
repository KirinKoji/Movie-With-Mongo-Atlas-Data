import { IsArray, IsDate, IsNumber, IsString } from "class-validator";
import { isatty } from "tty";

export class CreateMovieDto {

    @IsString()
    plot: string;

    @IsString()
    genres: string[];

    @IsNumber()
    runtime: number;

    @IsArray()
    cast: string[];

    @IsString()
    poster: string;

    @IsString()
    title: string;

    @IsString()
    fullplot: string;

    @IsArray()
    languages: string[];

    @IsDate()
    released: Date;

    @IsArray()
    directors: string[];

    @IsArray()
    writers: string[];

    award: {
        wins: number;
        nominations: number;
        text: string;
    }

    @IsString()
    lastupdated: string;

    @IsDate()
    year: number;

    imdb: {
        rating: number;
        votes: number;
        id: number; 
    }

    @IsArray()
    countries: string[];

    @IsString()
    type: string;

    tomatoes: {
        viewer: {
            rating: number;
            numReviews: number;
            meter: number;
        }
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

    @IsNumber()
    num_mflix_comments: number;
}