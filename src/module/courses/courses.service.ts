import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    return this.courses.find((course) => course.id === Number(id));
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const index = this.courses.findIndex((course) => course.id === Number(id));

    this.courses[index] = updateCourseDto;
  }

  remove(id: string) {
    const index = this.courses.findIndex((course) => course.id === Number(id));

    if (index >= 0) {
      this.courses.slice(index, 1);
    }
  }
}
