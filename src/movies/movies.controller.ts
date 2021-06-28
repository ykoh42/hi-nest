import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import MoviesService from './movies.service';
import Movie from './interfaces/movie.interface';
import CreateMovieDto from './dto/create-movie.dto';
import UpdateMovieDto from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly MoviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.MoviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number): Movie {
    return this.MoviesService.getOne(id);
  }

  @Post()
  create(@Body() data: CreateMovieDto) {
    return this.MoviesService.create(data);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.MoviesService.deleteOne(id);
  }

  @Patch('/:id')
  patch(@Param('id') id: number, @Body() data: UpdateMovieDto) {
    return this.MoviesService.update(id, data);
  }
}
