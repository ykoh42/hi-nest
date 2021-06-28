import CreateMovieDto from './create-movie.dto';
import { PartialType } from '@nestjs/mapped-types';

export default class UpdateMovieDto extends PartialType(CreateMovieDto) {}
