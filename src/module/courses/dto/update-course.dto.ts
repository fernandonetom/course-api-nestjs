import { PartialType } from '@nestjs/swagger';
import { CreateCourseDto } from './create-course.dto';

export class updateCourseDto extends PartialType(CreateCourseDto) {}
