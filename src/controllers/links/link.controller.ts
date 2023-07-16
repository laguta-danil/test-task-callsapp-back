import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Res,
  Next,
  Req,
  Put,
} from '@nestjs/common';
import { LinkService } from '../../services/link/link.service';
import { CreateLinkDto } from '../../dto/link/create-link.dto';
import { UpdateLinkDto } from '../../dto/link/update-link.dto';

@Controller('link')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Post('/create')
  async create(@Body() createLinkDto: CreateLinkDto, @Res() res, @Next() next) {
    try {
      await this.linkService.create(createLinkDto);
      res.json('successfully added');
    } catch (err) {
      console.error('Error with adding link', err);
      next(err);
    }
  }

  @Get('/getAll')
  async findAll(@Req() req, @Res() res, @Next() next) {
    try {
      res.json(await this.linkService.findAll(req.query));
    } catch (err) {
      console.error('Error with getting links', err);
      next(err);
    }
  }

  @Get('/getOne')
  async findOne(@Body('id') id: number, @Res() res, @Next() next) {
    try {
      res.json(...(await this.linkService.findOne(id)));
    } catch (err) {
      console.error('Error with getting link', err);
      next(err);
    }
  }

  @Put('/update')
  async update(
    @Body()
    updateLinkDto: UpdateLinkDto,
    @Res() res,
    @Next() next
  ) {
    try {
      await this.linkService.update(updateLinkDto);
      res.json('successfully updated');
    } catch (err) {
      console.error('Error with updating link', err);
      next(err);
    }
  }

  @Delete('/delete')
  remove(@Body('id') id: string) {
    return this.linkService.remove(+id);
  }
}
