import {Button, ThemeProvider, ThemeType} from 'dooboo-ui';

import type {FC} from 'react';
import React from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';

const StoryContainer = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.background};

  justify-content: center;
  align-items: center;
`;

export const Disabled: FC<{themeType: ThemeType}> = ({themeType}) => {
  return (
    <ThemeProvider initialThemeType={themeType}>
      <StoryContainer>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          <Button disabled={true} text="Disabled" style={{padding: 8}} />
          <Button
            disabled={true}
            outlined
            text="Disabled"
            style={{padding: 8}}
          />
        </View>
      </StoryContainer>
    </ThemeProvider>
  );
};
