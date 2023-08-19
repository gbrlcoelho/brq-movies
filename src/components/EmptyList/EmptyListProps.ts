export interface EmptyListProps {
  listItemName: string;
  loading: boolean;
  error: unknown;
  refresh: () => void;
}
