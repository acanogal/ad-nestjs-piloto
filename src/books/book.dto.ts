import { ApiProperty } from '@nestjs/swagger';

export class BookDto {
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly genre: string;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly author: string;
  @ApiProperty()
  readonly publisher: string;
  @ApiProperty()
  readonly pages: number;
  @ApiProperty()
  readonly image_url: string;
}
