import { Injectable } from '@nestjs/common';
import { CreateLinkDto } from '../../dto/links/create-link.dto';
import { UpdateLinkDto } from '../../dto/links/update-link.dto';

@Injectable()
export class LinkService {
  create(createLinkDto: CreateLinkDto) {
    return 'This action adds a new link';
  }

  findAll() {
    return `This action returns all link`;
  }

  findOne(id: number) {
    return `This action returns a #${id} link`;
  }

  update(id: number, updateLinkDto: UpdateLinkDto) {
    return `This action updates a #${id} link`;
  }

  remove(id: number) {
    return `This action removes a #${id} link`;
  }
}
