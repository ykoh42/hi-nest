import { Injectable, NotFoundException } from '@nestjs/common';
import Movie from './interfaces/movie.interface';
import CreateMovieDto from './dto/create-movie.dto';

@Injectable()
export default class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found.`);
    }
    return movie;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  create(data: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...data,
    });
  }

  update(id: number, data: CreateMovieDto) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...data });
  }
}