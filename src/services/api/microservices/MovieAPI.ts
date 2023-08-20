import {MovieAPIType} from '@domain';
import {MOVIE_DB_API_KEY} from '@env';
import {APIPaginatedResponse, axios} from '@services';

class MovieAPI {
  private moviePopular: string;
  private favoritesMovies: string;
  private addOrRemoveURL: string;
  private apiKey: string = MOVIE_DB_API_KEY;
  private language: string = 'pt-BR';
  private accountID: string = '11584226';

  constructor() {
    this.moviePopular = `/movie/popular?api_key=${this.apiKey}&language=${this.language}`;
    this.favoritesMovies = `/account/${this.accountID}/favorite/movies?language=${this.language}`;
    this.addOrRemoveURL = `/account/${this.accountID}/favorite?api_key=${this.apiKey}`;
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

  async postFavorite(movieId: number, favorite: boolean) {
    const body = {
      media_type: 'movie',
      media_id: movieId,
      favorite,
    };

    return await axios.post(this.addOrRemoveURL, body);
  }
}

export default new MovieAPI();
