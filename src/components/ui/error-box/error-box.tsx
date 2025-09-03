import * as styles from './error-box.styles';

type ErrorBoxProps = {
  message: string;
  onRetry?: () => void;
  retryLabel?: string;
};

export const ErrorBox = ({
  message,
  onRetry,
  retryLabel = 'Повторить',
}: ErrorBoxProps) => (
  <styles.Wrapper>
    <styles.Text>{message}</styles.Text>
    {onRetry ? (
      <styles.Button onPress={onRetry}>
        <styles.ButtonText>{retryLabel}</styles.ButtonText>
      </styles.Button>
    ) : null}
  </styles.Wrapper>
);
