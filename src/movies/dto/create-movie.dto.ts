import { IsInt, IsString } from 'class-validator';

export default class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsInt()
  readonly year: number;

  @IsString({ each: true })
  readonly genres: string[];
}
