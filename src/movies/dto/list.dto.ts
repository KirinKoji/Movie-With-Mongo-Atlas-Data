
export class ListMovieQuery {
    plot: string;
    genres?: string[];
    runtime?: number;
    cast?: string[];
    poster?: string;
    title?: string;
    fullplot?: string;
    languages?: string[];
    released?: Date;
    directors: string[];
    writers?: string[];
    awards?: {
        wins: number;
        nominations: number;
        text: string;
    }
    lastupdated?: string;
    year?: number;
    imdb?: {
        rating: number;
        votes: number;
        id: number;
    }
    countries?: string[];
    type?: string;

    tomatoes?: {
        viewer?: {
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
    num_mflix_comments: number;
  
    limit?: number;
    offset?: number;
  }