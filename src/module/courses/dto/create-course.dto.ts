import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @ApiProperty({
    type: String,
    description: 'Nome do curso a ser cadastrado',
  })
  readonly name: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Descrição do curso',
  })
  readonly description: string;

  @ApiProperty({
    type: [String],
    description: 'Tags do curso',
  })
  @IsString({ each: true })
  readonly tags: string[];
}
