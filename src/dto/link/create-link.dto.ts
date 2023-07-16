import {
  IsDate,
  IsOptional,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';

export class CreateLinkDto {
  @IsString()
  @MinLength(4)
  @IsUrl(undefined, { message: 'Its not valid URL.' })
  body: string;

  @IsOptional()
  @IsDate()
  pubDate: Date;
}
