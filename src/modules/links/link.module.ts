import { Module } from '@nestjs/common';
import { LinkService } from '../../services/links/link.service';
import { LinkController } from '../../controllers/links/link.controller';

@Module({
  controllers: [LinkController],
  providers: [LinkService],
})
export class LinkModule {}
