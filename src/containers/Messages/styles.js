import styled from 'styled-components/native';
import AppStyles from '../../config/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${AppStyles.colors.lightWhite};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${AppStyles.colors.accentColor};
`;
