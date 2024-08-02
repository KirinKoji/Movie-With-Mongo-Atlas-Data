import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieController } from './movies/movies.controller';
import { MovieService } from './movies/movies.service';
import { MovieSchema } from './movies/entities/movies.schema';
import { MovieModule } from './movies/movies.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make the config module globally available
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: 'Movie', schema: MovieSchema }]),
    MovieModule,
  ],
  controllers: [MovieController],
  providers: [MovieService],
})
export class AppModule {}
