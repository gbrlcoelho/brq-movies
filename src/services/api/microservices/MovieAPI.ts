import {MovieAPIType} from '@domain';
import {MOVIE_DB_API_KEY} from '@env';
import {APIPaginatedResponse, axios} from '@services';

class MovieAPI {
  private moviePopular: string;
  private apiKey: string = MOVIE_DB_API_KEY;
  private language: string = 'pt-BR';
  private favoritesMovies: string;
  private accountID: string = '11584226';

  constructor() {
    this.moviePopular = `/movie/popular?api_key=${this.apiKey}&language=${this.language}`;
    this.favoritesMovies = `/account/${this.accountID}/favorite/movies?language=${this.language}`;
  }

  async getMovies(page: number): APIPaginatedResponse<MovieAPIType> {
    return await axios.get(this.moviePopular, {
      params: {page},
    });
  }

  async getFavoriteMovies(page: number): APIPaginatedResponse<MovieAPIType> {
    return await axios.get(this.favoritesMovies, {
      params: {page},
    });
  }
}

export default new MovieAPI();
