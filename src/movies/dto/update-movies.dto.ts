import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDto } from "./create-movies.dto";

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}