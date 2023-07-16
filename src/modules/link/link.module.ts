import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Link } from '../../entities/link/link.entity';
import { LinkService } from '../../services/link/link.service';
import { LinkController } from '../../controllers/links/link.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Link])],
  controllers: [LinkController],
  providers: [LinkService],
  exports: [TypeOrmModule],
})
export class LinkModule {}
