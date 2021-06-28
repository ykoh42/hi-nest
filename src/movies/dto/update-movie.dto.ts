import { CreateMovieDto } from './create-movie.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
