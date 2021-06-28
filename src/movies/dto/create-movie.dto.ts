import { IsInt, IsOptional, IsString } from 'class-validator';
import {
  ApiModelProperty,
  ApiModelPropertyOptional,
} from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { Type } from 'class-transformer';

export class CreateMovieDto {
  @ApiModelProperty()
  @IsString()
  readonly title: string;

  @ApiModelProperty()
  @IsInt()
  readonly year: number;

  @ApiModelPropertyOptional()
  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
