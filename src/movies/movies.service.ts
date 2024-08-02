import {
    BadRequestException,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';

import mongoose, { FilterQuery, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Movie, MovieDocument } from './entities/movies.schema';
import { CreateMovieDto } from './dto/create-movies.dto';
import { ListMovieQuery } from './dto/list.dto';
  
  @Injectable()
  export class MovieService {
    constructor(
      @InjectModel(Movie.name)
      private movieModel: Model<MovieDocument>,
      ) {}
  
      async create(createMovieDto: CreateMovieDto): Promise<Movie> {
        const movieDocument = await this.movieModel.create(createMovieDto);
    
        return movieDocument;
      }
  
      findAll(listMovieQuery: ListMovieQuery): Promise<Movie[]> { 
      const conditions: FilterQuery<Movie> = {};
  
      const plot = listMovieQuery.plot;
      const genres = listMovieQuery.genres;
      const runtime = listMovieQuery.runtime;
      const cast = listMovieQuery.cast;
      const poster = listMovieQuery.poster;
      const title = listMovieQuery.title;
      const fullplot = listMovieQuery.fullplot;
      const languages = listMovieQuery.languages;
      const released = listMovieQuery.released;
      const directors = listMovieQuery.directors;
      const writers = listMovieQuery.writers;
      const lastupdated = listMovieQuery.lastupdated;
      const year = listMovieQuery.year;
      const countries = listMovieQuery.countries;
      const type = listMovieQuery.type
      const num_mflix_comments = listMovieQuery.num_mflix_comments;
  
      const limit = listMovieQuery.limit || 10;
      const offset = listMovieQuery.offset || 0;
      
  
      if (plot) {
         conditions.plot = {
           $regex: plot,
           $options: 'i'
        }
      }
      
      if(genres) {
        conditions.genres = {
          $regex: genres,
          $options: 'i'
        }
      }
  
      if(runtime) {
        conditions.runtime = {
          $gte: runtime,
        }
      }
      
      if(cast) {
        conditions.cast = {
          $regex: cast,
          $options: 'i'
        }
      }
  
      if(poster) {
        conditions.poster = {
          $regex: poster,
          $options: 'i'
        }
       }
  
       if(title) {
         conditions['title'] = {
           $regex: title,
          $options: 'i'
        }
      }
  
      if(fullplot) {
        conditions.fullplot = {
          $regex: fullplot,
          $options: 'i'
        }
      }
  
      if(languages) {
        conditions.languages= {
          $regex: languages,
          $options: 'i'
        }
      }
      
      if(released) {
        conditions.released = {
          $eq: released,
        }
      }
  
      if(directors) {
        conditions.directors = {
          $regex: directors,
          $options: 'i'
        }
      }
  
      if(lastupdated) {
        conditions.lastupdated = {
          $regex: lastupdated,
        }
      }
    
      if(year) {
        conditions['year'] = {
          $eq: year
        }
      }
  
      if(writers) {
        conditions.writers = {
          $regex: writers,
          $options: 'i'
        }
      }
  
      if(countries) {
        conditions.countries = {
          $regex: countries,
          $options: 'i'
        }
      }
  
      if(type) {
        conditions.type = {
          $regex: type,
          $options: 'i'
        } 
      }
      
      if(num_mflix_comments) {
        conditions.num_mflix_comments = {
         $gte: num_mflix_comments
        }
      }
      
      return this.movieModel.find(conditions, {}, { limit: limit, skip: offset });
      
    }
  
    async findById(id: string): Promise<Movie> {
      const isvalidId = mongoose.isValidObjectId(id);
      
      if (!isvalidId) {
        throw new BadRequestException('Please enter a correct');
      }
      
      const movies = await this.movieModel.findById(id);
      
      if (!movies) {
        throw new NotFoundException('The Object was not founds!');
      }
  
      return movies;
    }
  }