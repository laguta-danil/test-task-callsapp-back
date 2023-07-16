import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { CreateLinkDto } from '../../dto/link/create-link.dto';
import { UpdateLinkDto } from '../../dto/link/update-link.dto';
import { Link } from '../../entities/link/link.entity';

@Injectable()
export class LinkService {
  constructor(
    @InjectRepository(Link)
    private linkRepository: Repository<Link>
  ) {}

  async create(createLinkDto: CreateLinkDto) {
    createLinkDto.pubDate = new Date();
    await this.linkRepository.save(createLinkDto);
  }

  async findAll(data) {
    const { search, itemsPerPage, page, order } = data;
    const take = itemsPerPage || 10;
    const skip = (page - 1) * itemsPerPage || 0;

    const [result, total] = await this.linkRepository.findAndCount({
      where: { body: ILike(`%${search}%`) },
      order: { pubDate: order },
      take: take,
      skip: skip,
    });

    return { data: result, total: total };
  }

  async findOne(id: number) {
    return await this.linkRepository.findBy({ id });
  }

  async update(updateLinkDto: UpdateLinkDto) {
    updateLinkDto.pubDate = new Date();
    await this.linkRepository.save({ ...updateLinkDto });
  }

  async remove(id: number) {
    await this.linkRepository.delete({ id });
  }
}
