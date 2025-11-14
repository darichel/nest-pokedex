/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { PokemonResponse } from './interfaces/pokemon-response.interface';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;
  async executeSeed() {
    const { data } = await this.axios.get<PokemonResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );
    data.results.forEach(({ name, url }) => {
      const segment = url.split('/');
      const no = +segment[segment.length - 2];
      console.log({ name, no });
    });

    return data.results;
  }
}
