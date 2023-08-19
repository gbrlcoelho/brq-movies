export interface Movie {
  id: number;
  title: string;
  overview: string;
  voteAverage: number;
  posterPath: string;
  popularity: number;
  releaseDate: string;
}

export interface MovieAPIType {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[] | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
