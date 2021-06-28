import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return `This will return one movie with the id: ${id}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return `This will remove a movie with the id: ${id}`;
  }

  @Patch('/:id')
  patch(@Param('id') id: number) {
    return `This will patch a movie with the id: ${id}`;
  }
}
