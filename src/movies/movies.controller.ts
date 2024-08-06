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
      return this.movieService.getListMovies(listMovieQuery);
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Movie> {
      return this.movieService.getDetailMovie(id);
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateMovieDto: UpdateMovieDto,
      ): Promise<Movie> {
        return await this.movieService.updateMovie(id, updateMovieDto);
    }
    
    @Delete(':id')
    async deleteTheater(@Param('id') id: string): Promise<Movie> {
        return await this.movieService.deteleMovie(id);
  
    }
}

