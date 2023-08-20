export enum QueryKeyEnum {
  MOVIES_LIST = '@MoviesList',
  FAVORITES_MOVIES_LIST = '@FavoriteMoviesList',
}

export interface MutationOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}
