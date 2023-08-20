import {useMutation, useQueryClient} from '@tanstack/react-query';

import {movieService} from '@domain';
import {MutationOptions, QueryKeyEnum} from '@infra';
import {PostFavoriteResponse} from '@services';

export const useFavoriteAddOrRemove = (
  options?: MutationOptions<PostFavoriteResponse>,
) => {
  const queryClient = useQueryClient();

  queryClient.invalidateQueries();

  const {mutate} = useMutation<
    PostFavoriteResponse,
    unknown,
    {
      movieId: number;
      favorite: boolean;
    }
  >({
    mutationFn: async ({movieId, favorite}) =>
      await movieService.postFavorite(movieId, favorite),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeyEnum.FAVORITES_MOVIES_LIST],
      });
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage || 'Erro ao favoritar filme');
      }
    },
  });

  const addOrRemove = (movieId: number, favorite: boolean) => {
    mutate({movieId, favorite});
  };

  return {
    addOrRemove,
  };
};
