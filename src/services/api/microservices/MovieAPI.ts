import {MovieAPIType} from '@domain';
import {MOVIE_DB_API_KEY} from '@env';
import {APIPaginatedResponse, axios} from '@services';

class MovieAPI {
  private moviePopular: string;
  private apiKey: string = MOVIE_DB_API_KEY;

  constructor() {
    this.moviePopular = `/movie/popular?api_key=${this.apiKey}&language=pt-BR`;
  }

  async getMovies(page: number): APIPaginatedResponse<MovieAPIType> {
    return await axios.get(this.moviePopular, {
      params: {page},
    });
  }
}

export default new MovieAPI();
