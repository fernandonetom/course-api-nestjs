import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { SigninDto } from './dto/signin.dto';
@Controller('users')
@ApiTags('login')
export class UsersController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: SigninDto })
  @Post('auth')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
