import { IsInt, IsOptional, IsString } from 'class-validator';

export default class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsInt()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
