import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
    Query,
  } from '@nestjs/common';
  import { CreateMovieDto } from './dto/create-movies.dto';
  import { ListMovieQuery } from './dto/list.dto';
import { MovieService } from './movies.service';
import { Movie } from './entities/movies.schema';
  
  @Controller('movies')
  export class MovieController {
    constructor(private readonly movieService: MovieService) {}
  
    @Post()
    async create(@Body() createMovieDto: CreateMovieDto) {
      return this.movieService.create(createMovieDto);
    }
  
    @Get()
    findAll(@Query() listMovieQuery: ListMovieQuery) {
  
      return this.movieService.findAll(listMovieQuery);
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Movie> {
      return this.movieService.findById(id);
    }
}

